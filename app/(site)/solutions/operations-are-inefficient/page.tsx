import type { Metadata } from 'next';
import FooterCta from '@/components/layout/FooterCta';

/**
 * Transcribed from pages/solutions/operations-are-inefficient/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Our Operations Are Inefficient | Grow Spark Consulting",
  description: "Complexity is costing you more than you think. Grow Spark helps leadership teams redesign operations, streamline processes and build scalable operating systems that improve efficiency and profitability.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/solutions/operations-are-inefficient/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Our Operations Are Inefficient | Grow Spark Consulting",
    description: "Operational inefficiency quietly becomes one of the biggest barriers to growth. We redesign how the business operates.",
    url: "https://www.growsparkconsulting.com/solutions/operations-are-inefficient/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Operations Are Inefficient | Grow Spark Consulting",
    description: "Operational inefficiency quietly becomes one of the biggest barriers to growth. We redesign how the business operates.",
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
              Operations Are Inefficient
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
              Operations Are Inefficient
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              {' '} Complexity Is Costing You More Than You Think. {' '}
            </h1>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[660px] mx-auto mb-8">
              {' '} Every inefficient process is reducing your profitability. {' '}
            </p>
            {' '}
            <div className="lede-statement mb-7">
              {' '}
              <p className="text-muted">
                As businesses grow, complexity grows with them.
              </p>
              {' '}
              <p className="text-muted">
                Processes become slower. Teams become disconnected.
              </p>
              {' '}
              <p className="text-muted">
                Manual work increases. Decisions take longer.
              </p>
              {' '}
              <p className="text-ink">
                Costs rise. Productivity falls.
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[660px] mx-auto mb-10">
              {' '} Most businesses don't realise that operational inefficiency quietly becomes one of the biggest barriers to growth. At Grow Spark Consulting, we help leadership teams redesign operations, streamline processes and build scalable operating systems that improve efficiency, profitability and long-term growth. {' '}
            </p>
            {' '}
            <div className="flex gap-4 justify-center flex-wrap">
              {' '}
              <a href="#assessment" className="btn btn-primary">
                Request an Operational Excellence Assessment™
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
              Does this sound familiar?
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
                Your team spends hours on repetitive manual work.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Different departments work in silos.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Information is difficult to find.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Projects are constantly delayed.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Employees perform the same task in different ways.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Approvals take too long.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Management lacks visibility into business performance.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Customer issues take too long to resolve.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Operational costs continue to increase.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Growth creates more problems instead of more opportunities.
              </p>
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '}
            <strong className="text-ink font-semibold">
              If these challenges feel familiar, your business may have outgrown its operating model.
            </strong>
            {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* HIDDEN COST */}
      {' '}
      <section id="whats-holding-you-back" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What's Really Happening
            </span>
            {' '}
            <h2>
              The hidden cost of operational complexity
            </h2>
            {' '}
            <p>
              Operational inefficiency doesn't always appear on a financial statement. Instead, it quietly affects every part of the business.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="tile-card">
              Employees spend more time on administration than value creation.
            </div>
            {' '}
            <div className="tile-card">
              Leaders make decisions with incomplete information.
            </div>
            {' '}
            <div className="tile-card">
              Customers experience inconsistent service.
            </div>
            {' '}
            <div className="tile-card">
              Processes become dependent on individuals instead of systems.
            </div>
            {' '}
            <div className="tile-card sm:col-span-2 lg:col-span-1">
              The organisation becomes slower while competitors become faster.
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '} Over time, these small inefficiencies compound into significant financial losses. {' '}
          </p>
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
              Complexity accumulates gradually
            </h2>
            {' '}
            <p>
              Businesses rarely become inefficient overnight.
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 mb-11" data-reveal="">
            {' '}
            <span className="chip chip-on-dark">
              More manual work
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Higher operating costs
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Longer delivery times
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Employee frustration
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Lower customer satisfaction
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Reduced profitability
            </span>
            {' '}
          </div>
          {' '}
          <p className="statement-line text-white text-center max-w-[680px] mx-auto" data-reveal="">
            {' '} The longer inefficiencies remain unresolved, the harder they become to fix. {' '}
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
              Our Operational Excellence Assessment™
            </h2>
            {' '}
            <p>
              Every engagement begins by understanding how your business operates today. We assess:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" data-reveal="">
            {' '}
            <div className="tile-card is-centered">
              Business Processes
            </div>
            {' '}
            <div className="tile-card is-centered">
              Operating Model
            </div>
            {' '}
            <div className="tile-card is-centered">
              Department Workflows
            </div>
            {' '}
            <div className="tile-card is-centered">
              Leadership Structure
            </div>
            {' '}
            <div className="tile-card is-centered">
              Technology Stack
            </div>
            {' '}
            <div className="tile-card is-centered">
              Customer Journey
            </div>
            {' '}
            <div className="tile-card is-centered">
              Performance Metrics
            </div>
            {' '}
            <div className="tile-card is-centered">
              Reporting Systems
            </div>
            {' '}
            <div className="tile-card is-centered">
              Decision-Making Processes
            </div>
            {' '}
            <div className="tile-card is-centered">
              Operational Risks
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[16.5px] text-ink-soft max-w-[640px] mx-auto mt-10" data-reveal="">
            {' '} The outcome is a practical roadmap that identifies the highest-impact improvements. {' '}
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
              The Grow Spark Operational Transformation Framework™
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
                    Understand how the organisation currently operates.
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
                    Identify bottlenecks, delays and operational constraints.
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
                    Redesign workflows, systems and governance.
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
                    Implement improvements alongside your leadership team.
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
                    Measure performance, optimise continuously and sustain operational excellence.
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
              What operational excellence delivers
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
                Reduced Operating Costs
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                02
              </span>
              <h3>
                Faster Decision-Making
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                03
              </span>
              <h3>
                Improved Employee Productivity
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                04
              </span>
              <h3>
                Higher Customer Satisfaction
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                05
              </span>
              <h3>
                Better Cross-Functional Collaboration
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                06
              </span>
              <h3>
                Scalable Operating Systems
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                07
              </span>
              <h3>
                Improved Visibility Through Dashboards & KPIs
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                08
              </span>
              <h3>
                Stronger Profitability
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                09
              </span>
              <h3>
                A Business Prepared For Sustainable Growth
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
              Across industries, same root problem
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" data-reveal="">
            {' '}
            <div className="tile-card">
              Manufacturing companies
            </div>
            {' '}
            <div className="tile-card">
              Healthcare organisations
            </div>
            {' '}
            <div className="tile-card">
              Retail businesses
            </div>
            {' '}
            <div className="tile-card">
              Professional services
            </div>
            {' '}
            <div className="tile-card">
              Education providers
            </div>
            {' '}
            <div className="tile-card">
              Construction firms
            </div>
            {' '}
            <div className="tile-card">
              Founder-led businesses
            </div>
            {' '}
            <div className="tile-card">
              Growing mid-market companies
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
                We improve businesses before recommending technology.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                02
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                We simplify operations instead of adding complexity.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                03
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                We design systems that scale.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                04
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                We focus on measurable business outcomes.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                05
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                We work alongside leadership teams during implementation.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                06
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                We create lasting operational improvements — not temporary fixes.
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
                Do you only recommend process improvements?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  No. Where appropriate, we redesign organisational structures, reporting systems, technology and governance as part of a complete operational transformation.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Will we need new software?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Not necessarily. We first optimise existing processes before recommending new technology.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Can operational improvements reduce costs?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Yes. Better processes often reduce waste, improve productivity and increase profitability without requiring major investments.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Do you support implementation?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Yes. We work closely with leadership teams to ensure improvements are successfully implemented and adopted.
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
            Better Operations Build Better Businesses.
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[560px] mx-auto">
            Operational excellence is not about working harder. It's about designing a business that works better.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="/contact/" className="btn btn-accent">
              Request Your Operational Excellence Assessment™
            </a>
            {' '}
            <a href="/strategy/" className="btn btn-secondary btn-on-dark">
              Book An Executive Strategy Session
            </a>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      <FooterCta />
      {' '}
    </main>
  );
}
