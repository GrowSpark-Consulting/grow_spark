import type { Metadata } from 'next';
import FooterCta from '@/components/layout/FooterCta';

/**
 * Transcribed from pages/solutions/profitability/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Revenue Is Growing. Profit Isn't. | Grow Spark Consulting",
  description: "More revenue doesn't always mean a better business. Grow Spark helps founders find the hidden factors reducing profitability and redesign the business for sustainable, profitable growth.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/solutions/profitability/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Revenue Is Growing. Profit Isn't. | Grow Spark Consulting",
    description: "If your revenue is increasing but your profit isn't, something is broken. We help founders rebuild the business for profitable growth.",
    url: "https://www.growsparkconsulting.com/solutions/profitability/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Is Growing. Profit Isn't. | Grow Spark Consulting",
    description: "If your revenue is increasing but your profit isn't, something is broken. We help founders rebuild the business for profitable growth.",
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
              Revenue Is Growing. Profit Isn’t.
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
              Revenue Is Growing. Profit Isn't.
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              {' '} More Revenue Doesn't Always Mean A Better Business. {' '}
            </h1>
            {' '}
            <div className="lede-statement mb-7">
              {' '}
              <p className="text-muted">
                Many businesses celebrate record sales. Yet behind the scenes…
              </p>
              {' '}
              <p className="text-muted">
                Cash flow is tightening. Margins are shrinking. Costs continue to rise.
              </p>
              {' '}
              <p className="text-ink">
                Teams are working harder. Owners are taking home less.
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[640px] mx-auto mb-10">
              {' '} If your revenue is increasing but your profit isn't, something is broken. At Grow Spark Consulting, we help founders identify the hidden factors reducing profitability and redesign their business for sustainable, profitable growth. {' '}
            </p>
            {' '}
            <div className="flex gap-4 justify-center flex-wrap">
              {' '}
              <a href="#assessment" className="btn btn-primary">
                Request a Profitability Assessment™
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
                Revenue is increasing, but profits remain flat.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Your operating costs keep rising.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Sales are growing, but cash flow feels unpredictable.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                You are winning more customers but making less money.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Discounting has become the easiest way to close deals.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Your team is busy, but productivity hasn't improved.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                You're unsure where profits are disappearing.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Growth feels harder than it should.
              </p>
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '} If these challenges sound familiar, the problem isn't revenue. {' '}
            <strong className="text-ink font-semibold">
              It's how your business converts revenue into profit.
            </strong>
            {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* PROFIT IS DESIGNED */}
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
              Profit is designed. Not discovered.
            </h2>
            {' '}
          </div>
          {' '}
          <div className="max-w-[640px] mx-auto text-center mb-10" data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed">
              Many companies assume profitability is the result of selling more.
            </p>
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed">
              The truth is different. Profitability is built through:
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-3 max-w-[860px] mx-auto" data-reveal="">
            {' '}
            <span className="chip">
              A Scalable Operating Model
            </span>
            {' '}
            <span className="chip">
              Healthy Pricing
            </span>
            {' '}
            <span className="chip">
              Efficient Processes
            </span>
            {' '}
            <span className="chip">
              Clear Financial Visibility
            </span>
            {' '}
            <span className="chip">
              Strong Customer Retention
            </span>
            {' '}
            <span className="chip">
              Operational Discipline
            </span>
            {' '}
            <span className="chip">
              Better Leadership Decisions
            </span>
            {' '}
          </div>
          {' '}
          <div className="max-w-[640px] mx-auto text-center mt-12" data-reveal="">
            {' '}
            <p className="text-[16.5px] text-ink-soft leading-relaxed">
              Businesses rarely become highly profitable by accident.
            </p>
            {' '}
            <p className="statement-line mt-2">
              They become profitable by design.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* HIDDEN REASONS */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
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
              The hidden reasons profit declines
            </h2>
            {' '}
            <p>
              Revenue growth can hide serious structural problems. Common causes include:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="tile-card">
              Pricing that no longer reflects value.
            </div>
            {' '}
            <div className="tile-card">
              High customer acquisition costs.
            </div>
            {' '}
            <div className="tile-card">
              Manual operational processes.
            </div>
            {' '}
            <div className="tile-card">
              Poor inventory management.
            </div>
            {' '}
            <div className="tile-card">
              Low employee productivity.
            </div>
            {' '}
            <div className="tile-card">
              Unclear financial reporting.
            </div>
            {' '}
            <div className="tile-card">
              Inefficient customer service.
            </div>
            {' '}
            <div className="tile-card">
              Excessive overheads.
            </div>
            {' '}
            <div className="tile-card">
              Lack of performance metrics.
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '} Without identifying the real cause, businesses often continue growing while becoming less profitable. {' '}
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
              The Cost Of Ignoring Profitability
            </span>
            {' '}
            <h2>
              Every month it continues, the business gets weaker
            </h2>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 mb-11" data-reveal="">
            {' '}
            <span className="chip chip-on-dark">
              Cash reserves reduce
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Investment opportunities disappear
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Expansion becomes more difficult
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Pressure on leadership increases
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Business valuation decreases
            </span>
            {' '}
          </div>
          {' '}
          <p className="statement-line text-white text-center max-w-[680px] mx-auto" data-reveal="">
            {' '} Revenue may continue to grow. But the business becomes weaker. {' '}
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
              Our Profitability Assessment™
            </h2>
            {' '}
            <p>
              Every engagement begins with understanding how your business creates — and loses — value. We evaluate:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" data-reveal="">
            {' '}
            <div className="tile-card is-centered">
              Revenue Streams
            </div>
            {' '}
            <div className="tile-card is-centered">
              Pricing Strategy
            </div>
            {' '}
            <div className="tile-card is-centered">
              Gross Margins
            </div>
            {' '}
            <div className="tile-card is-centered">
              Operating Costs
            </div>
            {' '}
            <div className="tile-card is-centered">
              Customer Acquisition Costs
            </div>
            {' '}
            <div className="tile-card is-centered">
              Customer Lifetime Value
            </div>
            {' '}
            <div className="tile-card is-centered">
              Operational Efficiency
            </div>
            {' '}
            <div className="tile-card is-centered">
              Sales Performance
            </div>
            {' '}
            <div className="tile-card is-centered">
              Financial Reporting
            </div>
            {' '}
            <div className="tile-card is-centered">
              Leadership Decision-Making
            </div>
            {' '}
            <div className="tile-card is-centered col-span-2 sm:col-span-1">
              Business Model
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[16.5px] text-ink-soft max-w-[640px] mx-auto mt-10" data-reveal="">
            {' '} The result is a practical roadmap to improve profitability without relying solely on increasing sales. {' '}
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
              The Grow Spark Profit Transformation Framework™
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
                    Understand how your business generates revenue and profit.
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
                    Analyse
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Identify the hidden financial and operational constraints reducing profitability.
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
                    Optimise
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Improve pricing, operations, customer value and resource allocation.
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
                    Execute
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Implement improvements across leadership, systems and operations.
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
                    Grow
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Build a business that creates sustainable profit and long-term enterprise value.
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
              What profitability transformation delivers
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
                Higher Profit Margins
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                02
              </span>
              <h3>
                Healthier Cash Flow
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                03
              </span>
              <h3>
                Improved Pricing Strategy
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                04
              </span>
              <h3>
                Reduced Operational Waste
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                05
              </span>
              <h3>
                Better Financial Visibility
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                06
              </span>
              <h3>
                More Productive Teams
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                07
              </span>
              <h3>
                Stronger Customer Retention
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                08
              </span>
              <h3>
                Higher Business Valuation
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
              Built for growing, ambitious businesses
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
                Family-owned companies
              </li>
              {' '}
              <li>
                Manufacturing businesses
              </li>
              {' '}
              <li>
                Retail organisations
              </li>
              {' '}
              <li>
                Professional services firms
              </li>
              {' '}
              <li>
                Healthcare providers
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
                Businesses preparing for expansion or investment.
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
              Why leadership teams choose to work with us
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
                We don't focus on revenue alone. We focus on building stronger businesses.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                02
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                We identify hidden financial constraints.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                03
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                We combine strategy with operational improvement.
              </p>
            </div>
            {' '}
            <div className="why-card">
              <span className="num">
                04
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                We deliver measurable business outcomes.
              </p>
            </div>
            {' '}
            <div className="why-card sm:col-span-2">
              <span className="num">
                05
              </span>
              <p className="text-[17px] font-medium text-ink-soft">
                We partner with leadership teams — not just finance teams.
              </p>
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '} Because a growing business should also be a profitable business. {' '}
          </p>
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
                Will you audit our financial statements?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  We review financial performance as one component of a broader business profitability assessment, focusing on strategic and operational improvements rather than statutory auditing.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Can profitability improve without increasing sales?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Yes. Many organisations improve profitability through pricing, operational efficiency, customer retention and better resource allocation.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Do you work with finance teams?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Yes. We collaborate with leadership, finance and operations teams to ensure recommendations are practical and measurable.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Will this help improve business valuation?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  In many cases, improving profitability, cash flow and operational efficiency strengthens the overall value and attractiveness of the business.
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
            Revenue Builds Attention.
            <br />
            Profit Builds Great Businesses.
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[560px] mx-auto">
            Stop chasing growth that doesn't create value. Build a business that's stronger, healthier and more profitable.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="/contact/" className="btn btn-accent">
              Request Your Profitability Assessment™
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
