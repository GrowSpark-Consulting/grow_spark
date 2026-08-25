import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import sitemap from '@/app/sitemap';
import { SITE_URL } from '@/lib/site';

/**
 * The sitemap is a hand-maintained list, so these tests are the thing that
 * keeps it honest: every URL must resolve to a real page that is indexable,
 * canonical, and reachable without a redirect. A page added, removed, renamed
 * or switched to noindex without a matching sitemap edit fails here.
 */

const entries = sitemap();
const urls = entries.map((entry) => entry.url);
const paths = urls.map((url) => new URL(url).pathname);

/** app/(home)/page.tsx for '/', app/(site)/<route>/page.tsx otherwise. */
function pageFile(pathname: string): string {
  const segment = pathname === '/' ? '(home)' : path.posix.join('(site)', pathname);
  return path.join(process.cwd(), 'app', segment, 'page.tsx');
}

describe('sitemap URLs', () => {
  it('is not empty', () => {
    expect(entries.length).toBeGreaterThan(0);
  });

  it('contains no duplicates', () => {
    expect(new Set(urls).size).toBe(urls.length);
  });

  it('uses https on the canonical www host, with no query or hash', () => {
    for (const url of urls) {
      const parsed = new URL(url);
      expect(parsed.protocol).toBe('https:');
      expect(parsed.host).toBe('www.growsparkconsulting.com');
      expect(parsed.host).toBe(new URL(SITE_URL).host);
      expect(parsed.search).toBe('');
      expect(parsed.hash).toBe('');
    }
  });

  it('ends every path in a slash, so trailingSlash never redirects a listed URL', () => {
    for (const pathname of paths) {
      expect(pathname.endsWith('/')).toBe(true);
    }
  });

  it('omits API routes and the noindex payment confirmation page', () => {
    for (const pathname of paths) {
      expect(pathname.startsWith('/api/')).toBe(false);
      expect(pathname.startsWith('/payment/')).toBe(false);
    }
  });
});

describe('sitemap ↔ routes', () => {
  it('points every URL at a page that exists', () => {
    for (const pathname of paths) {
      expect(existsSync(pageFile(pathname)), `missing page for ${pathname}`).toBe(true);
    }
  });

  it('lists only pages that are indexable and self-canonical', () => {
    for (const pathname of paths) {
      const source = readFileSync(pageFile(pathname), 'utf8');
      expect(source, `${pathname} is noindex`).not.toMatch(/index:\s*false/);
      expect(source, `${pathname} canonical mismatch`).toContain(
        `canonical: "${pathname}"`,
      );
    }
  });

  it('lists every indexable page under app/', () => {
    // Walk app/ for page.tsx files and require each indexable one to appear.
    const appDir = path.join(process.cwd(), 'app');
    const listed = new Set(paths);
    const missing: string[] = [];

    const walk = (dir: string, route: string) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
          if (entry.name === '__tests__' || entry.name === 'api') continue;
          const isGroup = entry.name.startsWith('(') && entry.name.endsWith(')');
          walk(
            path.join(dir, entry.name),
            isGroup ? route : `${route}${entry.name}/`,
          );
        } else if (entry.name === 'page.tsx') {
          const source = readFileSync(path.join(dir, entry.name), 'utf8');
          const indexable = !/index:\s*false/.test(source);
          if (indexable && !listed.has(route)) missing.push(route);
        }
      }
    };

    walk(appDir, '/');
    expect(missing, `indexable pages absent from the sitemap: ${missing.join(', ')}`).toEqual([]);
  });
});
