import { ArrowRight } from 'lucide-react';

/**
 * The published-work card. Built as an .industry-block so it sits in the same
 * card language as the six industry blocks below it on Our Work — one column,
 * same border, radius and padding — rather than the two-column split with a
 * diagram it used to carry.
 *
 * Server Component: no behaviour of its own.
 */
export default function CaseStudy() {
  return (
    <>
      <section id="case-study" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Our Work
            </span>
            {' '}
            <h2>
              How we work, from problem to outcome
            </h2>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-3 mb-14 lg:mb-16" data-reveal="">
            {' '}
            <span className="font-display font-semibold pill-label text-ink px-4 py-2.5 border border-hairline-strong rounded-full">
              Business Problem
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-muted" />
            {' '}
            <span className="font-display font-semibold pill-label text-ink px-4 py-2.5 border border-hairline-strong rounded-full">
              Assessment
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-muted" />
            {' '}
            <span className="font-display font-semibold pill-label text-ink px-4 py-2.5 border border-hairline-strong rounded-full">
              Transformation Strategy
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-muted" />
            {' '}
            <span className="font-display font-semibold pill-label text-ink px-4 py-2.5 border border-hairline-strong rounded-full">
              Implementation
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-muted" />
            {' '}
            <span className="font-display font-semibold pill-label text-ink px-4 py-2.5 border border-hairline-strong rounded-full">
              Business Outcome
            </span>
            {' '}
          </div>
          {' '}
          <article className="industry-block" data-reveal="">
            {' '}
            <span className="eyebrow block mb-4">
              Manufacturing · Operations · Illustrative Example
            </span>
            {' '}
            <h3 className="subsection-heading">
              Reducing production downtime through a redesigned operating model
            </h3>
            {' '}
            <p className="desc mb-8">
              A mid-sized precision manufacturer engaged Grow Spark after growth plateaued despite rising demand. We diagnosed the true constraint, redesigned the operating model, and deployed the change alongside the leadership team — improving output without adding headcount.
            </p>
            {' '}
            <div className="flex flex-wrap gap-10 mb-8">
              {' '}
              <div>
                {' '}
                <div className="stat-num !text-accent" data-count-to="34" data-count-suffix="%">
                  0%
                </div>
                {' '}
                <div className="stat-label">
                  Downtime reduced
                </div>
                {' '}
              </div>
              {' '}
              <div>
                {' '}
                <div className="stat-num !text-accent" data-count-to="18" data-count-suffix="%">
                  0%
                </div>
                {' '}
                <div className="stat-label">
                  Output increased
                </div>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="evidence-box">
              {' '}
              <span className="case-note !mt-0">
                Verified client work, testimonials and lessons learned will be published here as engagements complete.
              </span>
              {' '}
            </div>
            {' '}
          </article>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </>
  );
}
