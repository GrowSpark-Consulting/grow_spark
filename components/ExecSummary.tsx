/**
 * Transcribed from sections\exec-summary.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function ExecSummary() {
  return (
    <>
      <section id="exec-summary" className="py-20 sm:py-24 lg:py-28 border-b border-hairline scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="max-w-[740px] mx-auto text-center" data-reveal="">
            {' '}
            <div className="font-display font-semibold leading-[1.5] text-[clamp(1.1875rem,0.85rem+2vw,1.625rem)]">
              {' '}
              <p className="text-muted">
                Every business reaches a point where growth slows.
              </p>
              {' '}
              <p className="text-muted">
                Markets evolve.
              </p>
              {' '}
              <p className="text-muted">
                Technology changes.
              </p>
              {' '}
              <p className="text-ink">
                Customers expect more.
              </p>
              {' '}
            </div>
            {' '}
            <p className="mt-8 text-[18px] text-ink-soft leading-relaxed">
              {' '} The companies that continuously adapt outperform those that don't. Grow Spark partners with founders and leadership teams to redesign businesses for sustainable growth through strategy, technology and execution — as a strategic advisor, not a service provider. {' '}
            </p>
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
