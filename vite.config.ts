import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { join } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Manually load .env file since Vite's auto-loading isn't working
  const envPath = join(process.cwd(), '.env')
  let clientId = ''
  let clientSecret = ''

  try {
    const envContent = readFileSync(envPath, 'utf-8')
    const idMatch = envContent.match(/VITE_SPOTIFY_CLIENT_ID=(.+)/)
    const secretMatch = envContent.match(/VITE_SPOTIFY_CLIENT_SECRET=(.+)/)

    if (idMatch) clientId = idMatch[1].trim()
    if (secretMatch) clientSecret = secretMatch[1].trim()
  } catch (e) {
    console.error('Failed to load .env file:', e)
  }

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_SPOTIFY_CLIENT_ID': JSON.stringify(clientId),
      'import.meta.env.VITE_SPOTIFY_CLIENT_SECRET': JSON.stringify(clientSecret),
    },
  }
})
