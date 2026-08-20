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
