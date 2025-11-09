/**
 * Vercel Serverless Function for Spotify API
 * Handles authentication and data fetching securely on the backend
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

interface SpotifyToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface CachedData {
  data: unknown;
  expiry: number;
}

let cachedToken: string | null = null;
let tokenExpiry: number = 0;
const cachedArtistData: Map<string, CachedData> = new Map();

// Rate limiting map
const rateLimitMap = new Map<string, number[]>();
const MAX_REQUESTS_PER_MINUTE = 30;

/**
 * Get Spotify access token using Client Credentials flow
 */
async function getAccessToken(): Promise<string> {
  // Return cached token if still valid
  if (cachedToken && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Spotify API credentials not configured');
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    throw new Error(`Failed to get Spotify access token: ${response.status}`);
  }

  const data: SpotifyToken = await response.json();

  // Cache token (expires in 1 hour, we'll refresh 5 min early)
  cachedToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in - 300) * 1000;

  return data.access_token;
}

/**
 * Check if request is rate limited
 */
function isRateLimited(clientId: string): boolean {
  const now = Date.now();
  const requests = rateLimitMap.get(clientId) || [];

  // Remove requests older than 1 minute
  const recentRequests = requests.filter(time => now - time < 60000);

  if (recentRequests.length >= MAX_REQUESTS_PER_MINUTE) {
    return true;
  }

  recentRequests.push(now);
  rateLimitMap.set(clientId, recentRequests);
  return false;
}

/**
 * Get client identifier for rate limiting
 */
function getClientId(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string' ? forwarded.split(',')[0] : req.socket?.remoteAddress || 'unknown';
  return ip;
}

/**
 * Serverless function handler
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  // Enable CORS for your domain only
  const origin = req.headers.origin;
  const allowedOrigins = [
    'https://mitchellhess.com',
    'https://www.mitchellhess.com',
    'http://localhost:5173',
    'http://localhost:3000'
  ];

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const clientId = getClientId(req);
  if (isRateLimited(clientId)) {
    return res.status(429).json({
      error: 'Too many requests',
      message: 'Rate limit exceeded. Please try again later.'
    });
  }

  try {
    const { artistIds } = req.query;

    if (!artistIds || typeof artistIds !== 'string') {
      return res.status(400).json({ error: 'artistIds parameter is required' });
    }

    // Input validation - prevent injection attacks
    if (!/^[a-zA-Z0-9,]+$/.test(artistIds)) {
      return res.status(400).json({ error: 'Invalid artistIds format' });
    }

    // Limit number of artists to prevent abuse
    const artistIdArray = artistIds.split(',');
    if (artistIdArray.length > 10) {
      return res.status(400).json({ error: 'Maximum 10 artists allowed per request' });
    }

    // Check cache first (5 minute cache)
    const cacheKey = artistIds;
    const cached = cachedArtistData.get(cacheKey);
    if (cached && Date.now() < cached.expiry) {
      res.setHeader('X-Cache', 'HIT');
      return res.status(200).json(cached.data);
    }

    const token = await getAccessToken();

    const response = await fetch(
      `https://api.spotify.com/v1/artists?ids=${artistIds}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch artists: ${response.status}`);
    }

    const data = await response.json();

    // Cache the response for 5 minutes
    cachedArtistData.set(cacheKey, {
      data,
      expiry: Date.now() + 300000,
    });

    // Clean up old cache entries
    if (cachedArtistData.size > 100) {
      const oldestKey = cachedArtistData.keys().next().value;
      if (oldestKey) {
        cachedArtistData.delete(oldestKey);
      }
    }

    res.setHeader('X-Cache', 'MISS');
    return res.status(200).json(data);
  } catch (error) {
    console.error('Spotify API error:', error);
    return res.status(500).json({
      error: 'Failed to fetch Spotify data',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
