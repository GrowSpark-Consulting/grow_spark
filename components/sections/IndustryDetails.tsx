import { ArrowRight } from 'lucide-react';

/**
 * The six primary industry blocks, with the numbered grid above them acting
 * as an in-page jump nav. Lifted out of the Industries page so Our Work can
 * carry the sector detail; the anchors and the links that target them now
 * live together in one component, so they cannot drift apart.
 *
 * Server Component: no behaviour of its own.
 */
export default function IndustryDetails() {
  return (
    <>
      <nav aria-label="Industries" className="border-y border-hairline bg-paper-sunken py-10">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="grid-hairline grid-cols-2 lg:grid-cols-3">
            {' '}
            <a href="#ecommerce" className="industry-card">
              <span className="n">01</span>
              <span className="block text-[16.5px] font-semibold">E-Commerce &amp; D2C</span>
            </a>
            {' '}
            <a href="#manufacturing" className="industry-card">
              <span className="n">02</span>
              <span className="block text-[16.5px] font-semibold">Manufacturing &amp; Product Businesses</span>
            </a>
            {' '}
            <a href="#food-beverage" className="industry-card">
              <span className="n">03</span>
              <span className="block text-[16.5px] font-semibold">Food &amp; Beverage</span>
            </a>
            {' '}
            <a href="#education" className="industry-card">
              <span className="n">04</span>
              <span className="block text-[16.5px] font-semibold">Education, Training &amp; Certification</span>
            </a>
            {' '}
            <a href="#b2b" className="industry-card">
              <span className="n">05</span>
              <span className="block text-[16.5px] font-semibold">B2B &amp; Industrial Services</span>
            </a>
            {' '}
            <a href="#saas" className="industry-card">
              <span className="n">06</span>
              <span className="block text-[16.5px] font-semibold">Technology, SaaS &amp; Digital Businesses</span>
            </a>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </nav>
      {' '}
      <section className="py-20 sm:py-24 lg:py-28 bg-paper-sunken">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Where We Focus
            </span>
            {' '}
            <h2>
              Six primary industries
            </h2>
            {' '}
          </div>
          {' '}
          <div className="flex flex-col gap-6 lg:gap-8">
            {' '}
            <article id="ecommerce" className="industry-block" data-reveal="">
              {' '}
              <h3 className="subsection-heading">
                E-Commerce & D2C
              </h3>
              {' '}
              <p className="promise">
                From revenue growth to better customer economics.
              </p>
              {' '}
              <p className="desc mb-7">
                E-commerce businesses can generate significant revenue while struggling with margins, acquisition costs, marketplace dependency and weak customer lifetime value.
              </p>
              {' '}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {' '}
                <span className="chip">
                  Acquisition economics
                </span>
                {' '}
                <span className="chip">
                  Conversion & AOV
                </span>
                {' '}
                <span className="chip">
                  LTV & retention
                </span>
                {' '}
                <span className="chip">
                  Marketplace dependency
                </span>
                {' '}
                <span className="chip">
                  D2C strategy
                </span>
                {' '}
                <span className="chip">
                  Customer ownership
                </span>
                {' '}
              </div>
              {' '}
              <div className="evidence-box">
                {' '}
                <span className="case-label">
                  Case Study
                </span>
                {' '}
                <p>
                  A women's fashion business was generating high marketplace revenue but leaving the founder with very little profit. Grow Spark identified LTV and customer ownership as a key constraint and helped create a marketplace-to-D2C customer journey.
                </p>
                {' '}
                <span className="case-note">
                  Individual results vary — see the full case study for details.
                </span>
                {' '}
              </div>
              {' '}
              <a href="/rnd/revenue-without-profit/" className="inline-link mt-6">
                Related Research: Revenue Without Profit {' '}
                <ArrowRight className="w-4 h-4" />
              </a>
              {' '}
            </article>
            {' '}
            <article id="manufacturing" className="industry-block" data-reveal="">
              {' '}
              <h3 className="subsection-heading">
                Manufacturing & Product Businesses
              </h3>
              {' '}
              <p className="promise">
                Build more than volume. Build better economics.
              </p>
              {' '}
              <p className="desc mb-7">
                Manufacturers can carry substantial operational complexity while producing surprisingly thin margins.
              </p>
              {' '}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {' '}
                <span className="chip">
                  Product profitability
                </span>
                {' '}
                <span className="chip">
                  Pricing
                </span>
                {' '}
                <span className="chip">
                  Distribution & channel margins
                </span>
                {' '}
                <span className="chip">
                  Production economics
                </span>
                {' '}
                <span className="chip">
                  Capacity
                </span>
                {' '}
                <span className="chip">
                  Data & decision systems
                </span>
                {' '}
              </div>
              {' '}
              <div className="evidence-box">
                {' '}
                <span className="case-label">
                  Example Engagement
                </span>
                {' '}
                <p>
                  For a water manufacturer/distributor, Grow Spark audited the business and distribution model, identified margin and channel issues, then helped design a direct ordering and distribution system with customer and delivery applications.
                </p>
                {' '}
                <span className="case-note">
                  Individual results vary and are not a guaranteed outcome.
                </span>
                {' '}
              </div>
              {' '}
              <a href="/rnd/margin-architecture/" className="inline-link mt-6">
                Related Research: The Margin Architecture of Manufacturing {' '}
                <ArrowRight className="w-4 h-4" />
              </a>
              {' '}
            </article>
            {' '}
            <article id="food-beverage" className="industry-block" data-reveal="">
              {' '}
              <h3 className="subsection-heading">
                Food & Beverage
              </h3>
              {' '}
              <p className="promise">
                Choose the right business model before you scale it.
              </p>
              {' '}
              <p className="desc mb-7">
                Food businesses can become trapped by rent, interiors, staffing, utilities and other fixed operating costs before demand has been properly validated.
              </p>
              {' '}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {' '}
                <span className="chip">
                  Business model selection
                </span>
                {' '}
                <span className="chip">
                  Location economics
                </span>
                {' '}
                <span className="chip">
                  Fixed-cost exposure
                </span>
                {' '}
                <span className="chip">
                  Unit economics
                </span>
                {' '}
                <span className="chip">
                  Demand validation
                </span>
                {' '}
                <span className="chip">
                  Replication potential
                </span>
                {' '}
              </div>
              {' '}
              <div className="evidence-box">
                {' '}
                <span className="case-label">
                  Case Study
                </span>
                {' '}
                <p>
                  A founder was preparing to invest heavily in a traditional restaurant. Grow Spark's analysis showed a projected payback period of more than six years under the assumptions tested. We helped redesign the model around cloud kitchens. Eight months later, the founder had expanded to three locations.
                </p>
                {' '}
                <span className="case-note">
                  Individual results vary — see the full case study for details.
                </span>
                {' '}
              </div>
              {' '}
              <a href="/rnd/before-the-restaurant/" className="inline-link mt-6">
                Related Research: Before You Build the Restaurant {' '}
                <ArrowRight className="w-4 h-4" />
              </a>
              {' '}
            </article>
            {' '}
            <article id="education" className="industry-block" data-reveal="">
              {' '}
              <h3 className="subsection-heading">
                Education, Training & Certification
              </h3>
              {' '}
              <p className="promise">
                Turn expertise into a scalable business.
              </p>
              {' '}
              <p className="desc mb-7">
                Education businesses often have strong expertise but struggle to translate that expertise into scalable products, predictable acquisition and repeatable delivery. The objective is to move from selling expertise one transaction at a time toward building a scalable education business.
              </p>
              {' '}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {' '}
                <span className="chip">
                  Product architecture
                </span>
                {' '}
                <span className="chip">
                  Offer positioning
                </span>
                {' '}
                <span className="chip">
                  Funnel economics
                </span>
                {' '}
                <span className="chip">
                  Pricing
                </span>
                {' '}
                <span className="chip">
                  Cohort & program models
                </span>
                {' '}
                <span className="chip">
                  LMS & automation
                </span>
                {' '}
              </div>
              {' '}
              <a href="/contact/" className="inline-link">
                Talk To Us About Your Business {' '}
                <ArrowRight className="w-4 h-4" />
              </a>
              {' '}
            </article>
            {' '}
            <article id="b2b" className="industry-block" data-reveal="">
              {' '}
              <h3 className="subsection-heading">
                B2B & Industrial Services
              </h3>
              {' '}
              <p className="promise">
                Build a revenue engine around complex sales.
              </p>
              {' '}
              <p className="desc mb-7">
                B2B businesses often face longer sales cycles, relationship-driven acquisition, fragmented customer data and inconsistent pipelines. The objective is to create a more predictable and measurable revenue system without losing the relationships that make B2B businesses work.
              </p>
              {' '}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {' '}
                <span className="chip">
                  Positioning
                </span>
                {' '}
                <span className="chip">
                  Lead generation
                </span>
                {' '}
                <span className="chip">
                  Sales process
                </span>
                {' '}
                <span className="chip">
                  CRM architecture
                </span>
                {' '}
                <span className="chip">
                  Pipeline management
                </span>
                {' '}
                <span className="chip">
                  Account growth
                </span>
                {' '}
              </div>
              {' '}
              <a href="/contact/" className="inline-link">
                Talk To Us About Your Business {' '}
                <ArrowRight className="w-4 h-4" />
              </a>
              {' '}
            </article>
            {' '}
            <article id="saas" className="industry-block" data-reveal="">
              {' '}
              <h3 className="subsection-heading">
                Technology, SaaS & Digital Businesses
              </h3>
              {' '}
              <p className="promise">
                Build technology around a business model that works.
              </p>
              {' '}
              <p className="desc mb-7">
                Technology companies can scale quickly — but they can also scale inefficiently. The objective is to connect product, technology and commercial strategy so that technical growth creates business value.
              </p>
              {' '}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {' '}
                <span className="chip">
                  Business model
                </span>
                {' '}
                <span className="chip">
                  Pricing
                </span>
                {' '}
                <span className="chip">
                  Activation & retention
                </span>
                {' '}
                <span className="chip">
                  Product-market alignment
                </span>
                {' '}
                <span className="chip">
                  AI opportunities
                </span>
                {' '}
                <span className="chip">
                  Operating systems
                </span>
                {' '}
              </div>
              {' '}
              <a href="/contact/" className="inline-link">
                Talk To Us About Your Business {' '}
                <ArrowRight className="w-4 h-4" />
              </a>
              {' '}
            </article>
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
