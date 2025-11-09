import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification
    minify: 'esbuild',
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
        },
      },
    },
    // Increase chunk size warning limit for better performance
    chunkSizeWarningLimit: 1000,
    // Disable source maps in production for security and performance
    sourcemap: false,
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
})
