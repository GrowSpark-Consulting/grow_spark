/**
 * Runtime behaviour regression suite (Phase 8).
 *
 * Separate from scripts/verify-routes.mjs on purpose. That suite compares the
 * markup each build ships, with JavaScript disabled, and must stay that way.
 * This one runs with JavaScript ENABLED and checks what the scripts actually
 * do: reveal animations, counters, the framework line, parallax, Lenis,
 * ScrollTrigger, the hero carousel and video, the tab behaviours and anchor
 * links.
 *
 * Where a behaviour is observable in both implementations the original is
 * measured first and the migration is asserted against that measurement, so
 * the expectations come from the real site rather than from constants copied
 * out of the source.
 *
 *   node scripts/verify-runtime.mjs <originalBase> <nextBase>
 */
import { chromium } from 'playwright';

const ORIGINAL = process.argv[2] || 'http://localhost:5173';
const NEXT = process.argv[3] || 'http://localhost:3000';

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];

let failures = 0;
const results = [];
const check = (scope, ok, msg) => {
  if (!ok) failures++;
  results.push(`      ${ok ? 'PASS' : 'FAIL'}  [${scope}] ${msg}`);
};

const browser = await chromium.launch({ channel: 'msedge' });

/** Probe one implementation and return everything the assertions need. */
async function probe(base, route, vp, { settle = 1200 } = {}) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push('console: ' + m.text());
  });

  // Next's chunk filenames are content-hashed and never contain "swiper", so
  // the URL tells us nothing. Inspect the delivered JavaScript instead.
  const swiperChunks = [];
  const bodyChecks = [];
  page.on('response', (res) => {
    const url = res.url();
    if (!/\.js(\?|$)/.test(url) || res.status() !== 200) return;
    bodyChecks.push(
      res
        .text()
        .then((body) => {
          if (/swiper-slide-active|swiper-wrapper|Swiper/.test(body)) swiperChunks.push(url);
        })
        .catch(() => {}),
    );
  });

  await page.goto(base + route, { waitUntil: 'networkidle' });
  await page.waitForTimeout(settle);
  await Promise.all(bodyChecks);

  const data = await page.evaluate(() => {
    const reveal = document.querySelector('[data-reveal]:not([data-fw-step])');
    const counter = document.querySelector('[data-count-to]');
    const line = document.querySelector('[data-fw-line]');
    const heroText = document.querySelector('.hero-text');
    const swiperEl = document.querySelector('[data-hero-swiper]');
    const video = document.querySelector('[data-hero-video]');
    return {
      revealPresent: !!reveal,
      counterText: counter?.textContent ?? null,
      counterTarget: counter?.dataset?.countTo ?? null,
      lineScale: line ? getComputedStyle(line).transform : null,
      heroTextTransform: heroText ? getComputedStyle(heroText).transform : null,
      swiperInitialised: swiperEl ? swiperEl.classList.contains('swiper-initialized') : null,
      swiperInstances: swiperEl ? (swiperEl.swiper ? 1 : 0) : null,
      slideCount: document.querySelectorAll('.swiper-slide').length,
      bulletCount: document.querySelectorAll('.hero-pagination-fill').length,
      activeSlideIndex: swiperEl?.swiper?.activeIndex ?? null,
      videoHasSrc: video ? !!video.getAttribute('src') : null,
      videoPaused: video ? video.paused : null,
      bookingSelected: [...document.querySelectorAll('[data-booking-tabs] [data-tab]')].map(
        (t) => `${t.dataset.tab}:${t.getAttribute('aria-selected')}:${t.getAttribute('tabindex')}`,
      ),
      bookingPanelsHidden: [...document.querySelectorAll('[data-panel]')].map(
        (p) => `${p.dataset.panel}:${p.hidden}`,
      ),
      lenisPresent: document.documentElement.className.includes('lenis'),
      htmlClasses: document.documentElement.className,
    };
  });

  return { page, ctx, data, errors, swiperChunks };
}

/* ------------------------------------------------------------------ */
/* Per-viewport comparison of the animation state on the homepage      */
/* ------------------------------------------------------------------ */
for (const vp of VIEWPORTS) {
  const a = await probe(ORIGINAL, '/', vp);
  const b = await probe(NEXT, '/', vp);
  const scope = vp.name;

  // GSAP is bundled without a global in BOTH builds, so ScrollTrigger.getAll()
  // is not reachable from the page and a trigger census is impossible. What is
  // observable is the consequence of a double init, so that is what is
  // asserted: Swiper re-initialising renders a second set of pagination
  // bullets, and a duplicated Lenis or reveal shows up as leftover inline
  // styles or a stuck opacity. The Strict Mode section below exercises the
  // mount/unmount/mount path that would actually produce a duplicate.
  check(scope, b.data.lenisPresent === a.data.lenisPresent, `Lenis active (html classes "${b.data.htmlClasses}")`);
  check(
    scope,
    b.data.swiperInitialised === a.data.swiperInitialised,
    `hero Swiper initialised (${b.data.swiperInitialised})`,
  );
  check(scope, b.data.swiperInstances === 1, `exactly one Swiper instance (${b.data.swiperInstances})`);
  check(scope, b.data.slideCount === a.data.slideCount, `slide count ${a.data.slideCount} -> ${b.data.slideCount}`);
  check(
    scope,
    b.data.bulletCount === a.data.bulletCount,
    `pagination bullets ${a.data.bulletCount} -> ${b.data.bulletCount}`,
  );
  check(scope, b.data.videoHasSrc === a.data.videoHasSrc, `hero video has src (${b.data.videoHasSrc})`);
  check(scope, b.data.videoPaused === a.data.videoPaused, `hero video playing state matches (paused=${b.data.videoPaused})`);
  check(scope, b.errors.length === 0, `no console/page errors (${b.errors.length})`);
  if (b.errors.length) b.errors.slice(0, 4).forEach((e) => results.push('            > ' + e.slice(0, 170)));

  // Hero parallax: scroll into the hero's scrub range and confirm the text
  // layer has been transformed, in both implementations.
  for (const p of [a.page, b.page]) {
    await p.evaluate(() => window.scrollTo(0, 300));
    await p.waitForTimeout(500);
  }
  const [at, bt] = await Promise.all([
    a.page.evaluate(() => getComputedStyle(document.querySelector('.hero-text')).transform),
    b.page.evaluate(() => getComputedStyle(document.querySelector('.hero-text')).transform),
  ]);
  const moved = (t) => t && t !== 'none' && t !== 'matrix(1, 0, 0, 1, 0, 0)';
  check(scope, moved(bt) === moved(at), `hero parallax transforms text (orig ${moved(at)}, next ${moved(bt)})`);

  await a.ctx.close();
  await b.ctx.close();
}

/* ------------------------------------------------------------------ */
/* Reveal + counters, measured on a content-heavy route                */
/* ------------------------------------------------------------------ */
{
  const vp = VIEWPORTS[0];
  const a = await probe(ORIGINAL, '/framework/', vp);
  const b = await probe(NEXT, '/framework/', vp);
  const scope = 'framework';

  // Reveal contract: after the tween completes, clearProps must hand the
  // element back to CSS. A leftover inline opacity/transform is the bug the
  // original's clearProps exists to prevent.
  const leftovers = async (page) =>
    page.evaluate(() => {
      const els = [...document.querySelectorAll('[data-reveal]:not([data-fw-step])')];
      return els.filter((e) => /opacity|transform/.test(e.getAttribute('style') || '')).length;
    });
  for (const p of [a.page, b.page]) {
    await p.evaluate(() => window.scrollTo(0, 0));
    await p.waitForTimeout(300);
    await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await p.waitForTimeout(2500);
  }
  const [al, bl] = [await leftovers(a.page), await leftovers(b.page)];
  check(scope, bl === al, `no inline opacity/transform left after reveal (orig ${al}, next ${bl})`);

  // Everything must end up visible, whatever route the animation took.
  const hidden = async (page) =>
    page.evaluate(() => {
      const els = [...document.querySelectorAll('[data-reveal]')];
      return els.filter((e) => parseFloat(getComputedStyle(e).opacity) < 0.99).length;
    });
  const [ah, bh] = [await hidden(a.page), await hidden(b.page)];
  check(scope, bh === ah && bh === 0, `no [data-reveal] left invisible (orig ${ah}, next ${bh})`);

  // Framework line draws to full width.
  const lineScale = async (page) =>
    page.evaluate(() => {
      const l = document.querySelector('[data-fw-line]');
      if (!l) return null;
      const m = new DOMMatrixReadOnly(getComputedStyle(l).transform);
      return Math.round(m.a * 100) / 100;
    });
  const [als, bls] = [await lineScale(a.page), await lineScale(b.page)];
  check(scope, bls === als, `framework line scaleX ${als} -> ${bls}`);

  await a.ctx.close();
  await b.ctx.close();
}

/* ------------------------------------------------------------------ */
/* Counters                                                            */
/* ------------------------------------------------------------------ */
{
  const vp = VIEWPORTS[0];
  const a = await probe(ORIGINAL, '/', vp);
  const b = await probe(NEXT, '/', vp);
  const scope = 'counters';
  const finalCounts = async (page) => {
    // Every counter has its own ScrollTrigger, so the whole page has to be
    // travelled — scrolling only the first into view leaves the rest at 0 and
    // makes the assertion look like a failure when nothing is wrong.
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y <= height; y += 400) {
      await page.evaluate((v) => window.scrollTo(0, v), y);
      await page.waitForTimeout(60);
    }
    await page.waitForTimeout(2500);
    return page.evaluate(() =>
      [...document.querySelectorAll('[data-count-to]')].map(
        (e) => `${e.textContent}|${e.dataset.countTo}${e.dataset.countSuffix || ''}`,
      ),
    );
  };
  const [ac, bc] = [await finalCounts(a.page), await finalCounts(b.page)];
  check(scope, JSON.stringify(ac) === JSON.stringify(bc), `counters reach their targets (${bc.join(', ')})`);
  check(
    scope,
    bc.every((s) => s.split('|')[0] === s.split('|')[1]),
    'every counter ends exactly on its data-count-to value',
  );
  await a.ctx.close();
  await b.ctx.close();
}

/* ------------------------------------------------------------------ */
/* Swiper code-splitting: it must not load on non-hero routes          */
/* ------------------------------------------------------------------ */
{
  const vp = VIEWPORTS[0];
  const home = await probe(NEXT, '/', vp, { settle: 800 });
  const other = await probe(NEXT, '/framework/', vp, { settle: 800 });
  check(
    'code-split',
    home.swiperChunks.length > 0,
    `Swiper code is delivered on / (${home.swiperChunks.length} chunk(s))`,
  );
  check(
    'code-split',
    other.swiperChunks.length === 0,
    `Swiper code NOT delivered on /framework/ (${other.swiperChunks.length} chunk(s))`,
  );
  await home.ctx.close();
  await other.ctx.close();
}

/* ------------------------------------------------------------------ */
/* Booking tabs on /strategy/ — roving tabindex applied at runtime     */
/* ------------------------------------------------------------------ */
{
  const vp = VIEWPORTS[0];
  const a = await probe(ORIGINAL, '/strategy/', vp);
  const b = await probe(NEXT, '/strategy/', vp);
  const scope = 'booking-tabs';
  check(
    scope,
    JSON.stringify(a.data.bookingSelected) === JSON.stringify(b.data.bookingSelected),
    `initial tab state matches (${b.data.bookingSelected.join(' ')})`,
  );
  check(
    scope,
    JSON.stringify(a.data.bookingPanelsHidden) === JSON.stringify(b.data.bookingPanelsHidden),
    `initial panel visibility matches (${b.data.bookingPanelsHidden.join(' ')})`,
  );

  const clickSecond = async (page) => {
    const tabs = page.locator('[data-booking-tabs] [data-tab]');
    await tabs.nth(1).click();
    await page.waitForTimeout(200);
    return page.evaluate(() => ({
      tabs: [...document.querySelectorAll('[data-booking-tabs] [data-tab]')].map(
        (t) => `${t.dataset.tab}:${t.getAttribute('aria-selected')}:${t.getAttribute('tabindex')}`,
      ),
      panels: [...document.querySelectorAll('[data-panel]')].map((p) => `${p.dataset.panel}:${p.hidden}`),
    }));
  };
  const [a2, b2] = [await clickSecond(a.page), await clickSecond(b.page)];
  check(scope, JSON.stringify(a2) === JSON.stringify(b2), 'clicking the second tab switches panels identically');

  // Arrow-key navigation per the tablist pattern.
  const arrow = async (page) => {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);
    return page.evaluate(() =>
      [...document.querySelectorAll('[data-booking-tabs] [data-tab]')]
        .map((t) => `${t.dataset.tab}:${t.getAttribute('aria-selected')}`)
        .join(' '),
    );
  };
  const [a3, b3] = [await arrow(a.page), await arrow(b.page)];
  check(scope, a3 === b3, `ArrowRight moves selection identically (${b3})`);
  check(scope, b.errors.length === 0, `no console errors on /strategy/ (${b.errors.length})`);
  await a.ctx.close();
  await b.ctx.close();
}

/* ------------------------------------------------------------------ */
/* Anchor links route through Lenis rather than jumping                */
/* ------------------------------------------------------------------ */
{
  const vp = VIEWPORTS[0];
  const scope = 'anchor-links';
  const measure = async (base) => {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();
    await page.goto(base + '/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
    await page.evaluate(() => {
      const link = document.querySelector('a[href="/#challenges"], a[href^="/#"]');
      link?.click();
    });
    await page.waitForTimeout(120);
    const mid = await page.evaluate(() => window.scrollY);
    await page.waitForTimeout(1800);
    const end = await page.evaluate(() => window.scrollY);
    const hash = await page.evaluate(() => location.hash);
    await ctx.close();
    return { mid, end, hash };
  };
  const a = await measure(ORIGINAL);
  const b = await measure(NEXT);
  check(scope, b.hash === a.hash, `hash pushed to history (${b.hash})`);
  check(scope, b.end > 0 === a.end > 0, `scrolled to the target (orig ${a.end}, next ${b.end})`);
  // Smooth, not an instant jump: partway through the 1.2s tween the position
  // must still be short of the destination.
  check(scope, b.mid < b.end === (a.mid < a.end), `scroll is animated, not an instant jump (mid ${b.mid} < end ${b.end})`);
}

/* ------------------------------------------------------------------ */
/* Reduced motion                                                      */
/* ------------------------------------------------------------------ */
for (const base of [ORIGINAL, NEXT]) {
  const label = base === ORIGINAL ? 'orig' : 'next';
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: 'reduce',
  });
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  await page.goto(base + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  const state = await page.evaluate(() => {
    const video = document.querySelector('[data-hero-video]');
    const toggle = document.querySelector('[data-hero-play-toggle]');
    const swiperEl = document.querySelector('[data-hero-swiper]');
    return {
      lenis: document.documentElement.className.includes('lenis'),
      autoplayRunning: !!swiperEl?.swiper?.autoplay?.running,
      videoPaused: video ? video.paused : null,
      togglePressed: toggle?.getAttribute('aria-pressed') ?? null,
      revealHidden: [...document.querySelectorAll('[data-reveal]')].filter(
        (e) => parseFloat(getComputedStyle(e).opacity) < 0.99,
      ).length,
    };
  });
  results.push(`      INFO  [reduced-motion:${label}] ${JSON.stringify(state)}`);
  if (label === 'next') {
    check('reduced-motion', state.lenis === false, 'Lenis not started under prefers-reduced-motion');
    check('reduced-motion', state.autoplayRunning === false, 'Swiper autoplay disabled');
    check('reduced-motion', state.togglePressed === 'true', 'play/pause toggle reports paused');
    check('reduced-motion', state.revealHidden === 0, 'no reveal element left hidden');
    check('reduced-motion', errs.length === 0, `no page errors (${errs.length})`);
  }
  await ctx.close();
}

/* ------------------------------------------------------------------ */
/* Strict Mode: the mount/unmount/mount path that creates duplicates    */
/* ------------------------------------------------------------------ */
/*
 * The production server does not double-invoke effects, so a duplicate-init
 * bug is invisible there. `next dev` runs React Strict Mode, which mounts,
 * unmounts and remounts every effect — if cleanup were incomplete the second
 * mount would stack a second Lenis, a second set of ScrollTriggers and a
 * second Swiper on the same DOM. A re-initialised Swiper renders its
 * pagination again, so the bullet count is a direct read on whether teardown
 * actually worked.
 */
if (process.env.DEV_BASE) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
  page.on('console', (m) => {
    if (m.type() === 'error') errs.push('console: ' + m.text());
  });
  await page.goto(process.env.DEV_BASE + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  // Travel the page before counting hidden elements. Below-the-fold
  // [data-reveal] blocks legitimately sit at opacity 0 waiting for their
  // trigger — that IS the reveal mechanism — so measuring at load would just
  // count un-scrolled content. What matters after a remount is that the
  // triggers still fire, which only scrolling can show.
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y <= pageHeight; y += 400) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(70);
  }
  await page.waitForTimeout(1500);
  const state = await page.evaluate(() => {
    const swiperEl = document.querySelector('[data-hero-swiper]');
    return {
      bullets: document.querySelectorAll('.hero-pagination-fill').length,
      slides: document.querySelectorAll('.swiper-slide').length,
      wrappers: document.querySelectorAll('.swiper-wrapper').length,
      initialised: !!swiperEl?.classList.contains('swiper-initialized'),
      hasInstance: !!swiperEl?.swiper,
      lenisClasses: (document.documentElement.className.match(/lenis/g) || []).length,
      stuckHidden: [...document.querySelectorAll('[data-reveal]')].filter(
        (e) => parseFloat(getComputedStyle(e).opacity) < 0.99,
      ).length,
    };
  });
  results.push(`      INFO  [strict-mode] ${JSON.stringify(state)}`);
  check('strict-mode', state.bullets === 4, `exactly 4 pagination bullets, not doubled (${state.bullets})`);
  check('strict-mode', state.slides === 4, `exactly 4 slides, not doubled (${state.slides})`);
  check('strict-mode', state.wrappers === 1, `one swiper-wrapper (${state.wrappers})`);
  check('strict-mode', state.initialised && state.hasInstance, 'Swiper survives the remount and is live');
  check('strict-mode', state.lenisClasses === 1, `single lenis class on <html> (${state.lenisClasses})`);
  check('strict-mode', state.stuckHidden === 0, `every reveal fires after the remount (${state.stuckHidden} stuck)`);
  check('strict-mode', errs.length === 0, `no console/page errors under Strict Mode (${errs.length})`);
  if (errs.length) errs.slice(0, 5).forEach((e) => results.push('            > ' + e.slice(0, 170)));
  await ctx.close();
} else {
  results.push('      SKIP  [strict-mode] set DEV_BASE to a `next dev` origin to run this section');
}

await browser.close();
results.forEach((r) => console.log(r));
console.log(`\n  TOTAL FAILURES: ${failures}`);
process.exit(failures ? 1 : 0);
