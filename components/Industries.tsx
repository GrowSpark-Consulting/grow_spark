/**
 * Transcribed from sections\industries.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function Industries() {
  return (
    <>
      <section id="industries" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Industries
            </span>
            {' '}
            <h2>
              Sector depth, not generic playbooks
            </h2>
            {' '}
            <p>
              Every industry we serve gets its own transformation opportunities, AI opportunities and relevant case studies.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-2 lg:grid-cols-4" data-reveal="">
            {' '}
            <a href="/contact/" id="industry-manufacturing" className="industry-card">
              <span className="n">
                01
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Manufacturing
              </h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-healthcare" className="industry-card">
              <span className="n">
                02
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Healthcare
              </h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-retail" className="industry-card">
              <span className="n">
                03
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Retail
              </h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-education" className="industry-card">
              <span className="n">
                04
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Education
              </h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-professional-services" className="industry-card">
              <span className="n">
                05
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Professional Services
              </h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-technology" className="industry-card">
              <span className="n">
                06
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Technology
              </h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-construction" className="industry-card">
              <span className="n">
                07
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Construction
              </h3>
            </a>
            {' '}
            <a href="/contact/" id="industry-hospitality" className="industry-card">
              <span className="n">
                08
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Hospitality
              </h3>
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
