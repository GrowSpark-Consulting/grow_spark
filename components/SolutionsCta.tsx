/**
 * Transcribed from sections\solutions-cta.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function SolutionsCta() {
  return (
    <>
      <section className="py-24 sm:py-28 lg:py-32 text-center bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8" data-reveal="">
          {' '}
          <h2 className="text-white cta-heading mb-5">
            Not sure whether to start by industry or by problem?
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[520px] mx-auto">
            Tell us where you're stuck. We'll map the right entry point across AI, software and systems — and show you exactly what it takes to get there.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="/contact/" className="btn btn-accent">
              Book Executive Strategy Session
            </a>
            {' '}
            <a href="/solutions/" className="btn btn-secondary btn-on-dark">
              Explore Our Services
            </a>
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
