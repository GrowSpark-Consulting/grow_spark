import type { Metadata } from 'next';
import { getStrategySessionBookingSummary } from '@/lib/db';
import FooterCta from '@/components/layout/FooterCta';

/** Display-only names, keyed the same way as the `engagement` column. */
const ENGAGEMENT_NAMES: Record<string, string> = {
  strategy_session: 'Founder Strategy Session',
  growth_intensive: 'Founder Growth Intensive',
};

function formatInr(paise: number): string {
  return `₹${(paise / 100).toLocaleString('en-IN')}`;
}

/**
 * /payment/success
 *
 * Security rule from the Razorpay Production Integration Guide: a visitor
 * landing here directly — a bookmark, a shared link, a guessed URL — must
 * never see a false "payment successful" message. The `ref` query param is
 * only a lookup key; this page independently re-reads the booking's status
 * from the database (set exclusively by the verify route and the webhook,
 * both server-side) before rendering anything that claims success.
 *
 * Not indexed: this is a transactional confirmation page, not landing content.
 */
export const metadata: Metadata = {
  title: 'Payment Successful | Grow Spark Consulting',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main id="main" className="pt-24">
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[620px] px-5 sm:px-8 text-center">{children}</div>
      </section>
      <FooterCta />
    </main>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string | string[] }>;
}) {
  const { ref } = await searchParams;
  const bookingId = typeof ref === 'string' ? ref : null;
  const isUuid = bookingId
    ? /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(bookingId)
    : false;

  const summary = isUuid && bookingId ? await getStrategySessionBookingSummary(bookingId) : null;

  if (summary?.status !== 'PAID') {
    return (
      <Shell>
        <span className="eyebrow block mb-5">Payment Not Confirmed</span>
        <h1 className="page-hero-heading mb-6 text-balance">
          We Couldn&rsquo;t Verify This Payment
        </h1>
        <p className="text-[16.5px] text-ink-soft leading-relaxed mb-8">
          This page only shows a confirmation once our server has verified a completed payment. If
          you just paid, please wait a moment and refresh — otherwise return to the Strategy
          Sessions page and try again, or contact us if you believe this is a mistake.
        </p>
        <a href="/strategy/#book" className="btn btn-primary">
          Back To Strategy Sessions
        </a>
      </Shell>
    );
  }

  const engagementName = ENGAGEMENT_NAMES[summary.engagement] ?? ENGAGEMENT_NAMES.strategy_session;

  return (
    <Shell>
      <span className="eyebrow block mb-5">Payment Successful</span>
      <h1 className="page-hero-heading mb-6 text-balance">Your {engagementName} Is Booked</h1>
      <p className="text-[17px] text-ink-soft leading-relaxed mb-2">
        {engagementName} · {formatInr(summary.amount)}
      </p>
      <p className="text-[13px] text-muted mb-8">
        Booking reference: <span className="font-mono">{bookingId}</span>
      </p>
      <p className="text-[16.5px] text-ink-soft leading-relaxed mb-10">
        Thank you — your payment has been confirmed. We will reach out shortly to confirm your
        session time.
      </p>
      <a href="/" className="btn btn-primary">
        Return Home
      </a>
    </Shell>
  );
}
