import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

/**
 * Transcribed from pages/framework/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "The Grow Spark Business Transformation Framework™ | Grow Spark Consulting",
  description: "Our disciplined five-phase methodology — Discover, Diagnose, Design, Deploy, Drive — for understanding a business, identifying its true constraints, designing the right transformation and driving measurable results.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/framework/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "The Grow Spark Business Transformation Framework™",
    description: "Most consulting engagements begin with recommendations. We believe transformation should begin with diagnosis. Five phases, from business problem to measurable outcome.",
    url: "https://www.growsparkconsulting.com/framework/",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Grow Spark Business Transformation Framework™",
    description: "Most consulting engagements begin with recommendations. We believe transformation should begin with diagnosis. Five phases, from business problem to measurable outcome.",
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
            <span aria-current="page">
              Our Framework
            </span>
          </li>
          {' '}
        </ol>
        {' '}
      </nav>
      {' '}
      {/* HERO */}
      {' '}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-24">
        {' '}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
        {' '}
        <div className="relative mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="max-w-[820px] mx-auto text-center" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Our Methodology
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              {' '} The Grow Spark Business Transformation Framework™ {' '}
            </h1>
            {' '}
            <div className="lede-statement mb-7">
              {' '}
              <p className="text-muted">
                Businesses don't need more advice.
              </p>
              {' '}
              <p className="text-muted">
                They need a system for turning strategy into measurable change.
              </p>
              {' '}
              <p className="text-ink">
                Most consulting engagements begin with recommendations. We believe transformation should begin with diagnosis.
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[680px] mx-auto mb-10">
              {' '} Because the wrong diagnosis produces the wrong strategy. And the wrong strategy produces expensive execution. The Grow Spark Business Transformation Framework™ is our disciplined five-phase methodology for understanding a business, identifying its true constraints, designing the right transformation and driving measurable results. {' '}
            </p>
            {' '}
            <div className="flex gap-4 justify-center flex-wrap">
              {' '}
              <a href="#assessment" className="btn btn-primary">
                Request a Business Transformation Assessment™
              </a>
              {' '}
              <a href="#phases" className="btn btn-secondary">
                Explore The Five Phases
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
      {/* WORD STRIP */}
      {' '}
      <div className="border-y border-hairline bg-paper-sunken py-7">
        {' '}
        <ol className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 flex flex-wrap items-center justify-center gap-2.5" data-reveal="">
          {' '}
          <li className="framework-mini-step">
            <span>
              01
            </span>
            Discover
          </li>
          {' '}
          <li className="framework-mini-step">
            <span>
              02
            </span>
            Diagnose
          </li>
          {' '}
          <li className="framework-mini-step">
            <span>
              03
            </span>
            Design
          </li>
          {' '}
          <li className="framework-mini-step">
            <span>
              04
            </span>
            Deploy
          </li>
          {' '}
          <li className="framework-mini-step">
            <span>
              05
            </span>
            Drive
          </li>
          {' '}
        </ol>
        {' '}
      </div>
      {' '}
      {/* WHY WE BUILT THE FRAMEWORK */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Why We Built The Framework
            </span>
            {' '}
            <h2>
              Every business is different. The fundamentals of transformation are not.
            </h2>
            {' '}
            <p>
              Businesses become difficult to grow for different reasons.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Growth has stalled.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Margins are disappearing.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Leadership isn't aligned.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Operations have become too complex.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                The business has outgrown its systems.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                The company doesn't know what's actually holding it back.
              </p>
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft mt-12 mb-6" data-reveal="">
            The problem is that businesses often respond to symptoms.
          </p>
          {' '}
          <div className="flex flex-wrap justify-center gap-3 max-w-[760px] mx-auto" data-reveal="">
            {' '}
            <span className="chip">
              More marketing
            </span>
            {' '}
            <span className="chip">
              More hiring
            </span>
            {' '}
            <span className="chip">
              More software
            </span>
            {' '}
            <span className="chip">
              More sales
            </span>
            {' '}
            <span className="chip">
              More meetings
            </span>
            {' '}
            <span className="chip">
              More technology
            </span>
            {' '}
          </div>
          {' '}
          <p className="statement-line text-center mt-10" data-reveal="">
            But more activity doesn't necessarily create more value.
          </p>
          {' '}
          <div className="text-center max-w-[640px] mx-auto mt-8" data-reveal="">
            {' '}
            <p className="text-[17px] text-ink-soft">
              The first job is to understand the business.
            </p>
            {' '}
            <p className="text-[17px] text-ink-soft">
              Then identify what matters most.
            </p>
            {' '}
            <p className="text-[17px] text-ink-soft">
              Then change it.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* THE FIVE PHASES */}
      {' '}
      <section id="phases" className="py-20 sm:py-24 lg:py-28 bg-paper-sunken scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              One Framework. Five Phases.
            </span>
            {' '}
            <h2>
              A disciplined path from business problem to measurable outcome
            </h2>
            {' '}
          </div>
          {' '}
          <div className="flex flex-col gap-6 lg:gap-8">
            {' '}
            <article className="phase-block" data-reveal="">
              {' '}
              <header className="phase-head">
                {' '}
                <span className="phase-num">
                  01
                </span>
                {' '}
                <div>
                  {' '}
                  <h3 className="subsection-heading">
                    Discover
                  </h3>
                  {' '}
                  <p className="text-[17px] text-muted mt-1">
                    Understand Before We Recommend.
                  </p>
                  {' '}
                </div>
                {' '}
              </header>
              {' '}
              <p className="text-[16px] text-ink-soft leading-relaxed max-w-[760px] mb-8">
                Transformation starts with context. We develop a complete understanding of the business, its market, leadership ambition and current operating environment.
              </p>
              {' '}
              <div className="phase-cols">
                {' '}
                <div>
                  {' '}
                  <span className="eyebrow block mb-4">
                    We Examine
                  </span>
                  {' '}
                  <div className="flex flex-wrap gap-2.5">
                    {' '}
                    <span className="chip">
                      Business model
                    </span>
                    {' '}
                    <span className="chip">
                      Market
                    </span>
                    {' '}
                    <span className="chip">
                      Customers
                    </span>
                    {' '}
                    <span className="chip">
                      Competition
                    </span>
                    {' '}
                    <span className="chip">
                      Leadership
                    </span>
                    {' '}
                    <span className="chip">
                      Products & services
                    </span>
                    {' '}
                    <span className="chip">
                      Revenue model
                    </span>
                    {' '}
                    <span className="chip">
                      Operations
                    </span>
                    {' '}
                    <span className="chip">
                      People
                    </span>
                    {' '}
                    <span className="chip">
                      Technology
                    </span>
                    {' '}
                    <span className="chip">
                      Current performance
                    </span>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
                <div className="phase-side">
                  {' '}
                  <span className="eyebrow block mb-3">
                    The Objective
                  </span>
                  {' '}
                  <p className="text-[16.5px] text-ink-soft leading-relaxed mb-7">
                    Build a clear picture of where the organisation is today — and where leadership wants it to go.
                  </p>
                  {' '}
                  <div className="phase-output">
                    {' '}
                    <span>
                      Output
                    </span>
                    {' '}
                    <p>
                      Business Discovery & Transformation Baseline
                    </p>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
            </article>
            {' '}
            <article className="phase-block" data-reveal="">
              {' '}
              <header className="phase-head">
                {' '}
                <span className="phase-num">
                  02
                </span>
                {' '}
                <div>
                  {' '}
                  <h3 className="subsection-heading">
                    Diagnose
                  </h3>
                  {' '}
                  <p className="text-[17px] text-muted mt-1">
                    Find The Constraint.
                  </p>
                  {' '}
                </div>
                {' '}
              </header>
              {' '}
              <p className="text-[16px] text-ink-soft leading-relaxed max-w-[760px] mb-8">
                The most important question isn't “What should we change?” It's “What is actually preventing the business from performing better?” We analyse the organisation to distinguish symptoms from root causes.
              </p>
              {' '}
              <div className="phase-cols">
                {' '}
                <div>
                  {' '}
                  <span className="eyebrow block mb-4">
                    We Identify
                  </span>
                  {' '}
                  <div className="flex flex-wrap gap-2.5">
                    {' '}
                    <span className="chip">
                      Growth constraints
                    </span>
                    {' '}
                    <span className="chip">
                      Profitability leakage
                    </span>
                    {' '}
                    <span className="chip">
                      Operational bottlenecks
                    </span>
                    {' '}
                    <span className="chip">
                      Leadership gaps
                    </span>
                    {' '}
                    <span className="chip">
                      Customer experience friction
                    </span>
                    {' '}
                    <span className="chip">
                      Technology limitations
                    </span>
                    {' '}
                    <span className="chip">
                      Scalability risks
                    </span>
                    {' '}
                    <span className="chip">
                      Strategic misalignment
                    </span>
                    {' '}
                    <span className="chip">
                      Market opportunities
                    </span>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
                <div className="phase-side">
                  {' '}
                  <span className="eyebrow block mb-3">
                    The Objective
                  </span>
                  {' '}
                  <p className="text-[16.5px] text-ink-soft leading-relaxed mb-7">
                    Identify the highest-impact constraints and opportunities. Not everything needs to change. The right things do.
                  </p>
                  {' '}
                  <div className="phase-output">
                    {' '}
                    <span>
                      Output
                    </span>
                    {' '}
                    <p>
                      Business Transformation Diagnosis
                    </p>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
            </article>
            {' '}
            <article className="phase-block" data-reveal="">
              {' '}
              <header className="phase-head">
                {' '}
                <span className="phase-num">
                  03
                </span>
                {' '}
                <div>
                  {' '}
                  <h3 className="subsection-heading">
                    Design
                  </h3>
                  {' '}
                  <p className="text-[17px] text-muted mt-1">
                    Build The Right Solution.
                  </p>
                  {' '}
                </div>
                {' '}
              </header>
              {' '}
              <p className="text-[16px] text-ink-soft leading-relaxed max-w-[760px] mb-8">
                Once the problem is understood, we design the transformation. Not a generic strategy — a business-specific architecture for the next stage.
              </p>
              {' '}
              <div className="phase-cols">
                {' '}
                <div>
                  {' '}
                  <span className="eyebrow block mb-4">
                    We May Design
                  </span>
                  {' '}
                  <div className="flex flex-wrap gap-2.5">
                    {' '}
                    <span className="chip">
                      Growth strategy
                    </span>
                    {' '}
                    <span className="chip">
                      Business model
                    </span>
                    {' '}
                    <span className="chip">
                      Operating model
                    </span>
                    {' '}
                    <span className="chip">
                      Organisation structure
                    </span>
                    {' '}
                    <span className="chip">
                      Customer experience
                    </span>
                    {' '}
                    <span className="chip">
                      Brand positioning
                    </span>
                    {' '}
                    <span className="chip">
                      Pricing architecture
                    </span>
                    {' '}
                    <span className="chip">
                      Technology roadmap
                    </span>
                    {' '}
                    <span className="chip">
                      AI strategy
                    </span>
                    {' '}
                    <span className="chip">
                      Sales systems
                    </span>
                    {' '}
                    <span className="chip">
                      Marketing systems
                    </span>
                    {' '}
                    <span className="chip">
                      Performance management
                    </span>
                    {' '}
                    <span className="chip">
                      Transformation roadmap
                    </span>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
                <div className="phase-side">
                  {' '}
                  <span className="eyebrow block mb-3">
                    The Objective
                  </span>
                  {' '}
                  <p className="text-[16.5px] text-ink-soft leading-relaxed mb-7">
                    Create a practical strategy that leadership can actually execute.
                  </p>
                  {' '}
                  <div className="phase-output">
                    {' '}
                    <span>
                      Output
                    </span>
                    {' '}
                    <p>
                      Transformation Blueprint & 90/180/365-Day Roadmap
                    </p>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
            </article>
            {' '}
            <article className="phase-block" data-reveal="">
              {' '}
              <header className="phase-head">
                {' '}
                <span className="phase-num">
                  04
                </span>
                {' '}
                <div>
                  {' '}
                  <h3 className="subsection-heading">
                    Deploy
                  </h3>
                  {' '}
                  <p className="text-[17px] text-muted mt-1">
                    Strategy Becomes Reality.
                  </p>
                  {' '}
                </div>
                {' '}
              </header>
              {' '}
              <p className="text-[16px] text-ink-soft leading-relaxed max-w-[760px] mb-8">
                A strategy sitting inside a presentation creates no value. Deployment is where transformation enters the business. We work alongside leadership and relevant teams to implement the highest-priority initiatives.
              </p>
              {' '}
              <div className="phase-cols">
                {' '}
                <div>
                  {' '}
                  <span className="eyebrow block mb-4">
                    Deployment May Include
                  </span>
                  {' '}
                  <div className="flex flex-wrap gap-2.5">
                    {' '}
                    <span className="chip">
                      Process redesign
                    </span>
                    {' '}
                    <span className="chip">
                      Operating model implementation
                    </span>
                    {' '}
                    <span className="chip">
                      System implementation
                    </span>
                    {' '}
                    <span className="chip">
                      Technology deployment
                    </span>
                    {' '}
                    <span className="chip">
                      Team restructuring
                    </span>
                    {' '}
                    <span className="chip">
                      KPI implementation
                    </span>
                    {' '}
                    <span className="chip">
                      Customer journey redesign
                    </span>
                    {' '}
                    <span className="chip">
                      Go-to-market execution
                    </span>
                    {' '}
                    <span className="chip">
                      Change management
                    </span>
                    {' '}
                    <span className="chip">
                      Capability building
                    </span>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
                <div className="phase-side">
                  {' '}
                  <span className="eyebrow block mb-3">
                    The Objective
                  </span>
                  {' '}
                  <p className="text-[16.5px] text-ink-soft leading-relaxed mb-7">
                    Move from recommendation to implementation without losing strategic direction.
                  </p>
                  {' '}
                  <div className="phase-output">
                    {' '}
                    <span>
                      Output
                    </span>
                    {' '}
                    <p>
                      Implemented Transformation Initiatives
                    </p>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
            </article>
            {' '}
            <article className="phase-block" data-reveal="">
              {' '}
              <header className="phase-head">
                {' '}
                <span className="phase-num">
                  05
                </span>
                {' '}
                <div>
                  {' '}
                  <h3 className="subsection-heading">
                    Drive
                  </h3>
                  {' '}
                  <p className="text-[17px] text-muted mt-1">
                    Make The Change Compound.
                  </p>
                  {' '}
                </div>
                {' '}
              </header>
              {' '}
              <p className="text-[16px] text-ink-soft leading-relaxed max-w-[760px] mb-8">
                Transformation isn't finished when implementation ends. The organisation needs to keep improving. We establish the systems, metrics and management rhythm required to sustain momentum.
              </p>
              {' '}
              <div className="phase-cols">
                {' '}
                <div>
                  {' '}
                  <span className="eyebrow block mb-4">
                    We Monitor
                  </span>
                  {' '}
                  <div className="flex flex-wrap gap-2.5">
                    {' '}
                    <span className="chip">
                      Revenue
                    </span>
                    {' '}
                    <span className="chip">
                      Profitability
                    </span>
                    {' '}
                    <span className="chip">
                      Cash flow
                    </span>
                    {' '}
                    <span className="chip">
                      Customer performance
                    </span>
                    {' '}
                    <span className="chip">
                      Operational performance
                    </span>
                    {' '}
                    <span className="chip">
                      Productivity
                    </span>
                    {' '}
                    <span className="chip">
                      Strategic KPIs
                    </span>
                    {' '}
                    <span className="chip">
                      Transformation milestones
                    </span>
                    {' '}
                    <span className="chip">
                      Business value
                    </span>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
                <div className="phase-side">
                  {' '}
                  <span className="eyebrow block mb-3">
                    The Objective
                  </span>
                  {' '}
                  <p className="text-[16.5px] text-ink-soft leading-relaxed mb-7">
                    Turn transformation into an ongoing capability rather than a one-time project.
                  </p>
                  {' '}
                  <div className="phase-output">
                    {' '}
                    <span>
                      Output
                    </span>
                    {' '}
                    <p>
                      Continuous Improvement & Growth System
                    </p>
                    {' '}
                  </div>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
            </article>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* AT A GLANCE */}
      {' '}
      <section id="framework" className="py-28 lg:py-36 bg-ink overflow-hidden scroll-mt-24" data-framework="">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head on-dark" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-3.5">
              The Framework At A Glance
            </span>
            {' '}
            <h2>
              Discover. Diagnose. Design. Deploy. Drive.
            </h2>
            {' '}
            <p>
              Every phase has defined objectives, deliverables, tools and success metrics — the foundation of the Grow Spark methodology.
            </p>
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
                    Understand the business.
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
                    Identify the real constraints.
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
                    Architect the transformation.
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
                    Implement the change.
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
                    Sustain and compound the results.
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
      {/* WHAT MAKES OUR METHOD DIFFERENT */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What Makes Our Method Different
            </span>
            {' '}
            <h2>
              Six principles behind every engagement
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                01
              </span>
              {' '}
              <div>
                {' '}
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  We Start With The Business Problem
                </h3>
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  We don't begin with a service catalogue. We begin with what's preventing the organisation from achieving its objectives.
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
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  We Diagnose Before We Prescribe
                </h3>
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  Recommendations come after understanding the business — not before.
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
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  We Connect Strategy To Execution
                </h3>
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  Strategy, people, processes and technology need to work together.
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
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  We Prioritise Impact
                </h3>
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  Not every opportunity deserves investment. We prioritise initiatives according to business impact, feasibility and strategic importance.
                </p>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                05
              </span>
              {' '}
              <div>
                {' '}
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  We Stay Accountable Beyond The Strategy
                </h3>
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  Transformation requires implementation. We can remain involved through deployment and continuous improvement.
                </p>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="why-card">
              {' '}
              <span className="num">
                06
              </span>
              {' '}
              <div>
                {' '}
                <h3 className="text-[16.5px] font-semibold mb-1.5">
                  We Measure Business Outcomes
                </h3>
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed">
                  Our work isn't measured by the number of presentations, meetings or deliverables produced. It is measured by what changes in the business.
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
      </section>
      {' '}
      {/* SCORECARD */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Every Transformation Has A Scorecard
            </span>
            {' '}
            <h2>
              We establish success metrics before transformation begins
            </h2>
            {' '}
            <p>
              Depending on the engagement, these may include:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="score-card">
              {' '}
              <h3>
                Revenue
              </h3>
              {' '}
              <ul>
                {' '}
                <li>
                  Growth rate
                </li>
                {' '}
                <li>
                  New revenue
                </li>
                {' '}
                <li>
                  Revenue per customer
                </li>
                {' '}
                <li>
                  Conversion
                </li>
                {' '}
              </ul>
              {' '}
            </div>
            {' '}
            <div className="score-card">
              {' '}
              <h3>
                Profitability
              </h3>
              {' '}
              <ul>
                {' '}
                <li>
                  Gross margin
                </li>
                {' '}
                <li>
                  Operating margin
                </li>
                {' '}
                <li>
                  Cost reduction
                </li>
                {' '}
                <li>
                  Profit contribution
                </li>
                {' '}
              </ul>
              {' '}
            </div>
            {' '}
            <div className="score-card">
              {' '}
              <h3>
                Cash Flow
              </h3>
              {' '}
              <ul>
                {' '}
                <li>
                  Working capital
                </li>
                {' '}
                <li>
                  Cash conversion
                </li>
                {' '}
                <li>
                  Operating cash flow
                </li>
                {' '}
              </ul>
              {' '}
            </div>
            {' '}
            <div className="score-card">
              {' '}
              <h3>
                Customer
              </h3>
              {' '}
              <ul>
                {' '}
                <li>
                  Retention
                </li>
                {' '}
                <li>
                  Customer lifetime value
                </li>
                {' '}
                <li>
                  Satisfaction
                </li>
                {' '}
                <li>
                  Repeat purchase
                </li>
                {' '}
              </ul>
              {' '}
            </div>
            {' '}
            <div className="score-card">
              {' '}
              <h3>
                Operations
              </h3>
              {' '}
              <ul>
                {' '}
                <li>
                  Productivity
                </li>
                {' '}
                <li>
                  Cycle time
                </li>
                {' '}
                <li>
                  Error rates
                </li>
                {' '}
                <li>
                  Capacity
                </li>
                {' '}
              </ul>
              {' '}
            </div>
            {' '}
            <div className="score-card">
              {' '}
              <h3>
                Organisation
              </h3>
              {' '}
              <ul>
                {' '}
                <li>
                  Leadership effectiveness
                </li>
                {' '}
                <li>
                  Accountability
                </li>
                {' '}
                <li>
                  Employee productivity
                </li>
                {' '}
                <li>
                  Execution speed
                </li>
                {' '}
              </ul>
              {' '}
            </div>
            {' '}
            <div className="score-card sm:col-span-2 lg:col-span-3">
              {' '}
              <h3>
                Enterprise Value
              </h3>
              {' '}
              <ul>
                {' '}
                <li>
                  The ultimate question: has the transformation made the business stronger and more valuable?
                </li>
                {' '}
              </ul>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* DIFFERENT TRANSFORMATION PATHS */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              One Framework. Different Transformation Paths.
            </span>
            {' '}
            <h2>
              The framework stays constant. The intervention changes.
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1" data-reveal="">
            {' '}
            <div className="path-row">
              {' '}
              <p className="path-label">
                A company launching a new business may need
              </p>
              {' '}
              <div className="path-chain">
                {' '}
                <span className="chip">
                  Market validation
                </span>
                {' '}
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                {' '}
                <span className="chip">
                  Business model
                </span>
                {' '}
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                {' '}
                <span className="chip">
                  Operating model
                </span>
                {' '}
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                {' '}
                <span className="chip">
                  Brand
                </span>
                {' '}
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                {' '}
                <span className="chip">
                  Go-to-market
                </span>
                {' '}
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                {' '}
                <span className="chip">
                  Launch
                </span>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="path-row">
              {' '}
              <p className="path-label">
                An established company may need
              </p>
              {' '}
              <div className="path-chain">
                {' '}
                <span className="chip">
                  Diagnosis
                </span>
                {' '}
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                {' '}
                <span className="chip">
                  Restructuring
                </span>
                {' '}
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                {' '}
                <span className="chip">
                  Process redesign
                </span>
                {' '}
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                {' '}
                <span className="chip">
                  Technology
                </span>
                {' '}
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                {' '}
                <span className="chip">
                  Growth
                </span>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
            <div className="path-row">
              {' '}
              <p className="path-label">
                A growing company may need
              </p>
              {' '}
              <div className="path-chain">
                {' '}
                <span className="chip">
                  Scalability
                </span>
                {' '}
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                {' '}
                <span className="chip">
                  Systems
                </span>
                {' '}
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                {' '}
                <span className="chip">
                  Leadership
                </span>
                {' '}
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                {' '}
                <span className="chip">
                  Customer experience
                </span>
                {' '}
                <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                {' '}
                <span className="chip">
                  Expansion
                </span>
                {' '}
              </div>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <div className="text-center max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '}
            <p className="text-[17px] text-ink-soft mb-2">
              The framework is consistent.
            </p>
            {' '}
            <p className="statement-line">
              The transformation isn't.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* FROM PROBLEM TO OUTCOME */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              From Problem To Outcome
            </span>
            {' '}
            <h2>
              How a constraint becomes a result
            </h2>
            {' '}
          </div>
          {' '}
          <div className="max-w-[620px] mx-auto flex flex-col items-center gap-3" data-reveal="">
            {' '}
            <div className="flow-step">
              {' '}
              <p className="ft">
                Business Problem
              </p>
              {' '}
              <p className="fd">
                Something is limiting growth or performance.
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step">
              {' '}
              <p className="ft">
                Assessment
              </p>
              {' '}
              <p className="fd">
                We understand the organisation.
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step">
              {' '}
              <p className="ft">
                Diagnosis
              </p>
              {' '}
              <p className="fd">
                We identify the real constraint.
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step">
              {' '}
              <p className="ft">
                Transformation Strategy
              </p>
              {' '}
              <p className="fd">
                We determine what needs to change.
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step">
              {' '}
              <p className="ft">
                Implementation
              </p>
              {' '}
              <p className="fd">
                We deploy the highest-impact initiatives.
              </p>
              {' '}
            </div>
            {' '}
            <ArrowRight className="w-5 h-5 text-accent rotate-90 shrink-0" aria-hidden="true" />
            {' '}
            <div className="flow-step is-outcome">
              {' '}
              <p className="ft">
                Business Outcome
              </p>
              {' '}
              <div className="flex flex-wrap justify-center gap-2.5 mt-4">
                {' '}
                <span className="chip">
                  Revenue
                </span>
                {' '}
                <span className="chip">
                  Profit
                </span>
                {' '}
                <span className="chip">
                  Cash flow
                </span>
                {' '}
                <span className="chip">
                  Performance
                </span>
                {' '}
                <span className="chip">
                  Enterprise value
                </span>
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
      {/* THREE TRANSFORMATION SITUATIONS */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Built For Three Transformation Situations
            </span>
            {' '}
            <h2>
              Wherever your business is, the framework applies
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="detail-card">
              {' '}
              <span className="eyebrow block mb-4">
                Build
              </span>
              {' '}
              <p className="text-[16.5px] text-ink-soft leading-relaxed">
                For founders, investors and organisations creating new businesses. {' '}
                <strong className="text-ink font-semibold">
                  We help establish the foundations required to build correctly from day one.
                </strong>
              </p>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <span className="eyebrow block mb-4">
                Transform
              </span>
              {' '}
              <p className="text-[16.5px] text-ink-soft leading-relaxed">
                For established businesses that need to modernise, restructure or improve performance. {' '}
                <strong className="text-ink font-semibold">
                  We identify what needs to change and guide the transformation.
                </strong>
              </p>
              {' '}
            </div>
            {' '}
            <div className="detail-card">
              {' '}
              <span className="eyebrow block mb-4">
                Scale
              </span>
              {' '}
              <p className="text-[16.5px] text-ink-soft leading-relaxed">
                For businesses that have proven demand but need stronger systems, leadership, technology and operating infrastructure. {' '}
                <strong className="text-ink font-semibold">
                  We help them grow sustainably.
                </strong>
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
      {/* TRANSFORMATION SHOULD CREATE VALUE */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head on-dark" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-3.5">
              Transformation Should Create Value
            </span>
            {' '}
            <h2>
              Every engagement is ultimately measured against one question: did we make the business better?
            </h2>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 mb-11" data-reveal="">
            {' '}
            <span className="chip chip-on-dark">
              Better revenue
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Better profit
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Better cash flow
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Better operations
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Better customer experience
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Better leadership
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Better systems
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Better resilience
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Greater enterprise value
            </span>
            {' '}
          </div>
          {' '}
          <p className="statement-line text-white text-center max-w-[680px] mx-auto" data-reveal="">
            {' '} If the answer isn't measurable, the transformation isn't finished. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* FINAL CTA */}
      {' '}
      <section id="assessment" className="py-24 sm:py-28 lg:py-32 text-center scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8" data-reveal="">
          {' '}
          <span className="eyebrow block mb-5">
            The Framework Is The Beginning
          </span>
          {' '}
          <h2 className="cta-heading mb-5">
            The Assessment Is Where Your Transformation Starts.
          </h2>
          {' '}
          <p className="text-ink-soft text-[17px] mb-10 max-w-[560px] mx-auto">
            Your business has its own constraints, its own opportunities and its own path. The first step is understanding where you are today.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="/contact/" className="btn btn-primary">
              Request Your Business Transformation Assessment™
            </a>
            {' '}
            <a href="/contact/" className="btn btn-secondary">
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
