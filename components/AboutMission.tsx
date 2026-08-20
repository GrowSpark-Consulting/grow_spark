/**
 * Transcribed from sections\about-mission.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function AboutMission() {
  return (
    <>
      <section id="mission" className="py-20 sm:py-24 lg:py-28 border-b border-hairline scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="max-w-[740px] mx-auto text-center" data-reveal="">
            {' '}
            <div className="font-display font-semibold leading-[1.5] text-[clamp(1.1875rem,0.85rem+2vw,1.625rem)]">
              {' '}
              <p className="text-muted">
                Most businesses don't fail from a lack of ambition.
              </p>
              {' '}
              <p className="text-muted">
                They fail from strategy that never leaves the deck.
              </p>
              {' '}
              <p className="text-muted">
                Or technology bolted on without a plan.
              </p>
              {' '}
              <p className="text-ink">
                Grow Spark exists to close that gap.
              </p>
              {' '}
            </div>
            {' '}
            <p className="mt-8 text-[17px] text-ink-soft leading-relaxed">
              {' '} Our mission is to give founders and leadership teams one accountable partner for the full path from decision to delivery — business strategy, AI and software engineering under a single disciplined framework, so transformation happens instead of stalling in committee. {' '}
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
