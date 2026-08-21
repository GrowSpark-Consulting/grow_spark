import type { Metadata } from 'next';
import FooterCta from '@/components/layout/FooterCta';

/**
 * Transcribed from pages/solutions/modernise-your-business/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Modernise Your Business | Grow Spark Consulting",
  description: "Technology is no longer a support function — it's the foundation of modern business. Grow Spark helps organisations modernise operations, customer experience and business model for a digital-first world.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/solutions/modernise-your-business/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Modernise Your Business | Grow Spark Consulting",
    description: "Digital transformation is not a technology project. We modernise the operating model, not just the systems.",
    url: "https://www.growsparkconsulting.com/solutions/modernise-your-business/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modernise Your Business | Grow Spark Consulting",
    description: "Digital transformation is not a technology project. We modernise the operating model, not just the systems.",
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
              Modernise Your Business
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
              Modernise Your Business
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              {' '} The Future Won't Wait. Modernise Your Business Before Your Competitors Do. {' '}
            </h1>
            {' '}
            <div className="lede-statement mb-7">
              {' '}
              <p className="text-muted">
                Markets are changing faster than ever. Customers expect seamless digital experiences.
              </p>
              {' '}
              <p className="text-muted">
                Employees demand better tools. Data has become a competitive advantage.
              </p>
              {' '}
              <p className="text-ink">
                Technology is no longer a support function. It's the foundation of modern business.
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[660px] mx-auto mb-10">
              {' '} Yet many organisations continue operating with outdated processes, disconnected systems and legacy thinking. At Grow Spark Consulting, we help businesses modernise their operations, customer experience and business model to compete confidently in a digital-first world. {' '}
            </p>
            {' '}
            <div className="flex gap-4 justify-center flex-wrap">
              {' '}
              <a href="#assessment" className="btn btn-primary">
                Request a Digital Transformation Assessment™
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
              Is your business ready for the next decade?
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
                Your systems don't communicate with each other.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Critical decisions rely on spreadsheets.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Customer information is scattered across departments.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Your employees spend too much time on manual tasks.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Customers expect a better digital experience.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Competitors are moving faster.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Innovation feels slow.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Leadership knows change is necessary — but isn't sure where to begin.
              </p>
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[660px] mx-auto mt-12" data-reveal="">
            {' '} If these challenges sound familiar, your business doesn't simply need new software. {' '}
            <strong className="text-ink font-semibold">
              It needs a modern operating model.
            </strong>
            {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* NOT A TECH PROJECT */}
      {' '}
      <section id="whats-holding-you-back" className="py-20 sm:py-24 lg:py-28 scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Reframing The Problem
            </span>
            {' '}
            <h2>
              Digital transformation is not a technology project.
            </h2>
            {' '}
            <p>
              Many businesses assume digital transformation means buying new software. It doesn't. Technology alone doesn't create transformation. Real transformation begins with rethinking how the business creates value. That includes:
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-3 max-w-[860px] mx-auto" data-reveal="">
            {' '}
            <span className="chip">
              Business Processes
            </span>
            {' '}
            <span className="chip">
              Customer Experience
            </span>
            {' '}
            <span className="chip">
              Decision Making
            </span>
            {' '}
            <span className="chip">
              Leadership
            </span>
            {' '}
            <span className="chip">
              Culture
            </span>
            {' '}
            <span className="chip">
              Technology
            </span>
            {' '}
            <span className="chip">
              Data
            </span>
            {' '}
            <span className="chip">
              People
            </span>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[660px] mx-auto mt-12" data-reveal="">
            {' '} The organisations that modernise all of these outperform those that only modernise systems. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* COST OF STANDING STILL */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head on-dark" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-3.5">
              The Cost Of Standing Still
            </span>
            {' '}
            <h2>
              Every year, the gap gets wider
            </h2>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 mb-11" data-reveal="">
            {' '}
            <span className="chip chip-on-dark">
              Competitors improve
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Customer expectations increase
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Technology evolves
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Operating costs rise
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Talent expects better systems
            </span>
            {' '}
          </div>
          {' '}
          <p className="statement-line text-white text-center max-w-[680px] mx-auto" data-reveal="">
            {' '} The longer transformation is delayed, the more expensive catching up becomes. The greatest risk isn't transformation. {' '}
            <span className="text-accent-bright">
              It's irrelevance.
            </span>
            {' '}
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
              Our Digital Transformation Assessment™
            </h2>
            {' '}
            <p>
              Every engagement begins by understanding where your organisation is today. We evaluate:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" data-reveal="">
            {' '}
            <div className="tile-card is-centered">
              Business Model
            </div>
            {' '}
            <div className="tile-card is-centered">
              Customer Journey
            </div>
            {' '}
            <div className="tile-card is-centered">
              Operating Model
            </div>
            {' '}
            <div className="tile-card is-centered">
              Technology Landscape
            </div>
            {' '}
            <div className="tile-card is-centered">
              Digital Maturity
            </div>
            {' '}
            <div className="tile-card is-centered">
              Leadership Alignment
            </div>
            {' '}
            <div className="tile-card is-centered">
              Process Efficiency
            </div>
            {' '}
            <div className="tile-card is-centered">
              Data Strategy
            </div>
            {' '}
            <div className="tile-card is-centered">
              Employee Experience
            </div>
            {' '}
            <div className="tile-card is-centered">
              Growth Readiness
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[16.5px] text-ink-soft max-w-[660px] mx-auto mt-10" data-reveal="">
            {' '} The outcome is a practical roadmap that prioritises initiatives based on business value — not technology trends. {' '}
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
              The Grow Spark Digital Transformation Framework™
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
                    Understand
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Gain a complete view of the organisation, its goals and current maturity.
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
                    Assess
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Identify digital gaps, operational constraints and opportunities for improvement.
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
                    Reimagine
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Design a future-ready business model, operating structure and customer experience.
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
                    Transform
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Guide implementation across people, processes and technology.
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
                    Measure outcomes, optimise continuously and build long-term competitive advantage.
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
              What modernisation delivers
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
                Modern Operating Models
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                02
              </span>
              <h3>
                Improved Customer Experiences
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                03
              </span>
              <h3>
                Faster Decision-Making
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                04
              </span>
              <h3>
                Higher Operational Efficiency
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                05
              </span>
              <h3>
                Better Collaboration Across Teams
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                06
              </span>
              <h3>
                Scalable Digital Systems
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                07
              </span>
              <h3>
                Greater Business Agility
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                08
              </span>
              <h3>
                Stronger Competitive Positioning
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                09
              </span>
              <h3>
                Long-Term Enterprise Value
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
              Built for organisations ready to modernise
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="tile-card">
              Established businesses
            </div>
            {' '}
            <div className="tile-card">
              Family-owned companies
            </div>
            {' '}
            <div className="tile-card">
              Manufacturing organisations
            </div>
            {' '}
            <div className="tile-card">
              Healthcare providers
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
              Education institutions
            </div>
            {' '}
            <div className="tile-card sm:col-span-2">
              Mid-market companies preparing for their next stage of growth
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
                Business-first transformation.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                02
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                Technology aligned with strategy.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                03
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                Executive-level advisory.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                04
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                Independent recommendations.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                05
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                Long-term implementation support.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                06
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                Focus on measurable business outcomes.
              </p>
            </div>
            {' '}
            <div className="why-card sm:col-span-2">
              <span className="num">
                07
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                We modernise businesses — not just systems.
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
                Is digital transformation only for large enterprises?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  No. Growing businesses often benefit the most because modern systems and processes create a stronger foundation for future growth.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Will we need to replace all of our existing systems?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Not necessarily. We evaluate your current environment and recommend improvements only where they create measurable business value.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                How long does digital transformation take?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Every organisation is different. Most programmes are delivered in phases, allowing businesses to realise value while continuing normal operations.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Do you also implement technology?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Grow Spark leads the business transformation strategy and programme governance. Where specialised technology implementation is required, we work with the appropriate delivery teams to ensure successful execution.
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
            Tomorrow's Market Leaders Are Building Today.
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[560px] mx-auto">
            Transformation doesn't begin with technology. It begins with a decision. Let's build a business that's ready for the future.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="/contact/" className="btn btn-accent">
              Request Your Digital Transformation Assessment™
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
