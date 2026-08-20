/**
 * Transcribed from sections/leadership.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7" data-reveal="">
            {' '}
            <a href="/founder/" className="block text-center group" aria-label="Meet Pragadeesh, Founder of Grow Spark Consulting">
              {' '}
              <div className="lead-avatar transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:-translate-y-1">
                GS
              </div>
              {' '}
              <h3 className="text-[16px] mb-1 font-display font-semibold transition-colors duration-200 group-hover:text-accent">
                Founder
              </h3>
              {' '}
              <span className="text-[13px] text-accent font-semibold">
                Business Strategy & Vision
              </span>
              {' '}
            </a>
            {' '}
            <div className="text-center">
              {' '}
              <div className="lead-avatar">
                SA
              </div>
              {' '}
              <h3 className="text-[16px] mb-1 font-display font-semibold">
                Senior Advisor
              </h3>
              {' '}
              <span className="text-[13px] text-accent font-semibold">
                Enterprise Transformation
              </span>
              {' '}
            </div>
            {' '}
            <div className="text-center">
              {' '}
              <div className="lead-avatar">
                TC
              </div>
              {' '}
              <h3 className="text-[16px] mb-1 font-display font-semibold">
                Transformation Consultant
              </h3>
              {' '}
              <span className="text-[13px] text-accent font-semibold">
                Operating Model Design
              </span>
              {' '}
            </div>
            {' '}
            <div className="text-center">
              {' '}
              <div className="lead-avatar">
                TS
              </div>
              {' '}
              <h3 className="text-[16px] mb-1 font-display font-semibold">
                Technology Specialist
              </h3>
              {' '}
              <span className="text-[13px] text-accent font-semibold">
                AI & Systems Implementation
              </span>
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
