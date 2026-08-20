/**
 * Transcribed from sections\services-industries.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function ServicesIndustries() {
  return (
    <>
      <section id="industry-expertise" className="py-20 lg:py-28 bg-paper-sunken border-y border-hairline scroll-mt-36">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Industry Expertise
            </span>
            {' '}
            <h2>
              The same capabilities, applied to your sector's realities
            </h2>
            {' '}
            <p>
              A CRM rollout in manufacturing and one in professional services solve different problems. We scope every capability against how your industry actually operates.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-2 lg:grid-cols-4" data-reveal="">
            {' '}
            <a href="/solutions/" className="industry-card">
              <span className="n">
                01
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Manufacturing
              </h3>
            </a>
            {' '}
            <a href="/solutions/" className="industry-card">
              <span className="n">
                02
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Healthcare
              </h3>
            </a>
            {' '}
            <a href="/solutions/" className="industry-card">
              <span className="n">
                03
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Retail
              </h3>
            </a>
            {' '}
            <a href="/solutions/" className="industry-card">
              <span className="n">
                04
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Education
              </h3>
            </a>
            {' '}
            <a href="/solutions/" className="industry-card">
              <span className="n">
                05
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Professional Services
              </h3>
            </a>
            {' '}
            <a href="/solutions/" className="industry-card">
              <span className="n">
                06
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Technology
              </h3>
            </a>
            {' '}
            <a href="/solutions/" className="industry-card">
              <span className="n">
                07
              </span>
              <h3 className="text-[16.5px] font-semibold">
                Construction
              </h3>
            </a>
            {' '}
            <a href="/solutions/" className="industry-card">
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
          <div className="text-center mt-10" data-reveal="">
            {' '}
            <a href="/solutions/" className="btn btn-secondary">
              Explore Solutions By Industry
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
