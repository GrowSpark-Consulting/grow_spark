import { ArrowRight } from 'lucide-react';
import CaseStudyVisual from '@/components/CaseStudyVisual';

/**
 * Transcribed from sections/case-study.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
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
          <div className="border border-hairline p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14" data-reveal="">
            {' '}
            <div>
              {' '}
              <span className="eyebrow block mb-4">
                Manufacturing · Operations · Illustrative Example
              </span>
              {' '}
              <h3 className="text-[clamp(1.5rem,1.3rem+0.6vw,1.6875rem)] leading-[1.25] mb-5">
                Reducing production downtime through a redesigned operating model
              </h3>
              {' '}
              <p className="text-ink-soft text-[17px] leading-relaxed mb-7">
                A mid-sized precision manufacturer engaged Grow Spark after growth plateaued despite rising demand. We diagnosed the true constraint, redesigned the operating model, and deployed the change alongside the leadership team — improving output without adding headcount.
              </p>
              {' '}
              <div className="flex gap-10">
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
              <p className="text-[13.5px] text-muted mt-6">
                Verified client work, testimonials and lessons learned will be published here as engagements complete.
              </p>
              {' '}
            </div>
            {' '}
            {/* Media integration point. The CS-I01 photographic asset described here previously was never produced — its manifest (public/grow-assets/case-study-images.json) and the audit/ specs it pointed at don't exist in this repo. This is a vector diagram instead, so nothing is blocked on that pipeline. If a photographic CS-I01 is ever shot and approved, swap the include below for a <picture>. */}
            {' '}
            <div className="bg-paper-raised border border-hairline p-4 sm:p-6 flex items-center">
              {' '}
              <CaseStudyVisual />
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
