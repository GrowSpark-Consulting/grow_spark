/**
 * Canonical site constants, lifted verbatim from the existing HTML <head>
 * blocks so metadata stays identical across the migration.
 */
export const SITE_URL = 'https://www.growsparkconsulting.com';
export const SITE_NAME = 'Grow Spark Consulting';

/**
 * The exact Google Fonts stylesheet URLs the current site requests.
 * The homepage additionally pulls Manrope 300; every other page requests
 * Open Sans only. Preserved as two distinct URLs rather than unified, because
 * unifying them would add a font download to 26 pages that don't use it.
 */
export const FONT_HREF_DEFAULT =
  'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap';
export const FONT_HREF_HOME =
  'https://fonts.googleapis.com/css2?family=Manrope:wght@300&family=Open+Sans:wght@400;500;600;700;800&display=swap';
/**
 * The Transformation Framework landing page sets every element in Poppins
 * (--font-landing), so it requests Poppins alone rather than Open Sans.
 */
export const FONT_HREF_LANDING =
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap';

/**
 * Fallback social-sharing image for every page without one of its own: the
 * homepage hero still (public/pic1.png) cropped to 1200×630 with the white
 * logo, saved as public/og-default.jpg. Each page has to list it in its own
 * `openGraph.images`, because Next replaces a parent's `openGraph` object
 * wholesale rather than merging it. `twitter:image` is filled from it
 * automatically.
 */
export const DEFAULT_OG_IMAGE = {
  url: '/og-default.jpg',
  width: 1200,
  height: 630,
  alt: 'Grow Spark Consulting',
};

/** Stable `@id`s so JSON-LD on any page can reference the homepage entities. */
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Google Tag Manager container, loaded on every route by HtmlShell. */
export const GTM_ID = 'GTM-T44BDVHX';
