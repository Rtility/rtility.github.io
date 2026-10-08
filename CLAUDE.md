# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing site for Rtility (Web3 studio: smart contracts, audits, NFT collections), built with Next.js 12 + React 17 + Tailwind CSS 3, statically exported and served from GitHub Pages at `rtility.com`. A one-page landing plus a case-study page per project and a custom 404.

## Commands

```bash
yarn install --frozen-lockfile   # install (CI does the same; keep yarn.lock authoritative)
yarn dev                         # dev server on http://localhost:3000
yarn build                       # next build && next export -> ./out
yarn tsc                         # type-check with the pinned TypeScript 4.5.4 (tsconfig sets noEmit)
yarn prettier --write <files>    # format: singleQuote, no semicolons, tailwind class sorting
```

Use the local binaries (`yarn tsc`, `./node_modules/.bin/tsc`): a globally installed TypeScript 6 rejects this tsconfig's `target: es5` and `moduleResolution: node`. No test suite and no ESLint config exist.

## Deployment

Push to `master` triggers `.github/workflows/gh-pages.deploy.yml`: Node 16, `yarn install --frozen-lockfile`, `npm run build`, adds `out/.nojekyll`, and pushes `out/` to the `gh-pages` branch. `public/CNAME` carries the custom domain into the export; don't remove it.

## Constraints from static export

- `package.json` pins `next` to `latest`, but `yarn.lock` resolves it to 12.1.6. `next export` was removed in Next 14, so running `yarn upgrade`, deleting the lockfile, or installing without `--frozen-lockfile` can break the build.
- Everything must work as static HTML: no `getServerSideProps`, no API routes, and no `next/image` with the default loader (that's why components use plain `<img>`). `getStaticProps` / `getStaticPaths` are fine; they run at build time.
- Project pages export as `out/projects/<slug>.html`; GitHub Pages serves them at `/projects/<slug>`. Don't turn on `trailingSlash` without checking `404.html` still lands at the root.

## Architecture

- `data/site.ts`: name, URL, contact email, GitHub/X links, `activeSince`, and `navLinks` (shared by `Nav` and `Footer`). `data/projects.ts`: the case studies, used by both the landing `Work` grid and `pages/projects/[slug].tsx`. Add a project there and it gets a card and a page; also add its URL to `public/sitemap.xml`.
- `pages/index.tsx` renders the hero inline, then the sections in order: `Partners`, `Services`, `Work`, `OpenSource`, `Technologies`, `Team`, `Contact`, then `Footer`. Each section has an `id` the nav links target (`/#work`, etc.).
- `getStaticProps` in `pages/index.tsx` fetches GitHub star counts for the repos listed in `components/OpenSource.tsx` at build time; if the request fails the cards hide the count, so the build never depends on GitHub being up.
- Section copy that isn't a project (partners, services, team) is hardcoded as arrays at the top of each component.
- `ProjectArt` draws each project's card artwork (SVG/CSS per slug, colored by the project's `accent`); there are no project screenshots.
- `Technologies` plays a Lottie animation from `components/lotties/*.json`, picking mobile or desktop by `window.innerWidth <= 640` and `import()`ing only that ~250 KB JSON once the section scrolls into view.
- `pages/_document.tsx` sets `lang` and the favicon links (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `site.webmanifest` in `public/`).

## Content rules

- Real content only: no lorem ipsum, placeholder names, invented testimonials or made-up stats. Facts come from Rtility's own repos and public sources; flag anything uncertain instead of guessing.
- Nothing Iran-related and no `.ir` links anywhere on the site.
- Team cards carry no personal links (members' GitHub profiles have Iran-related content) and use generated monogram avatars; a real photo can go in a member's optional `image` field.

## Styling conventions

- Tailwind with no theme extension: colors and sizes are written as arbitrary values (`bg-[#131938]`, `w-[204px]`, `mt-[11.875rem]`). The recurring palette: page bg `#090E21`, cards `#131938` / `#121424` with border `#262626`, accent `#00D2EF`, muted text `#7981A3`, dim text `#565F8F`.
- `styles/globals.css` holds the non-Tailwind pieces: smooth scrolling, Outfit `@font-face` declarations (fonts in `public/fonts/outfit/`), and the `text-gradient1` (purple→teal) / `text-gradient2` (purple→pink) gradient-text classes.
- Section headers follow one pattern: a small `bg-[#131938]` pill with a `text-gradient1` label, then a white `h2`.
- Decorative glow blobs are absolutely positioned elements with `rounded-full blur-[150px] opacity-20 -z-10`.
- Tailwind's JIT only sees literal class strings, so never interpolate values into class names; use inline `style` for runtime values (as `Services` does for the accordion height).
