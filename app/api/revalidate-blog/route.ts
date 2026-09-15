import { revalidatePath } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';
import { parseBody } from 'next-sanity/webhook';
import { sanityRevalidateConfigured } from '@/lib/env';
import { log, redact } from '@/lib/logger';

/**
 * POST /api/revalidate-blog
 *
 * Configure in Sanity: Studio → API → Webhooks → this URL, filter
 * `_type == "blogPost"`, trigger on Create/Update/Delete, secret set to
 * SANITY_REVALIDATE_SECRET below. Default (unprojected) payload is fine —
 * this reads _type and slug.current straight off the full document.
 *
 * `parseBody`'s third argument is passed explicitly as `true` — it's
 * next-sanity's own fix for exactly the staleness this route exists to
 * solve: it waits ~3s after signature verification before returning, giving
 * Sanity's Content Lake time to reach eventual consistency across the CDN
 * edge (client.ts reads with useCdn: true) before revalidatePath causes the
 * next request to re-fetch. Without it, revalidation could fire and
 * immediately re-cache the same stale CDN response it was meant to replace.
 */

export const dynamic = 'force-dynamic';

type BlogPostWebhookPayload = {
  _type?: string;
  slug?: { current?: string } | string;
};

export async function POST(request: NextRequest) {
  if (!sanityRevalidateConfigured()) {
    log.error('sanity_revalidate.misconfigured');
    return NextResponse.json({ revalidated: false }, { status: 503 });
  }

  let isValidSignature: boolean | null;
  let body: BlogPostWebhookPayload | null;
  try {
    ({ isValidSignature, body } = await parseBody<BlogPostWebhookPayload>(
      request,
      process.env.SANITY_REVALIDATE_SECRET,
      true,
    ));
  } catch (e) {
    log.error('sanity_revalidate.parse_failed', {
      error: redact(e instanceof Error ? e.message : String(e)),
    });
    return NextResponse.json({ revalidated: false }, { status: 400 });
  }

  if (!isValidSignature) {
    log.warn('sanity_revalidate.invalid_signature');
    return NextResponse.json({ revalidated: false, message: 'Invalid signature' }, { status: 401 });
  }

  if (!body?._type) {
    log.warn('sanity_revalidate.missing_type');
    return NextResponse.json({ revalidated: false, message: 'Bad Request' }, { status: 400 });
  }

  if (body._type !== 'blogPost') {
    return NextResponse.json({ revalidated: false, message: 'Ignored type' });
  }

  const slug = typeof body.slug === 'string' ? body.slug : body.slug?.current;

  revalidatePath('/blog/');
  if (slug) revalidatePath(`/blog/${slug}/`);

  log.info('sanity_revalidate.done', { slug: slug ?? null });
  return NextResponse.json({ revalidated: true, slug: slug ?? null, now: Date.now() });
}

export async function GET() {
  return NextResponse.json({ revalidated: false }, { status: 405 });
}
