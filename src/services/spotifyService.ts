/**
 * Spotify API Service
 * Calls serverless function to fetch Spotify data securely
 */

interface SpotifyArtist {
  id: string;
  name: string;
  followers: {
    total: number;
  };
  images: {
    url: string;
    height: number;
    width: number;
  }[];
}

/**
 * Get artist information including follower count
 */
export async function getArtist(artistId: string): Promise<SpotifyArtist> {
  const artists = await getArtists([artistId]);
  return artists[0];
}

/**
 * Get multiple artists in a single request via serverless function
 */
export async function getArtists(artistIds: string[]): Promise<SpotifyArtist[]> {
  const apiUrl = import.meta.env.DEV
    ? 'http://localhost:3000/api/spotify'  // Local development
    : '/api/spotify';  // Production (Vercel will handle this)

  const response = await fetch(
    `${apiUrl}?artistIds=${artistIds.join(',')}`,
    {
      method: 'GET',
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch artists from API');
  }

  const data = await response.json();
  return data.artists;
}

/**
 * Format follower count for display (e.g., 533900 -> "533.9K")
 */
export function formatFollowerCount(count: number): string {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M';
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1).replace('.0', '') + 'K';
  }
  return count.toString();
}
