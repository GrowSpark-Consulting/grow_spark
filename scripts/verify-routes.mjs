/**
 * Route-by-route parity check between the original Vite site and the Next.js
 * migration.
 *
 * For every route it loads both implementations in a real browser (so the old
 * site's runtime work — lucide icon injection in particular — has actually
 * run), then compares the <main> subtree: element sequence, every attribute,
 * normalised text, and metadata. Anything that differs is printed rather than
 * summarised, because on a behaviour-preserving migration a diff is the finding.
 *
 *   node scripts/verify-routes.mjs <originalBase> <nextBase>
 */
import { chromium } from 'playwright';

const ORIGINAL = process.argv[2] || 'http://localhost:5173';
const NEXT = process.argv[3] || 'http://localhost:3000';

const ROUTES = [
  '/alliances/', '/careers/', '/founder/', '/framework/', '/industries/',
  '/leadership/', '/strategy/',
  '/rnd/', '/rnd/ai-value-gap/', '/rnd/before-the-restaurant/',
  '/rnd/founder-dependency-index/', '/rnd/margin-architecture/',
  '/rnd/revenue-without-profit/',
  '/solutions/customer-experience/', '/solutions/growth-has-stalled/',
  '/solutions/launch-new-business/', '/solutions/leadership-alignment/',
  '/solutions/modernise-your-business/', '/solutions/operations-are-inefficient/',
  '/solutions/premium-brand/', '/solutions/profitability/',
  '/solutions/scalable-systems/',
];

const snapshot = () => {
  const main = document.querySelector('main');
  if (!main) return null;
  const seq = [];
  const walk = (el, depth) => {
    const attrs = [...el.attributes]
      .filter((a) => a.name !== 'data-lucide')
      .map((a) => {
        // reveal.js drives [data-reveal] blocks with GSAP, which writes
        // transform/opacity inline and clears them to style="" afterwards.
        // Animations are Phase 8, so strip GSAP-owned declarations from the
        // comparison; anything the author wrote (font-size, top) survives and
        // any difference in it is still reported.
        if (a.name !== 'style') return a;
        const GSAP_OWNED = /^(translate|rotate|scale|transform|transform-origin|perspective|opacity|will-change|visibility)$/;
        const kept = a.value
          .split(';')
          .map((d) => d.trim())
          .filter(Boolean)
          .map((d) => {
            const i = d.indexOf(':');
            return [d.slice(0, i).trim().toLowerCase(), d.slice(i + 1).trim()];
          })
          .filter(([prop]) => !GSAP_OWNED.test(prop))
          // Once GSAP touches an element the browser re-serialises the whole
          // attribute ("top:28px" -> "top: 28px"), so normalise spacing and
          // order before comparing what the author actually wrote.
          .map(([prop, val]) => `${prop}: ${val}`)
          .sort();
        return { name: 'style', value: kept.join('; ') };
      })
      .filter((a) => !(a.name === 'style' && a.value.trim() === ''))
      .map((a) => `${a.name}="${a.value.replace(/\s+/g, ' ').trim()}"`)
      .sort()
      .join(' ');
    seq.push(`${depth}|${el.tagName.toLowerCase()}|${attrs}`);
    for (const c of el.children) walk(c, depth + 1);
  };
  walk(main, 0);
  return {
    seq,
    elements: main.querySelectorAll('*').length,
    text: (main.textContent || '').replace(/\s+/g, ' ').trim(),
    links: [...main.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')),
    headings: [...main.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(
      (h) => `${h.tagName}:${(h.textContent || '').replace(/\s+/g, ' ').trim()}`,
    ),
    forms: [...main.querySelectorAll('form')].map(
      (f) => `${f.getAttribute('method')} ${f.getAttribute('action')}`,
    ),
    fields: [...main.querySelectorAll('input,textarea,select')].map(
      (i) => `${i.tagName}:${i.getAttribute('type') || ''}:${i.getAttribute('name') || ''}:${i.id}`,
    ),
  };
};

const head = () => ({
  title: document.title,
  description: document.querySelector('meta[name="description"]')?.content ?? null,
  robots: document.querySelector('meta[name="robots"]')?.content ?? null,
  canonical: document.querySelector('link[rel="canonical"]')?.href ?? null,
  ogTitle: document.querySelector('meta[property="og:title"]')?.content ?? null,
  ogDesc: document.querySelector('meta[property="og:description"]')?.content ?? null,
  ogUrl: document.querySelector('meta[property="og:url"]')?.content ?? null,
  ogType: document.querySelector('meta[property="og:type"]')?.content ?? null,
  ogSite: document.querySelector('meta[property="og:site_name"]')?.content ?? null,
  twCard: document.querySelector('meta[name="twitter:card"]')?.content ?? null,
  twTitle: document.querySelector('meta[name="twitter:title"]')?.content ?? null,
  twDesc: document.querySelector('meta[name="twitter:description"]')?.content ?? null,
});

const browser = await chromium.launch({ channel: 'msedge' });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

let failed = 0;
const problems = [];

for (const route of ROUTES) {
  const consoleErrors = [];
  const pageA = await ctx.newPage();
  const pageB = await ctx.newPage();
  pageB.on('pageerror', (e) => consoleErrors.push('pageerror: ' + e.message));
  pageB.on('console', (m) => {
    if (m.type() === 'error') consoleErrors.push('console: ' + m.text());
  });

  await pageA.goto(ORIGINAL + route, { waitUntil: 'networkidle' });
  await pageB.goto(NEXT + route, { waitUntil: 'networkidle' });

  const [a, b] = [await pageA.evaluate(snapshot), await pageB.evaluate(snapshot)];
  const [ha, hb] = [await pageA.evaluate(head), await pageB.evaluate(head)];

  const issues = [];
  if (!a || !b) issues.push('missing <main>');
  else {
    if (a.elements !== b.elements) issues.push(`element count ${a.elements} -> ${b.elements}`);
    if (a.text !== b.text) {
      let i = 0;
      while (i < a.text.length && a.text[i] === b.text[i]) i++;
      issues.push(`text differs at char ${i}\n        orig: ...${a.text.slice(Math.max(0, i - 50), i + 60)}...\n        next: ...${b.text.slice(Math.max(0, i - 50), i + 60)}...`);
    }
    if (JSON.stringify(a.links) !== JSON.stringify(b.links)) issues.push('links differ');
    if (JSON.stringify(a.headings) !== JSON.stringify(b.headings)) issues.push('headings differ');
    if (JSON.stringify(a.forms) !== JSON.stringify(b.forms)) {
      issues.push(`forms differ: ${JSON.stringify(a.forms)} -> ${JSON.stringify(b.forms)}`);
    }
    if (JSON.stringify(a.fields) !== JSON.stringify(b.fields)) issues.push('form fields differ');
    const n = Math.max(a.seq.length, b.seq.length);
    const seqDiffs = [];
    for (let i = 0; i < n; i++) {
      if (a.seq[i] !== b.seq[i]) {
        seqDiffs.push(`        [${i}]\n          orig: ${a.seq[i] ?? '(none)'}\n          next: ${b.seq[i] ?? '(none)'}`);
        if (seqDiffs.length >= 3) break;
      }
    }
    if (seqDiffs.length) issues.push('DOM sequence differs:\n' + seqDiffs.join('\n'));
  }
  for (const k of Object.keys(ha)) {
    if (k === 'canonical') {
      // The original serves canonical from the production domain; compare paths.
      const pa = ha[k] ? new URL(ha[k]).pathname : null;
      const pb = hb[k] ? new URL(hb[k]).pathname : null;
      if (pa !== pb) issues.push(`canonical path ${pa} -> ${pb}`);
      continue;
    }
    if (ha[k] !== hb[k]) issues.push(`meta.${k}\n        orig: ${ha[k]}\n        next: ${hb[k]}`);
  }
  if (consoleErrors.length) issues.push('console errors: ' + consoleErrors.slice(0, 3).join(' | '));

  if (issues.length) {
    failed++;
    problems.push({ route, issues });
    console.log(`  FAIL  ${route}`);
    issues.forEach((i) => console.log(`        - ${i}`));
  } else {
    console.log(`  PASS  ${route}  (${a.elements} elements, ${a.links.length} links)`);
  }

  await pageA.close();
  await pageB.close();
}

await browser.close();
console.log(`\n  ${ROUTES.length - failed}/${ROUTES.length} routes match the original.`);
process.exit(failed ? 1 : 0);
