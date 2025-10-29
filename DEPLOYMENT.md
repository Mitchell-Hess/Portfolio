# Deployment Guide

This portfolio can be deployed using multiple methods. Choose the one that fits your needs.

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure everything
6. Click "Deploy"

**That's it!** Vercel will automatically deploy on every push to main.

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect your GitHub repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy"

### Option 3: Docker (Local or VPS)

**Build and run locally:**
```bash
# Build the Docker image
docker build -t portfolio .

# Run the container
docker run -p 3000:80 portfolio
```

**Using Docker Compose:**
```bash
# Start the application
docker-compose up -d

# Stop the application
docker-compose down
```

The app will be available at `http://localhost:3000`

### Option 4: Railway.app (Docker-based)

1. Push your code to GitHub
2. Go to [railway.app](https://railway.app)
3. Click "New Project" > "Deploy from GitHub repo"
4. Select your repository
5. Railway will detect the Dockerfile and build automatically
6. Your app will be deployed with a generated URL

### Option 5: Render.com (Docker-based)

1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New" > "Web Service"
4. Connect your GitHub repository
5. Use these settings:
   - Environment: Docker
   - Port: 80
6. Click "Create Web Service"

## GitHub Actions CI/CD

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Runs on every push to main
- Builds the application
- Runs tests (if configured)
- Deploys to your chosen platform

To enable automatic deployments, you'll need to add deployment secrets to your GitHub repository settings.

## Environment Variables

If you need environment variables for API keys:

1. Create a `.env` file locally (already in .gitignore)
2. For production, add them in your hosting platform's dashboard:
   - **Vercel**: Project Settings > Environment Variables
   - **Netlify**: Site Settings > Environment Variables
   - **Railway/Render**: Service Settings > Environment

## Custom Domain

All platforms support custom domains:
- Add your domain in the platform's dashboard
- Update your DNS records as instructed
- SSL certificates are automatically provisioned

## Monitoring and Analytics

- Vercel and Netlify provide built-in analytics
- Add Google Analytics or Plausible for detailed tracking
- Monitor performance with Lighthouse CI

## Build Optimization

The build is already optimized with:
- Code splitting
- Asset optimization
- Gzip compression (nginx)
- Cache headers
- Tree shaking

Build time: ~30-60 seconds
Bundle size: Check with `npm run build`

## Troubleshooting

**Build fails:**
- Check Node version (should be 20+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

**Routing issues:**
- Ensure SPA redirects are configured (included in vercel.json and netlify.toml)

**Assets not loading:**
- Check base path in vite.config.ts
- Verify asset paths are relative
