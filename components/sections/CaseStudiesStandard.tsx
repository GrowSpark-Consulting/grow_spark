/**
 * Transcribed from sections/case-studies-standard.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function CaseStudiesStandard() {
  return (
    <>
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              The Standard
            </span>
            {' '}
            <h2>
              What our work documentation includes
            </h2>
            {' '}
            <p>
              No engagement gets published until it clears all four — which is why this page stays short until the work is done.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2" data-reveal="">
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                01
              </span>
              {' '}
              <div>
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  The Real Starting Point
                </h3>
                <p className="text-[16px] text-ink-soft">
                  The actual baseline metric going in, not a dramatized "before" story.
                </p>
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                02
              </span>
              {' '}
              <div>
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  The Specific Decisions
                </h3>
                <p className="text-[16px] text-ink-soft">
                  What we actually changed and why, not a vague reference to "strategy."
                </p>
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                03
              </span>
              {' '}
              <div>
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  The Team Who Executed
                </h3>
                <p className="text-[16px] text-ink-soft">
                  Named accountability for delivery, not just the advisors who scoped it.
                </p>
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                04
              </span>
              {' '}
              <div>
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  A Verifiable Number
                </h3>
                <p className="text-[16px] text-ink-soft">
                  A result checked against the client's own source data before it's published.
                </p>
              </div>
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
