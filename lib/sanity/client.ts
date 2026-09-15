import { createClient } from 'next-sanity';

/**
 * growspark-studio project (cp5x8vcd/production). Values fall back to that
 * project's real id/dataset — both are non-secret identifiers, not
 * credentials — so a checkout without .env.local still builds correctly.
 *
 * useCdn: true reads from Sanity's CDN, which fits this project's ISR model
 * (`revalidate = 60` on the blog routes) rather than needing live data on
 * every request.
 */
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'cp5x8vcd',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2026-09-15',
  useCdn: true,
  perspective: 'published',
});
