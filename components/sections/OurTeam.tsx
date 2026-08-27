import { ArrowRight } from 'lucide-react';

/**
 * The home page's team teaser, sitting right after Leadership. Same
 * detail-card grid the /our-team/ page itself uses — Raja's card is
 * identical content in both places, and the other three are pending
 * placeholders (see /our-team/'s own doc comment) rather than invented,
 * closed off with a link to the full page.
 *
 * Server Component: no behaviour of its own.
 */
export default function OurTeam() {
  return (
    <>
      <section id="our-team" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Our Team
            </span>
            {' '}
            <h2>
              The people behind Grow Spark.
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" data-reveal="">
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
              <p className="mb-5">
                Leads Websites & Platforms · Automation & AI Tools · Delivery Management
              </p>
              {' '}
              <a href="/co-founder/" className="inline-link">
                View Profile {' '}
                <ArrowRight className="w-4 h-4" />
              </a>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <div className="lead-avatar !bg-paper-sunken !text-muted">
                +
              </div>
              {' '}
              <h3>
                [Team Member Name]
              </h3>
              {' '}
              <p className="!text-muted !font-medium mb-3">
                [Team Member Title]
              </p>
              {' '}
              <p className="mb-5">
                [Bio to be added — verified details pending.]
              </p>
              {' '}
              <span className="inline-link is-pending">
                View Profile {' '}
                <ArrowRight className="w-4 h-4" />
              </span>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <div className="lead-avatar !bg-paper-sunken !text-muted">
                +
              </div>
              {' '}
              <h3>
                [Team Member Name]
              </h3>
              {' '}
              <p className="!text-muted !font-medium mb-3">
                [Team Member Title]
              </p>
              {' '}
              <p className="mb-5">
                [Bio to be added — verified details pending.]
              </p>
              {' '}
              <span className="inline-link is-pending">
                View Profile {' '}
                <ArrowRight className="w-4 h-4" />
              </span>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <div className="lead-avatar !bg-paper-sunken !text-muted">
                +
              </div>
              {' '}
              <h3>
                [Team Member Name]
              </h3>
              {' '}
              <p className="!text-muted !font-medium mb-3">
                [Team Member Title]
              </p>
              {' '}
              <p className="mb-5">
                [Bio to be added — verified details pending.]
              </p>
              {' '}
              <span className="inline-link is-pending">
                View Profile {' '}
                <ArrowRight className="w-4 h-4" />
              </span>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <div className="text-center mt-10" data-reveal="">
            {' '}
            <a href="/our-team/" className="inline-link">
              Meet The Full Team {' '}
              <ArrowRight className="w-4 h-4" />
            </a>
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
