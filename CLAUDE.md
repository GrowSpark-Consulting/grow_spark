# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Grow Spark Consulting — marketing site for an AI & digital transformation consultancy. Static, multi-page HTML built with Vite, styled with Tailwind CSS v4, animated with GSAP/Lenis/Swiper. No backend, no framework (no React/Vue) — pages are plain HTML composed at build time from partials.

## Commands

- `npm run dev` — start Vite dev server (port 5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build

There is no test suite, linter, or type checker configured in this repo.

## Working agreement

This project is in an active visual-refresh phase. Ground rules for any change:

- Preserve existing content, copy, videos, and images — do not rewrite marketing copy, and do not rename or move asset files.
- Scope changes to layout, spacing, typography, and interactions unless a change is explicitly requested beyond that. This is a visual-quality pass, not an architecture refactor.
- Use the existing stack for interactions/animation — Tailwind CSS, GSAP, Lenis, Swiper — don't introduce new libraries.
- Prefer whitespace over borders/dividers for visual separation.
- Typography should stay fluid (`clamp()`-based), matching the existing `--fs-*` pattern in `tokens.css`.
- Hero slides must keep identical composition across all slides (same element positions/structure, only content differs).
- Verify changes at desktop, tablet, and mobile breakpoints before considering a page done.
- Work one page at a time and stop after each page for approval before moving to the next.

## Architecture

**Routing + entry discovery (`vite.config.js`)**: routing is filesystem-based. Vite auto-discovers every `pages/**/index.html` as a build entry, so directory nesting *is* the URL structure — `pages/solutions/premium-brand/index.html` is served at `/solutions/premium-brand/`. Adding a route means adding a directory with an `index.html`; there is no entry list to maintain. 27 routes currently.

Three custom plugins make that work:
- `htmlIncludes` — SSI-style composition. `<!--@include: components/nav.html-->` is replaced with that file's contents at build time, recursively (partials may include partials). Include paths always resolve from the project root, however deep the including page lives. This is how every page shares `components/nav.html` and `components/footer.html`, and how `pages/index.html` assembles ~15 section partials from `sections/*.html`. When editing shared chrome or a multi-page section, edit the partial — not a page that includes it.
- `flattenPagesOutput` — Vite's `root` stays at the project root (so `pages/**` can reference `../assets/...` in dev), which makes the build emit `dist/pages/<route>/`. This hook moves that up a level after the build so `dist/` mirrors the routes: `dist/solutions/premium-brand/index.html`.
- `cleanUrlDevServer` — teaches the dev server the same clean directory URLs the static build resolves natively in production.

**One live page generation, plus retained legacy**: every *built* page is a minimal shell of `<!--@include: ...-->` tags pulling in `components/` and `sections/` partials, styled entirely via Tailwind utilities + `assets/css/`. An older standalone generation still sits in the repo — 6 root `*.html` files and 12 in `content/` — self-contained files with inline `<style>` blocks and hand-rolled CSS variables, *not* wired into the include system. They are **not build entries** (the config only scans `pages/`) and nothing in `pages/`, `components/`, or `sections/` links to them. They are deliberately retained pending post-migration validation, not because they are live. Also orphaned: `sections/services-*.html` (6 files) and `sections/final-cta.html`, included by zero pages. `_legacy-content/index.legacy.html` is a prior homepage kept for reference. Don't assume shared partials or Tailwind tokens apply to any of these — and don't add new work to them.

**Design tokens (`assets/css/tokens.css`)**: colors, fonts, container widths, easing curves, and shadows are registered via Tailwind's `@theme` block, which generates matching utilities (`bg-ink`, `text-accent`, `font-display`, etc.). Fluid type scale (`--fs-*`) lives in a plain `:root` block below it since those are consumed by component CSS via `clamp()`, not Tailwind utilities. `assets/css/base.css` imports tokens and layers base element styles + reusable component classes (`.btn`, etc.) via `@layer`. Always add new design values to `tokens.css` rather than hardcoding colors/sizes in markup or component CSS.

**JS module boundaries (`assets/js/main.js`)**: the single entry point imports and calls one `init*()` function per concern — `smooth-scroll.js` (Lenis + GSAP ScrollTrigger sync), `nav.js` (sticky header, mega menu, mobile drawer, current-page highlighting), `hero-carousel.js` (Swiper video hero with buffering/play-pause), `anchor-links.js`, `service-tabs.js` (scroll-spy tab bar), `booking-tabs.js`, and `animations/*.js` (`reveal.js` scroll-reveal, `counters.js`, `framework-line.js`, `parallax.js`). Each module is self-contained, no-ops via early return if its target elements aren't on the page, and is invoked once from `main.js`. Follow this pattern for new interactive behavior rather than adding inline `<script>` blocks. `hero-carousel.js` is the one exception to eager loading: it pulls in Swiper (a full external library only the homepage needs), so `main.js` guards on `document.querySelector('[data-hero-swiper]')` and dynamic-`import()`s it — keep that guard so the other 26 routes never download Swiper.

**Scroll-reveal contract**: elements are visible by default in markup/CSS. `reveal.js` opts an element into the hidden pre-animation state immediately before animating it back in, so if JS fails to load, content never gets stuck invisible. Preserve this ordering if you touch reveal logic.

**Navigation**: `components/nav.html` carries the top-level links only (`/solutions/`, `/framework/`, `/industries/`, `/rnd/`, `/case-studies/`, plus a "Who We Are" mega panel), duplicated twice — desktop mega-menu and mobile drawer accordion. Keep both copies in sync when changing a top-level link. Individual solution links are *not* in the nav; they live in `sections/challenges.html` (the homepage challenge cards) and on `pages/solutions/index.html`, so adding a solution means adding the route directory plus an entry in each of those two places.

**Assets**: `assetsInlineLimit: 0` in `vite.config.js` — videos/images are never base64-inlined, always emitted as separate files. Hero background videos live in `assets/videos/` and are lazy-loaded per-slide by `hero-carousel.js` (only the active + next slide's video gets a real `src`).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
