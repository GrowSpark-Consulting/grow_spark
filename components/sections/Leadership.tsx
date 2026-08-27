import { ArrowRight } from 'lucide-react';

/**
 * The home page's leadership teaser. Originally four initials-only avatar
 * tiles (Founder, Senior Advisor, Transformation Consultant, Technology
 * Specialist) that didn't correspond to real people. It now mirrors the
 * three real detail-cards on /leadership/ verbatim — same photos, bios,
 * "Leads" line and links — so the same person isn't described two different
 * ways depending on which page a visitor lands on. The fourth generic role
 * is dropped rather than invented a name for.
 *
 * Server Component: no behaviour of its own.
 */
export default function Leadership() {
  return (
    <>
      <section id="leadership" className="py-20 sm:py-24 lg:py-28 bg-paper-sunken scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Leadership
            </span>
            {' '}
            <h2>
              Built for founders who refuse to settle for average.
            </h2>
            {' '}
            <p>
              Grow Spark exists because too many good businesses are held back by fragmented advice, disconnected systems and strategy that never gets implemented. We combine strategic clarity with the technology and execution to make transformation real.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-3" data-reveal="">
            {' '}
            <div className="detail-card">
              {' '}
              <div className="lead-avatar overflow-hidden">
                <img
                  src="/pragadeesh.jpg"
                  alt="Pragadeesh, Founder of Grow Spark Consulting"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {' '}
              <h3>
                Pragadeesh
              </h3>
              {' '}
              <p className="!text-accent !font-medium mb-3">
                Founder & Growth Strategist
              </p>
              {' '}
              <p className="mb-4">
                Leads Grow Spark's overall growth methodology and founder-facing strategy work.
              </p>
              {' '}
              <span className="eyebrow block mb-2">
                Leads
              </span>
              {' '}
              <p className="mb-5">
                Strategy · Growth · Founder Engagements
              </p>
              {' '}
              <a href="/founder/" className="inline-link">
                View Profile {' '}
                <ArrowRight className="w-4 h-4" />
              </a>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <div className="lead-avatar overflow-hidden">
                <img
                  src="/susshinder.png"
                  alt="Susshinder S.A., Chief Marketing Officer of Grow Spark Consulting"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {' '}
              <h3>
                Susshinder S.A.
              </h3>
              {' '}
              <p className="!text-accent !font-medium mb-3">
                Chief Marketing Officer
              </p>
              {' '}
              <p className="mb-4">
                Works at the intersection of people, marketing, technology and growth — helping businesses understand their customers and communicate the real value of what they offer.
              </p>
              {' '}
              <span className="eyebrow block mb-2">
                Leads
              </span>
              {' '}
              <p className="mb-5">
                Marketing Strategy · Brand · Customer Acquisition · Market Research
              </p>
              {' '}
              <a href="/cmo/" className="inline-link">
                View Profile {' '}
                <ArrowRight className="w-4 h-4" />
              </a>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <div className="lead-avatar overflow-hidden">
                <img
                  src="/raja.png"
                  alt="Raja V., Co-Founder of Grow Spark Consulting"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {' '}
              <h3>
                Raja V.
              </h3>
              {' '}
              <p className="!text-accent !font-medium mb-3">
                Co-Founder, Technology & Operations
              </p>
              {' '}
              <p className="mb-4">
                I sit at the point where a business decision has to become something real — a website, an automation, a system, a launch — and I make sure it actually gets built, without the founder having to become a technologist to make that happen.
              </p>
              {' '}
              <span className="eyebrow block mb-2">
                Leads
              </span>
              {' '}
              <p className="mb-5">
                Positioning · Systems · Websites · Automation · AI Tools · Delivery · Operations
              </p>
              {' '}
              <a href="/co-founder/" className="inline-link">
                View Profile {' '}
                <ArrowRight className="w-4 h-4" />
              </a>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </>
  );
}
