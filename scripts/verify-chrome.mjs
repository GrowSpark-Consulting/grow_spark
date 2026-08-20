import { chromium } from 'playwright';

const BASE = process.argv[2] || 'http://localhost:3000';
// Route to exercise the chrome on. Defaults to '/', but any migrated route
// works and a content-bearing one is preferable: the sticky-header assertions
// need a page tall enough to actually scroll.
const PATH = process.argv[3] || '/';
const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];

const browser = await chromium.launch({ channel: 'msedge' });
let failures = 0;
const note = (ok, msg) => {
  if (!ok) failures++;
  console.log(`      ${ok ? 'PASS' : 'FAIL'}  ${msg}`);
};

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => {
    if (m.type() === 'error' || m.type() === 'warning') errors.push(`${m.type()}: ${m.text()}`);
  });
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));

  await page.goto(BASE + PATH, { waitUntil: 'networkidle' });
  console.log(`\n  === ${vp.name} (${vp.width}x${vp.height}) ===`);

  const isDesktop = vp.width >= 1024; // Tailwind lg breakpoint

  // --- sticky header ---
  const headerHasScrolled = () => page.$eval('#site-header', (el) => el.classList.contains('is-scrolled'));
  note((await headerHasScrolled()) === false, 'header has no is-scrolled at top');
  await page.evaluate(() => window.scrollTo(0, 200));
  await page.waitForTimeout(150);
  note((await headerHasScrolled()) === true, 'header gains is-scrolled past 48px');
  await page.evaluate(() => window.scrollTo(0, 10));
  await page.waitForTimeout(150);
  note((await headerHasScrolled()) === false, 'header drops is-scrolled under 48px');

  if (isDesktop) {
    // --- mega menu ---
    const panel = page.locator('#mega-who-we-are');
    const trigger = page.locator('[data-mega-trigger="who-we-are"]');
    const cls = () => panel.getAttribute('class');
    note((await cls()).includes('invisible'), 'mega panel starts closed');
    note((await trigger.getAttribute('aria-expanded')) === 'false', 'trigger aria-expanded=false');

    await trigger.hover();
    await page.waitForTimeout(120);
    note((await cls()).includes('opacity-100') && (await cls()).includes('visible'), 'hover opens mega panel');
    note((await trigger.getAttribute('aria-expanded')) === 'true', 'trigger aria-expanded=true when open');
    const chevron = await page.$eval('[data-mega-chevron]', (el) => el.getAttribute('class'));
    note(chevron.includes('rotate-180'), 'chevron rotates when open');

    // click while open is intentionally a no-op (matches nav.js)
    await trigger.click();
    await page.waitForTimeout(80);
    note((await cls()).includes('opacity-100'), 'click while open is a no-op (matches nav.js)');

    // mouse away -> hides after 150ms delay
    await page.mouse.move(5, 400);
    await page.waitForTimeout(90);
    const midway = await cls();
    await page.waitForTimeout(200);
    note(midway.includes('opacity-100') && (await cls()).includes('invisible'), 'panel hides after ~150ms delay, not instantly');

    // Escape closes
    await trigger.hover();
    await page.waitForTimeout(120);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(80);
    note((await cls()).includes('invisible'), 'Escape closes mega panel');

    // outside click closes
    await trigger.hover();
    await page.waitForTimeout(120);
    await page.mouse.click(5, 400);
    await page.waitForTimeout(80);
    note((await cls()).includes('invisible'), 'outside click closes mega panel');

    note(await page.locator('#nav-toggle').isHidden(), 'hamburger hidden at lg');
    note(await page.locator('nav[aria-label="Primary"]').isVisible(), 'desktop nav visible at lg');
  } else {
    note(await page.locator('#nav-toggle').isVisible(), 'hamburger visible below lg');
    note(await page.locator('nav[aria-label="Primary"]').isHidden(), 'desktop nav hidden below lg');

    // --- mobile drawer ---
    const drawer = page.locator('#mobile-drawer');
    const panel = page.locator('[data-drawer-panel]');
    note((await drawer.getAttribute('class')).includes('invisible'), 'drawer starts invisible');

    await page.locator('#nav-toggle').click();
    await page.waitForTimeout(600);
    note(!(await drawer.getAttribute('class')).includes('invisible'), 'drawer visible after open');
    note((await panel.getAttribute('class')).includes('translate-x-0'), 'panel slid in');
    note((await page.locator('#nav-toggle').getAttribute('aria-expanded')) === 'true', 'toggle aria-expanded=true');
    const locked = await page.$eval('html', (el) => el.classList.contains('overflow-hidden'));
    note(locked, 'scroll locked on <html> while open');
    const focused = await page.evaluate(() => document.activeElement?.id);
    note(focused === 'drawer-close', 'focus moved to close button');

    // focus trap
    await page.keyboard.press('Shift+Tab');
    const trapped = await page.evaluate(() => {
      const panel = document.querySelector('[data-drawer-panel]');
      return panel?.contains(document.activeElement);
    });
    note(trapped, 'Shift+Tab keeps focus inside drawer');

    // Escape closes
    await page.keyboard.press('Escape');
    await page.waitForTimeout(600);
    note((await drawer.getAttribute('class')).includes('invisible'), 'Escape closes drawer (invisible re-applied after 450ms)');
    const unlocked = await page.$eval('html', (el) => !el.classList.contains('overflow-hidden'));
    note(unlocked, 'scroll unlocked after close');
    const refocused = await page.evaluate(() => document.activeElement?.id);
    note(refocused === 'nav-toggle', 'focus returned to toggle');

    // backdrop click closes
    await page.locator('#nav-toggle').click();
    await page.waitForTimeout(600);
    await page.locator('[data-drawer-backdrop]').click({ position: { x: 5, y: 400 } });
    await page.waitForTimeout(600);
    note((await drawer.getAttribute('class')).includes('invisible'), 'backdrop click closes drawer');

    // native details accordion still works
    await page.locator('#nav-toggle').click();
    await page.waitForTimeout(600);
    await page.locator('[data-drawer-panel] .drawer-accordion summary').click();
    await page.waitForTimeout(120);
    const open = await page.$eval('[data-drawer-panel] .drawer-accordion', (el) => el.open);
    note(open, 'Who We Are accordion opens (native <details>)');
  }

  // --- current page highlighting ---
  // Expected count is derived from the nav itself, not hardcoded: only routes
  // that appear in the primary/drawer link lists get highlighted. /about/ is
  // footer-only and /contact/ is a mega-link, and markCurrentPage never
  // targeted those, so 0 is correct there — the original behaves the same.
  const highlight = await page.evaluate(() => {
    const norm = (p) => p.replace(/index\.html$/, '').replace(/\/+$/, '') || '/';
    const here = norm(location.pathname);
    const links = [...document.querySelectorAll('.site-nav__link, .drawer-link')];
    return {
      expected: links.filter((a) => norm(new URL(a.href, location.href).pathname) === here).length,
      actual: links.filter((a) => a.classList.contains('is-current')).length,
    };
  });
  note(
    highlight.actual === highlight.expected,
    `is-current on every matching nav link (${highlight.actual}/${highlight.expected})`,
  );

  // --- footer ---
  note(await page.locator('footer a[href="/privacy/"]').count() === 1, 'broken /privacy/ link preserved');
  note(await page.locator('footer a[href="/terms/"]').count() === 1, 'broken /terms/ link preserved');
  note(await page.locator('footer a[href="/cookie-policy/"]').count() === 1, 'broken /cookie-policy/ link preserved');

  // --- horizontal overflow ---
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  note(overflow <= 0, `no horizontal overflow (${overflow}px)`);

  // --- console / hydration ---
  const hydration = errors.filter((e) => /hydrat|did not match|server.*client/i.test(e));
  note(hydration.length === 0, `no hydration errors (${hydration.length})`);
  note(errors.length === 0, `no console errors/warnings (${errors.length})`);
  if (errors.length) errors.slice(0, 6).forEach((e) => console.log('        > ' + e.slice(0, 160)));

  await ctx.close();
}

await browser.close();
console.log(`\n  TOTAL FAILURES: ${failures}`);
process.exit(failures ? 1 : 0);
