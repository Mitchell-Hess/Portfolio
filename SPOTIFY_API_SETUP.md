# Spotify API Integration Guide

This guide walks you through setting up dynamic Spotify monthly listener counts using the Spotify Web API with Client Credentials Flow.

## Step 1: Create a Spotify App

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account (create one if needed)
3. Click **"Create app"**
4. Fill in the app details:
   - **App name**: "Portfolio Music Showcase" (or any name you prefer)
   - **App description**: "Displays artist follower counts on my portfolio"
   - **Redirect URI**: `http://localhost:5173` (not used for Client Credentials, but required)
   - **Which API/SDKs are you planning to use?**: Check "Web API"
5. Agree to the terms and click **"Save"**
6. You'll be taken to your app's dashboard

## Step 2: Get Your API Credentials

1. In your app dashboard, click **"Settings"** (top right)
2. You'll see your **Client ID** - copy this
3. Click **"View client secret"** to reveal your **Client Secret** - copy this
4. **IMPORTANT**: Keep your Client Secret private! Never commit it to public repositories

## Step 3: Add Credentials to Your Environment

1. Open the `.env` file in your project root (already created at `/home/hessm/projects/portfolio/.env`)
2. Replace the placeholder values with your actual credentials:

```env
# Spotify API Credentials
VITE_SPOTIFY_CLIENT_ID=your_actual_client_id_here
VITE_SPOTIFY_CLIENT_SECRET=your_actual_client_secret_here
```

3. Save the file

**Note**: The `.env` file is already added to `.gitignore`, so it won't be committed to your repository.

## Step 4: Test the Integration Locally

1. **Restart your development server** (this is important - Vite only loads env vars on startup):
   ```bash
   # Stop the current dev server (Ctrl+C)
   npm run dev
   ```

2. Open your browser and navigate to the development URL (usually `http://localhost:5173`)

3. Watch the Music Showcase widget - it should now display:
   - "Loading..." initially
   - Then the actual follower counts from Spotify
   - The counts will automatically refresh every 10 minutes

4. Open the browser console (F12) to check for any errors:
   - If you see "Error fetching listener counts", check your credentials
   - If you see "401 Unauthorized", your credentials are incorrect
   - If you see "429 Too Many Requests", you've hit the rate limit (wait a few seconds)

## Step 5: Deploy with Environment Variables

### For Vercel:

1. Go to your project settings in Vercel dashboard
2. Navigate to **Settings → Environment Variables**
3. Add both variables:
   - `VITE_SPOTIFY_CLIENT_ID` = your client ID
   - `VITE_SPOTIFY_CLIENT_SECRET` = your client secret
4. Select which environments to apply them to (Production, Preview, Development)
5. Click **"Save"**
6. Redeploy your site for changes to take effect

### For Netlify:

1. Go to your site dashboard in Netlify
2. Navigate to **Site settings → Environment variables**
3. Click **"Add a variable"**
4. Add both variables:
   - Key: `VITE_SPOTIFY_CLIENT_ID`, Value: your client ID
   - Key: `VITE_SPOTIFY_CLIENT_SECRET`, Value: your client secret
5. Click **"Save"**
6. Trigger a new deploy: **Deploys → Trigger deploy → Deploy site**

### For Other Platforms:

Most hosting platforms have similar environment variable settings. Look for:
- "Environment Variables"
- "Config Vars" (Heroku)
- "Secrets" (GitHub Actions)
- "Build Environment" settings

## How It Works

### Authentication Flow:
1. Your app requests an access token from Spotify using Client ID + Secret
2. Spotify returns a token valid for 1 hour
3. Token is cached in memory and automatically refreshed 5 minutes before expiry
4. All API requests use this token in the Authorization header

### API Requests:
1. `getArtists()` fetches data for multiple artists in one request (efficient)
2. Returns follower counts, images, and other artist data
3. `formatFollowerCount()` formats numbers (e.g., 533900 → "533.9K")

### Updates:
- Listener counts fetch on page load
- Auto-refresh every 10 minutes
- Fallback to static counts (533.9K, 111) if API fails

## Troubleshooting

### "Loading..." never changes:
- Check that you've added your credentials to `.env`
- Restart your dev server after adding credentials
- Check browser console for error messages

### "401 Unauthorized" error:
- Your Client ID or Client Secret is incorrect
- Copy them again from the Spotify Dashboard
- Make sure there are no extra spaces in the `.env` file

### "429 Too Many Requests":
- You've hit Spotify's rate limit
- Wait a few minutes before trying again
- The rate limit is generous for normal use

### Counts show "N/A":
- Check that the artist IDs are correct
- Verify the Spotify API is accessible from your network
- Check the browser console for detailed error messages

### Production site shows fallback counts:
- Verify environment variables are set correctly in your hosting platform
- Redeploy your site after adding environment variables
- Check your hosting platform's build logs for errors

## API Limits

- **Rate Limits**: Spotify allows many requests per second (exact limit not public)
- **Access Token**: Valid for 1 hour, automatically refreshed
- **No Usage Limits**: Client Credentials flow is free for public data
- **Refresh Frequency**: Currently set to 10 minutes (configurable)

## Artist IDs

Current artist IDs in the code:
- **Porcupine Tree**: `5NXHXK6hOCotCF8lvGM1I0`
- **eileen**: `28O4ZcWP2mGQ6KL371BaHR`

To add more artists, get their IDs from their Spotify URLs:
- URL format: `https://open.spotify.com/artist/{ARTIST_ID}`
- Example: `https://open.spotify.com/artist/5NXHXK6hOCotCF8lvGM1I0`

## Files Modified

- `/src/services/spotifyService.ts` - New service for Spotify API
- `/src/components/widgets/MusicShowcase.tsx` - Updated to use API
- `/.env` - Stores your API credentials (not committed)
- `/.gitignore` - Updated to exclude `.env` files

## Support

If you run into issues:
1. Check the Spotify Developer Dashboard for your app status
2. Review the browser console for specific error messages
3. Verify all environment variables are set correctly
4. Ensure your dev server was restarted after adding credentials
