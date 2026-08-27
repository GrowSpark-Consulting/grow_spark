/**
 * The nav link lists appear twice in the original components/nav.html — once in
 * the desktop bar and once in the mobile drawer — with different classes but
 * identical hrefs and labels. Sharing the data (not the markup) removes that
 * duplication without changing either rendering.
 */
export type NavLink = { href: string; label: string };

export const PRIMARY_LINKS: NavLink[] = [
  // No Home entry: the logo lockup to the left of this list is the link home,
  // on both the desktop bar and the mobile drawer.
  { href: '/case-studies/', label: 'Our Works' },
  { href: '/solutions/', label: 'Solutions' },
  { href: '/framework/', label: 'Our Framework' },
  { href: '/rnd/', label: 'R&D' },
  { href: '/industries/', label: 'Industries' },
];

export const WHO_WE_ARE_LINKS: NavLink[] = [
  { href: '/leadership/', label: 'Leadership' },
  { href: '/our-team/', label: 'Our Team' },
  { href: '/contact/', label: 'Contact' },
  { href: '/alliances/', label: 'Alliances' },
  { href: '/careers/', label: 'Careers' },
];

/**
 * Ported verbatim from nav.js. Routes are directory-style (/solutions/), so
 * comparison is by normalised pathname rather than by trailing segment.
 */
export function normalizePath(pathname: string): string {
  return pathname.replace(/index\.html$/, '').replace(/\/+$/, '') || '/';
}
