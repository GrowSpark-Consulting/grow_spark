import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import FooterCta from '@/components/layout/FooterCta';

/**
 * Transcribed from pages/solutions/customer-experience/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "Customer Experience Is Holding Us Back | Grow Spark Consulting",
  description: "Customers don't experience your departments — they experience your business. Grow Spark redesigns customer journeys to increase satisfaction, loyalty, retention and long-term customer value.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/solutions/customer-experience/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "Customer Experience Is Holding Us Back | Grow Spark Consulting",
    description: "A great product cannot compensate for a frustrating experience. We redesign the complete customer journey, not just customer service.",
    url: "https://www.growsparkconsulting.com/solutions/customer-experience/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Experience Is Holding Us Back | Grow Spark Consulting",
    description: "A great product cannot compensate for a frustrating experience. We redesign the complete customer journey, not just customer service.",
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
              Customer Experience Is Holding Us Back
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
              Customer Experience Is Holding Us Back
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              {' '} Your Customers Are Telling You Something. Are You Listening? {' '}
            </h1>
            {' '}
            <div className="lede-statement mb-7">
              {' '}
              <p className="text-muted">
                Customers don't experience your departments. They experience your business.
              </p>
              {' '}
              <p className="text-muted">
                From the first interaction to purchase, delivery, support and renewal, every touchpoint shapes how they perceive your company.
              </p>
              {' '}
              <p className="text-ink">
                A great product cannot compensate for a frustrating experience.
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[640px] mx-auto mb-10">
              {' '} At Grow Spark Consulting, we help businesses redesign customer journeys and experiences to increase satisfaction, loyalty, retention and long-term customer value. {' '}
            </p>
            {' '}
            <div className="flex gap-4 justify-center flex-wrap">
              {' '}
              <a href="#assessment" className="btn btn-primary">
                Request a Customer Experience Assessment™
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
              Does your customer experience look like this?
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
                Customers abandon enquiries before purchasing.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Your teams provide inconsistent information.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Customers repeatedly contact support about the same issues.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Complaints are increasing.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Reviews don't reflect the quality you believe you provide.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Customers don't return as often as expected.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Your sales team constantly has to win back dissatisfied customers.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Different departments own different parts of the customer journey.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                Nobody has complete visibility of the customer experience.
              </p>
            </div>
            {' '}
            <div className="symptom-card">
              <span className="mark" aria-hidden="true">
                —
              </span>
              <p>
                You have customer data — but don't know what it is telling you.
              </p>
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '} If these sound familiar, {' '}
            <strong className="text-ink font-semibold">
              your customer experience may be costing your business more than you realise.
            </strong>
            {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* ONE EXPERIENCE */}
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
              Your customer doesn't see your organisation. They see one experience.
            </h2>
            {' '}
            <p>
              Inside the company, you may have:
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-3 max-w-[760px] mx-auto" data-reveal="">
            {' '}
            <span className="chip">
              Marketing
            </span>
            {' '}
            <span className="chip">
              Sales
            </span>
            {' '}
            <span className="chip">
              Operations
            </span>
            {' '}
            <span className="chip">
              Finance
            </span>
            {' '}
            <span className="chip">
              Customer Support
            </span>
            {' '}
            <span className="chip">
              Technology
            </span>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft mt-8" data-reveal="">
            But the customer doesn't see any of those departments.
          </p>
          {' '}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[760px] mx-auto mt-10" data-reveal="">
            {' '}
            <div className="bg-accent-tint rounded-card px-6 py-9 text-center">
              {' '}
              <p className="font-display font-semibold text-[17px] text-accent-deep">
                One Brand.
              </p>
              {' '}
            </div>
            {' '}
            <div className="bg-accent-tint rounded-card px-6 py-9 text-center">
              {' '}
              <p className="font-display font-semibold text-[17px] text-accent-deep">
                One Journey.
              </p>
              {' '}
            </div>
            {' '}
            <div className="bg-accent-tint rounded-card px-6 py-9 text-center">
              {' '}
              <p className="font-display font-semibold text-[17px] text-accent-deep">
                One Experience.
              </p>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '} If the experience feels disconnected, the customer doesn't blame the department. They blame the business. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* CX IS A GROWTH PROBLEM */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Why It Matters
            </span>
            {' '}
            <h2>
              Customer experience is a growth problem.
            </h2>
            {' '}
            <p>
              Poor customer experience doesn't only create unhappy customers. It affects:
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-3 max-w-[860px] mx-auto" data-reveal="">
            {' '}
            <span className="chip">
              Acquisition
            </span>
            {' '}
            <span className="chip">
              Conversion
            </span>
            {' '}
            <span className="chip">
              Retention
            </span>
            {' '}
            <span className="chip">
              Referrals
            </span>
            {' '}
            <span className="chip">
              Reviews
            </span>
            {' '}
            <span className="chip">
              Customer Lifetime Value
            </span>
            {' '}
            <span className="chip">
              Brand Reputation
            </span>
            {' '}
            <span className="chip">
              Profitability
            </span>
            {' '}
          </div>
          {' '}
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6 max-w-[760px] mx-auto mt-14" data-reveal="">
            {' '}
            <div className="flex-1 bg-paper-raised rounded-card px-8 py-10 text-center">
              {' '}
              <p className="font-display font-semibold text-[17px] text-muted">
                The customer you acquire
              </p>
              {' '}
            </div>
            {' '}
            <div className="flex items-center justify-center font-display font-bold text-[22px] text-accent shrink-0" aria-hidden="true">
              ≠
            </div>
            {' '}
            <div className="flex-1 bg-accent-tint rounded-card px-8 py-10 text-center">
              {' '}
              <p className="font-display font-semibold text-[17px] text-accent-deep">
                The customer you keep
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
      {/* COST OF A BROKEN JOURNEY */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head on-dark" data-reveal="">
            {' '}
            <span className="eyebrow !text-accent-bright block mb-3.5">
              The Cost Of A Broken Customer Journey
            </span>
            {' '}
            <h2>
              Small problems compound
            </h2>
            {' '}
          </div>
          {' '}
          <div className="max-w-[760px] mx-auto divide-y divide-white/10 border-y border-white/10" data-reveal="">
            {' '}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 py-4">
              {' '}
              <span className="font-display font-semibold text-[16.5px] text-white">
                A confusing website
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent-bright shrink-0" />
              {' '}
              <span className="text-[16.5px] text-[#9BA1A7]">
                Creates abandoned enquiries.
              </span>
              {' '}
            </div>
            {' '}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 py-4">
              {' '}
              <span className="font-display font-semibold text-[16.5px] text-white">
                A slow response
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent-bright shrink-0" />
              {' '}
              <span className="text-[16.5px] text-[#9BA1A7]">
                Creates lost sales.
              </span>
              {' '}
            </div>
            {' '}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 py-4">
              {' '}
              <span className="font-display font-semibold text-[16.5px] text-white">
                Poor onboarding
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent-bright shrink-0" />
              {' '}
              <span className="text-[16.5px] text-[#9BA1A7]">
                Creates unnecessary support.
              </span>
              {' '}
            </div>
            {' '}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 py-4">
              {' '}
              <span className="font-display font-semibold text-[16.5px] text-white">
                Inconsistent service
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent-bright shrink-0" />
              {' '}
              <span className="text-[16.5px] text-[#9BA1A7]">
                Creates distrust.
              </span>
              {' '}
            </div>
            {' '}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 py-4">
              {' '}
              <span className="font-display font-semibold text-[16.5px] text-white">
                Difficult returns
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent-bright shrink-0" />
              {' '}
              <span className="text-[16.5px] text-[#9BA1A7]">
                Create frustration.
              </span>
              {' '}
            </div>
            {' '}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 py-4">
              {' '}
              <span className="font-display font-semibold text-[16.5px] text-white">
                Poor follow-up
              </span>
              {' '}
              <ArrowRight className="w-4 h-4 text-accent-bright shrink-0" />
              {' '}
              <span className="text-[16.5px] text-[#9BA1A7]">
                Reduces repeat purchases.
              </span>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[#9BA1A7] text-[16.5px] mt-12 mb-6" data-reveal="">
            Eventually
          </p>
          {' '}
          <div className="flex flex-wrap justify-center gap-2.5 mb-11" data-reveal="">
            {' '}
            <span className="chip chip-on-dark">
              Customer acquisition becomes more expensive
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Retention falls
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Referrals decline
            </span>
            {' '}
            <span className="chip chip-on-dark">
              Brand reputation weakens
            </span>
            {' '}
          </div>
          {' '}
          <p className="statement-line text-white text-center max-w-[680px] mx-auto" data-reveal="">
            And growth becomes harder.
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
              Our Customer Experience Assessment™
            </h2>
            {' '}
            <p>
              We examine the complete customer journey — not just customer service. We assess:
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" data-reveal="">
            {' '}
            <div className="tile-card is-centered">
              Customer Acquisition
            </div>
            {' '}
            <div className="tile-card is-centered">
              Website & Digital Experience
            </div>
            {' '}
            <div className="tile-card is-centered">
              Sales Experience
            </div>
            {' '}
            <div className="tile-card is-centered">
              Onboarding
            </div>
            {' '}
            <div className="tile-card is-centered">
              Product / Service Delivery
            </div>
            {' '}
            <div className="tile-card is-centered">
              Communication
            </div>
            {' '}
            <div className="tile-card is-centered">
              Customer Support
            </div>
            {' '}
            <div className="tile-card is-centered">
              Complaint Resolution
            </div>
            {' '}
            <div className="tile-card is-centered">
              Retention
            </div>
            {' '}
            <div className="tile-card is-centered">
              Loyalty
            </div>
            {' '}
            <div className="tile-card is-centered">
              Reviews & Reputation
            </div>
            {' '}
            <div className="tile-card is-centered">
              Customer Data
            </div>
            {' '}
            <div className="tile-card is-centered">
              Internal Handoffs
            </div>
            {' '}
            <div className="tile-card is-centered">
              Technology
            </div>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[16.5px] text-ink-soft max-w-[660px] mx-auto mt-10" data-reveal="">
            {' '} The goal is to identify the moments that matter most and the friction that is costing your business customers. {' '}
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
              The Grow Spark Customer Experience Framework™
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
                    Understand your customers, expectations and existing journey.
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
                    Map
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Document the complete customer journey across every meaningful touchpoint.
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
                    Diagnose
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Identify friction, gaps and moments that damage trust or create unnecessary cost.
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
                    Redesign
                  </h3>
                  {' '}
                  <p className="text-[#9BA1A7] text-[13.5px] leading-relaxed lg:max-w-[180px]">
                    Create a simpler, more consistent and valuable customer experience.
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
                    Measure customer behaviour and continuously improve the experience.
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
      {/* WHAT WE CAN TRANSFORM */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              What We Can Transform
            </span>
            {' '}
            <h2>
              Every moment that shapes perception
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="detail-card">
              <h3>
                Customer Journey
              </h3>
              <p>
                Create a clear view of every stage from awareness to advocacy.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Digital Experience
              </h3>
              <p>
                Improve websites, portals and digital touchpoints.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Sales Experience
              </h3>
              <p>
                Make the path from enquiry to purchase simpler and more compelling.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Onboarding
              </h3>
              <p>
                Create a smoother transition from customer acquisition to delivery.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Service Experience
              </h3>
              <p>
                Improve communication, support and issue resolution.
              </p>
            </div>
            {' '}
            <div className="detail-card">
              <h3>
                Retention
              </h3>
              <p>
                Build systems and experiences that encourage customers to stay.
              </p>
            </div>
            {' '}
            <div className="detail-card sm:col-span-2 lg:col-span-3">
              <h3>
                Customer Intelligence
              </h3>
              <p>
                Turn customer data and feedback into actionable business insights.
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
              What a better customer experience delivers
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
                Higher Customer Satisfaction
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                02
              </span>
              <h3>
                Improved Conversion
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                03
              </span>
              <h3>
                Greater Retention
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                04
              </span>
              <h3>
                More Repeat Purchases
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                05
              </span>
              <h3>
                Higher Customer Lifetime Value
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                06
              </span>
              <h3>
                More Referrals
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                07
              </span>
              <h3>
                Better Reviews
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                08
              </span>
              <h3>
                Lower Service Costs
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                09
              </span>
              <h3>
                Stronger Brand Loyalty
              </h3>
            </div>
            {' '}
            <div className="outcome-card">
              <span className="n">
                10
              </span>
              <h3>
                Greater Profitability
              </h3>
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* EXPERIENCE BECOMES BRAND */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              The Bigger Picture
            </span>
            {' '}
            <h2>
              The experience your customers remember becomes your brand.
            </h2>
            {' '}
            <p>
              A company can spend millions building a brand. But customers ultimately judge that brand through their experience:
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-3 max-w-[860px] mx-auto" data-reveal="">
            {' '}
            <span className="chip">
              The Website
            </span>
            {' '}
            <span className="chip">
              The Sales Conversation
            </span>
            {' '}
            <span className="chip">
              The Product
            </span>
            {' '}
            <span className="chip">
              The Delivery
            </span>
            {' '}
            <span className="chip">
              The Support
            </span>
            {' '}
            <span className="chip">
              The Follow-Up
            </span>
            {' '}
            <span className="chip">
              The Resolution
            </span>
            {' '}
          </div>
          {' '}
          <div className="text-center max-w-[640px] mx-auto mt-12" data-reveal="">
            {' '}
            <p className="text-[17px] text-ink-soft mb-2">
              Every interaction either strengthens the brand or weakens it.
            </p>
            {' '}
            <p className="statement-line">
              Customer experience is where your brand becomes real.
            </p>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* WHO WE WORK WITH */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
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
              Built for businesses that compete on experience
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
              Growing mid-market companies
            </div>
            {' '}
            <div className="tile-card">
              Consumer brands
            </div>
            {' '}
            <div className="tile-card">
              E-commerce businesses
            </div>
            {' '}
            <div className="tile-card">
              Professional services firms
            </div>
            {' '}
            <div className="tile-card">
              Healthcare organisations
            </div>
            {' '}
            <div className="tile-card">
              Education companies
            </div>
            {' '}
            <div className="tile-card">
              Businesses experiencing declining retention
            </div>
            {' '}
            <div className="tile-card">
              Companies preparing for significant growth
            </div>
            {' '}
            <div className="tile-card sm:col-span-2 lg:col-span-3">
              Organisations that want customer experience to become a competitive advantage
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
      <section className="py-20 sm:py-24 lg:py-28">
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
              We don't treat customer experience as a customer-service project. We connect experience to business performance:
            </p>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap justify-center gap-3 max-w-[860px] mx-auto" data-reveal="">
            {' '}
            <span className="chip">
              Customer Behaviour
            </span>
            {' '}
            <span className="chip">
              Revenue
            </span>
            {' '}
            <span className="chip">
              Retention
            </span>
            {' '}
            <span className="chip">
              Operations
            </span>
            {' '}
            <span className="chip">
              Technology
            </span>
            {' '}
            <span className="chip">
              Brand
            </span>
            {' '}
            <span className="chip">
              Profitability
            </span>
            {' '}
          </div>
          {' '}
          <p className="statement-line text-center mt-10" data-reveal="">
            We look at the entire system.
          </p>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[640px] mx-auto mt-6" data-reveal="">
            {' '} Because improving one touchpoint while ignoring the rest of the journey doesn't transform the customer experience. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* FAQ */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
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
                Do you only work with customer service teams?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  No. Customer experience crosses the entire organisation. We work with leadership and the teams responsible for the complete customer journey.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Can you improve our website as part of the engagement?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Yes. The digital experience can be assessed as part of the broader customer journey.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Can this help increase repeat purchases?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Improving the customer journey can create opportunities to strengthen retention, loyalty and repeat behaviour. Specific outcomes depend on the business and customer model.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Do you analyse customer feedback?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  Yes. Customer feedback, reviews, support interactions and behavioural data can all contribute to the assessment.
                </p>
                {' '}
              </div>
              {' '}
            </details>
            {' '}
            <details className="drawer-accordion">
              {' '}
              <summary>
                Do you implement the recommendations?
              </summary>
              {' '}
              <div className="drawer-accordion-body">
                {' '}
                <p className="text-[16px] text-ink-soft leading-relaxed pb-4">
                  We can support implementation and transformation alongside the client's leadership and operational teams.
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
            Don't Just Acquire Customers. Give Them A Reason To Stay.
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[560px] mx-auto">
            Your next stage of growth may already be inside the customers you have. Let's find it.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="/contact/" className="btn btn-accent">
              Request Your Customer Experience Assessment™
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
