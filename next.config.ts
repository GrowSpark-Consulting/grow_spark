import type { NextConfig } from 'next';

/**
 * Every canonical URL on the existing site ends in a trailing slash
 * (https://www.growsparkconsulting.com/framework/), and the Vite build emitted
 * directory-index files that static hosts serve at those exact URLs. Next.js
 * strips trailing slashes by default, which would make all 27 canonicals
 * disagree with the URLs actually served — so this is required for URL parity,
 * not a preference.
 */
const nextConfig: NextConfig = {
  trailingSlash: true,

  // The legacy Vite source tree still lives in pages/ (kept recoverable until
  // the migration is validated). pages/ is also Next's Pages Router directory;
  // restricting page extensions to TSX keeps Next from ever treating those
  // legacy .html files as routes.
  pageExtensions: ['tsx', 'ts'],
};

export default nextConfig;
