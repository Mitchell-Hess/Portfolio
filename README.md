# Mitchell Hess - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full-Stack Software Engineer and Data Scientist.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Theme toggle with smooth transitions and persistent user preferences
- **Custom Cursor**: Interactive gradient cursor with hover effects and scale animations (desktop only, hidden on mobile)
- **Dynamic Gradient Background**: Mouse-tracking gradient spotlight effect for enhanced visual experience
- **Live API Integrations**:
  - Spotify API for real-time artist follower counts via serverless function
  - MLB Stats API for Cleveland Guardians game results and season statistics
- **Smooth Animations**: Powered by Framer Motion with scroll-based viewport animations
- **Performance Optimized**: Fast loading with code splitting, lazy loading, and GPU-accelerated animations

## Tech Stack

- **Framework**: React 19 + TypeScript 5.9
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **Fonts**: Inter (via @fontsource)
- **Icons**: Custom SVG icons
- **APIs**: Spotify Web API, MLB Stats API
- **Backend**: Vercel Serverless Functions (Node.js)
- **Deployment**: Vercel with CI/CD

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Mitchell-Hess/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/             # React components
│   │   ├── widgets/            # API widget components
│   │   │   ├── GuardiansTracker.tsx
│   │   │   └── MusicShowcase.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── DynamicGradientBackground.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Home.tsx
│   │   ├── Navbar.tsx
│   │   └── Projects.tsx
│   ├── services/               # API services
│   │   └── spotifyService.ts   # Spotify API integration
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── api/
│   └── spotify.ts              # Vercel serverless function
├── public/
│   └── assets/                 # Images and static assets
└── dist/                       # Production build output
```

## Features in Detail

### Custom Cursor
- Gradient design with white border for maximum visibility
- Scales up on interactive elements (links, buttons)
- Automatically detects and disables on touch devices
- Smooth transitions using CSS transforms for GPU acceleration

### Dynamic Gradient Background
- Mouse-tracking gradient spotlight effect
- Subtle animation that follows cursor movement
- Enhances visual depth without distracting from content
- Optimized performance using CSS custom properties

### API Widgets

#### Music Showcase
- Displays favorite artists with real-time Spotify follower counts
- Secure backend integration via Vercel serverless function
- Auto-refreshes every 10 minutes
- Animated cards with hover effects and gradient accents
- Links directly to artist Spotify pages

#### Guardians Tracker
- Shows latest Cleveland Guardians game results
- Displays current season statistics
- Fetches live data from MLB Stats API
- Real-time game status indicators

### Performance Optimizations
- Code splitting for optimal bundle sizes
- Lazy loading for images and components
- GPU acceleration for smooth animations
- Optimized scrolling for all devices
- Serverless API architecture for scalability
- Efficient state management with React hooks

## Deployment

### Vercel (Recommended)

This site is optimized for Vercel deployment with serverless function support:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Configure environment variables:
   - `SPOTIFY_CLIENT_ID`: Your Spotify API client ID
   - `SPOTIFY_CLIENT_SECRET`: Your Spotify API client secret
4. Deploy

The serverless function at `/api/spotify.ts` will automatically be deployed and handle Spotify API authentication securely.

### Other Platforms

Can also be deployed to:
- Netlify (with serverless functions)
- Any static hosting service (note: Spotify API integration will not work without serverless function support)

## License

MIT License - feel free to use this as a template for your own portfolio!

## Contact

Mitchell Hess
- Email: mitchell.hess@outlook.com
- LinkedIn: [linkedin.com/in/mitchell-hess](https://www.linkedin.com/in/mitchell-hess/)
- GitHub: [github.com/Mitchell-Hess](https://github.com/Mitchell-Hess)
