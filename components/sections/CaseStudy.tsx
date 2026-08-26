import { ArrowRight } from 'lucide-react';

/**
 * The Our Work section head and the five-stage engagement pipeline —
 * problem, assessment, strategy, implementation, outcome.
 *
 * It used to close with an illustrative case-study card; that card was
 * removed, so the pipeline is now the section's last child and carries no
 * bottom margin of its own — the section padding sets the gap to what
 * follows.
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
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-3" data-reveal="">
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
        </div>
        {' '}
      </section>
      {' '}
    </>
  );
}
