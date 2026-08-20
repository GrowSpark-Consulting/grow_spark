import { ArrowRight } from 'lucide-react';

/**
 * Transcribed from sections/challenges.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function Challenges() {
  return (
    <>
      <section id="challenges" className="py-20 sm:py-24 lg:py-28 bg-paper-sunken scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Start With The Problem
            </span>
            {' '}
            <h2>
              What's holding your business back?
            </h2>
            {' '}
            <p>
              We don't sell isolated services. Tell us the problem, and we'll guide you to the right transformation path.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid-hairline grid-cols-1 lg:grid-cols-3" data-reveal="">
            {' '}
            <a href="/solutions/growth-has-stalled/" id="growth-has-stalled" className="challenge-card lg:col-span-2 min-h-[150px]">
              {' '}
              <span className="txt text-[19px]">
                Growth has stalled.
              </span>
              {' '}
              <ArrowRight className="arrow w-5 h-5" />
              {' '}
            </a>
            {' '}
            <a href="/solutions/modernise-your-business/" id="modernise-your-business" className="challenge-card">
              {' '}
              <span className="txt">
                We need to modernise our business.
              </span>
              {' '}
              <ArrowRight className="arrow w-5 h-5" />
              {' '}
            </a>
            {' '}
            <a href="/solutions/launch-new-business/" id="launch-new-business" className="challenge-card">
              {' '}
              <span className="txt">
                We are launching a new company.
              </span>
              {' '}
              <ArrowRight className="arrow w-5 h-5" />
              {' '}
            </a>
            {' '}
            <a href="/solutions/operations-are-inefficient/" id="operations-are-inefficient" className="challenge-card">
              {' '}
              <span className="txt">
                Our operations are inefficient.
              </span>
              {' '}
              <ArrowRight className="arrow w-5 h-5" />
              {' '}
            </a>
            {' '}
            <a href="/contact/" id="ai-strategy" className="challenge-card">
              {' '}
              <span className="txt">
                We need an AI strategy.
              </span>
              {' '}
              <ArrowRight className="arrow w-5 h-5" />
              {' '}
            </a>
            {' '}
            <a href="/solutions/premium-brand/" id="premium-brand" className="challenge-card">
              {' '}
              <span className="txt">
                We want to become a premium brand.
              </span>
              {' '}
              <ArrowRight className="arrow w-5 h-5" />
              {' '}
            </a>
            {' '}
            <a href="/solutions/scalable-systems/" id="scalable-systems" className="challenge-card">
              {' '}
              <span className="txt">
                We need scalable systems.
              </span>
              {' '}
              <ArrowRight className="arrow w-5 h-5" />
              {' '}
            </a>
            {' '}
            <a href="/solutions/leadership-alignment/" id="leadership-alignment" className="challenge-card">
              {' '}
              <span className="txt">
                Leadership isn't aligned.
              </span>
              {' '}
              <ArrowRight className="arrow w-5 h-5" />
              {' '}
            </a>
            {' '}
            <a href="/solutions/profitability/" id="profitability" className="challenge-card">
              {' '}
              <span className="txt">
                Revenue is growing. Profit isn't.
              </span>
              {' '}
              <ArrowRight className="arrow w-5 h-5" />
              {' '}
            </a>
            {' '}
            <a href="/solutions/customer-experience/" id="customer-experience" className="challenge-card lg:col-span-2">
              {' '}
              <span className="txt">
                Customer experience is holding us back.
              </span>
              {' '}
              <ArrowRight className="arrow w-5 h-5" />
              {' '}
            </a>
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
