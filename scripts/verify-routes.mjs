/**
 * Static parity check between the original Vite site and the Next.js migration.
 *
 * Both sides are loaded with JavaScript DISABLED, so what is compared is the
 * markup each build actually ships. That is the right comparison for this
 * migration and it removes every runtime exclusion the earlier post-JS version
 * needed: GSAP never writes its transform/opacity styles, Swiper never
 * decorates the hero, and booking-tabs.js never adds its roving tabindex, so
 * none of them have to be filtered out and a real markup difference can no
 * longer hide behind a normalisation rule.
 *
 * Runtime behaviour is not this script's job — scripts/verify-chrome.mjs
 * drives the interactive chrome, and per-phase behaviour tests cover the rest.
 *
 * The single substitution below is the one deliberate markup change the
 * migration makes, so it is canonicalised rather than reported 78 times.
 *
 *   node scripts/verify-routes.mjs <originalBase> <nextBase>
 */
import { chromium } from 'playwright';

const ORIGINAL = process.argv[2] || 'http://localhost:5173';
const NEXT = process.argv[3] || 'http://localhost:3000';

const ROUTES = [
  // The five include-heavy routes, which compose the section components.
  '/', '/about/', '/contact/', '/solutions/', '/case-studies/',
  // The 22 simple routes.
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

  // lucide 0.469 renamed code-2 to code-xml and kept Code2 as an alias for the
  // same glyph. The old runtime names the class from the markup (lucide-code-2)
  // while lucide-react names it from the current icon (lucide-code-xml). Same
  // paths, and no CSS selects either class.
  const ICON_ALIASES = { 'code-xml': 'code-2' };

  /**
   * The old site ships <i data-lucide="x"> and swaps it for an <svg> at
   * runtime; the migration renders the <svg> directly. With JS off the two
   * sides legitimately differ in tag, so both collapse to one token carrying
   * the icon name and whatever classes the author put on the element.
   */
  const iconToken = (el) => {
    const tag = el.tagName.toLowerCase();
    if (tag === 'i' && el.hasAttribute('data-lucide')) {
      const name = el.getAttribute('data-lucide');
      const extra = (el.getAttribute('class') || '').split(/\s+/).filter(Boolean);
      return { name, extra };
    }
    if (tag === 'svg' && (el.getAttribute('class') || '').includes('lucide-')) {
      const cls = (el.getAttribute('class') || '').split(/\s+/).filter(Boolean);
      const named = cls.find((c) => c.startsWith('lucide-'));
      const name = named ? named.slice('lucide-'.length) : '';
      const extra = cls.filter((c) => c !== 'lucide' && !c.startsWith('lucide-'));
      return { name, extra };
    }
    return null;
  };

  const seq = [];
  const walk = (el, depth) => {
    const icon = iconToken(el);
    if (icon) {
      const name = ICON_ALIASES[icon.name] || icon.name;
      seq.push(`${depth}|icon:${name}|${icon.extra.sort().join(' ')}`);
      return; // the <svg>'s paths have no <i> counterpart
    }
    const attrs = [...el.attributes]
      .map((a) => {
        // A style attribute is a set of declarations, not a string. The source
        // writes "font-family:var(--font-display);" with a trailing semicolon;
        // React serialises the same object without one. Compare the parsed
        // declarations so formatting cannot masquerade as a style change.
        if (a.name !== 'style') return `${a.name}="${a.value.replace(/\s+/g, ' ').trim()}"`;
        const decls = a.value
          .split(';')
          .map((d) => d.trim())
          .filter(Boolean)
          .map((d) => {
            const i = d.indexOf(':');
            return `${d.slice(0, i).trim().toLowerCase()}: ${d.slice(i + 1).trim()}`;
          })
          .sort();
        return `style="${decls.join('; ')}"`;
      })
      .sort()
      .join(' ');
    seq.push(`${depth}|${el.tagName.toLowerCase()}|${attrs}`);
    for (const c of el.children) walk(c, depth + 1);
  };
  walk(main, 0);

  return {
    seq,
    elements: seq.length,
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
    jsonLd: [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) =>
      JSON.stringify(JSON.parse(s.textContent)),
    ),
  };
};

const head = () => ({
  title: document.title,
  description: document.querySelector('meta[name="description"]')?.content ?? null,
  robots: document.querySelector('meta[name="robots"]')?.content ?? null,
  canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null,
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
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  javaScriptEnabled: false,
});

let failed = 0;

for (const route of ROUTES) {
  const pageA = await ctx.newPage();
  const pageB = await ctx.newPage();
  await pageA.goto(ORIGINAL + route, { waitUntil: 'domcontentloaded' });
  await pageB.goto(NEXT + route, { waitUntil: 'domcontentloaded' });

  const [a, b] = [await pageA.evaluate(snapshot), await pageB.evaluate(snapshot)];
  const [ha, hb] = [await pageA.evaluate(head), await pageB.evaluate(head)];

  const issues = [];
  if (!a || !b) {
    issues.push('missing <main>');
  } else {
    if (a.elements !== b.elements) issues.push(`node count ${a.elements} -> ${b.elements}`);
    if (a.text !== b.text) {
      let i = 0;
      while (i < a.text.length && a.text[i] === b.text[i]) i++;
      issues.push(
        `text differs at char ${i}\n        orig: ...${a.text.slice(Math.max(0, i - 50), i + 60)}...\n        next: ...${b.text.slice(Math.max(0, i - 50), i + 60)}...`,
      );
    }
    for (const [label, key] of [['links', 'links'], ['headings', 'headings'],
                                ['forms', 'forms'], ['form fields', 'fields'],
                                ['JSON-LD', 'jsonLd']]) {
      if (JSON.stringify(a[key]) !== JSON.stringify(b[key])) {
        issues.push(`${label} differ:\n        orig: ${JSON.stringify(a[key]).slice(0, 200)}\n        next: ${JSON.stringify(b[key]).slice(0, 200)}`);
      }
    }
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
      const pa = ha[k] ? new URL(ha[k], ORIGINAL).pathname : null;
      const pb = hb[k] ? new URL(hb[k], NEXT).pathname : null;
      if (pa !== pb) issues.push(`canonical path ${pa} -> ${pb}`);
      continue;
    }
    if (ha[k] !== hb[k]) issues.push(`meta.${k}\n        orig: ${ha[k]}\n        next: ${hb[k]}`);
  }

  if (issues.length) {
    failed++;
    console.log(`  FAIL  ${route}`);
    issues.forEach((i) => console.log(`        - ${i}`));
  } else {
    console.log(`  PASS  ${route}  (${a.elements} nodes, ${a.links.length} links)`);
  }

  await pageA.close();
  await pageB.close();
}

await browser.close();
console.log(`\n  ${ROUTES.length - failed}/${ROUTES.length} routes match the original.`);
process.exit(failed ? 1 : 0);
