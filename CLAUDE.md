# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 static website project (named "my-v0-project") that appears to be for Jinghao Technology Co., Ltd, a precision manufacturing company specializing in CNC machining, 3D printing, and prototyping services.

## Tech Stack

- **Next.js 14** with App Router and static export (`output: 'export'`)
- **React 18** with TypeScript 5
- **Tailwind CSS 4** with PostCSS
- **Shadcn/ui** component library (new-york variant) - This project appears to be built with v0.dev template
- **Radix UI** for accessible components
- **Lucide React** for icons

## Development Commands

```bash
# Development
npm run dev          # Start development server on localhost:3000

# Build and Deployment
npm run build        # Build for production (generates static export in /out/)
npm run start        # Serve production build (runs the static export locally)
npm run lint         # Run ESLint (errors ignored during build)

# Static Export Process
# This project is configured with output: 'export' in next.config.mjs
# After build, files are generated in /out/ directory for static deployment
```

## Project Structure

### Core Architecture

**App Router Structure (`/app/`):**
- `layout.tsx` - Root layout with comprehensive SEO metadata, structured data (JSON-LD), and theme configuration
- `page.tsx` - Main homepage that orchestrates all section components
- `globals.css` - Global styles with CSS variables for theming

**Component Organization (`/components/`):**
- **Page Sections** - Each major page section is a separate component:
  - `header.tsx` - Sticky navigation
  - `hero-section.tsx` - Company introduction hero
  - `about-section.tsx` - Company information
  - `services-section.tsx` - Service offerings (CNC, 3D printing, prototyping)
  - `quality-section.tsx` - Quality assurance details
  - `workshop-section.tsx` - Facility showcase
  - `applications-section.tsx` - Industry applications
  - `clients-section.tsx` - Client testimonials
  - `product-showcase.tsx` - Product gallery
  - `contact-section.tsx` - Contact information
  - `footer.tsx` - Site footer

- **UI Components (`/components/ui/`)** - Complete Radix UI-based component library with Shadcn/ui styling

### Key Configuration Files

- `next.config.mjs` - Static export configuration with `output: 'export'` and `trailingSlash: true`
- `components.json` - Shadcn/ui configuration (new-york style variant)
- `tsconfig.json` - TypeScript with strict mode and path aliases (`@/` for root)
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS 4
- `package.json` - Dependencies include full Radix UI suite and form handling with React Hook Form + Zod

## Important Architecture Patterns

### Static Site Generation
The site is configured for static export (`output: 'export'`), meaning:
- No server-side functionality
- All pages are pre-rendered to static HTML
- Images are unoptimized in build config
- Generated files go to `/out/` directory

### Component Structure
- **Section-based architecture** - Each major page section is a standalone component
- **Props-driven composition** - Components accept content and configuration via props
- **Responsive design** - Mobile-first approach with Tailwind breakpoints

### SEO and Metadata
- Comprehensive SEO setup in `layout.tsx` including structured data (JSON-LD)
- OpenGraph and Twitter Card metadata
- Automatic sitemap and robots.txt generation
- Industry-specific keywords and descriptions

## Development Guidelines

### Adding New Sections
1. Create component in `/components/` following the pattern `*-section.tsx`
2. Import and add to `app/page.tsx`
3. Follow the responsive design patterns of existing sections
4. Use semantic HTML and proper heading hierarchy

### Styling Guidelines
- Use Tailwind CSS utility classes
- Leverage CSS variables defined in `globals.css` for consistent theming
- Follow the existing color scheme (blue/gray primary colors)
- Maintain dark mode support

### Component Development
- Use Shadcn/ui components from `/components/ui/` when possible - full Radix UI suite available
- Follow Radix UI patterns for accessibility
- Use TypeScript with proper type definitions
- Implement responsive design with mobile-first approach
- Form validation should use React Hook Form + Zod pattern (already installed)
- Toast notifications via Sonner (already configured)

## Static Deployment

The build process generates a complete static site in `/out/`:
- All HTML, CSS, and JS files are optimized for production
- No server runtime required (purely static)
- Can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.)
- Images and assets are copied to appropriate paths
- Next.js analytics integration included for deployment monitoring

## Additional Notes

- **No testing framework** currently configured - consider adding Jest + React Testing Library
- **TypeScript errors ignored** during build (configured in next.config.mjs)
- **Image optimization disabled** for static export compatibility
- **Full Radix UI suite** available for advanced component development
- **Vercel Analytics** integrated for production monitoring