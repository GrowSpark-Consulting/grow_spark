# Acquisition.com Workshop 4B → Grow Spark Transformation Framework: UI Audit & Implementation Blueprint

**Status:** inspection only. No application source was changed. Nothing was installed, committed or deployed.
**Inspected:** 2026-09-29
**Reference:** https://www.acquisition.com/workshop-4b
**Target:** https://www.growsparkconsulting.com/growspark-transformation-framework/ (this repo)

## How the reference was inspected

The page was driven in a real Chromium browser (Playwright's bundled Chromium 1243, run headless over the Chrome DevTools Protocol from a scratch script outside the repo). At each viewport the harness:

- loaded the page and dismissed the Cookiebot banner with **Deny**;
- scrolled the full height to trigger lazy-loading;
- captured screenshots every 0.9 viewport heights at 1440 and 390;
- extracted computed styles, bounding boxes, media, iframes, network hosts and inline scripts;
- ran scripted interactions: CTA hover and click, video click, opening FAQs, card hovers, and the mobile "Show all reviews" control.

Viewports were 1440×900, 1024×768, 768×1024, 390×844 and 360×740.

**Reading the evidence labels**

- **Observed** means the value was measured from computed styles or DOM state in the browser.
- **Estimate** means it was judged from screenshots or inferred.
- **Unverified** means it could not be checked. §H lists each of these.

---

## Summary of findings

1. **The reference is a single-column, no-navigation direct-response landing page built in Webflow.** It has no header menu, no hamburger and no sticky elements. A thin static announcement bar sits on top. A single CTA ("SEE IF YOU'RE A FIT →") appears three times, and all three jump to an embedded **iClosed** booking widget in the `#call` section.
2. **It has no scroll animations.** No Webflow interactions, AOS or opacity-0 pre-states were found (observed). CTA and card hovers also produce no measurable change (observed). The only motion is the video player UI.
3. **Its content is not reusable.** The copy, the Hormozi portraits, the founders' letter, 50 third-party Google reviews, workshop dates and seat counts, logos and Vidalytics videos all belong to Acquisition.com or third parties. Only the **layout, hierarchy, spacing rhythm and interaction patterns** can be carried over.
4. **The target URL has no route in this repo.** `app/` contains no `growspark-transformation-framework` segment. The closest page is `app/(site)/framework/page.tsx`, served at `/framework/` ("The Grow Spark Business Transformation Framework™"). I could not check what the live URL returns because my tooling failed (§H-1).
5. **The reference's brand and Grow Spark's design system conflict directly:**

   | | Reference | Grow Spark |
   |---|---|---|
   | Typeface | Poppins | Open Sans |
   | Palette | Purple, yellow and navy | Green and ink |
   | Headings | Heavy uppercase | Sentence-case headings |
   | Page chrome | No navigation | Fixed global nav plus footer |

   These are decisions you need to make before implementation (§H-2).
6. **The project's `CLAUDE.md` is out of date on forms.** It says the five forms "post to endpoints that do not exist". In fact, `app/api/*` route handlers exist and write to Postgres (Supabase), sync to HubSpot, send email and, for the strategy session, create Razorpay orders.

---

## A. Reference page: section-by-section breakdown

The page root is `div.acq-clone`, which contains 10 top-level blocks in this order. Coordinates are at 1440px.

| # | Block (class) | y / height @1440 | Background | Purpose |
|---|---|---|---|---|
| 0 | `w4b-topbar` | 0 / 34 | `#131628` | Announcement bar |
| 1 | `w4b-hero2` | 34 / 777 | `#131628` + photo with a 75% navy overlay | Hero: eyebrow, H1, sub, video, CTA, rating row |
| 2 | `inline-div-6` | 811 / 479 | `#FFFFFF` | "What two days actually covers": checklist plus photo collage |
| 3 | `cons-acq` | 1290 / 1266 | `#FFFFFF` | "The constraints": statement on the left, 4 numbered cards on the right |
| 4 | `w4b-fnd` | 2556 / 1477 | Vertical gradient `#9B6BFF → #7000FF` | "The founders": portrait, bio, handwritten-style letter card |
| 5 | `inline-div-12#call` | 4033 / 897 | `#131628` | Qualification copy, industry icons, iClosed booking widget |
| 6 | `inline-div-7-1-2` | 4930 / 565 | `#131628` | "Upcoming workshops": 4 date cards plus CTA |
| 7 | `inline-div-2-1-2-3-4-5` | 5495 / 7508 | `#EFEFEF` | "Proof by industry": 50 review cards |
| 8 | `inline-div-3-1-2-3-4-5` | 13003 / 766 | `#FFFFFF` | FAQ: heading and CTA on the left, 9 accordions on the right |
| 9 | `acq-foot` | 13769 / 187 | `#131628` | Footer: logo, 4 legal links, copyright |

Total document height: 13,956px at 1440, 15,125 at 1024, 10,427 at 768, 13,439 at 390 and 13,898 at 360.

Two hidden elements are present but not displayed at any width tested:

- a `.w4b-hide` block (`display:none`) in section 3 holding four portrait Vidalytics videos (29s, 22s, 18s, 18s);
- an empty HubSpot web-interactives fixed overlay layer.

Do not replicate either.

### 0. Top bar (observed)
- **Box:** 34px tall, padding 8px 32px, flex row with `space-between`, `position: static` (it scrolls away).
- **Left:** a red dot (`#FF3B3B`) and "TWO-DAY LIVE SCALING WORKSHOP" in Poppins 12px/700, uppercase, white.
- **Right:** "LAS VEGAS, NV — SEPTEMBER AND OCTOBER SOLD OUT, NOV 9–10 NOW OPEN" in 12px/900, letter-spacing −0.6px, uppercase. "LAS VEGAS, NV —" is `#B2B2B2`; the rest is white.
- **At ≤767px:** centred, wraps to two lines and grows to 75px tall. Letter-spacing is forced to 0, with word-spacing .14em.

### 1. Hero (see §B for the pixel breakdown)
Everything is centred:

1. orange eyebrow;
2. two-line uppercase H1;
3. two-line subheadline;
4. 16:9 video, 604×340;
5. full-width yellow CTA, 680×70;
6. rating row.

The background is a photo of the speaker (`hero-bg.webp`) with a flat `rgba(19,22,40,.75)` overlay. The figure sits left of centre and shows through faintly.

### 2. "What two days actually covers"
- **Layout:** padding 32px 45px. Inner flex row, max-width 1190px, gap 24px, wrapping.
  - Left column (728px): H2 at 72/72, letter-spacing −3.6px, uppercase, `#131628`; then 4 checklist rows.
  - Each checklist row is a 16px outline-check SVG, a 10px gap, then text at 18px/500 in `#131628`.
  - Right column: one pre-composited photo collage, 438×415. It is a single webp at 876×830 showing 5 event photos with rounded corners.
- **At ≤1024px:** stacks. The collage stays 438px wide and is centred. At 390 the collage goes full width (358×339).

### 3. "The constraints"
- **Layout:** flex row, max-width 1190px, gap 24px 31px. Two columns of 580px each.
- **Left column** (static, not sticky):
  - eyebrow "THE CONSTRAINTS" at 12px/700, letter-spacing 2.16px, `#9B6BFF`;
  - H2 at 60/72, uppercase, with the last sentence "THEN NO FURTHER." in `#6F00FF`;
  - body at 18px/500 in `#000`.
- **Right column:** 4 stacked cards with a 1px `#9B6BFF` border, 16px radius (estimate from screenshots) and roughly 24px padding. Each card has:
  - a number ("01"–"04") at 40/48, weight 700, `#131628`;
  - a title at 24/32, weight 700, uppercase, `#6F00FF`;
  - a body at 18px/500 in `#000`.
- Gap between cards: about 24px (estimate).
- **At ≤768px:** stacks with the statement first.

### 4. "The founders"
- **Background:** full-bleed vertical gradient from `#9B6BFF` to `#7000FF`. Padding 56px 45px.
- **Layout:** flex row, max-width 1184px, gap 32px 40px.
  - Left: portrait card, 530×670, radius 16px. The photo sits over `linear-gradient(transparent 40%, #7E22FF 100%)`, so the image fades into the background.
  - Right (614px): H2 "THE FOUNDERS" at 70/80, letter-spacing −3.5px, white, then 3 paragraphs at 16/24, weight 400, white.
- **Letter card:** below the row, centred and 603×655. It uses a torn-paper SVG background (`Paper.svg`) and contains:
  - centred text at 16/24 in `#1F223C`, with the first and last paragraphs bold;
  - a signature "Alex Hormozi" in `"Brush Script MT"` 38px italic, `#9B6BFF`. This is a system font, not a web font, so it renders differently per OS.
- **At ≤991px:** columns stack with the image first. The paper SVG is replaced by a white card with 14px radius.

### 5. `#call`: qualification plus booking
- **Layout:** navy background. Flex row, max-width 1190px, gap 48px.
- **Left column** (662px):
  - eyebrow "FIND OUT WHAT YOUR CONSTRAINT IS" in `#9B6BFF`;
  - H2 at 70/72, uppercase, white;
  - body at 18px/500 in `#B8B7C2`;
  - a 3×2 grid of industry tiles, each 200×72: a 32px purple line icon over an 18px label in white.
- **Right column:** a 480px container holding an iClosed iframe (408×833, white, about 8px radius). See §D.
- **At ≤1024px:** stacks, with the widget centred at 480px. At 390 the iframe is 358×851.

### 6. "Upcoming workshops"
- **Heading:** centred H2 at 48/63 (max-width 854px), then a sub at 18px/500 in `#B8B7C2`.
- **Date cards:** 4 cards, each 259×179 with a 32px gap. Each has a 2px border (estimate from screenshots) and radius around 16px.
  - **Sold-out cards:** border `#272D51`, date text `#272D51`, a red "SOLD OUT" pill badge overlapping the top edge, and a navy "0 SEATS LEFT" pill.
  - **Open cards:** light-grey or white border, white date, and a purple-outlined pill ("20 SEATS LEFT" / "OPEN") in `#7000FF` text on dark purple.
- **CTA:** a centred yellow button, 296×70.

### 7. Reviews ("Proof by industry")
- **Background and padding:** `#EFEFEF`, padding 80px 20px.
- **Heading block:** max-width 760px, containing:
  - eyebrow "PROOF BY INDUSTRY";
  - H2 at 48/50.4;
  - sub at 17.6px/28.16 in `#3A3A44`: "Real Google reviews… Filter to your world."
- **Filtering:** there is **no filter UI** (observed: no buttons, selects or tabs in the section).
- **Grid:** 50 `.tcard` in a flex-wrap grid, 3 per row at 361px each with a 22px gap. The last row has 2 cards that grow to 553px each.
- **Card styling:** white background, 16px radius, 1px `rgba(20,21,39,.1)` border, shadow `0 10px 30px -22px rgba(20,21,39,.4)`, padding about 26px.
- **Card contents:**
  - ★★★★★ at 16px in `#7000FF`, letter-spacing 2px;
  - quote at 16.16/25.05 in `#141527`;
  - a hairline divider;
  - name at 16/20, weight 700;
  - meta ("Verified Google review · Industry") at 13.12px in `#6A6A75`.

### 8. FAQ
- **Layout:** flex row, max-width 1190px, gap 40px.
  - Left (463px): eyebrow, H2 "FREQUENTLY ASKED QUESTIONS" at 60/72, and a full-width yellow CTA (463×70).
  - Right (687px): 9 native `<details>`, each with a 1px `#DFDFDE` bottom border.
- **Summary row:** flex, gap 20px. Question at 18px/500 in `#141527`; a "+" glyph at 24px on the right.
- **Answer:** 16/25.6 in `#43434E`, padding-bottom 22px.
- **Quirk:** the section's padding stays `32px 45px` at every width, so mobile gutters are 45px here against 16px elsewhere.

### 9. Footer
- **Box:** navy, padding 40px 45px, everything centred.
- **Contents:** Acquisition.com logo (278×26); 4 links at 14px in `#B2B2B2` with a 24px gap (Privacy Statement, Terms and Conditions, DMCA Policy, Do Not Sell My Info); copyright at 14px in `#6A6A75`.

---

## B. Desktop and mobile layout specifications

### Hero: pixel breakdown

**At 1440×900** (all observed):

| Element | Box (x, y, w×h) | Type |
|---|---|---|
| Top bar | 0,0, 1440×34 | 12px/700 and 12px/900, uppercase |
| Hero container | 0,34, 1440×777; padding 24px 45px | — |
| Eyebrow "ACQUISITION.COM SCALING WORKSHOP · 2 DAYS · IN PERSON · LAS VEGAS" | 302,58, 836×21 (max-width 836) | Poppins 14px/700, letter-spacing 2.52px, uppercase, `#FFAA00`, centred |
| H1 "YOUR BUSINESS IS ONE CONSTRAINT / AWAY FROM ITS NEXT LEVEL." | 240,87, 960×134 (2 lines) | Poppins 45px/67px, 700, uppercase, white, centred, letter-spacing normal |
| Sub "Most founders think… to find yours and fix it." | 216,237, 1008×54 (2 lines) | Poppins 18px/27px, 500, white, centred |
| Video | 418,307, 604×340 (`max-width: 604px; margin: 16px auto 0`) | Vidalytics player with a purple caption pill |
| CTA "SEE IF YOU'RE A FIT →" | 380,663, 680×70 | Poppins 20px/900, uppercase, `#000` on `#F6D234`; padding 20px 48px; radius 8px; no border or shadow |
| Rating row | y 767; flex with a 24px gap from the CTA | ★★★★★ 18px `#FFAA00` letter-spacing 4px; "4.9 Google rating" 14px/500 white; "5,000+ founders attended · 100 seats per workshop" 14px/500 `#B2B2B2` |

At 1440×900 the full hero, including the rating row, sits above the fold; the hero ends at y=811. The first 89px of the next white section, with the top of "WHAT TWO" and the collage, peeks below.

**At 390×844** (observed):

- The top bar is 75px tall, on 2–3 centred lines.
- Hero padding is 16px.
- Eyebrow: 12px, letter-spacing 2.16px, 2 lines.
- H1: 30px/36px, 3 lines, 358px wide.
- Sub: 14px/20px, 5 lines.
- Video: 358×201, starting at y=375.
- CTA: 358×70 at y=593, full width.
- Rating row: splits into two columns. Stars and "4.9 Google rating" sit on the left; the meta text wraps to 4 lines on the right. This looks awkward, and should not be copied.
- The fold at 844 ends just after the rating row, as at desktop.

**At 360×740** (observed): the H1 is 4 lines (30/36) and the CTA sits at y=612. The fold cuts through the rating row.

### Responsive behaviour by section (observed unless marked)

| Section | 1440 | 1024 | 768 | 390 / 360 |
|---|---|---|---|---|
| Top bar | 1 row, 34px | 1 row | 1 row | centred, 2–3 lines, 75px |
| Hero padding | 24 / 45 | 19.2 / 35.84 | 16 / 26.88 | 16 / 16 |
| H1 size / line height | 45 / 67 | 36.04 / 53.96 | 30 / 40.5 | 30 / 36 |
| Hero sub | 18 / 27 | 14.34 / 21.5 | 14 / 20 | 14 / 20 |
| Video | 604×340 | 604×340 | 604×340 | 358×201 / 328×185 |
| CTA | 680×70 | 680×70 | 680×70 | full width ×70 |
| "What two days" H2 | 72 (−3.6 ls) | 57.6 | 43.2 | 32 |
| What-two-days layout | 2 columns (728 \| 438) | stacked, collage centred 438 | stacked | stacked, collage full width |
| Constraints | 2 × 580 | 2 × 461 | stacked | stacked |
| Constraints H2 | 60 / 72 | 57.6 | 43.2 | 32 / 38 |
| Founders | 530 \| 614 | 426 \| 486 | stacked (≤991) | stacked |
| Founders H2 | 70 / 80 | 70 | 70 | **70, which overflows at 360** (345 > 328) |
| Letter card | torn-paper SVG | torn-paper SVG | white card, 14px radius | white card |
| `#call` | 662 \| 480 widget | stacked; widget centred 480 | stacked | stacked; widget 358×851 |
| Industry tiles | 3×2 | 4 + 2 | 3×2 | 2×3 |
| Date cards | 4 in a row, 259w | 4 in a row, 214w | 3 + 1, 177w | 1 column, 177w (narrow, centred) |
| Reviews visible | 50, 3 columns | 50, 3 columns | 9, then "Show all" (≤991) | 9, then "Show all 50 reviews" |
| FAQ layout | 463 \| 687 | 463 \| 431 | stacked (≤991) | stacked; padding stays 45px |
| FAQ H2 | 60 / 72 | 60 | 60 | **60, which overflows at 390 and 360** (376 > 300 / 270) |

**Breakpoints** (observed in embedded CSS): `max-width: 991px` and `max-width: 767px`, plus Webflow's defaults (991/767/479). Between breakpoints the page does not size type fluidly; values step at breakpoints.

**Overflow** (observed): `.acq-clone` has `overflow-x: hidden`, so the two oversized headings are **clipped** rather than scrolling horizontally. The document width equals the viewport width at every size.

**Sticky elements on mobile:** none apart from the Cookiebot floating icon, a 48px circle 10px from the bottom-left corner.

---

## C. Design tokens and typography

### Fonts
- **Poppins 100–900** from Google Fonts, loaded through Google's WebFont loader (`webfont.js` 1.6.26) (observed). Every visible text element uses Poppins.
- The body default is Arial 14px `#333` (Webflow's default); in practice it is always overridden.
- The signature uses "Brush Script MT", a system font that is not loaded, so it is platform-dependent.

### Colour (observed RGB, converted to HEX)

| Role | HEX | Where |
|---|---|---|
| Navy (primary dark) | `#131628` | top bar, hero, `#call`, workshops, footer, some headings |
| Ink | `#141527` | headings and text on light backgrounds; FAQ questions |
| Purple (brand) | `#7000FF` / `#6F00FF` | constraint titles and accent, stars, seat pills, iClosed button |
| Lavender | `#9B6BFF` | eyebrows, constraint card borders, gradient start, signature |
| Gradient | `#9B6BFF → #7000FF` | founders section |
| CTA yellow | `#F6D234` | all 3 CTAs, with `#000` text |
| Orange | `#FFAA00` | hero eyebrow, hero stars |
| Alert red | `#FF3B3B` | top-bar dot, "SOLD OUT" badges |
| Light grey background | `#EFEFEF` | reviews section |
| Muted text on dark | `#B8B7C2`, `#B2B2B2` | body on navy; top bar; footer links |
| Muted text on light | `#6A6A75`, `#43434E`, `#3A3A44` | review meta, FAQ answers, reviews sub |
| Letter text | `#1F223C` | founders' letter |
| Sold-out slate | `#272D51` | sold-out card border, date and pill |
| Hairlines | `#DFDFDE`; `rgba(20,21,39,.1)` | FAQ dividers; review card borders |

### Type scale at desktop 1440 (observed)

| Token | Size / line height | Weight | Case | Tracking |
|---|---|---|---|---|
| Display XL (section H2) | 70–72 / 72–80 | 700 | UPPER | −0.05em on 2 of the H2s, normal on others |
| Display L | 60 / 72 | 700 | UPPER | normal |
| Display M (centred section H2) | 48 / 50–63 | 700 | UPPER | normal |
| H1 hero | 45 / 67 | 700 | UPPER | normal |
| Card number | 40 / 48 | 700 | — | — |
| Card title | 24 / 32 | 700 | UPPER | — |
| CTA | 20 | 900 | UPPER | — |
| Lead body | 18 / ~27 | 500 | — | — |
| Body | 16 / 24–25.6 | 400 | — | — |
| Eyebrow | 12 / normal | 700 | UPPER | 2.16px (0.18em) |
| Hero eyebrow | 14 | 700 | UPPER | 2.52px (0.18em) |
| Meta / legal | 13–14 / 20 | 400–500 | — | — |

### Other tokens (observed)

- **Radius:** 16px (cards; the most common value, 59 uses); 8px (CTA and widget); 999px / 100px (pills and "Show all"); 14px (mobile letter card).
- **Shadow:** only the review card has one: `0 10px 30px -22px rgba(20,21,39,.4)`.
- **Content width:** the inner container is capped at 1190px (founders 1184px, headings 760–854px, hero text 836–1008px). Side gutters are 45px at desktop, falling to 16px on mobile.
- **Section vertical padding:** 32px on most sections, 56px for founders and 80px for reviews. Sections look dense and rely on background colour changes, not whitespace, for separation.

---

## D. Interaction and navigation behaviour

**Header and navigation.** The reference has no navigation, logo in the header, hamburger, header CTA or sticky or fixed header (observed). The top bar is `position: static` and scrolls away. The only navigation is the in-page CTA anchor and the footer's legal links.

| Element | Initial state | Action | Result | Tested |
|---|---|---|---|---|
| CTA ×3 "SEE IF YOU'RE A FIT →" (hero, workshops, FAQ) | yellow | hover | **No computed change** (background, colour, transform, shadow and opacity identical; `transition: all`; cursor pointer) | observed |
| Same CTA | — | click | `href="#call"` → **instant jump** (`scroll-behavior: auto`) to the `#call` section at y≈4028; URL gains `#call`; no smooth scroll, no offset | observed |
| Hero video (Vidalytics, embed `dIKsAOKOfqVMrD08`, 7:21) | autoplays with a purple caption pill overlay; no poster | click | pauses, then shows a large purple circular play button and a purple control bar (play, rewind 10s, volume, seek, settings) | observed |
| Video sound | — | autoplay | in my headless run it autoplayed **unmuted**, but only because I launched with `--autoplay-policy=no-user-gesture-required`. Real browsers block unmuted autoplay, so a muted-autoplay-with-captions start is likely | **Estimate** |
| FAQ `<details>` ×9 | all closed; "+" on the right | click summary | opens instantly (no height animation); **the "+" does not change or rotate**; no hover colour change; **several can be open at once** (not an exclusive accordion) | observed |
| Reviews on desktop (>991px) | all 50 visible | — | no pagination, carousel or filter | observed |
| Reviews at ≤991px | inline script hides cards 10–50 (`.tc-hidden`) and appends button `#tc-more` "Show all 50 reviews" (transparent, 1px `#141527` border, 999px radius, 15px/700, padding 14×26) | click | all 50 shown; button removed; no "show fewer". Page grows from 13,439 to 30,214px at 390 | observed |
| iClosed widget (`app.iclosed.io/e/Acquisition/acq-scaling-workshop-meeting-5`, inline iframe) | step 1 of 2, "Fill out the form": phone with country picker (auto-set to +91 from my location), first/last name, consent text, purple "Continue" button; calendar greyed out with the tooltip "Please fill out the form before choosing your time slot." | submit | **Not tested on purpose**: submitting would create a real lead in a third party's CRM | unverified |
| Constraint card and review card hover | — | hover | no change | observed |
| Date card hover | — | hover | not measured (selector miss); screenshots show no visible hover affordance | unverified |
| Scroll-triggered animation | — | scroll | **none**: no `data-w-id`, AOS or hidden-until-scroll elements | observed |
| Footer links | — | click | same-tab links to acquisition.com `/privacy-statement`, `/terms-and-conditions`, `/dmca-policy`, `/do-not-sell-my-info` | hrefs observed; not followed |
| Cookiebot | bottom banner on first visit; then a floating 48px icon | Deny | banner closes; the icon remains fixed bottom-left | observed |

**Third-party integrations detected** (observed network and script sources):

- **Build:** Webflow, jQuery 3.5.1, Google WebFont loader.
- **Media:** Vidalytics (Bitmovin player).
- **Booking:** iClosed.
- **Consent:** Cookiebot.
- **CRM:** HubSpot (analytics, collected forms, banner, ads pixel, web interactives).
- **Advertising:** Meta Pixel (4 pixel IDs), TikTok Pixel, Google Ads `AW-11264822264`, GA / GTM.
- **Experimentation and fingerprinting:** Mida.so (A/B testing with anti-flicker), Convert Experiments, heatmap.com, openfpcdn (fingerprinting).

**None of these should be copied.** Grow Spark ships no client analytics today (confirmed by searching `app/`, `components/` and `lib/`).

---

## E. Asset inventory

All assets are the property of Acquisition.com LLC or third parties. **None may be reused.** Each needs a Grow Spark-owned or licensed replacement.

| Asset | Source URL | Natural size / displayed | Used in | Notes |
|---|---|---|---|---|
| Hero background photo (speaker) | `https://www.acquisition.com/hubfs/hero-bg.webp` | — / 1440×777 cover | hero | Likeness of a real person. **Do not use.** |
| Hero video | Vidalytics account `8Okpkhqb`, embed `dIKsAOKOfqVMrD08` (blob stream) | 16:9, 604×340 | hero | Proprietary. Grow Spark needs its own video; **there are no video files in this repo** (`public/` has none, even though `vercel.json` sets headers for `/videos/`) |
| Video thumbnail | `fast.vidalytics.com/video/8Okpkhqb/DwsFbQ3odQ1m08bG/212320/199061__FFMPEG/thumb/thumbnail-5_0.jpg` | 604×340 | hero | Do not use |
| 4 portrait videos (hidden) | Vidalytics `vw8seDSordQ52VAo`, `qrOP1l4PmB6V8Qy0`, `Gpa6zi9bp18D0YO7`, `2eNgpfIPRRX6NaNr` | 9:16 | none (hidden) | Ignore |
| Checkmark icon | `cdn.prod.website-files.com/6a95cace81e69394f2234720/6a96da714076c4468e07bc1e_checkmark-1.svg` | 16×16 | checklist | Replace with lucide `CircleCheck` (already a dependency) |
| Event photo collage | `…/6a96da7bb18ab141ca389f0d_new-grid.webp` | 876×830 / 438×415 | what-two-days | Photos of real attendees. Replace with Grow Spark imagery (`public/pic1-4.png`, `framee.png` are candidates; licensing unverified) |
| Founders portrait | `…/6a96da6eb32d574367757198_founders-1.webp` | — / 530×670 | founders | Real people. Grow Spark leadership photos exist (`public/raja.png`, `susshinder.png` and others); confirm consent and which to use |
| Torn-paper background | `…/6a96da7247c44adf6bcfd510_Paper.svg` | 603×655 | letter card | Decorative, but copyrighted. Recreate with CSS or an original SVG |
| Industry icons 1–6 | `…/6a96da7d29fe6ff1dab9632b_icon1.svg` through `…icon6.svg` | 32×32 | `#call` | Replace with lucide icons |
| Footer logo | `…/6a96da7064a57169a9a0c845_acq-nav-logo.png` | 439×41 / 278×26 | footer | Trademark. Use `public/logo/gsc-white.png` |
| Favicon | not captured | — | — | Unverified; not needed (Grow Spark uses `/icons/favicon.svg`) |
| Review content ×50 | text in the DOM | — | reviews | Real third-party Google reviews. **Must not be reused or imitated with invented testimonials** |
| Copy (all headings, body, FAQ answers, letter) | DOM | — | everywhere | Copyrighted marketing copy. Use Grow Spark's existing framework copy (see §G) |

---

## F. Existing Grow Spark architecture

| # | Question | Finding (read from source) |
|---|---|---|
| 1 | Framework, language, build tool, package manager | Next.js `^16.3.1` (App Router), React 19.2, TypeScript 7; Tailwind CSS v4 via `@tailwindcss/postcss`; npm (`package-lock.json`). Vitest for unit tests; Playwright is a devDependency. **`node_modules` is not installed in this checkout.** |
| 2 | Entry point and routing | Filesystem App Router. Two route groups with separate root layouts: `app/(home)/layout.tsx` for `/` and `app/(site)/layout.tsx` for everything else. Both render `components/layout/HtmlShell.tsx` (html/body, fonts, `<Nav/>`, children, `<Footer/>`, `<SiteEffects/>`). `next.config.ts` sets `trailingSlash: true` and `pageExtensions: ['tsx','ts']`. `vercel.json` has only a `/videos/*` cache header, with **no redirects or rewrites**. There is no middleware or proxy. |
| 3 | Route for `/growspark-transformation-framework/` | **None exists.** No directory, redirect or rewrite matches it. The content equivalent is **`app/(site)/framework/page.tsx`** at `/framework/` (canonical `/framework/`). |
| 4 | Components on the equivalent route | `framework/page.tsx` is self-contained (1,821 lines, converted from the old HTML). In order: breadcrumb; hero (eyebrow, H1 "The Grow Spark Business Transformation Framework™", `lede-statement`, 2 CTAs to `#assessment` and `#phases`); five-step word strip; "Why we built the framework" (6 `symptom-card`s, chips, statement); `#phases` (5 `phase-block` articles); `#framework` "At a glance" dark diagram (`data-fw-diagram`, animated by `initFrameworkLine`); 6 principles (`why-card`); scorecard (7 `score-card`s); transformation paths (`path-row`s with lucide `ArrowRight`); problem→outcome flow (`flow-step`); three situations (`detail-card`); dark "should create value" chips; final CTA `#assessment` linking to `/contact/` and `/strategy/`. |
| 5 | Shared header, footer, navigation, global styles | `components/layout/Nav.tsx` (client component: fixed header, goes solid past 48px, "Who We Are" dropdown, mobile drawer). Nav links come from `navLinks.ts`, which includes `/framework/` ("Our Framework"). `components/layout/Footer.tsx` links "Our Framework" to `/framework/`. `components/layout/FooterCta.tsx` is an optional per-page banner. Styles: `styles/tokens.css` (`@theme` tokens and `--fs-*` clamp scale), `styles/base.css` (`.btn*`, `.eyebrow`, `.section-head`, `.page-hero-heading`, `.chip`, card classes, form classes) and `styles/case-study.css`, all loaded through `app/globals.css`. |
| 6 | CSS frameworks, UI libraries, fonts, icons | Tailwind v4 utilities plus component classes; GSAP 3.12 with ScrollTrigger; Lenis 1.1; Swiper 14 (home only, code-split); `lucide-react` icons. Fonts: Open Sans 400–800 from Google Fonts (`FONT_HREF_DEFAULT`), with `'Deloitte Sans'` first in the stack (not loaded) and Manrope 300 on `/` only. Tokens: ink `#14171A`, accent green `#0B5E45`, accent-bright `#4FCB9B`, paper `#FAFAF8`, radii 6/12/20/999. |
| 7 | Forms, backend, analytics, integrations | Route handlers exist under `app/api/`: `contact`, `careers-application`, `strategy-session`, `growth-intensive`, `engagement-application`, `razorpay/verify`, `razorpay/webhook`, `revalidate-blog`. They validate with zod (`lib/validation/*`), persist to Postgres (`lib/db.ts`, Supabase pooler), send email with nodemailer (`lib/email.ts`) and sync to HubSpot (`lib/hubspot/*`). `strategy-session` also creates a **Razorpay order for ₹9,999**. Client forms use `components/forms/useFormSubmit.ts`. The blog uses the Sanity CMS. **No client analytics or tracking pixels.** ⚠ This contradicts `CLAUDE.md` ("forms… 404 on submit"), which is out of date. |
| 8 | Behaviour to preserve | `SiteEffects` wiring: Lenis smooth scroll, anchor links with a 96px header offset, `[data-reveal]` scroll reveal (visible by default, with `clearProps`), `data-fw-diagram` line animation. Server-component-by-default rule (only `Nav` and `SiteEffects` are client components, apart from form components). Trailing-slash canonicals. `/framework/` stays reachable from the nav and footer. Footer's known-broken `/privacy/`, `/terms/`, `/cookie-policy/` links. |
| 9 | Can the target be redesigned independently? | **Yes, if it is a new route** (`app/(site)/growspark-transformation-framework/page.tsx`): nothing else imports page files, and the effect modules no-op when their targets are absent. A **no-nav landing layout** like the reference would need a third route group with its own root layout, because `Nav` and `Footer` are rendered unconditionally by `HtmlShell`. Changing `HtmlShell` (for example a `chrome` prop) would touch every page's shell. Shared-CSS edits in `base.css` or `tokens.css` affect all pages, so new styles should be scoped under a page-level class. |
| 10 | Build and deploy commands | `npm run dev` / `build` / `start` / `typecheck` / `test` (vitest), plus `migrate`, `hubspot:setup`, `hubspot:backfill`. Deploys on Vercel (`vercel.json`: `framework: nextjs`, `buildCommand: npm run build`). Regression scripts are described in `CLAUDE.md` (`scripts/verify-*.mjs`, `verify-seo.py`). |

---

## G. Section mapping

This mapping follows the principle "replicate structure and behaviour; keep Grow Spark copy, brand and assets". It assumes the default answers to §H-2; the decisions there may change individual rows.

| Reference section | Reference behaviour | Grow Spark implementation | Existing files to reuse or modify | Assets required |
|---|---|---|---|---|
| Top bar | Static 34px announcement bar; red dot + label; right-aligned status; stacks ≤767 | Optional static strip above the hero with a short **existing** framework line (e.g. "Discover · Diagnose · Design · Deploy · Drive"). No scarcity or date claims. With the global fixed Nav kept, it sits below the header | new `components/sections/landing/*` or inline in the new page; tokens from `styles/tokens.css` | none |
| Header / nav | None | **Decision §H-2b.** Default: keep the global `Nav`/`Footer` (no architecture change) | `components/layout/Nav.tsx` (unchanged) | — |
| Hero | Centred: eyebrow → 2-line H1 → sub → 16:9 video (604 max) → full-width CTA (680) → rating row. Navy with a photo overlay | Centred hero on a dark ink background (`bg-ink`, optional image overlay): eyebrow "Our Methodology"; H1 "The Grow Spark Business Transformation Framework™"; the `lede-statement` lines; a media slot (video if you supply one, otherwise the framework diagram); one full-width primary CTA to `#assessment`; a proof row made only of **verifiable** facts | copy from `app/(site)/framework/page.tsx` (hero); `.btn` from `styles/base.css` | Grow Spark video (none in repo) or still image; hero background image (optional) |
| What two days covers | 2 columns: H2 + checklist \| photo collage | "Why we built the framework": H2, symptom list as a checklist (lucide `CircleCheck`), image collage on the right | copy from framework page ("Why We Built The Framework" symptoms) | `public/pic1-4.png` / `framee.png` (confirm rights) |
| The constraints | Left statement (H2 with accent last line) \| 4 numbered bordered cards | **Best structural fit.** "One Framework. Five Phases." on the left; 5 numbered cards (Discover…Drive, each with tagline and objective) on the right. Full phase detail (chips and outputs) can live in expandable card content or a following section | copy from framework page `#phases`; `.phase-*` classes as a content source only | none |
| The founders + letter | Gradient band; portrait \| bio; handwritten letter card with signature | Leadership band using existing founder or leadership copy; the "letter" can host the framework's philosophy lines ("Businesses don't need more advice…"). **Signature only if the named person approves** | `components/sections/Leadership.tsx` / `app/(site)/founder/page.tsx` for copy; `public/raja.png` / `susshinder.png` (confirm who) | leader portrait (consent) |
| `#call` qualification + booking | Left: who it's for + industry icons \| right: iClosed 2-step booking iframe | "Built for three transformation situations" (Build / Transform / Scale) + industries on the left \| an **embedded Grow Spark form** on the right, posting to an existing endpoint. **Decision §H-2d**: `/api/contact` (free assessment request) or `/api/strategy-session` (paid ₹9,999 + Razorpay) | `components/sections/ContactForm.tsx` or `StrategySessionForm.tsx`; `components/forms/useFormSubmit.ts`; `app/(site)/industries/page.tsx` for the industry list | lucide icons |
| Upcoming workshops | 4 date cards with seat counts / sold-out badges + CTA | **No Grow Spark equivalent.** Inventing dates or scarcity would be misleading. Suggested substitute: the 3 engagement tiers from `/strategy/` as cards (real offers), or omit | `app/(site)/strategy/page.tsx` (`eng-card`) | none |
| Reviews ("Proof by industry") | 50 review cards, 3 columns; mobile shows 9 + "Show all" | **Needs real content.** Options: case-study proof cards from `/case-studies/*` (real, existing) in the same card grid with the same ≤991 "Show all" behaviour, or omit. **Never invent testimonials** | `components/sections/CaseStudyCards.tsx`, `app/(site)/case-studies/*`; new behaviour module in `components/effects/` | `public/images/case-studies/*.webp` |
| FAQ | Left: H2 + CTA \| right: 9 native `<details>`, not exclusive, "+" static | 2-column FAQ with native `<details>` (zero JS, server-renderable). Content from the existing FAQ component or framework copy. Improve on the reference by rotating "+" to "×" with CSS `details[open]` (no JS) | `components/sections/Faq.tsx` (check its content and markup first) | none |
| Final CTA (implicit) | CTA repeated ×3 → `#call` | Repeat one primary CTA ×3 → the form section id; keep the existing `/strategy/` and `/contact/` links | `initAnchorLinks` in `components/effects/interactions.ts` (already smooth-scrolls same-page hashes through Lenis with a 96px offset) | none |
| Footer | Minimal: logo + legal links | Keep the global `Footer` (default), or a minimal footer in a landing layout (§H-2b) | `components/layout/Footer.tsx` | `public/logo/gsc-white.png` |

---

## H. Missing information, uncertainties and limitations

### H-1. Unverified or inaccessible

1. **The live target URL was not inspected.** Shell and web-fetch calls repeatedly failed a transient permission check late in the session, so I could not load `https://www.growsparkconsulting.com/growspark-transformation-framework/`. Given the repo has no matching route or redirect, it most likely returns a 404, or is configured outside the repo (for example in the Vercel dashboard or on another branch). **This needs confirming before implementation.** A scratch script to check it is ready (`target.mjs` in the session scratchpad); it is not in the repo.
2. **iClosed form submission and booking flow** were not exercised, deliberately, to avoid creating a real third-party lead. Validation messages, step 2 and the confirmation screen are unknown.
3. **Video sound and autoplay in a normal browser are unverified.** The headless run used an autoplay-permissive flag. The fullscreen, settings and volume controls were not exercised.
4. **Date-card hover** was not measured, and the **favicon** was not captured.
5. **Card padding, border widths and card radii** on the constraint and date cards are estimates from screenshots (±2px). All other sizes, colours and type values in this document are computed values.
6. Only Chromium was tested. Safari and Firefox rendering was not checked; the Brush Script signature will differ by OS.
7. **Live content can change.** The reference runs A/B testing (Mida, Convert), so other visitors may see a different variant. Dates and seat counts are time-sensitive.
8. **Repo checks:** `node_modules` is not installed, so `npm run build` / `typecheck` were not run, and the Next 16 docs in `node_modules/next/dist/docs/` (required reading per `CLAUDE.md`) could not be consulted.

### H-2. Decisions needed from you before implementation

**a. Route.**
- Option 1: a new route at `/growspark-transformation-framework/`, leaving `/framework/` untouched. This is my recommendation because it has zero regression risk.
- Option 2: replace `/framework/` in place and redirect the new URL to it.
- Option 3: create the new route and 301 `/framework/` to it. This changes the nav and footer links and canonicals.

**b. Page chrome.** Should the page keep Grow Spark's global Nav and Footer (the default: no architecture change), or be a nav-less landing page like the reference? The nav-less version needs a new route group and root layout, e.g. `app/(landing)/layout.tsx`.

**c. Brand mapping.** Should the page use Grow Spark tokens (the default)? That means ink and green, Open Sans, the existing radii, and a green or bright-green CTA in place of yellow. Or do you want a page-scoped "landing theme" that echoes the reference's high-contrast navy, bold uppercase display type and bright CTA? The second option means a new display font (for example Poppins), which conflicts with the one-family brand rule in `tokens.css`.

**d. Conversion target.** Which form should the embedded form use?
- `/api/contact` for a free assessment request (default).
- `/api/strategy-session`, a paid ₹9,999 booking with Razorpay.
- A new endpoint. That would be backend work outside this scope.

**e. Content with no Grow Spark equivalent:**
- a founder letter and signature (who signs it?);
- workshop dates and seats (omit, or replace with engagement tiers);
- 50 reviews (omit, or replace with case-study proof);
- a proof row ("4.9 Google rating" style: are there verifiable Grow Spark numbers?);
- a hero video (does one exist?).

Your global rules say "do not rewrite marketing copy", so any new copy these sections need must come from you.

**f. `CLAUDE.md` accuracy.** Its forms section is out of date. Should I update it in a later, separate change?

### H-3. Technical limitations and risks

- **Global CSS:** `body { overflow-x: hidden }` is already set. The reference's clipped oversized headings (FAQ at ≤390, Founders at 360) must **not** be reproduced; use `clamp()` sizes that fit.
- **Scroll reveal:** the reference has no scroll reveal, but Grow Spark's `[data-reveal]` system applies site-wide. The recommendation is to keep it for brand consistency, used sparingly.
- **Smooth scroll:** the reference jumps instantly to `#call`. Grow Spark's `initAnchorLinks` will smooth-scroll through Lenis with a 96px offset. The recommendation is to keep Grow Spark's behaviour.
- **Client components:** the ≤991px "Show all" behaviour must live in `components/effects/` (DOM-driven, no-op when absent, returns a cleanup), not in a new client section component, per the architecture rules. The server should render all cards visible, and JS should collapse them.
- **Third-party embeds:** any iframe (Calendly, iClosed and similar) adds third-party cookies. Grow Spark currently has no consent banner, so adding one would require it.

---

## I. Implementation plan

The plan is broken into small, testable tasks. Per your global rules, each page-level milestone stops for approval. It assumes the defaults in §H-2: a new route, global chrome and Grow Spark tokens.

1. **Confirm the §H-2 decisions**, and confirm what the live target URL serves.
2. **Scaffold the route.** Create `app/(site)/growspark-transformation-framework/page.tsx` with `metadata` (canonical `/growspark-transformation-framework/`), `<main id="main" className="pt-24 …">` and a page-scope class (e.g. `.gstf`).
   - *Test:* `npm run typecheck`; the route renders; the canonical ends in `/`.
3. **Add page-scoped styles.** Put them in a new `styles/landing.css` imported from `app/globals.css`, or in page-scoped classes in `base.css`, with every rule under `.gstf`. Add any new tokens to `tokens.css`: CTA height 70px, display clamp sizes, a 16px card radius (reuse `--radius-card: 12px` or add `--radius-landing`).
   - *Test:* no visual diff on `/`, `/framework/` or `/strategy/`.
4. **Hero.** Build the centred stack: eyebrow, H1, lede, media slot, full-width CTA and proof row.
   - *Test:* screenshots at 1440, 1024, 768, 390 and 360; everything above the fold at 1440×900 and 390×844.
5. **Checklist + collage section.** 2 columns stacking at ≤1024.
   - *Test:* breakpoint screenshots.
6. **Phases section (the "constraints" pattern).** Sticky or static statement on the left and 5 bordered numbered cards on the right.
   - *Test:* stacking at ≤768.
7. **Leadership band + letter card.** Gradient band in brand colours; the letter card becomes a white rounded card at ≤991.
   - *Test:* no overflow at 360.
8. **Form section (`#assessment` / `#call`).** Qualification copy, industries grid, and the embedded existing form component posting to the chosen endpoint.
   - *Test:* submit against a local build with a test DB, or verify that validation errors render. **No production submissions.**
9. **Proof grid.** Case-study cards in a 3-column grid, with the ≤991 "Show all" module in `components/effects/` (the server renders everything visible; JS collapses).
   - *Test:* JS disabled shows all cards; JS enabled at 390 shows 9 plus the button.
10. **FAQ.** Native `<details>` in 2 columns, with a CSS-only open-state icon.
    - *Test:* keyboard toggling with Enter/Space; works without JS.
11. **Wire the CTA anchors.** Three CTAs to the form id.
    - *Test:* Lenis smooth scroll lands with the header offset.
12. **Navigation and sitemap touchpoints**, per the §H-2a decision: a redirect or link updates.
    - *Test:* `verify-chrome.mjs` on the new route.
13. **QA pass** against the §J checklist; then stop for approval.

---

## J. Final verification checklist

**Visual fidelity**
- [ ] Section order and proportions match the §A and §G mapping at 1440 (compare side-by-side screenshots).
- [ ] Hero stack spacing: eyebrow→H1 ≈ 8px, H1→sub ≈ 16px, sub→media ≈ 16px, media→CTA ≈ 16px, CTA→proof ≈ 24–34px.
- [ ] CTA is 70px tall, full container width in the hero and FAQ, 8px radius (or the brand-mapped equivalent).
- [ ] Type uses `clamp()`; no heading overflows or is clipped at 360px.
- [ ] Only Grow Spark copy and assets appear; no Acquisition.com text, image, video, logo or review.

**Responsiveness (1440 / 1024 / 768 / 390 / 360)**
- [ ] `document.documentElement.scrollWidth === innerWidth` at every width.
- [ ] 2-column sections stack at the breakpoints specified in §B.
- [ ] Mobile gutters are consistent (16–20px) in every section, unlike the reference's 45px FAQ gutter.
- [ ] Media keeps 16:9 and never exceeds its container.

**Accessibility**
- [ ] One `h1`; heading levels are sequential.
- [ ] CTA contrast ≥ 4.5:1; focus-visible outline on every interactive element.
- [ ] `<details>` FAQ is operable by keyboard; the icon is `aria-hidden`.
- [ ] "Show all" is a `<button>` with an accessible name; focus is not lost after expanding.
- [ ] Any video has captions and pause control and never autoplays with sound; `prefers-reduced-motion` is honoured by reveals.

**Forms**
- [ ] The embedded form posts to the agreed endpoint with a trailing slash.
- [ ] Validation, error and success states render.
- [ ] No secrets in client chunks (`python scripts/verify-seo.py`).
- [ ] Payment is triggered only if `/api/strategy-session` was the chosen endpoint.

**Routing and SEO**
- [ ] `/growspark-transformation-framework/` returns 200 with a canonical ending in `/`; the unslashed URL 308-redirects to it.
- [ ] `/framework/` behaves as decided (unchanged, or redirected).
- [ ] Nav and footer current-page highlighting is correct.

**Production build**
- [ ] `npm ci && npm run typecheck && npm run build` succeeds.
- [ ] `npm run test` passes.
- [ ] `node scripts/verify-chrome.mjs <base> /growspark-transformation-framework/` passes.
- [ ] The Swiper chunk is not requested on the new route; no console errors; the Strict Mode remount (dev) creates no duplicate Lenis or ScrollTriggers.

---

## Files that would need modification

This assumes the defaults in §H-2.

**New files**
- `app/(site)/growspark-transformation-framework/page.tsx`: the page.
- `components/sections/landing/*.tsx` (optional): server section components, if the page is split up.
- `components/effects/showMore.ts`: the ≤991 "Show all" behaviour.
- `styles/landing.css` (optional): page-scoped styles.

**Modified files**
- `components/effects/SiteEffects.tsx`: register `showMore`.
- `app/globals.css`: import `landing.css`, if it is created.
- `styles/tokens.css`: only for new design values.

**Only under non-default decisions**
- `app/(landing)/layout.tsx`: a new root layout, only if nav-less chrome is chosen.
- `next.config.ts`: `redirects()`, only if `/framework/` is redirected.
- `components/layout/navLinks.ts` and `components/layout/Footer.tsx`: only if the nav "Our Framework" link moves to the new URL.
- `app/(site)/framework/page.tsx`: only if the existing page is replaced in place.
- `CLAUDE.md`: only if you approve correcting the out-of-date forms section.
