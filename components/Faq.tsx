/**
 * Transcribed from sections\faq.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function Faq() {
  return (
    <>
      <section className="py-20 sm:py-24 lg:py-28 bg-paper">
        {' '}
        <div className="mx-auto max-w-[720px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Frequently Asked
            </span>
            {' '}
            <h2>
              Common questions before you reach out
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                How long does an engagement typically take?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  It depends on scope. Every engagement runs through the same five-phase Grow Spark Business Transformation Framework™, and the timeline is agreed upfront on the strategy call rather than quoted before we understand the problem.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Do you work with early-stage companies, or only larger organizations?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  We work directly with founders and leadership teams, regardless of company size — from teams launching something new to organizations modernizing established operations.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Can I see case studies before reaching out?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Where they exist, yes — and where they don't yet, we'd rather show you our documentation standard than a dramatized client story. See our {' '}
                  <a href="/case-studies/" className="text-accent font-medium hover:underline">
                    Case Studies
                  </a>
                  {' '} page for how we approach this.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                What happens after I submit the contact form?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Your message is reviewed personally, we schedule a strategy call, and you leave that call with a clear action plan — no automated sales sequence in between.
                </p>
                {' '}
              </div>
              {' '}
            </details>
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
