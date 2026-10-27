# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual Chinese/English static website for Shenzhen Zhiyi Technology Co., Ltd, a precision CNC manufacturing company. Preserve the existing company content, red/gray branding, and one-page anchor navigation.

## Tech Stack

- **Next.js 16** with App Router and static export (`output: 'export'`)
- **React 19** with TypeScript 5
- **Tailwind CSS 4** with PostCSS
- **Node.js 24.15.0** and **npm 11.21.1** (see `.nvmrc`, `engines`, and `packageManager`)
- **Shadcn/ui** component library (new-york variant) - This project appears to be built with v0.dev template
- **Radix UI** for accessible components
- **Lucide React** for icons

## Development Commands

```bash
# Setup
nvm use
npm install --global npm@11.21.1
npm ci
# Development
npm run dev          # Start development server on localhost:3000

# Build and Deployment
npm run build        # Build for production (generates static export in /out/)
npm run start        # Serve production build (runs the static export locally)
npm run lint         # Run ESLint with no warnings allowed
npm run typecheck    # Check TypeScript without emitting files
npm test             # Run focused interaction regression tests
npm run test:export  # Check the generated out/ links, images, metadata, and controls
npm audit            # Check the full dependency tree
npm audit --omit=dev # Check production dependencies
npm run images       # Regenerate committed responsive images and favicon

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
  - `equipment-section.tsx` - Machinery gallery
  - `capabilities-section.tsx` - Materials and machining parameters
  - `advantages-section.tsx` - Service benefits
  - `industries-section.tsx` - Industry applications
  - `case-studies-section.tsx` - Product gallery
  - `contact-section.tsx` - Contact information
  - `footer.tsx` - Site footer

- **UI Components (`/components/ui/`)** - Complete Radix UI-based component library with Shadcn/ui styling

### Key Configuration Files

- `next.config.mjs` - Static export configuration with `output: 'export'` and `trailingSlash: true`
- `components.json` - Shadcn/ui configuration (new-york style variant)
- `tsconfig.json` - TypeScript with strict mode and path aliases (`@/` for root)
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS 4
- `package.json` and `package-lock.json` - npm is the only supported package manager; direct dependencies are pinned

## Important Architecture Patterns

### Static Site Generation
The site is configured for static export (`output: 'export'`), meaning:
- No server-side functionality
- All pages are pre-rendered to static HTML
- Images are generated ahead of time by `scripts/generate-images.mjs`, not by a server optimizer
- Generated files go to `/out/` directory

### Component Structure
- **Section-based architecture** - Each major page section is a standalone component
- **Language context** - Active sections read Chinese/English content from `lib/translations.ts`; `LanguageProvider` updates document language and optionally persists the selection
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
- Follow the existing red/gray color scheme
- Maintain dark mode support

### Component Development
- Use Shadcn/ui components from `/components/ui/` when possible - full Radix UI suite available
- Follow Radix UI patterns for accessibility
- Use TypeScript with proper type definitions
- Implement responsive design with mobile-first approach
- The unused form and chart scaffolds were removed with their dependencies; do not assume they are installed

## Static Deployment

The build process generates a complete static site in `/out/`:
- All HTML, CSS, and JS files are optimized for production
- No server runtime required (purely static)
- Can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.)
- Images and assets are copied to appropriate paths
- Wrangler serves `out/` directly; `npm start` previews the same directory with `serve`, not `next start`
- No analytics service is enabled by default. Add an explicitly configured provider only when the deployment supports it

## Additional Notes

- **Verification**: GitHub Actions runs clean npm install, lint, typecheck, interaction tests, both security audits, export build, and exported-site tests
- **Build gates**: TypeScript errors fail the build. ESLint runs as a separate mandatory check because Next 16 no longer runs lint during builds
- **Responsive images**: preserve original PNGs as source assets; commit generated AVIF/WebP/JPEG variants and `lib/image-assets.json` after `npm run images`. Case images are center-cropped to the existing 4:3 cards before resizing to avoid undersampling very wide sources. Only the hero loads eagerly; other images reserve dimensions and load lazily
- **Full Radix UI suite** available for advanced component development
- **Static SEO origin**: the default is `https://www.hrtstooling.com`. The owner must verify that this is the canonical company domain before deployment. Override at build time with `SITE_URL=https://your-confirmed-domain.example npm run build`; metadata, canonical/social links, JSON-LD, robots, and sitemap share this HTTPS origin. The single route keeps Chinese search metadata; language switching changes visible content and document language, not locale URLs
- **Preview overrides**: the `serve`-scoped compression override applies the upstream 1.8.2 security patch; the `serve-handler` MIME patch recognizes AVIF. Remove them when the preview tool ships the updated dependencies
- **Lint scope**: legacy unused scaffolds retain their behavior without React Compiler-only rules. Rules of Hooks, dependencies, TypeScript, and the active page remain checked
