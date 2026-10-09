import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * Every static page that shows a breadcrumb trail also declares it as a
 * BreadcrumbList via <BreadcrumbJsonLd>. Structured data that disagrees with
 * the visible page is a Search Console error, so this compares the two in each
 * page's source: same labels, same links, same order, current page last at
 * the page's own canonical.
 *
 * The blog post route is skipped — its trail is built from CMS data, not
 * literals — and so is not-found.tsx, which is not an indexable page.
 */

const APP = path.join(process.cwd(), 'app');

function pageFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return entry.name === '__tests__' || entry.name === 'api' || entry.name.startsWith('[')
        ? []
        : pageFiles(full);
    }
    return entry.name === 'page.tsx' ? [full] : [];
  });
}

/** JSX text → plain text: `{' '}` spacers dropped, entities decoded, whitespace collapsed. */
function text(jsx: string): string {
  return jsx
    .replace(/\{'\s*'\}/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&rsquo;/g, '’')
    .replace(/\s+/g, ' ')
    .trim();
}

function visibleTrail(source: string, canonical: string): [string, string][] {
  const ol = source.match(/<ol className="breadcrumb">([\s\S]*?)<\/ol>/)![1];
  const links = [...ol.matchAll(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map(
    ([, href, label]) => [text(label), href] as [string, string],
  );
  const current = ol.match(/<span aria-current="page">([\s\S]*?)<\/span>/)![1];
  return [...links, [text(current), canonical]];
}

function declaredTrail(source: string): [string, string][] {
  const block = source.match(/<BreadcrumbJsonLd\s+items=\{\[([\s\S]*?)\]\}\s*\/>/)![1];
  return [...block.matchAll(/\['([^']*)', '([^']*)'\]/g)].map(
    ([, label, href]) => [label, href] as [string, string],
  );
}

const pages = pageFiles(APP)
  .map((file) => ({ file, source: readFileSync(file, 'utf8') }))
  .filter(({ source }) => source.includes('className="breadcrumb"'));

describe('breadcrumb structured data', () => {
  it('finds pages with breadcrumbs', () => {
    expect(pages.length).toBeGreaterThan(0);
  });

  for (const { file, source } of pages) {
    const name = path.relative(APP, file).replace(/\\/g, '/');

    it(`${name} declares the trail it shows`, () => {
      // The blog index builds its trail inline like the static pages do.
      const canonical = source.match(/canonical: ["']([^"']+)["']/)![1];
      expect(source, 'missing <BreadcrumbJsonLd>').toContain('<BreadcrumbJsonLd');
      expect(declaredTrail(source)).toEqual(visibleTrail(source, canonical));
    });
  }
});
