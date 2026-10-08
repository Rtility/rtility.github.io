# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page marketing site for Rtility (Web3 / smart-contract agency), built with Next.js 12 + React 17 + Tailwind CSS 3, statically exported and served from GitHub Pages at `rtility.com`. Much of the content is still placeholder (lorem ipsum, `sample_*` images, fake team members).

## Commands

```bash
yarn install --frozen-lockfile   # install (CI does the same; keep yarn.lock authoritative)
yarn dev                         # dev server on http://localhost:3000
yarn build                       # next build && next export -> ./out
npx tsc                          # type-check (tsconfig already sets noEmit)
npx prettier --write <files>     # format: singleQuote, no semicolons, tailwind class sorting
```

No test suite and no ESLint config exist.

## Deployment

Push to `master` triggers `.github/workflows/gh-pages.deploy.yml`: Node 16, `yarn install --frozen-lockfile`, `npm run build`, adds `out/.nojekyll`, and pushes `out/` to the `gh-pages` branch. `public/CNAME` carries the custom domain into the export; don't remove it.

## Constraints from static export

- `package.json` pins `next` to `latest`, but `yarn.lock` resolves it to 12.1.6. `next export` was removed in Next 14, so running `yarn upgrade`, deleting the lockfile, or installing without `--frozen-lockfile` can break the build.
- Everything must work as static HTML: no `getServerSideProps`, no API routes at runtime (`pages/api/hello.ts` is create-next-app boilerplate and does nothing in production), and no `next/image` with the default loader (that's why components use plain `<img>`).

## Architecture

- `pages/index.tsx` is the only page. It renders the hero header inline, then composes section components from `components/` in order: `Partners`, `Services`, `Technologies`, `Team`, `Footer`.
- Section content (partners, services, team members) is hardcoded as arrays at the top of each component, not loaded from data files.
- Responsive behavior is mostly done by rendering separate desktop and mobile markup and toggling with Tailwind breakpoint visibility (`hidden md:flex` / `md:hidden`), rather than one adaptive layout:
  - `Team`: desktop uses a hand-rolled prev/next carousel; mobile uses `TouchSlider.js` (Flickity via `react-flickity-component`, plain JS with no types).
  - `Partners`: same pattern, a grid on desktop and a one-at-a-time slider on mobile.
  - `Technologies`: plays a Lottie animation from `components/lotties/*.json`, mounted only when scrolled into view (`react-intersection-observer`), choosing the mobile or desktop animation from `window.innerWidth <= 640` once on mount.

## Styling conventions

- Tailwind with no theme extension: colors and sizes are written as arbitrary values (`bg-[#131938]`, `w-[204px]`, `mt-[11.875rem]`). The recurring palette: page bg `#090E21`, cards `#131938` / `#121424`, accent `#00D2EF`, muted text `#7981A3`.
- `styles/globals.css` holds the non-Tailwind pieces: Outfit `@font-face` declarations (fonts in `public/fonts/outfit/`), the `text-gradient1` / `text-gradient2` gradient-text classes, Flickity dot overrides, and the `animate-pulse2` keyframes.
- Decorative glow blobs are absolutely positioned `<section>`s with `blur-[150px] opacity-20 -z-10`.
- Tailwind's JIT only sees literal class strings. Interpolated classes like the ``min-h-[${AccordionHeight}+100px]`` in `Services.tsx` never get generated; use inline `style` for runtime values.
