import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * The public, indexable routes of the site, in navigation order.
 *
 * This list is deliberately explicit rather than derived from a filesystem
 * walk of app/, because not every route file is a page a crawler should be
 * pointed at. Deliberate exclusions:
 *
 *   - /payment/success/  — transactional confirmation page; it already ships
 *                          `robots: { index: false, follow: false }` and is
 *                          force-dynamic. Listing a noindex URL in a sitemap
 *                          is a Search Console warning.
 *   - /api/*             — route handlers, not pages.
 *   - /privacy/, /terms/, /cookie-policy/
 *                        — the footer links to these on all 27 pages, but the
 *                          routes do not exist yet (documented in CLAUDE.md).
 *                          They 404, so they must not be listed here. Add them
 *                          when the pages land.
 *
 * Every entry below has a matching `app/**\/page.tsx` that exports
 * `robots: { index: true, follow: true }` and a canonical identical to the
 * path used here. The trailing slashes are required: `trailingSlash: true` in
 * next.config.ts means `/about` 301s to `/about/`, and a sitemap must never
 * list a redirecting URL.
 *
 * `__tests__/sitemap.test.ts` enforces all of that, so this list cannot
 * silently drift out of sync with the routes.
 */
const ROUTES = [
  '/',
  '/about/',
  '/framework/',
  '/solutions/',
  '/solutions/growth-has-stalled/',
  '/solutions/operations-are-inefficient/',
  '/solutions/profitability/',
  '/solutions/scalable-systems/',
  '/solutions/launch-new-business/',
  '/solutions/modernise-your-business/',
  '/solutions/customer-experience/',
  '/solutions/leadership-alignment/',
  '/solutions/premium-brand/',
  '/industries/',
  '/case-studies/',
  '/rnd/',
  '/rnd/ai-value-gap/',
  '/rnd/before-the-restaurant/',
  '/rnd/founder-dependency-index/',
  '/rnd/margin-architecture/',
  '/rnd/revenue-without-profit/',
  '/leadership/',
  '/founder/',
  '/alliances/',
  '/careers/',
  '/strategy/',
  '/contact/',
] as const;

/** The `page.tsx` backing a route, relative to the repo root. */
function pageFileFor(route: string): string {
  const segment = route === '/' ? '(home)' : path.posix.join('(site)', route);
  return path.posix.join('app', segment, 'page.tsx');
}

/**
 * `<lastmod>` comes from the page's own last commit date — a real modification
 * date, never a synthesised one. Three cases produce no `<lastmod>` at all,
 * which is valid and honest, rather than a fabricated timestamp:
 *
 *   - git is unavailable (a tarball deploy rather than a git clone),
 *   - the clone is shallow (`.git/shallow`), where every file would collapse
 *     onto the single fetched commit's date,
 *   - the file has no commit yet.
 *
 * Resolved once per build: this route is static, so the work happens at build
 * time and never on a request.
 */
function lastModified(): (route: string) => Date | undefined {
  const root = process.cwd();

  if (!existsSync(path.join(root, '.git')) || existsSync(path.join(root, '.git', 'shallow'))) {
    return () => undefined;
  }

  return (route) => {
    try {
      const iso = execFileSync(
        'git',
        ['log', '-1', '--format=%cI', '--', pageFileFor(route)],
        { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
      ).trim();
      if (!iso) return undefined;
      const date = new Date(iso);
      return Number.isNaN(date.getTime()) ? undefined : date;
    } catch {
      return undefined;
    }
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const resolve = lastModified();

  // No <changefreq> or <priority>: Google ignores both, and a stale
  // hand-maintained priority column is worse than none.
  return ROUTES.map((route) => ({
    url: new URL(route, SITE_URL).href,
    lastModified: resolve(route),
  }));
}
