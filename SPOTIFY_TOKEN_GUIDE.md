# Getting Your Spotify Refresh Token

## Quick Method (Easiest)

### Step 1: Update the script with your credentials

1. Open `get-spotify-token.js`
2. Replace `YOUR_CLIENT_ID_HERE` with your actual Client ID
3. Replace `YOUR_CLIENT_SECRET_HERE` with your actual Client Secret

### Step 2: Run the script

```bash
node get-spotify-token.js
```

You'll see a URL like this:
```
https://accounts.spotify.com/authorize?client_id=...
```

### Step 3: Open the URL in your browser

- The script will print a URL
- Copy and paste it into your browser
- Log in to Spotify
- Click "Agree" to authorize

### Step 4: Get the code from the redirect

After authorizing, you'll be redirected to a URL like:
```
http://localhost:5173/?code=AQBqL8K...very_long_code...xyz
```

**Important:** Your browser will show an error page (that's normal - localhost:5173 isn't expecting this)

Copy the **ENTIRE CODE** from the URL (everything after `code=`)

### Step 5: Exchange code for refresh token

Run the script again with the code:

```bash
node get-spotify-token.js AQBqL8K...your_code_here...xyz
```

### Step 6: Save to .env

The script will print your refresh token. Copy it to your `.env` file:

```env
VITE_SPOTIFY_CLIENT_ID=your_client_id
VITE_SPOTIFY_CLIENT_SECRET=your_client_secret
VITE_SPOTIFY_REFRESH_TOKEN=your_refresh_token_here
```

---

## Alternative: Use Online Tool

If the script doesn't work, use this online tool:

1. Go to: https://spotify-refresh-token-generator.netlify.app/
2. Enter your Client ID and Client Secret
3. Click "Generate Token"
4. Authorize with Spotify
5. Copy the refresh token

---

## Alternative: Manual Method (cURL)

### Step 1: Get Authorization Code

Open this URL in your browser (replace YOUR_CLIENT_ID):

```
https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:5173&scope=user-read-currently-playing%20user-read-playback-state
```

Copy the code from the redirect URL.

### Step 2: Exchange for Refresh Token

Run this curl command (replace placeholders):

```bash
curl -X POST "https://accounts.spotify.com/api/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Authorization: Basic $(echo -n 'YOUR_CLIENT_ID:YOUR_CLIENT_SECRET' | base64)" \
  -d "grant_type=authorization_code" \
  -d "code=YOUR_CODE_HERE" \
  -d "redirect_uri=http://localhost:5173"
```

The response will include `refresh_token` - copy it to your `.env` file.

---

## Troubleshooting

### "Invalid redirect URI"
- Make sure `http://localhost:5173` is added in your Spotify app settings
- Must match exactly (no trailing slash)

### "Invalid client"
- Double-check your Client ID and Client Secret
- Make sure there are no extra spaces

### Browser shows error page after authorization
- **This is normal!** Just copy the code from the URL
- The page doesn't need to load successfully

---

## Need Help?

If you're stuck, let me know which step you're on and I can help troubleshoot!
