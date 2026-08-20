/**
 * Transcribed from sections/services-technology.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function ServicesTechnology() {
  return (
    <>
      <section id="technology" className="py-20 lg:py-28 scroll-mt-36">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Technology
            </span>
            {' '}
            <h2>
              Built on the platforms your business already runs on
            </h2>
            {' '}
            <p>
              We're platform-independent by design. The stack follows the business case — never a vendor relationship.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline sm:grid-cols-2 lg:grid-cols-4" data-reveal="">
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                01
              </span>
              {' '}
              <div>
                {' '}
                <h3 className="font-display font-semibold text-[16px] mb-2">
                  Cloud & Infrastructure
                </h3>
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  Major public cloud platforms, containerised workloads and managed databases — architected for reliability and cost control, not lock-in.
                </p>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                02
              </span>
              {' '}
              <div>
                {' '}
                <h3 className="font-display font-semibold text-[16px] mb-2">
                  AI & Data
                </h3>
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  Large language models, retrieval pipelines, orchestration frameworks and the data engineering that makes them trustworthy in production.
                </p>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                03
              </span>
              {' '}
              <div>
                {' '}
                <h3 className="font-display font-semibold text-[16px] mb-2">
                  Business Systems
                </h3>
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  CRM, ERP and finance platforms — implemented, integrated and customised around your operating model rather than the vendor's default.
                </p>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                04
              </span>
              {' '}
              <div>
                {' '}
                <h3 className="font-display font-semibold text-[16px] mb-2">
                  Product Engineering
                </h3>
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  Modern web and mobile frameworks, API-first architecture and the CI/CD tooling that keeps releases safe and frequent.
                </p>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-[13.5px] text-muted text-center mt-8 max-w-[640px] mx-auto" data-reveal="">
            Specific platforms are selected per engagement during the Diagnose phase, based on what your team can operate and maintain after we hand over.
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </>
  );
}
