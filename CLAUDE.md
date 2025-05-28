# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the Vite development server with hot module replacement
- `npm run build` - Build the project for production (outputs to `dist/`)
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

### Dependencies
- `npm install` - Install all dependencies (requires Node.js 22.14.0 and npm 10.9.2)

## Architecture

This is a personal portfolio website built with:
- **React 18** with TypeScript for the UI layer
- **Vite** as the build tool and dev server
- **Tailwind CSS** for styling (utility-first approach)
- **Lucide React** for iconography

### Key Components
- `App.tsx` - Main application component containing portfolio content
- `components/AnimatedComponents.tsx` - Reusable animated UI components
- `components/LoadingScreen.tsx` - Initial loading animation

### Styling
- Tailwind CSS configured with custom animations and gradients
- Dark theme with purple/blue gradient accents
- Responsive design with mobile-first approach

### Deployment
- Automatically deployed to Cloudflare Pages via GitHub Actions on push to main branch
- Production URL: https://tabirkeland.me