import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

/**
 * Transcribed from pages/solutions/leadership-alignment/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Leadership Isn't Aligned | Grow Spark Consulting",
  description: "Growth stops when leadership stops moving together. Grow Spark helps founders and leadership teams build high-performing organisations through strategic alignment, governance, accountability and execution systems.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/solutions/leadership-alignment/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Leadership Isn't Aligned | Grow Spark Consulting",
    description: "The challenge isn't your people. It's alignment. We build the leadership systems that let strategy actually get executed.",
    url: "https://www.growsparkconsulting.com/solutions/leadership-alignment/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership Isn't Aligned | Grow Spark Consulting",
    description: "The challenge isn't your people. It's alignment. We build the leadership systems that let strategy actually get executed.",
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
              Leadership Isn’t Aligned
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
              Leadership Isn't Aligned
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              {' '} Every Great Business Is Built By Great Leadership. Growth Stops When Leadership Stops Moving Together. {' '}
            </h1>
            {' '}
            <div className="lede-statement mb-7">
              {' '}
              <p className="text-muted">
                As businesses grow, leadership becomes more complex. Decisions take longer.
              </p>
              {' '}
              <p className="text-muted">
                Departments become disconnected. Priorities compete.
              </p>
              {' '}
              <p className="text-muted">
                Accountability weakens. Execution slows.
              </p>
              {' '}
              <p className="text-ink">
                The challenge isn't your people. It's alignment.
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[660px] mx-auto mb-10">
              {' '} At Grow Spark Consulting, we help founders and leadership teams build high-performing organisations through strategic alignment, governance, accountability and execution systems. {' '}
            </p>
            {' '}
            <div className="flex gap-4 justify-center flex-wrap">
              {' '}
              <a href="#assessment" className="btn btn-primary">
                Request a Leadership Alignment Assessment™
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
              A Quick Check
            </span>
            {' '}
            <h2>
              Is your leadership team facing these challenges?
            </h2>
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
                Everyone is busy, but progress feels slow.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Different departments have different priorities.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Meetings produce discussions, not decisions.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Projects are delayed because ownership is unclear.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Managers solve daily problems instead of leading strategically.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Communication breaks down between departments.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Employees are unsure what success looks like.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Leaders work hard — but not always in the same direction.
              </p>
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[660px] mx-auto mt-12" data-reveal="">
            {' '} If this sounds familiar, {' '}
            <strong className="text-ink font-semibold">
              your organisation may have an alignment problem rather than a performance problem.
            </strong>
            {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* STRUCTURE, NOT PEOPLE */}
      {' '}
      <section id="whats-holding-you-back" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              The Real Issue
            </span>
            {' '}
            <h2>
              Leadership problems rarely start with people.
            </h2>
            {' '}
            <p>
              Most organisations assume leadership issues are caused by capability. In reality, the bigger problem is usually structure.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 max-w-[820px] mx-auto" data-reveal="">
            {' '}
            <div className="tile-card gap-4 flex-wrap">
              {' '}
              <span className="font-display font-semibold text-ink">
                When strategy is unclear…
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" />
              {' '}
              <span>
                Leadership becomes reactive.
              </span>
              {' '}
            </div>
            {' '}
            <div className="tile-card gap-4 flex-wrap">
              {' '}
              <span className="font-display font-semibold text-ink">
                When accountability is weak…
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" />
              {' '}
              <span>
                Execution slows.
              </span>
              {' '}
            </div>
            {' '}
            <div className="tile-card gap-4 flex-wrap">
              {' '}
              <span className="font-display font-semibold text-ink">
                When KPIs are inconsistent…
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" />
              {' '}
              <span>
                Departments optimise for different goals.
              </span>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[660px] mx-auto mt-12" data-reveal="">
            {' '} Without alignment, even highly capable leaders struggle to deliver consistent results. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* COST OF MISALIGNMENT */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head on-dark" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-3.5">
              The Cost Of Misalignment
            </span>
            {' '}
            <h2>
              It affects every part of the organisation
            </h2>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 mb-11" data-reveal="">
            {' '}
            <span className="chip chip-on-dark">
              Decisions become slower
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Employees lose confidence
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Resources are wasted
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Projects overrun
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Customers experience inconsistency
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Growth becomes unpredictable
            </span>
            {' '}
          </div>
          {' '}
          <p className="statement-line text-white text-center max-w-[680px] mx-auto" data-reveal="">
            {' '} Over time, organisations become harder to lead — and even harder to scale. {' '}
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
              Our Leadership Alignment Assessment™
            </h2>
            {' '}
            <p>
              Every engagement begins by understanding how your leadership team works today. We evaluate:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" data-reveal="">
            {' '}
            <div className="tile-card is-centered">
              Vision & Strategic Direction
            </div>
            {' '}
            <div className="tile-card is-centered">
              Leadership Roles
            </div>
            {' '}
            <div className="tile-card is-centered">
              Decision-Making Processes
            </div>
            {' '}
            <div className="tile-card is-centered">
              Organisational Structure
            </div>
            {' '}
            <div className="tile-card is-centered">
              Department Alignment
            </div>
            {' '}
            <div className="tile-card is-centered">
              Performance Management
            </div>
            {' '}
            <div className="tile-card is-centered">
              KPIs & Accountability
            </div>
            {' '}
            <div className="tile-card is-centered">
              Communication
            </div>
            {' '}
            <div className="tile-card is-centered">
              Governance
            </div>
            {' '}
            <div className="tile-card is-centered">
              Execution Capability
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[16.5px] text-ink-soft max-w-[660px] mx-auto mt-10" data-reveal="">
            {' '} The outcome is a practical roadmap that strengthens leadership effectiveness and organisational alignment. {' '}
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
              The Grow Spark Leadership Transformation Framework™
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
                    Align
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Clarify vision, priorities and strategic objectives.
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
                    Structure
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Define leadership responsibilities, governance and decision-making.
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
                    Execute
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Create accountability systems, KPIs and operating rhythms.
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
                    Empower
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Develop leadership capability and cross-functional collaboration.
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
                    Sustain
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Measure performance, optimise continuously and build a culture of accountability.
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
              What leadership alignment delivers
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="outcome-card">
              <span className="n">
                01
              </span>
              <h3>
                Faster Decision-Making
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                02
              </span>
              <h3>
                Clear Organisational Priorities
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                03
              </span>
              <h3>
                Stronger Accountability
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                04
              </span>
              <h3>
                Better Collaboration Across Departments
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                05
              </span>
              <h3>
                Higher Employee Engagement
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                06
              </span>
              <h3>
                Improved Execution
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                07
              </span>
              <h3>
                Scalable Leadership Systems
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                08
              </span>
              <h3>
                A Culture Focused On Performance
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                09
              </span>
              <h3>
                Sustainable Long-Term Growth
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
              Built for leadership teams managing complexity
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="tile-card">
              Founder-led businesses
            </div>
            {' '}
            <div className="tile-card">
              Family-owned companies
            </div>
            {' '}
            <div className="tile-card">
              Growing mid-market organisations
            </div>
            {' '}
            <div className="tile-card">
              Businesses expanding into new markets
            </div>
            {' '}
            <div className="tile-card">
              Leadership teams managing organisational complexity
            </div>
            {' '}
            <div className="tile-card">
              Companies preparing for significant growth
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
              Why Grow Spark?
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
                We focus on organisational performance — not individual personalities.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                02
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                We build leadership systems that scale.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                03
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                We align strategy with execution.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                04
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                We help leadership teams make better decisions together.
              </p>
            </div>
            {' '}
            <div className="why-card sm:col-span-2">
              <span className="num">
                05
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                We create measurable improvements in organisational performance.
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
                Do you provide leadership training?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Leadership development may be part of an engagement, but our primary focus is aligning leadership teams, governance and execution systems.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Can this help family businesses?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Yes. Leadership alignment is particularly valuable where multiple generations, family members or business units need to work towards common objectives.
                </p>
                {' '}
              </div>
              {' '}
            </details>
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
                  Most Leadership Alignment Assessments are completed within two to three weeks, depending on the size of the organisation.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Do you stay involved after the assessment?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Yes. We support implementation, governance design and ongoing advisory to ensure alignment is maintained.
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
            Strong Businesses Require Strong Leadership.
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[560px] mx-auto">
            Your strategy is only as effective as your ability to execute it. Let's align your leadership team for the next stage of growth.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="/contact/" className="btn btn-accent">
              Request Your Leadership Alignment Assessment™
            </a>
            {' '}
            <a href="/contact/" className="btn btn-secondary btn-on-dark">
              Book An Executive Strategy Session
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
