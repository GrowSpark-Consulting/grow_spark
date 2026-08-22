/**
 * Transcribed from sections/trust-stats.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function TrustStats() {
  return (
    <>
      <section className="py-14 sm:py-16 border-b border-hairline">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <p className="text-center text-[13px] font-bold uppercase tracking-[0.12em] text-ink-soft mb-12">
            Built On Methodology, Not Claims
          </p>
          {' '}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-8 gap-x-6 text-center" data-reveal="">
            {' '}
            <div>
              {' '}
              <div className="stat-num" data-count-to="8">
                0
              </div>
              {' '}
              <div className="stat-label text-[16px]">
                Industries Served
              </div>
              {' '}
            </div>
            {' '}
            <div>
              {' '}
              <div className="stat-num" data-count-to="1">
                0
              </div>
              {' '}
              <div className="stat-label text-[16px]">
                Proprietary Framework
              </div>
              {' '}
            </div>
            {' '}
            <div>
              {' '}
              <div className="stat-num" data-count-to="5">
                0
              </div>
              {' '}
              <div className="stat-label text-[16px]">
                Framework Phases
              </div>
              {' '}
            </div>
            {' '}
            <div>
              {' '}
              <div className="stat-num" data-count-to="12" data-count-suffix="+">
                0
              </div>
              {' '}
              <div className="stat-label text-[16px]">
                Countries Worked In
              </div>
              {' '}
            </div>
            {' '}
            <div className="col-span-2 sm:col-span-1">
              {' '}
              <div className="stat-num" data-count-to="3">
                0
              </div>
              {' '}
              <div className="stat-label text-[16px]">
                Core Disciplines — Strategy, Technology, Execution
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
