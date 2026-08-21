import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

/**
 * Transcribed from pages/rnd/index.html by scripts/html-to-tsx.py.
 * Element tree, classes, content and metadata are unchanged; only the
 * JSX-required attribute spellings differ from the source markup.
 */
export const metadata: Metadata = {
  title: "R&D — We Study How Businesses Grow | Grow Spark Consulting",
  description: "Grow Spark Research explores the economics, systems and strategic decisions behind business growth — from customer lifetime value and margins to AI adoption, operating models and scalable business architecture.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/rnd/" },
  openGraph: {
    type: "website",
    siteName: "Grow Spark Consulting",
    title: "R&D — We Study How Businesses Grow | Grow Spark Consulting",
    description: "Our job is to understand what market, technology and business-model changes mean for founders before they become obvious to everyone else.",
    url: "https://www.growsparkconsulting.com/rnd/",
  },
  twitter: {
    card: "summary_large_image",
    title: "R&D — We Study How Businesses Grow | Grow Spark Consulting",
    description: "Our job is to understand what market, technology and business-model changes mean for founders before they become obvious to everyone else.",
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
              R&D
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
              Research & Development
            </span>
            {' '}
            <h1 className="page-hero-heading mb-8 text-balance">
              We Study How Businesses Grow.
            </h1>
            {' '}
            <div className="lede-statement mb-7">
              {' '}
              <p className="text-muted">
                Markets change. Customer behaviour changes. Technology changes. Business models change.
              </p>
              {' '}
              <p className="text-ink">
                Our job is to understand what those changes mean for founders before they become obvious to everyone else.
              </p>
              {' '}
            </div>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[660px] mx-auto mb-10">
              {' '} Grow Spark Research explores the economics, systems and strategic decisions behind business growth — from customer lifetime value and margins to AI adoption, operating models and scalable business architecture. {' '}
            </p>
            {' '}
            <div className="flex gap-4 justify-center flex-wrap">
              {' '}
              <a href="#featured" className="btn btn-primary">
                Read Our Research
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
      {/* WHY WE RESEARCH */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Why We Research
            </span>
            {' '}
            <h2>
              The best consulting decisions start with better questions
            </h2>
            {' '}
          </div>
          {' '}
          <div className="q-list" data-reveal="">
            {' '}
            <p>
              What is changing?
            </p>
            {' '}
            <p>
              Where is value being created?
            </p>
            {' '}
            <p>
              Where is value leaking?
            </p>
            {' '}
            <p>
              Which assumptions are no longer true?
            </p>
            {' '}
            <p>
              What constraints are limiting growth?
            </p>
            {' '}
            <p>
              Which technologies can create leverage?
            </p>
            {' '}
            <p>
              Which business models can scale economically?
            </p>
            {' '}
          </div>
          {' '}
          <p className="text-center text-[17px] text-ink-soft max-w-[660px] mx-auto mt-12" data-reveal="">
            {' '} Our R&D work turns those questions into frameworks, perspectives and practical tools for founders. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* RESEARCH AREAS */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Research Areas
            </span>
            {' '}
            <h2>
              Where we focus our attention
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-reveal="">
            {' '}
            <div className="area-card">
              <span className="anum">
                01
              </span>
              <h3>
                Revenue Architecture
              </h3>
            </div>
            {' '}
            <div className="area-card">
              <span className="anum">
                02
              </span>
              <h3>
                Customer Economics
              </h3>
            </div>
            {' '}
            <div className="area-card">
              <span className="anum">
                03
              </span>
              <h3>
                Profitability & Margins
              </h3>
            </div>
            {' '}
            <div className="area-card">
              <span className="anum">
                04
              </span>
              <h3>
                Business Model Engineering
              </h3>
            </div>
            {' '}
            <div className="area-card">
              <span className="anum">
                05
              </span>
              <h3>
                AI & Technology
              </h3>
            </div>
            {' '}
            <div className="area-card">
              <span className="anum">
                06
              </span>
              <h3>
                Operating Systems
              </h3>
            </div>
            {' '}
            <div className="area-card sm:col-span-2 lg:col-span-3">
              <span className="anum">
                07
              </span>
              <h3>
                Market & Competitive Strategy
              </h3>
            </div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* HOW WE RESEARCH */}
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 border-b border-hairline">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              How We Research
            </span>
            {' '}
            <h2>
              From field observation to perspective
            </h2>
            {' '}
          </div>
          {' '}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-11" data-reveal="">
            {' '}
            <span className="chip">
              Field Observation
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            {' '}
            <span className="chip">
              Business Model Analysis
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            {' '}
            <span className="chip">
              Market Research
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            {' '}
            <span className="chip">
              Hypothesis
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            {' '}
            <span className="chip">
              Framework
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            {' '}
            <span className="chip">
              Field Testing
            </span>
            {' '}
            <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            {' '}
            <span className="chip">
              Perspective
            </span>
            {' '}
          </div>
          {' '}
          <p className="text-center text-ink-soft text-[17px] leading-relaxed max-w-[760px] mx-auto" data-reveal="">
            {' '} We learn from real businesses and markets, break business models into economic and operating components, study external evidence, form hypotheses, turn insights into practical frameworks and test ideas through consulting and implementation where appropriate. {' '}
          </p>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
      {/* FEATURED RESEARCH */}
      {' '}
      <section id="featured" className="py-20 sm:py-24 lg:py-28 bg-paper-sunken scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Featured Research
            </span>
            {' '}
            <h2>
              The Grow Spark white paper library
            </h2>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1" data-reveal="">
            {' '}
            <a href="/rnd/revenue-without-profit/" className="paper-card">
              {' '}
              <div className="flex items-start gap-5">
                {' '}
                <span className="pnum">
                  01
                </span>
                {' '}
                <div>
                  {' '}
                  <h3>
                    Revenue Without Profit
                  </h3>
                  {' '}
                  <p>
                    Why High-Growth E-Commerce Businesses Can Still Struggle to Create Wealth
                  </p>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <ArrowRight className="arrow w-5 h-5 text-accent shrink-0" aria-hidden="true" />
              {' '}
            </a>
            {' '}
            <a href="/rnd/margin-architecture/" className="paper-card">
              {' '}
              <div className="flex items-start gap-5">
                {' '}
                <span className="pnum">
                  02
                </span>
                {' '}
                <div>
                  {' '}
                  <h3>
                    The Margin Architecture of Manufacturing
                  </h3>
                  {' '}
                  <p>
                    How Revenue Growth Can Hide Economic Weakness
                  </p>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <ArrowRight className="arrow w-5 h-5 text-accent shrink-0" aria-hidden="true" />
              {' '}
            </a>
            {' '}
            <a href="/rnd/before-the-restaurant/" className="paper-card">
              {' '}
              <div className="flex items-start gap-5">
                {' '}
                <span className="pnum">
                  03
                </span>
                {' '}
                <div>
                  {' '}
                  <h3>
                    Before You Build the Restaurant
                  </h3>
                  {' '}
                  <p>
                    A Business-Model Framework for Food & Beverage Founders
                  </p>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <ArrowRight className="arrow w-5 h-5 text-accent shrink-0" aria-hidden="true" />
              {' '}
            </a>
            {' '}
            <a href="/rnd/ai-value-gap/" className="paper-card">
              {' '}
              <div className="flex items-start gap-5">
                {' '}
                <span className="pnum">
                  04
                </span>
                {' '}
                <div>
                  {' '}
                  <h3>
                    The AI Value Gap
                  </h3>
                  {' '}
                  <p>
                    Why Companies Struggle to Turn AI Adoption Into Measurable Business Value
                  </p>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <ArrowRight className="arrow w-5 h-5 text-accent shrink-0" aria-hidden="true" />
              {' '}
            </a>
            {' '}
            <a href="/rnd/founder-dependency-index/" className="paper-card">
              {' '}
              <div className="flex items-start gap-5">
                {' '}
                <span className="pnum">
                  05
                </span>
                {' '}
                <div>
                  {' '}
                  <h3>
                    The Founder Dependency Index
                  </h3>
                  {' '}
                  <p>
                    A Framework for Building Businesses That Can Scale Beyond the Founder
                  </p>
                  {' '}
                </div>
                {' '}
              </div>
              {' '}
              <ArrowRight className="arrow w-5 h-5 text-accent shrink-0" aria-hidden="true" />
              {' '}
            </a>
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
          <span className="eyebrow !text-accent-bright block mb-5">
            Research Into Action
          </span>
          {' '}
          <h2 className="text-white cta-heading mb-5">
            Research Is Only Useful When It Changes A Decision.
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[560px] mx-auto">
            If you want to understand how these ideas apply to your business:
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="/contact/" className="btn btn-accent">
              Book A Grow Spark Growth Diagnostic
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
