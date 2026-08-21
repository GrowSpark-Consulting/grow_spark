import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import FooterCta from '@/components/layout/FooterCta';

/**
 * Transcribed from pages/solutions/scalable-systems/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "We Need Scalable Systems | Grow Spark Consulting",
  description: "Your business shouldn't break because it grows. Grow Spark designs the operating systems, management infrastructure and technology architecture required to scale with control.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/solutions/scalable-systems/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "We Need Scalable Systems | Grow Spark Consulting",
    description: "Growth exposes weak systems. We help build the operating, management and technology infrastructure behind sustainable scale.",
    url: "https://www.growsparkconsulting.com/solutions/scalable-systems/",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Need Scalable Systems | Grow Spark Consulting",
    description: "Growth exposes weak systems. We help build the operating, management and technology infrastructure behind sustainable scale.",
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
              We Need Scalable Systems
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
              We Need Scalable Systems
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              {' '} Your Business Shouldn't Break Because It Grows. Build The Systems That Make Growth Possible. {' '}
            </h1>
            {' '}
            <div className="lede-statement mb-7">
              {' '}
              <p className="text-muted">
                Growth creates complexity. More customers. More employees.
              </p>
              {' '}
              <p className="text-muted">
                More locations. More products. More transactions. More decisions.
              </p>
              {' '}
              <p className="text-ink">
                What worked when the company was smaller can become the very thing preventing it from scaling.
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[640px] mx-auto mb-10">
              {' '} At Grow Spark Consulting, we help businesses design the operating systems, management infrastructure and technology architecture required to scale with control and confidence. {' '}
            </p>
            {' '}
            <div className="flex gap-4 justify-center flex-wrap">
              {' '}
              <a href="#assessment" className="btn btn-primary">
                Request a Scalability Assessment™
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
              Is your business outgrowing its systems?
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
                Your founder still approves everything.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Critical information lives in spreadsheets.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Employees rely on individual knowledge.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Processes aren't documented.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Different teams use different systems.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Management doesn't have real-time visibility.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Hiring more people creates more complexity.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Customer volume is increasing faster than operational capacity.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Your technology works — but doesn't scale.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                You are growing, but the business feels increasingly difficult to manage.
              </p>
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '} If this sounds familiar, {' '}
            <strong className="text-ink font-semibold">
              your business may have outgrown its current infrastructure.
            </strong>
            {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* GROWTH EXPOSES WEAK SYSTEMS */}
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
              Growth exposes weak systems.
            </h2>
            {' '}
            <p>
              A business can survive with imperfect systems when it is small.
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-3 max-w-[860px] mx-auto" data-reveal="">
            {' '}
            <span className="chip">
              The founder can solve problems personally
            </span>
            {' '}
            <span className="chip">
              A few employees can communicate directly
            </span>
            {' '}
            <span className="chip">
              A spreadsheet can manage operations
            </span>
            {' '}
            <span className="chip">
              Manual processes can keep things moving
            </span>
            {' '}
          </div>
          {' '}
          <p className="statement-line text-center mt-12 mb-10" data-reveal="">
            But scale changes everything.
          </p>
          {' '}
          <div className="grid-hairline grid-cols-1 max-w-[760px] mx-auto" data-reveal="">
            {' '}
            <div className="tile-card gap-4 flex-wrap">
              {' '}
              <span className="font-display font-semibold text-ink">
                More people
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" />
              {' '}
              <span>
                Create more coordination.
              </span>
              {' '}
            </div>
            {' '}
            <div className="tile-card gap-4 flex-wrap">
              {' '}
              <span className="font-display font-semibold text-ink">
                More customers
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" />
              {' '}
              <span>
                Create more transactions.
              </span>
              {' '}
            </div>
            {' '}
            <div className="tile-card gap-4 flex-wrap">
              {' '}
              <span className="font-display font-semibold text-ink">
                More locations
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent shrink-0" />
              {' '}
              <span>
                Create more complexity.
              </span>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '} Eventually, informal systems stop working. The business needs infrastructure. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* FOUNDER AS OPERATING SYSTEM */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              A Warning Sign
            </span>
            {' '}
            <h2>
              The founder shouldn't be the operating system.
            </h2>
            {' '}
            <p>
              One of the clearest signs that a business isn't ready to scale:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="tile-card">
              The founder approves decisions.
            </div>
            {' '}
            <div className="tile-card">
              The founder knows the customers.
            </div>
            {' '}
            <div className="tile-card">
              The founder solves operational problems.
            </div>
            {' '}
            <div className="tile-card">
              The founder manages key relationships.
            </div>
            {' '}
            <div className="tile-card sm:col-span-2 lg:col-span-1">
              The founder knows where everything is.
            </div>
            {' '}
          </div>
          {' '}
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6 max-w-[760px] mx-auto mt-14" data-reveal="">
            {' '}
            <div className="flex-1 bg-paper-raised rounded-card px-8 py-10 text-center">
              {' '}
              <span className="eyebrow block mb-3">
                At ₹2 Crore
              </span>
              {' '}
              <p className="font-display font-semibold text-[17px] text-muted">
                That may work.
              </p>
              {' '}
            </div>
            {' '}
            <div className="flex items-center justify-center text-accent shrink-0" aria-hidden="true">
              {' '}
              <ArrowRight className="w-6 h-6 rotate-90 sm:rotate-0" />
              {' '}
            </div>
            {' '}
            <div className="flex-1 bg-accent-tint rounded-card px-8 py-10 text-center">
              {' '}
              <span className="eyebrow !text-accent-deep block mb-3">
                At ₹20 Crore
              </span>
              {' '}
              <p className="font-display font-semibold text-[17px] text-accent-deep">
                It becomes dangerous.
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '} A scalable business transfers knowledge from people into systems. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* COST OF SCALING WITHOUT INFRASTRUCTURE */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head on-dark" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-3.5">
              The Cost Of Scaling Without Infrastructure
            </span>
            {' '}
            <h2>
              What growth without systems creates
            </h2>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 mb-11" data-reveal="">
            {' '}
            <span className="chip chip-on-dark">
              Operational bottlenecks
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Higher employee costs
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Poor customer experiences
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Inconsistent execution
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Management blind spots
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Increasing technology costs
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Slower decision-making
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Founder dependency
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Reduced profitability
            </span>
            {' '}
          </div>
          {' '}
          <p className="statement-line text-white text-center max-w-[680px] mx-auto" data-reveal="">
            {' '} Eventually, growth itself becomes the problem. {' '}
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
              Our Scalability Assessment™
            </h2>
            {' '}
            <p>
              We evaluate whether your business infrastructure is ready for its next stage of growth. We assess:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" data-reveal="">
            {' '}
            <div className="tile-card is-centered">
              Operating Model
            </div>
            {' '}
            <div className="tile-card is-centered">
              Organisation Structure
            </div>
            {' '}
            <div className="tile-card is-centered">
              Business Processes
            </div>
            {' '}
            <div className="tile-card is-centered">
              SOPs
            </div>
            {' '}
            <div className="tile-card is-centered">
              Technology Architecture
            </div>
            {' '}
            <div className="tile-card is-centered">
              CRM
            </div>
            {' '}
            <div className="tile-card is-centered">
              ERP
            </div>
            {' '}
            <div className="tile-card is-centered">
              Reporting
            </div>
            {' '}
            <div className="tile-card is-centered">
              KPIs
            </div>
            {' '}
            <div className="tile-card is-centered">
              Data
            </div>
            {' '}
            <div className="tile-card is-centered">
              Decision-Making
            </div>
            {' '}
            <div className="tile-card is-centered">
              Customer Operations
            </div>
            {' '}
            <div className="tile-card is-centered">
              People & Responsibilities
            </div>
            {' '}
            <div className="tile-card is-centered">
              Founder Dependency
            </div>
            {' '}
            <div className="tile-card is-centered">
              Scalability Risks
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[16.5px] text-ink-soft max-w-[640px] mx-auto mt-10" data-reveal="">
            {' '} The outcome is a practical roadmap showing what must change before the next stage of growth. {' '}
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
              The Grow Spark Scale Framework™
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
                    Map
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Understand how the business currently operates.
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
                    Identify
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Find the constraints that prevent scale.
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
                    Systemise
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Convert critical processes into repeatable systems.
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
                    Integrate
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Connect people, processes, data and technology.
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
                    Scale
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Create an operating environment capable of supporting sustainable growth.
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
      {/* WHAT WE HELP BUILD */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What We Help Build
            </span>
            {' '}
            <h2>
              The infrastructure behind sustainable growth
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="detail-card">
              <h3>
                Operating Systems
              </h3>
              <p>
                Clear processes, responsibilities and management rhythms.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Management Systems
              </h3>
              <p>
                KPIs, dashboards, reporting and decision-making frameworks.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                People Systems
              </h3>
              <p>
                Roles, accountability, organisational structures and hiring requirements.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Technology Systems
              </h3>
              <p>
                CRM, ERP, workflow systems and digital platforms.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Customer Systems
              </h3>
              <p>
                Repeatable customer acquisition, onboarding and service processes.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Knowledge Systems
              </h3>
              <p>
                SOPs, documentation and institutional knowledge.
              </p>
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
              What scalable systems deliver
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" data-reveal="">
            {' '}
            <div className="outcome-card">
              <span className="n">
                01
              </span>
              <h3>
                Reduced Founder Dependency
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
                More Predictable Operations
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                04
              </span>
              <h3>
                Improved Employee Productivity
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                05
              </span>
              <h3>
                Better Management Visibility
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                06
              </span>
              <h3>
                Consistent Customer Experience
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                07
              </span>
              <h3>
                Lower Operational Risk
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                08
              </span>
              <h3>
                Improved Scalability
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                09
              </span>
              <h3>
                Greater Profitability
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                10
              </span>
              <h3>
                A Business That Can Grow Without Becoming Unmanageable
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
              Built for businesses outgrowing their infrastructure
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="tile-card">
              Founder-led businesses experiencing rapid growth
            </div>
            {' '}
            <div className="tile-card">
              Companies preparing to cross their next revenue milestone
            </div>
            {' '}
            <div className="tile-card">
              Businesses expanding into new locations
            </div>
            {' '}
            <div className="tile-card">
              Companies adding significant numbers of employees
            </div>
            {' '}
            <div className="tile-card">
              Businesses preparing for investment or acquisition
            </div>
            {' '}
            <div className="tile-card">
              Family-owned businesses transitioning to professional management
            </div>
            {' '}
            <div className="tile-card sm:col-span-2 lg:col-span-3">
              Organisations whose existing systems can no longer support growth
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
            <p>
              We don't install software and call it transformation. We first understand how your business works. Then we design the operating architecture around the business you want to become.
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-3 max-w-[760px] mx-auto" data-reveal="">
            {' '}
            <span className="chip">
              Strategy
            </span>
            {' '}
            <span className="chip">
              People
            </span>
            {' '}
            <span className="chip">
              Processes
            </span>
            {' '}
            <span className="chip">
              Data
            </span>
            {' '}
            <span className="chip">
              Technology
            </span>
            {' '}
            <span className="chip">
              Leadership
            </span>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft mt-6" data-reveal="">
            All connected.
          </p>
          {' '}
          <div className="text-center max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '}
            <p className="text-[17px] text-ink-soft mb-2">
              Because scalable businesses aren't created by adding more people.
            </p>
            {' '}
            <p className="statement-line">
              They're created by building better systems.
            </p>
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
                Do you provide software?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  We can advise on the technology architecture and coordinate implementation through the appropriate technology specialists.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Do we need an ERP or CRM?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Not necessarily. We first determine what the business actually needs before recommending technology.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Can this help reduce founder dependency?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Yes. Founder dependency is one of the areas specifically assessed during the Scalability Assessment™.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Is this only for large companies?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  No. The ideal time to build scalable infrastructure is before complexity becomes expensive.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Can you help us prepare for rapid growth?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Yes. We can design the operating model, systems and roadmap around your expected growth trajectory.
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
            Build A Business That Can Grow Without Breaking.
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[560px] mx-auto">
            Growth shouldn't create chaos. It should create opportunity. Let's build the systems that make your next stage possible.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="/contact/" className="btn btn-accent">
              Request Your Scalability Assessment™
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
