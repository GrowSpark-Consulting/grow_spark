import type { Metadata } from 'next';

/**
 * Transcribed from pages/solutions/growth-has-stalled/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Growth Has Stalled? Let's Find Out Why | Grow Spark Consulting",
  description: "Most businesses don't stop growing for lack of ambition — hidden constraints compound. Grow Spark helps leadership teams identify what's really holding the business back and build the plan to unlock the next stage.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/solutions/growth-has-stalled/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Growth Has Stalled? Let's Find Out Why | Grow Spark Consulting",
    description: "What worked to reach your current level of success rarely gets you to the next one. We find the real constraint and build the plan around it.",
    url: "https://www.growsparkconsulting.com/solutions/growth-has-stalled/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Has Stalled? Let's Find Out Why | Grow Spark Consulting",
    description: "What worked to reach your current level of success rarely gets you to the next one. We find the real constraint and build the plan around it.",
  },
};

export default function Page() {
  return (
    <main id="main" className="pt-24">
      {' '}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        {' '}
        <ol className="breadcrumb">
          {' '}
          <li>
            <a href="/">
              Home
            </a>
          </li>
          {' '}
          <li>
            <a href="/solutions/">
              Solutions
            </a>
          </li>
          {' '}
          <li>
            <span aria-current="page">
              Growth Has Stalled
            </span>
          </li>
          {' '}
        </ol>
        {' '}
      </nav>
      {' '}
      {/* HERO */}
      {' '}
      <section className="relative overflow-hidden border-b border-hairline pt-16 pb-24 lg:pt-24 lg:pb-32">
        {' '}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
        {' '}
        <div className="relative mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="max-w-[820px] mx-auto text-center" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Growth Has Stalled
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              {' '} Growth Has Stalled. Let's Find Out Why. {' '}
            </h1>
            {' '}
            <div className="lede-statement mb-7">
              {' '}
              <p className="text-muted">
                Most businesses don't stop growing because of a lack of ambition.
              </p>
              {' '}
              <p className="text-muted">
                They stop growing because hidden constraints begin to compound.
              </p>
              {' '}
              <p className="text-muted">
                Markets evolve. Customers change. Competition intensifies.
              </p>
              {' '}
              <p className="text-ink">
                Operations become more complex. Leadership gets stretched.
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[660px] mx-auto mb-10">
              {' '} What worked to reach your current level of success rarely gets you to the next one. At Grow Spark Consulting, we help founders and leadership teams identify what's really holding their business back — and build the strategy, systems, and execution plan to unlock the next stage of growth. {' '}
            </p>
            {' '}
            <div className="flex gap-4 justify-center flex-wrap">
              {' '}
              <a href="#assessment" className="btn btn-primary">
                Request a Business Transformation Assessment™
              </a>
              {' '}
              <a href="#framework" className="btn btn-secondary">
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
      {/* SYMPTOMS */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Sound Familiar?
            </span>
            {' '}
            <h2>
              Is this what your business looks like today?
            </h2>
            {' '}
            <p>
              Growth has slowed even though your team is working harder than ever.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2" data-reveal="">
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Revenue has plateaued.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Margins are shrinking.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Sales are becoming inconsistent.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Operations feel increasingly complex.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Customer acquisition costs continue to rise.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Decision-making takes longer.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Technology isn't keeping up.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Your competitors seem to be moving faster.
              </p>
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[660px] mx-auto mt-12" data-reveal="">
            {' '}
            <strong className="text-ink font-semibold">
              You know the business has more potential.
            </strong>
            {' '} You just don't know what's holding it back. If several of these sound familiar, you're not alone — most businesses experience this stage. The companies that identify the real constraints early outperform the ones that continue guessing. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHAT'S HOLDING YOU BACK */}
      {' '}
      <section id="whats-holding-you-back" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What's Really Holding You Back
            </span>
            {' '}
            <h2>
              The real problem usually isn't what you think.
            </h2>
            {' '}
            <p>
              Most companies assume their growth problem is marketing, sales, pricing, hiring or technology. In reality, these are often symptoms — not the root cause.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 lg:grid-cols-2 mb-14" data-reveal="">
            {' '}
            <div className="compare-col is-symptom">
              {' '}
              <h3>
                What Gets Blamed
              </h3>
              {' '}
              <ul>
                {' '}
                <li>
                  Marketing
                </li>
                {' '}
                <li>
                  Sales
                </li>
                {' '}
                <li>
                  Pricing
                </li>
                {' '}
                <li>
                  Hiring
                </li>
                {' '}
                <li>
                  Technology
                </li>
                {' '}
              </ul>
              {' '}
            </div>
            {' '}
            <div className="compare-col is-cause">
              {' '}
              <h3>
                What's Usually Actually True
              </h3>
              {' '}
              <ul>
                {' '}
                <li>
                  The real issue is hidden somewhere inside the business
                </li>
                {' '}
              </ul>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <div className="max-w-[860px] mx-auto" data-reveal="">
            {' '}
            <h3 className="text-center font-display font-semibold text-[16.5px] mb-6">
              The real constraint is usually one of these:
            </h3>
            {' '}
            <div className="grid-hairline grid-cols-1 sm:grid-cols-2">
              {' '}
              <div className="tile-card">
                An operating model that no longer supports growth.
              </div>
              {' '}
              <div className="tile-card">
                Leadership teams pulling in different directions.
              </div>
              {' '}
              <div className="tile-card">
                Poor customer experience.
              </div>
              {' '}
              <div className="tile-card">
                Lack of visibility into business performance.
              </div>
              {' '}
              <div className="tile-card">
                Manual processes limiting productivity.
              </div>
              {' '}
              <div className="tile-card">
                Technology that has outgrown the business.
              </div>
              {' '}
              <div className="tile-card sm:col-span-2">
                No clear AI or digital strategy.
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
      {/* COST OF DOING NOTHING */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head on-dark" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-3.5">
              The Cost Of Doing Nothing
            </span>
            {' '}
            <h2>
              Businesses rarely fail overnight. They slowly lose momentum.
            </h2>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 mb-11" data-reveal="">
            {' '}
            <span className="chip chip-on-dark">
              Revenue growth slows
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Margins tighten
            </span>
            {' '}
            <span className="chip chip-on-dark">
              High performers leave
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Customers become less loyal
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Competitors gain share
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Technology debt increases
            </span>
            {' '}
          </div>
          {' '}
          <p className="statement-line text-white text-center max-w-[680px] mx-auto" data-reveal="">
            {' '} Eventually, what was once a growing business becomes difficult to scale. Doing nothing often becomes the most expensive decision. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* ASSESSMENT */}
      {' '}
      <section id="assessment" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Our Approach
            </span>
            {' '}
            <h2>
              We don't start with recommendations. We start with understanding your business.
            </h2>
            {' '}
            <p>
              Every engagement begins with our Business Transformation Assessment™. We evaluate:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" data-reveal="">
            {' '}
            <div className="tile-card is-centered">
              Leadership
            </div>
            {' '}
            <div className="tile-card is-centered">
              Strategy
            </div>
            {' '}
            <div className="tile-card is-centered">
              Sales
            </div>
            {' '}
            <div className="tile-card is-centered">
              Marketing
            </div>
            {' '}
            <div className="tile-card is-centered">
              Operations
            </div>
            {' '}
            <div className="tile-card is-centered">
              Technology
            </div>
            {' '}
            <div className="tile-card is-centered">
              Customer Experience
            </div>
            {' '}
            <div className="tile-card is-centered">
              People
            </div>
            {' '}
            <div className="tile-card is-centered">
              AI Readiness
            </div>
            {' '}
            <div className="tile-card is-centered">
              Financial Performance
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[16.5px] text-ink-soft max-w-[660px] mx-auto mt-10" data-reveal="">
            {' '} Our objective is simple: identify the few constraints preventing your business from reaching its next level of growth. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* FRAMEWORK */}
      {' '}
      <section id="framework" className="py-28 lg:py-36 bg-ink overflow-hidden scroll-mt-24" data-framework="">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head on-dark" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-3.5">
              Our Methodology
            </span>
            {' '}
            <h2>
              The Grow Spark Business Transformation Framework™
            </h2>
            {' '}
          </div>
          {' '}
          <div className="relative mt-16 lg:mt-24" data-fw-diagram="">
            {' '}
            <div className="hidden lg:block absolute left-0 right-0 h-px bg-white/10" style={{ top: "28px" }} data-fw-line="" aria-hidden="true" />
            {' '}
            <div className="flex flex-col gap-9 lg:flex-row lg:gap-0 relative">
              {' '}
              <div className="framework-step flex items-center gap-5 lg:flex-col lg:items-center lg:text-center lg:flex-1 lg:px-4 relative z-10" data-fw-step="" data-reveal="">
                {' '}
                <div className="framework-node lg:mb-[22px]" data-fw-node="">
                  01
                </div>
                {' '}
                <div>
                  {' '}
                  <h3 className="text-white text-[17px] font-bold mb-1.5 lg:mb-2.5">
                    Discover
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Understand your business, leadership team, market and long-term vision.
                  </p>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <div className="framework-step flex items-center gap-5 lg:flex-col lg:items-center lg:text-center lg:flex-1 lg:px-4 relative z-10" data-fw-step="" data-reveal="">
                {' '}
                <div className="framework-node lg:mb-[22px]" data-fw-node="">
                  02
                </div>
                {' '}
                <div>
                  {' '}
                  <h3 className="text-white text-[17px] font-bold mb-1.5 lg:mb-2.5">
                    Diagnose
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Identify the real constraints limiting growth and performance.
                  </p>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <div className="framework-step flex items-center gap-5 lg:flex-col lg:items-center lg:text-center lg:flex-1 lg:px-4 relative z-10" data-fw-step="" data-reveal="">
                {' '}
                <div className="framework-node lg:mb-[22px]" data-fw-node="">
                  03
                </div>
                {' '}
                <div>
                  {' '}
                  <h3 className="text-white text-[17px] font-bold mb-1.5 lg:mb-2.5">
                    Design
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Develop a practical transformation roadmap aligned to your business goals.
                  </p>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <div className="framework-step flex items-center gap-5 lg:flex-col lg:items-center lg:text-center lg:flex-1 lg:px-4 relative z-10" data-fw-step="" data-reveal="">
                {' '}
                <div className="framework-node lg:mb-[22px]" data-fw-node="">
                  04
                </div>
                {' '}
                <div>
                  {' '}
                  <h3 className="text-white text-[17px] font-bold mb-1.5 lg:mb-2.5">
                    Deploy
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Work alongside your leadership team to implement the highest-impact initiatives.
                  </p>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <div className="framework-step flex items-center gap-5 lg:flex-col lg:items-center lg:text-center lg:flex-1 lg:px-4 relative z-10" data-fw-step="" data-reveal="">
                {' '}
                <div className="framework-node lg:mb-[22px]" data-fw-node="">
                  05
                </div>
                {' '}
                <div>
                  {' '}
                  <h3 className="text-white text-[17px] font-bold mb-1.5 lg:mb-2.5">
                    Drive
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Measure outcomes, optimise continuously and build sustainable growth.
                  </p>
                  {' '}
                </div>
                {' '}
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
      {/* OUTCOMES */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Business Outcomes
            </span>
            {' '}
            <h2>
              Measured by outcomes, not deliverables
            </h2>
            {' '}
            <p>
              Our objective is to help you:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" data-reveal="">
            {' '}
            <div className="outcome-card">
              <span className="n">
                01
              </span>
              <h3>
                Increase Revenue
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                02
              </span>
              <h3>
                Improve Profitability
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                03
              </span>
              <h3>
                Reduce Operational Complexity
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                04
              </span>
              <h3>
                Improve Customer Experience
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                05
              </span>
              <h3>
                Build Scalable Systems
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                06
              </span>
              <h3>
                Strengthen Leadership Alignment
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                07
              </span>
              <h3>
                Accelerate AI Adoption
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                08
              </span>
              <h3>
                Increase Enterprise Value
              </h3>
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHO WE WORK WITH */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Who We Work With
            </span>
            {' '}
            <h2>
              Built for ambitious, growth-stage businesses
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-[980px] mx-auto" data-reveal="">
            {' '}
            <ul className="who-list">
              {' '}
              <li>
                Founder-led businesses
              </li>
              {' '}
              <li>
                Family-owned businesses
              </li>
              {' '}
              <li>
                Mid-market companies
              </li>
              {' '}
              <li>
                Growth-stage businesses
              </li>
              {' '}
              <li>
                Companies preparing for expansion
              </li>
              {' '}
            </ul>
            {' '}
            <div className="bg-accent-tint rounded-card px-8 py-11 sm:px-10 text-center">
              {' '}
              <span className="eyebrow !text-accent-deep block mb-4">
                Typical Annual Revenue
              </span>
              {' '}
              <div className="font-display font-extrabold text-accent-deep leading-tight mb-3" style={{ fontSize: "clamp(1.5rem,1.2rem+1.2vw,2rem)" }}>
                ₹5 Crore – ₹100 Crore
              </div>
              {' '}
              <p className="text-[16px] text-ink-soft">
                If your ambition is to build a stronger business, we're built for that conversation.
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHY GROW SPARK */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Why Grow Spark
            </span>
            {' '}
            <h2>
              Why leadership teams choose Grow Spark
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2" data-reveal="">
            {' '}
            <div className="why-card">
              <span className="num">
                01
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                Business-first thinking.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                02
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                Independent strategic advice.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                03
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                A proven transformation methodology.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                04
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                Hands-on implementation support.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                05
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                Executive-level collaboration.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                06
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                Measurable business outcomes.
              </p>
            </div>
            {' '}
            <div className="why-card sm:col-span-2">
              <span className="num">
                07
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                Long-term partnerships.
              </p>
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* FAQ */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[720px] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              FAQ
            </span>
            {' '}
            <h2>
              Frequently asked questions
            </h2>
            {' '}
          </div>
          {' '}
          <div data-reveal="">
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                How long does the assessment take?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Typically two to four weeks depending on the size and complexity of the business.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Do you only provide strategy?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  No. We help organisations move from assessment to implementation and ongoing advisory.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Do you work with startups?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Yes. We support funded startups, founder-led businesses and established companies.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Do you implement AI?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Yes. Where appropriate, we develop AI roadmaps and oversee implementation as part of a broader business transformation.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* FINAL CTA */}
      {' '}
      <section className="py-24 sm:py-28 lg:py-32 text-center bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8" data-reveal="">
          {' '}
          <h2 className="text-white cta-heading mb-5">
            Your Business Doesn't Need More Ideas.
            <br />
            It Needs The Right Strategy.
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[560px] mx-auto">
            Every successful transformation starts with understanding what is truly limiting growth. Let's find it together.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="/contact/" className="btn btn-accent">
              Request Your Business Transformation Assessment™
            </a>
            {' '}
            <a href="/contact/" className="btn btn-secondary btn-on-dark">
              Book an Executive Strategy Session
            </a>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </main>
  );
}
