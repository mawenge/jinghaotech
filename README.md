# 致以科技 (Zhiyi Technology) — CNC Machining Marketing Site

A bilingual Chinese/English one-page marketing website for 深圳市致以科技有限公司 (Shenzhen Zhiyi Technology Co., Ltd.), an ISO9001-certified CNC machining manufacturer offering precision parts machining, rapid prototyping, and small-batch production services.

## What the site does

- A single page (`app/page.tsx`) with one-page anchor navigation across hero, about, equipment, capabilities, advantages, industries, case studies, and contact sections, plus a header and footer.
- Chinese/English language switching driven by `lib/translations.ts` and `lib/language-context.tsx`. The selection is persisted in `localStorage` when browser storage is available; otherwise the in-memory selection still works for the session.
- Responsive static images: `scripts/generate-images.mjs` pre-generates the committed AVIF/WebP variants and JPEG fallbacks under `public/images/optimized/` with sharp, and `components/static-image.tsx` serves them without a runtime image optimizer.
- SEO outputs: metadata, Open Graph/Twitter tags, and Organization JSON-LD in `app/layout.tsx`, plus generated `sitemap.xml` (`app/sitemap.ts`) and `robots.txt` (`app/robots.ts`).

The site is a fully static export (`output: 'export'` in `next.config.mjs`). There is no server runtime, API route, or form backend — contact details are presented as static content.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router, static export)
- React 19 with TypeScript 5
- Tailwind CSS 4 with PostCSS
- Node.js 24.15.0 and npm 11.21.1 (pinned via `.nvmrc`, `engines`, and `packageManager`; `.npmrc` sets `engine-strict=true`)

## Getting started

```bash
nvm use                           # selects Node 24.15.0 from .nvmrc
npm install --global npm@11.21.1  # matches the pinned npm version
npm ci
```

## Commands

```bash
npm run dev          # Start the development server on localhost:3000
npm run build        # Build the static export into out/
npm run start        # Serve the built out/ directory on localhost:3000
npm run images       # Regenerate the committed responsive images and favicon
npm run lint         # ESLint with zero warnings allowed
npm run typecheck    # TypeScript check without emitting files
npm test             # Vitest unit/interaction tests
npm run test:export  # Validate the generated out/ export (requires `npm run build` first)
```

`npm run build` writes the static site to `out/`. Both `npm run start` and `npm run test:export` operate on that directory, so run `npm run build` before either of them.

## Configuration: `SITE_URL`

The canonical site origin is read at build time in `lib/site.ts` from the `SITE_URL` environment variable. It must be an HTTPS origin without embedded credentials; the build fails otherwise. It drives the canonical URL, Open Graph/Twitter metadata, JSON-LD, `sitemap.xml`, and `robots.txt`.

When `SITE_URL` is unset, the configured default `https://www.hrtstooling.com` is used. That value is only a checked-in default — set `SITE_URL` to the real origin when building for deployment:

```bash
SITE_URL=https://example.com npm run build
```

## Deployment

Deploy the contents of `out/` to any static host. The checked-in `wrangler.toml` points Cloudflare Pages at `out/` (`pages_build_output_dir = "out"`); no Worker script is required.

## Project structure

```
app/                         # App Router: layout (SEO metadata/JSON-LD), page, globals, sitemap, robots
components/                  # Section components (hero, about, equipment, ...), header/footer, ui/ primitives
lib/                         # Translations, language context, site URL config, image asset manifest, utils
public/                      # Static assets, including pre-generated responsive images
scripts/generate-images.mjs  # Regenerates the committed responsive image variants with sharp
tests/                       # Vitest tests plus the node:test export checks (tests/export.test.mjs)
.github/workflows/checks.yml # CI: lint, typecheck, tests, audits, build, and export checks
```

## Verification

CI (`.github/workflows/checks.yml`) runs on every pull request and push to `master`:

```bash
npm run lint
npm run typecheck
npm test
npm audit --audit-level=low
npm audit --omit=dev --audit-level=low
npm run build
npm run test:export
```

