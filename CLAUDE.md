# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Grow Spark Consulting — marketing site for an AI & digital transformation consultancy. Next.js (App Router) + TypeScript + React, styled with Tailwind CSS v4, animated with GSAP/Lenis/Swiper. 27 static routes, no backend.

The site was migrated from a Vite + plain-HTML build; that implementation has been removed and lives only in git history (`git log -- pages/ sections/ assets/`). There is one application here now.

## Commands

- `npm run dev` — Next dev server (port 3000, React Strict Mode on)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run typecheck` — `tsc --noEmit`

There is no linter configured. The regression suites under `scripts/` are the test story (see below).

## Architecture

**Routing**: App Router, filesystem-based, 27 routes. `trailingSlash: true` in `next.config.ts` is not a preference — every canonical URL ends in `/`, and Next strips trailing slashes by default, which would desync all 27 canonicals from their served URLs. `pageExtensions` is restricted to `tsx`/`ts`.

**Two root layouts, via route groups**: `app/(home)/` serves `/` and `app/(site)/` serves the other 26. Both delegate to `components/layout/HtmlShell.tsx`. They exist because the homepage `<body>` carries `data-hero-theme="dark"`, which 12 rules in `styles/base.css` key off to switch the header between its dark (over-video) and light treatments. Setting that attribute from client JS would flash the light header on first paint; route groups keep it static. The two layouts also differ in the Google Fonts URL — Manrope ships only on `/`, the sole consumer of `--font-hero`.

**Server by default**: every page and every one of the 30 section components is a Server Component. Exactly two client components exist:

- `components/layout/Nav.tsx` — sticky header, mega menu, mobile drawer, current-page highlighting. Four pieces of state replace what were four DOM initialisers.
- `components/effects/SiteEffects.tsx` — renders nothing; it is the client entry point that starts Lenis, GSAP/ScrollTrigger, the scroll animations and the tab behaviours.

Keep it that way. Behaviour belongs in `components/effects/`, not in a section component.

**`components/effects/`** is DOM-driven on purpose: each module queries its own targets and no-ops when they are absent, which is what lets the pages stay server-rendered. Every module returns a cleanup function, and the animation modules build inside a `gsap.context` so reverting kills their tweens and ScrollTriggers. This matters because Strict Mode mounts, unmounts and remounts effects in development — incomplete teardown means two Lenis instances or a duplicated Swiper. `heroCarousel.ts` keeps its Ken Burns tween per-instance for the same reason.

**Swiper is code-split**: `SiteEffects` guards on `document.querySelector('[data-hero-swiper]')` before `import()`ing `./heroCarousel`, so the other 26 routes never request the chunk. Preserve that guard.

**Scroll-reveal contract**: elements are visible by default in markup/CSS. `reveal.js`'s successor opts an element into the hidden pre-animation state immediately before animating it back in, so if JS fails, content is never stuck invisible. `clearProps` hands `transform`/`opacity` back to the stylesheet when the tween ends — without it the inline styles outrank CSS `:hover` transforms and silently kill hover-lift.

**Styling**: `styles/tokens.css` registers colors, fonts, container widths, easing curves and shadows via Tailwind's `@theme`, generating matching utilities (`bg-ink`, `text-accent`, `font-display`). The fluid type scale (`--fs-*`) sits in a plain `:root` block below, consumed by component CSS through `clamp()`. `styles/base.css` imports tokens and layers base elements plus component classes (`.btn`, `.breadcrumb`, …). `app/globals.css` imports `base.css` and declares the Tailwind `@source` globs. Add new design values to `tokens.css` rather than hardcoding them.

**Metadata**: each page exports a `metadata` object; shared defaults (`metadataBase`, icons, `themeColor`) live in the two root layouts. `lib/site.ts` holds the canonical host and the font URLs. The homepage carries the only JSON-LD (`Organization`).

## Forms — deliberately not wired up

Five forms post to endpoints that do not exist and 404 on submit:

| Form | Endpoint | Page |
|---|---|---|
| Contact | `/api/contact` | `/contact/` |
| Careers application | `/api/careers-application` | `/careers/` |
| Strategy session | `/api/strategy-session` | `/strategy/` |
| Growth intensive | `/api/growth-intensive` | `/strategy/` |
| Engagement application | `/api/engagement-application` | `/strategy/` |

This is pre-existing behaviour carried through the migration intentionally, not an oversight. Do not add route handlers, email, storage or CRM integration without being asked. `razorpay` is a dependency with no source usage, retained for future payment work — it is a server-side SDK and must never reach a client bundle.

## Known pre-existing issues

- Footer links `/privacy/`, `/terms/` and `/cookie-policy/` point at routes that do not exist, on all 27 pages.
- There is no `sitemap.xml`, and `public/robots.txt` does not reference one.

Both were carried through the migration deliberately. Fix them only when asked.

## Regression suites

Run against a production build (`npm run build && npm run start`). The first two compare against the pre-migration site, which no longer exists in the tree — rebuild it from git history or point them at a deployed copy.

- `node scripts/verify-routes.mjs <original> <next>` — static parity with **JavaScript disabled**, comparing the markup each build ships: element sequence, every attribute, text, links, headings, forms, JSON-LD. Keep it JS-disabled; that is what removes the need for GSAP/Swiper exclusions.
- `node scripts/verify-runtime.mjs <original> <next>` — runtime behaviour with JS enabled at three viewports. `DEV_BASE=<next dev origin>` additionally exercises the Strict Mode remount path.
- `python scripts/verify-seo.py <original> <next>` — metadata, forms and URL behaviour parsed from the **shipped HTML**, plus a secret scan of every client chunk.
- `node scripts/verify-chrome.mjs <base> <path>` — nav/drawer/mega-menu behaviour at three viewports.

One documented, intentional difference: `meta[viewport]` serialises as `initial-scale=1` rather than `initial-scale=1.0`, because Next types `initialScale` as a number. Identical per spec.

`scripts/html-to-tsx.py` is the converter that produced the section and page components; 58 files reference it in their provenance headers. It is not part of the build.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
