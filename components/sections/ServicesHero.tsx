/**
 * Transcribed from sections/services-hero.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function ServicesHero() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline pt-16 pb-24 lg:pt-24 lg:pb-32">
        {' '}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
        {' '}
        <div className="relative mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="max-w-[820px] mx-auto text-center" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              What We Do
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              {' '} One partner. Every capability your transformation needs. {' '}
            </h1>
            {' '}
            <div className="lede-statement mb-7">
              {' '}
              <p className="text-muted">
                Strategy without execution stalls.
              </p>
              {' '}
              <p className="text-muted">
                Technology without strategy misses the point.
              </p>
              {' '}
              <p className="text-ink">
                Growth needs both, working together.
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[640px] mx-auto mb-10">
              {' '} Grow Spark Consulting pairs business transformation strategy with hands-on delivery — AI automation, custom software, CRM and ERP systems, digital marketing and brand — so the roadmap we design is built by the same team that ships it. {' '}
            </p>
            {' '}
            <div className="flex gap-4 justify-center flex-wrap">
              {' '}
              <a href="/contact/" className="btn btn-primary">
                Book Executive Strategy Session
              </a>
              {' '}
              <a href="/framework/" className="btn btn-secondary">
                See Our Framework
              </a>
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
