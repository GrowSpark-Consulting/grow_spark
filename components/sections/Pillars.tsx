/**
 * Transcribed from sections/pillars.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function Pillars() {
  return (
    <>
      <section className="py-20 sm:py-24 lg:py-28 border-t border-hairline">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What We Do
            </span>
            {' '}
            <h2>
              Three ways we create value
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-7" data-reveal="">
            {' '}
            <div className="pillar-card">
              {' '}
              <span className="eyebrow block mb-5">
                Build
              </span>
              {' '}
              <h3 className="text-[23px] mb-3.5">
                Build
              </h3>
              {' '}
              <div className="card-reveal">
                <p className="text-ink-soft text-[16.5px] leading-relaxed">
                  Launch and structure new businesses correctly from day one — operating model, first hires, go-to-market — so growth compounds instead of stalling.
                </p>
              </div>
              {' '}
            </div>
            {' '}
            <div className="pillar-card">
              {' '}
              <span className="eyebrow block mb-5">
                Transform
              </span>
              {' '}
              <h3 className="text-[23px] mb-3.5">
                Transform
              </h3>
              {' '}
              <div className="card-reveal">
                <p className="text-ink-soft text-[16.5px] leading-relaxed">
                  Modernise and restructure established businesses to improve margin, resilience and competitive position.
                </p>
              </div>
              {' '}
            </div>
            {' '}
            <div className="pillar-card">
              {' '}
              <span className="eyebrow block mb-5">
                Scale
              </span>
              {' '}
              <h3 className="text-[23px] mb-3.5">
                Scale
              </h3>
              {' '}
              <div className="card-reveal">
                <p className="text-ink-soft text-[16.5px] leading-relaxed">
                  Give companies the systems, AI and technology to sustain growth without breaking under it.
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
