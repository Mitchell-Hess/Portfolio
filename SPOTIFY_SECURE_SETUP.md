# Spotify API Secure Setup Guide

This portfolio uses the Spotify Web API to display live follower counts for featured artists. **The integration uses Vercel serverless functions to keep your API credentials secure** - your client secret is never exposed to the frontend.

## Security Architecture

- **Backend**: Vercel serverless function at `/api/spotify` handles authentication
- **Frontend**: Calls the serverless function, never touches credentials
- **Credentials**: Stored server-side only, never bundled into JavaScript

## Step 1: Create a Spotify App

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account (create one if needed)
3. Click **"Create app"**
4. Fill in the app details:
   - **App name**: "Portfolio Music Showcase" (or any name you prefer)
   - **App description**: "Displays artist follower counts on my portfolio"
   - **Redirect URI**: `https://www.mitchell-hess.com` (your production domain)
   - **Which API/SDKs are you planning to use?**: Check "Web API"
5. Agree to the terms and click **"Save"**
6. You'll be taken to your app's dashboard

## Step 2: Get Your API Credentials

1. In your app dashboard, click **"Settings"** (top right)
2. You'll see your **Client ID** - copy this
3. Click **"View client secret"** to reveal your **Client Secret** - copy this
4. **IMPORTANT**: Keep your Client Secret private! Never commit it to public repositories

## Step 3: Add Credentials to Your Environment

### Local Development

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual credentials:

```env
# Spotify API Credentials (Server-side only)
SPOTIFY_CLIENT_ID=your_actual_client_id_here
SPOTIFY_CLIENT_SECRET=your_actual_client_secret_here
```

3. Save the file

**Note**: The `.env` file is already added to `.gitignore`, so it won't be committed to your repository.

### Production (Vercel)

1. Go to your project settings in Vercel dashboard
2. Navigate to **Settings → Environment Variables**
3. Add both variables:
   - `SPOTIFY_CLIENT_ID` = your client ID
   - `SPOTIFY_CLIENT_SECRET` = your client secret
4. Select which environments to apply them to (Production, Preview, Development)
5. Click **"Save"**
6. Redeploy your site for changes to take effect

## Step 4: Test the Integration Locally

### Option 1: Using Vercel Dev (Recommended)

```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Run with Vercel dev server (supports serverless functions)
vercel dev
```

This will start both the frontend and serverless functions locally.

### Option 2: Deploy to Vercel Preview

```bash
# Push your changes
git add .
git commit -m "Add Spotify integration"
git push

# Vercel will automatically create a preview deployment
```

## How It Works

### Architecture:
1. **Frontend** (`MusicShowcase.tsx`) calls `/api/spotify?artistIds=...`
2. **Serverless Function** (`/api/spotify.ts`):
   - Reads `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` from environment
   - Authenticates with Spotify using Client Credentials flow
   - Caches the access token (valid for 1 hour)
   - Fetches artist data from Spotify API
   - Returns data to frontend
3. **Frontend** displays follower counts with automatic refresh every 10 minutes

### Security Benefits:
- ✅ Client Secret never exposed to browser
- ✅ Client Secret never in JavaScript bundle
- ✅ CORS protection on serverless function
- ✅ Rate limiting handled server-side
- ✅ Token caching reduces API calls

## Troubleshooting

### Local Development: "Failed to fetch artists from API"
- Make sure you're using `vercel dev` instead of `npm run dev`
- Verify `.env` file contains correct credentials
- Check the terminal for serverless function errors

### Production: "Failed to fetch artists from API"
- Verify environment variables are set in Vercel dashboard
- Check they're named `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` (without `VITE_` prefix)
- Redeploy after adding environment variables
- Check Vercel function logs for errors

### "401 Unauthorized" in function logs:
- Your Client ID or Client Secret is incorrect
- Copy them again from the Spotify Dashboard
- Make sure there are no extra spaces

### "429 Too Many Requests":
- You've hit Spotify's rate limit
- Token caching should prevent this for normal use
- The rate limit is generous (many requests per second)

## Files Created/Modified

- `/api/spotify.ts` - NEW: Vercel serverless function for Spotify API
- `/src/services/spotifyService.ts` - Updated to call serverless function
- `/src/components/widgets/MusicShowcase.tsx` - Uses the Spotify service
- `/.env` - Stores API credentials (not committed)
- `/vite.config.ts` - Cleaned up (no longer handles credentials)
- `/.gitignore` - Excludes `.env` files

## Artist IDs

Current artists in the code:
- **Porcupine Tree**: `5NXHXK6hOCotCF8lvGM1I0`
- **eileen**: `28O4ZcWP2mGQ6KL371BaHR`

To add more artists, get their IDs from Spotify URLs:
- URL format: `https://open.spotify.com/artist/{ARTIST_ID}`
- Example: `https://open.spotify.com/artist/5NXHXK6hOCotCF8lvGM1I0`

## API Limits

- **Rate Limits**: Spotify allows many requests per second
- **Access Token**: Valid for 1 hour, automatically cached
- **No Usage Limits**: Client Credentials flow is free for public data
- **Refresh Frequency**: Currently set to 10 minutes (configurable in `MusicShowcase.tsx`)

## Support

If you run into issues:
1. Check Vercel function logs in the dashboard
2. Review browser console for frontend errors
3. Verify environment variables in Vercel settings
4. Ensure you're using `vercel dev` for local testing
