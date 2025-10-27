/**
 * Spotify Refresh Token Generator
 *
 * This script helps you get a Spotify refresh token for your portfolio.
 * Run this ONCE to get your refresh token, then save it to your .env file.
 *
 * Steps:
 * 1. Fill in your Client ID and Client Secret below
 * 2. Run: node get-spotify-token.js
 * 3. Follow the instructions in the terminal
 * 4. Copy the refresh token to your .env file
 */

const CLIENT_ID = 'YOUR_CLIENT_ID_HERE';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET_HERE';
const REDIRECT_URI = 'http://localhost:5173';

// Scopes needed to read currently playing track
const SCOPES = 'user-read-currently-playing user-read-playback-state';

console.log('\n🎵 Spotify Refresh Token Generator\n');
console.log('Follow these steps:\n');

// Step 1: Generate authorization URL
const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES)}`;

console.log('1. Open this URL in your browser:');
console.log('\n' + authUrl + '\n');
console.log('2. Log in to Spotify and authorize the app');
console.log('3. You will be redirected to a URL that starts with http://localhost:5173/?code=...');
console.log('4. Copy the ENTIRE URL from your browser address bar');
console.log('5. Run this command with the code:\n');
console.log('   node get-spotify-token.js YOUR_CODE_HERE\n');

// If code is provided as argument, exchange it for tokens
if (process.argv[2]) {
  const code = process.argv[2];

  console.log('Exchanging code for refresh token...\n');

  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const authHeader = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

  fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${authHeader}`,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI,
    }),
  })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        console.error('❌ Error:', data.error);
        console.error('Description:', data.error_description);
        process.exit(1);
      }

      console.log('✅ Success! Here is your refresh token:\n');
      console.log('━'.repeat(60));
      console.log(data.refresh_token);
      console.log('━'.repeat(60));
      console.log('\nAdd this to your .env file:');
      console.log(`VITE_SPOTIFY_REFRESH_TOKEN=${data.refresh_token}\n`);
    })
    .catch(err => {
      console.error('❌ Error:', err.message);
      process.exit(1);
    });
}
