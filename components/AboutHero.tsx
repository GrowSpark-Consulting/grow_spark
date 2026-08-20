/**
 * Transcribed from sections\about-hero.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function AboutHero() {
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
              About Grow Spark
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              {' '} A modern AI & digital transformation consultancy, built for founders who move fast. {' '}
            </h1>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[640px] mx-auto mb-10">
              {' '} Most transformation advice stops at the strategy deck. Grow Spark stays through implementation — combining strategic clarity with AI, software and systems delivery — so recommendations actually ship. {' '}
            </p>
            {' '}
            <div className="flex gap-4 justify-center flex-wrap">
              {' '}
              <a href="/contact/" className="btn btn-primary">
                Book Executive Strategy Session
              </a>
              {' '}
              <a href="#leadership" className="btn btn-secondary">
                Meet The Team
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
