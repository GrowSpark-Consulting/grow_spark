/**
 * Transcribed from sections/insights.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function Insights() {
  return (
    <>
      <section id="insights" className="py-20 sm:py-24 lg:py-28 bg-paper-sunken scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Insights
            </span>
            {' '}
            <h2>
              Research and thinking for leadership teams
            </h2>
            {' '}
            <p>
              Building trust before the first conversation.
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap gap-2.5 justify-center mb-12" data-reveal="">
            {' '}
            <span className="pill-label font-display font-semibold text-white bg-accent px-4 py-2.5 rounded-full">
              CEO Guides
            </span>
            {' '}
            <span className="pill-label font-display font-semibold text-white bg-accent px-4 py-2.5 rounded-full">
              Business Transformation
            </span>
            {' '}
            <span className="pill-label font-display font-semibold text-white bg-accent px-4 py-2.5 rounded-full">
              AI Research
            </span>
            {' '}
            <span className="pill-label font-display font-semibold text-white bg-accent px-4 py-2.5 rounded-full">
              Industry Reports
            </span>
            {' '}
            <span className="pill-label font-display font-semibold text-white bg-accent px-4 py-2.5 rounded-full">
              Executive Playbooks
            </span>
            {' '}
            <span className="pill-label font-display font-semibold text-white bg-accent px-4 py-2.5 rounded-full">
              Whitepapers
            </span>
            {' '}
            <span className="pill-label font-display font-semibold text-white bg-accent px-4 py-2.5 rounded-full">
              Perspectives
            </span>
            {' '}
          </div>
          {' '}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7" data-reveal="">
            {' '}
            <article className="insight-card card-elevate">
              {' '}
              <span className="cat">
                CEO Guide
              </span>
              {' '}
              <h3 className="text-[18.5px] leading-snug mb-3 font-display font-semibold">
                Building an AI strategy your leadership team will actually execute
              </h3>
              {' '}
              <p className="text-ink-soft text-[16px]">
                A framework for translating AI ambition into an operating plan.
              </p>
              {' '}
            </article>
            {' '}
            <article className="insight-card card-elevate">
              {' '}
              <span className="cat">
                Industry Report
              </span>
              {' '}
              <h3 className="text-[18.5px] leading-snug mb-3 font-display font-semibold">
                The state of operational efficiency in Southeast Asian manufacturing
              </h3>
              {' '}
              <p className="text-ink-soft text-[16px]">
                What separates high-performing operators from the rest.
              </p>
              {' '}
            </article>
            {' '}
            <article className="insight-card card-elevate">
              {' '}
              <span className="cat">
                Whitepaper
              </span>
              {' '}
              <h3 className="text-[18.5px] leading-snug mb-3 font-display font-semibold">
                The Business Transformation Score: a diagnostic for leadership teams
              </h3>
              {' '}
              <p className="text-ink-soft text-[16px]">
                A structured way to assess readiness before committing to change.
              </p>
              {' '}
            </article>
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
