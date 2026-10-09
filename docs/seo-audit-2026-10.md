# Technical SEO audit — October 2026

Scope: the Next.js App Router site at https://www.growsparkconsulting.com, audited from source, the production build (`.next/server/app/*.html`, 58 prerendered pages), the live site's HTTP behaviour, and a real browser (Edge via Playwright) at mobile, tablet and desktop widths.

Severity: **Critical** blocks crawling or indexing · **High** materially hurts indexing, rankings or Core Web Vitals · **Medium** a clear gap with moderate impact · **Low** polish.

Status: **Fixed** in this change · **Open (business input)** needs content or a decision only the business can supply · **Recommended** worth doing, not done here.

## Summary

No critical issues. Crawlability, canonicals, redirects and robots rules were already sound. The real problems were page weight (about 7.3 MB of PNGs on the homepage, 1.4 MB on every other page), a sitemap that left out the whole blog, and missing social and structured data. Those are fixed. The main open item is the three legal pages the footer links to, which do not exist.

| # | Finding | Severity | Status |
|---|---|---|---|
| H1 | Sitemap omitted `/blog/` and all 23 posts | High | Fixed |
| H2 | Homepage hero shipped ~5.8 MB of PNGs, 1.5 MB LCP image | High | Fixed |
| H3 | 1.4 MB background texture downloaded on every page | High | Fixed |
| H4 | Footer links to `/privacy/`, `/terms/`, `/cookie-policy/` return 404 on all pages | High | Open (business input) |
| M1 | No `og:image` on 53 of 58 pages | Medium | Fixed |
| M2 | Blog article content shipped hidden behind a loading skeleton | Medium | Fixed |
| M3 | Homepage had four `<h1>` elements | Medium | Fixed |
| M4 | Structured data limited to one Organization block | Medium | Fixed |
| M5 | Titles over 60 characters on 15 pages; most descriptions over 160 | Medium | Open (business input) |
| M6 | Google Fonts loaded as a render-blocking cross-origin stylesheet | Medium | Recommended |
| L1 | Heading level skips (`h1` → `h3`) on `/blog/` and `/our-team/` | Low | Recommended |
| L2 | Blog cover images have no alt text in Sanity | Low | Open (content) |
| L3 | No `<lastmod>` for static pages in the live sitemap | Low | Recommended |
| L4 | Thin content on a few hub pages | Low | Open (business input) |

## Verified as correct (no change needed)

- **Canonical host:** `https://growsparkconsulting.com/` and `http://www.…` each 308 to `https://www.growsparkconsulting.com/` in one hop. `metadataBase` and every canonical use the `www` host.
- **Trailing slashes:** `/about` 308s to `/about/` in one hop, and every internal link already ends in `/`, so no internal link redirects.
- **Canonicals:** all 58 pages have a self-referencing canonical, and `og:url` matches it. Query strings (`/?utm_source=x`) return 200 with the clean canonical.
- **Uniqueness:** no duplicate titles or meta descriptions anywhere on the site.
- **Robots:** `public/robots.txt` allows everything and points to the sitemap. Every page sends `index, follow` except two deliberate `noindex` pages: `/payment/success/` (transactional) and `/growspark-transformation-framework/` (campaign page with placeholder copy; `/framework/` is the canonical methodology page).
- **Status codes:** unknown URLs return a real 404, not a soft 404.
- **Internal links:** no broken links apart from H4. No empty or generic anchor text ("click here", "read more").
- **Metadata rendering:** `<title>` and all meta tags are in the server-rendered `<head>` on static and ISR pages, so no JavaScript is needed to read them.
- **Google Tag Manager:** `GTM-T44BDVHX` appears exactly once per page: one inline snippet in `<head>` and one `<noscript>` iframe as the first child of `<body>`. In the browser `gtm.js` is requested once per page, including after client-side navigation, with no console or hydration errors. The snippet is about 400 bytes and loads `gtm.js` asynchronously, so it adds no render-blocking cost. What the container loads is outside the codebase (see "Needs external access").

## Findings and fixes

### H1 — Sitemap omitted the blog · Fixed

**Evidence:** `app/sitemap.ts` listed 33 static routes but neither `/blog/` nor any post. The project's own test (`app/__tests__/sitemap.test.ts`) was failing on exactly this before any change: *"indexable pages absent from the sitemap: /blog/, /blog/[slug]/"*.

**Fix:** the sitemap now adds `/blog/` and fetches every published post from Sanity, using the same "published" filter as the blog routes. Each post's `<lastmod>` is Sanity's `_updatedAt`. The sitemap revalidates every 60 seconds like the blog routes, and the existing Sanity webhook (`/api/revalidate-blog`) now refreshes `/sitemap.xml` as well. Result: 57 URLs (33 static + `/blog/` + 23 posts). The test mocks Sanity and checks that posts are listed, dated and self-canonical.

### H2 — Homepage hero images · Fixed

**Evidence:** the four hero slides were 1672×941 PNGs of 1.40–1.50 MB each, about 5.8 MB in total. Slides 2–4 load eagerly, so all four downloaded on first visit. `pic1.png` (1.5 MB) is the LCP element and was preloaded at full size on phones.

**Fix:** the slides now go through Next's image optimizer, which serves resized WebP from the unchanged originals. That uses `getImageProps()` in `lib/images.ts` rather than the `<Image>` component, so the sections stay Server Components and each `<img>` keeps its existing loading, priority and class attributes. The `sizes` value accounts for the `object-cover` crop on portrait screens, so phones get a sharp file rather than a stretched one. The same helper serves the three 1200×1200 leadership portraits (`raja.png` 767 KB, `susshinder.png` 895 KB, `pragadeesh.jpg` 225 KB) wherever they appear.

**Measured (production build, Playwright):**

| Page | Before (image bytes) | After |
|---|---|---|
| Homepage, above the fold, mobile/tablet/desktop | ~7.3 MB | 136–157 KB |
| `/cmo/`, mobile | ~2.4 MB | 154 KB |

*Before* is the sum of the files the page requested. *After* is what the browser actually downloaded.

### H3 — Site-wide background texture · Fixed

**Evidence:** `framee.png` (1,463 KB) is the CSS background of every `.bg-ink` / `.bg-accent-deep` band, including the footer call-to-action on every page.

**Fix:** added `public/framee.webp` (75 KB, same image) and served it through `image-set()` in `styles/base.css`, keeping the PNG as the fallback. The original file is unchanged.

### H4 — Legal pages 404 · Open (business input)

**Evidence:** the footer on all 57 pages that use it links to `/privacy/`, `/terms/` and `/cookie-policy/`, and all three return 404 on the live site. This was already documented as a known issue.

**Why it matters now:** besides being broken links, GTM is now live. A site that loads analytics should publish a privacy policy that describes it, and possibly a cookie notice, depending on which tags the container fires and where visitors are. That is a legal judgement, not an engineering one.

**Needed:** the policy text, from the business or its counsel. The pages can't be written without inventing legal commitments. Once the copy exists, the routes are trivial to add and the sitemap test will require them in the sitemap.

### M1 — Social sharing images · Fixed

**Evidence:** every static page set `twitter:card = summary_large_image` but no image, and blog posts had one only when the CMS post had a cover. 53 of 58 pages shared with no preview image.

**Fix:** `public/og-default.jpg` (1200×630, 76 KB) is the homepage hero photo cropped with the white logo. It is now in every page's `openGraph.images`, including the noindex landing page, which gets shared in campaigns. Blog posts still use their cover when they have one. `twitter:image` is filled in automatically from the Open Graph image.

**Why on every page:** in Next.js a page's `openGraph` object replaces its layout's entirely, so a default set in the layout would be dropped on every page. `DEFAULT_OG_IMAGE` lives in `lib/site.ts`.

### M2 — Blog content hidden behind a skeleton · Fixed

**Evidence:** in the server HTML for `/blog/` and every post, the visible markup was the `loading.tsx` skeleton. The real article, including its `<h1>`, sat in a `<div hidden>` that inline JavaScript swapped in. Google renders JavaScript, but crawlers and link-preview bots that don't would see the skeleton.

**Fix:** removed `app/(site)/blog/loading.tsx` and `app/(site)/blog/[slug]/loading.tsx`. Both routes are prerendered (ISR), so the skeleton only ever showed for an uncached slug. The article now renders straight into the HTML.

### M3 — Four `<h1>` elements on the homepage · Fixed

**Evidence:** each of the four hero slides used `<h1 className="hero-headline">`.

**Fix:** slide 1 keeps the `<h1>`; slides 2–4 use `<h2>` with the same class. The `h1`/`h2` base rules are identical and `.hero-headline` sets every visual property, so all four slides look the same (checked by screenshot).

### M4 — Structured data · Fixed

**Before:** one Organization block on the homepage.

**After** (all output parses as valid JSON-LD):

- **Homepage:** an `@graph` with the original Organization (plus a stable `@id` and the logo) and a `WebSite` entity. There's no `SearchAction` because the site has no search. The Organization's email, phone and address match the footer.
- **BreadcrumbList on 56 pages:** the 32 static pages that show a breadcrumb trail, the blog index and all 23 posts. Each mirrors the visible trail exactly. `app/__tests__/breadcrumbs.test.ts` compares the two in source and fails if they drift; a deliberate mismatch was confirmed to fail it.
- **BlogPosting on all 23 posts:** headline, description, published and modified dates, cover image, section and keywords, all taken from fields the page shows. The CMS author field says "Grow Spark Consulting" on every post, so the author points to the Organization rather than being presented as a person.
- **Not added:** `Service` and `Person` markup. Solutions pages are framed around problems ("Growth Has Stalled"), not priced or defined service offerings. Neither type earns a Google rich result, and inaccurate markup is worse than none.

### M5 — Title and description length · Open (business input)

**Evidence:** Google typically shows about 60 characters of a title and 155–160 of a description.

| Page | Title length |
|---|---|
| `/case-studies/founder-dependency/` | 86 |
| `/cmo/` | 83 |
| `/about/` | 80 |
| `/case-studies/cloud-kitchen/` | 78 |
| `/co-founder/` | 74 |
| `/framework/` | 73 |
| `/alliances/` | 72 |
| `/solutions/` | 68 |
| `/careers/`, `/leadership/` | 67 |
| `/blog/ai-automation-chennai-smes-save-time/` | 66 |
| `/case-studies/` | 65 |
| `/rnd/margin-architecture/`, `/solutions/customer-experience/`, `/solutions/growth-has-stalled/` | 62 |

About 30 descriptions run past 160 characters (the longest are `/cmo/` at 229 and `/alliances/` at 228).

Several solutions titles also lead with the problem rather than the service a searcher would type. For example, "Revenue Is Growing. Profit Isn't." could pair with a phrase like "profitability consulting".

**Not changed** because titles and descriptions are marketing copy. Recommend a single pass with whoever owns the copy, guided by Search Console query data (see "Needs external access").

### M6 — Font loading · Recommended

**Evidence:** fonts come from a `fonts.googleapis.com` stylesheet. There are `preconnect` hints and `display=swap`, but it is still a render-blocking, cross-origin request on every page, plus a second connection for the font files.

**Recommendation:** move to `next/font/google`, which self-hosts the files, inlines the `@font-face` rules and removes both third-party connections. Not done here because it touches the three per-page font URLs (`lib/site.ts`), the `--font-*` tokens and every route's typography, so it needs its own visual review.

### L1 — Heading level skips · Recommended

`/blog/` (post cards) and `/our-team/` (team member cards) go from `h1` straight to `h3`. Minor for SEO. It's fixable with `h2` and an unchanged class, but needs a visual check of the card styles.

### L2 — Blog cover alt text · Open (content)

Covers render with `alt=""` because the posts have no alt text in Sanity. On the post page and the blog cards an empty alt is acceptable, since the title is right beside the image. For image search, fill the **Alt** field on each cover in the Studio; the site already uses it.

### L3 — `<lastmod>` for static pages · Recommended

The sitemap dates static pages from git history, but Vercel builds from a shallow clone, so the live sitemap has no `<lastmod>` for them. The code deliberately omits it rather than inventing one. Blog posts now carry real `<lastmod>` values. Setting the Vercel environment variable `VERCEL_DEEP_CLONE=true` should give builds full history; confirm it in Vercel's docs and check build time before relying on it.

### L4 — Thin content · Open (business input)

Main-content word counts from the build: `/our-team/` 167, `/solutions/` 307, `/rnd/` 327, `/case-studies/` 340, `/contact/` 413; the R&D papers run 450–520. The median page is 757. Hub and contact pages are naturally short. The ones worth expanding, with real material from the business, are `/our-team/` (roles and backgrounds) and the R&D papers, which read as summaries of research that could be published in full.

## Needs external access

- **Google Search Console:** index coverage, which canonical Google actually chose, manual actions, query and CTR data (to prioritise M5), and submitting the updated sitemap after deploy. Nothing was submitted.
- **Field Core Web Vitals:** CrUX or Search Console CWV. The image savings above are lab measurements; real-user LCP/INP/CLS can only be confirmed about 28 days after deploy.
- **GTM container:** which tags fire, consent mode, and whether any tag duplicates something already on the page. The container is managed in Google Tag Manager, not in this repo.
- **Bing Webmaster Tools:** not set up as far as the repo shows. It accepts the same sitemap.
- **Legal copy** for H4, and **copy sign-off** for M5 and L4.

## Recommended next steps, by impact

1. Deploy, then submit `https://www.growsparkconsulting.com/sitemap.xml` in Search Console and check that the 23 blog posts are discovered.
2. Publish the privacy, terms and cookie pages (H4), especially now that analytics is live.
3. Review the GTM container's tags and consent setup.
4. After 2–4 weeks of Search Console data, rewrite the longest titles and descriptions (M5) around the queries that already bring impressions.
5. Move fonts to `next/font` (M6), with a visual review.
6. Add alt text to blog covers in Sanity (L2) and expand `/our-team/` and the R&D papers (L4).

## Validation

- `npm run typecheck`: passes.
- `npx vitest run`: 62 tests pass, up from 26 of 27 before (the sitemap test was failing). Includes the new breadcrumb drift test.
- `npm run build`: passes; 61 static pages generated.
- Rendered HTML across all 58 pages:
  - every page has a canonical, `og:image` and `twitter:image`;
  - one `<h1>` per page;
  - all 80 JSON-LD blocks parse, and each breadcrumb ends at its page's own canonical;
  - GTM appears once.
- Production server checks:
  - `/sitemap.xml` lists 57 URLs with blog `<lastmod>`;
  - `/robots.txt` is unchanged;
  - `/og-default.jpg` and `/framee.webp` return 200;
  - optimized image URLs return `image/webp`.
- `node scripts/verify-chrome.mjs` on `/`, `/solutions/profitability/` and `/blog/`: 0 failures, 0 hydration errors and 0 console errors at three viewports.
- Not run: `verify-routes.mjs`, `verify-runtime.mjs` and `verify-seo.py`. They compare against the pre-migration Vite site, which no longer exists in the tree. They would also, correctly, flag the deliberate markup changes above (image `srcset`, hero `h2`, added JSON-LD and OG tags).

No rankings claims are made here; the effect of these changes on search traffic can only be read from Search Console after deploy.
