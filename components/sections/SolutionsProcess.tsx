/**
 * Transcribed from sections/solutions-process.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function SolutionsProcess() {
  return (
    <>
      <section className="py-20 lg:py-24 bg-paper-sunken border-y border-hairline" data-reveal="">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 grid lg:grid-cols-[1fr_auto] items-center gap-12">
          {' '}
          <div>
            {' '}
            <span className="eyebrow block mb-3">
              How We Deliver
            </span>
            {' '}
            <h2 className="subsection-heading mb-4 max-w-[520px]">
              Every solution runs through the same disciplined framework.
            </h2>
            {' '}
            <p className="text-ink-soft text-[17px] leading-relaxed max-w-[520px] mb-7">
              Whether you start from an industry or a specific challenge, delivery follows the Grow Spark Business Transformation Framework™ — the same five-phase discipline behind every engagement.
            </p>
            {' '}
            <a href="/framework/" className="btn btn-secondary">
              See The Full Framework
            </a>
            {' '}
          </div>
          {' '}
          <ol className="flex flex-wrap lg:flex-col gap-3 lg:gap-8 relative lg:before:content-[''] lg:before:absolute lg:before:left-6 lg:before:top-6 lg:before:bottom-6 lg:before:w-px lg:before:bg-hairline-strong">
            {' '}
            <li className="process-step">
              <span className="process-node">
                01
              </span>
              <span className="process-label">
                Discover
              </span>
            </li>
            {' '}
            <li className="process-step">
              <span className="process-node">
                02
              </span>
              <span className="process-label">
                Diagnose
              </span>
            </li>
            {' '}
            <li className="process-step">
              <span className="process-node">
                03
              </span>
              <span className="process-label">
                Design
              </span>
            </li>
            {' '}
            <li className="process-step">
              <span className="process-node">
                04
              </span>
              <span className="process-label">
                Deploy
              </span>
            </li>
            {' '}
            <li className="process-step">
              <span className="process-node">
                05
              </span>
              <span className="process-label">
                Drive
              </span>
            </li>
            {' '}
          </ol>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </>
  );
}
