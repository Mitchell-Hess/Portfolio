# Mitchell Hess - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full-Stack Software Engineer and Data Scientist.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Theme toggle with smooth transitions
- **Custom Cursor**: Interactive cursor with hover effects (desktop only)
- **Live API Integrations**:
  - Spotify API for music artist monthly listeners
  - MLB Stats API for Cleveland Guardians game data
- **Smooth Animations**: Powered by Framer Motion
- **Performance Optimized**: Fast loading with code splitting and lazy loading

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Fonts**: Inter (via @fontsource)
- **Icons**: Custom SVG icons
- **APIs**: Spotify Web API, MLB Stats API

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
│   ├── components/         # React components
│   │   ├── widgets/        # API widget components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Home.tsx
│   │   ├── Navbar.tsx
│   │   └── Projects.tsx
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/
│   └── assets/             # Images and static assets
└── dist/                   # Production build output
```

## Features in Detail

### Custom Cursor
- Gradient design with white border for visibility
- Scales up on interactive elements
- Mobile-aware (disabled on touch devices)

### API Widgets
- **Music Showcase**: Displays favorite artists with live monthly listener counts
- **Guardians Tracker**: Shows latest Cleveland Guardians game results and season stats

### Performance Optimizations
- Code splitting for optimal bundle sizes
- Lazy loading for images
- GPU acceleration for smooth animations
- Optimized scrolling for all devices

## Deployment

This site is configured for deployment on platforms like:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

MIT License - feel free to use this as a template for your own portfolio!

## Contact

Mitchell Hess
- Email: mitchell.hess@outlook.com
- LinkedIn: [linkedin.com/in/mitchell-hess](https://www.linkedin.com/in/mitchell-hess/)
- GitHub: [github.com/Mitchell-Hess](https://github.com/Mitchell-Hess)
