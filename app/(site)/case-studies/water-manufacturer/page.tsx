import type { Metadata } from 'next';

/**
 * Ported from case-study-water-manufacturer.html. Content is unchanged; the
 * standalone header, footer and inline script were dropped in favour of the
 * site shell, and the page's styles live in styles/case-study.css under
 * .cs-page.
 */
export const metadata: Metadata = {
  title: "Case Study: From 3–5% Margins to 20% | Grow Spark Consulting",
  description: "How Grow Spark helped a district-wide water manufacturer move from margin pressure to a direct-to-consumer distribution model — from 3–5% margins to approximately 20%.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/case-studies/water-manufacturer/" },
  openGraph: {
    type: "article",
    siteName: "Grow Spark Consulting",
    title: "Case Study: From 3–5% Margins to 20% | Grow Spark Consulting",
    description: "Rebuilding a water manufacturer's route to market.",
    url: "https://www.growsparkconsulting.com/case-studies/water-manufacturer/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study: From 3–5% Margins to 20% | Grow Spark Consulting",
    description: "Rebuilding a water manufacturer's route to market.",
  },
};

export default function Page() {
  return (
    <main id="main" className="pt-24 cs-page">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/case-studies/">Our Work</a></li>
          <li><span aria-current="page">Water Manufacturer</span></li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="cs-hero">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="wrap" data-reveal="">
          <span className="eyebrow">Case Study 01 · Manufacturing &amp; Distribution</span>
          <h1>From 3–5% Margins to 20%: Rebuilding a Water Manufacturer&apos;s Route to Market</h1>
          <p className="lede">How Grow Spark helped a district-wide water distributor move from margin pressure to a direct-to-consumer distribution model.</p>
          <div className="cs-meta">
            <span>Packaged Drinking Water</span>
            <span>Route-to-Market Redesign</span>
            <span>4-Month Implementation</span>
            <span>Business + Technology + Marketing</span>
          </div>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="impact">
        <div className="wrap" data-reveal="">
          <div className="impact-grid">
            <div className="impact-item"><div className="num">3–5%</div><div className="label">Margin Before</div></div>
            <div className="impact-arrow" aria-hidden="true">→</div>
            <div className="impact-item after"><div className="num">20%</div><div className="label">Margin Six Months After</div></div>
            <div className="impact-arrow" aria-hidden="true">→</div>
            <div className="impact-item mid"><div className="num">~4–6×</div><div className="label">Improvement In Margin</div></div>
          </div>
        </div>
      </section>

      {/* THE CLIENT */}
      <section className="cs-section">
        <div className="wrap">
          <div className="split" data-reveal="">
            <div>
              <span className="eyebrow">The Client</span>
              <h2>A district-wide manufacturer with the hard parts already built.</h2>
              <p>A manufacturing business supplying packaged drinking water across an entire district. The company had already built the difficult parts — yet despite all of this, it was struggling to generate meaningful profit.</p>
              <p><strong>The problem wasn&apos;t production. It was the route to market.</strong></p>
            </div>
            <ul className="check-list">
              <li>A functioning manufacturing facility</li>
              <li>Production machinery</li>
              <li>Employees and delivery staff</li>
              <li>Established distribution capabilities</li>
              <li>Significant operational infrastructure</li>
              <li>An existing customer base</li>
            </ul>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="cs-section panel">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Challenge</span>
            <h2>The manufacturer was doing the hard work. Others were capturing the value.</h2>
          </div>
          <div className="cs-narrow" data-reveal="">
            <p>The client was producing and distributing bottled water and 10- and 20-litre cans at relatively low prices. Once the products entered the retail and distribution chain, however, they could be rebranded and resold to consumers at prices dramatically higher than the manufacturer&apos;s selling price. In some cases, the end customer was paying many times more than the price at which the manufacturer was supplying the product.</p>
            <p>Meanwhile, the manufacturer continued carrying the cost of:</p>
            <ul className="cost-list">
              <li>Factory operations</li><li>Machinery</li><li>Employees</li><li>Wages</li><li>Electricity &amp; utilities</li><li>Production</li><li>Logistics</li><li>Distribution</li>
            </ul>
            <p>Despite carrying much of the operational burden, the business was operating at only approximately <strong>3–5% margins</strong>.</p>
            <p>Then the situation became more serious. When the client approached a distributor to expand the distribution of his own brand, the distributor recognised the financial pressure the business was under and attempted to use that position to negotiate control of the business.</p>
            <p className="lead">The client realised something important: if the business continued operating the same way, someone else would continue capturing the value created by his company. That&apos;s when he approached Grow Spark.</p>
          </div>
        </div>
      </section>

      {/* THE QUESTION */}
      <section className="pull-quote">
        <div className="wrap" data-reveal="">
          <span className="tag">The Question</span>
          <p>How do we stop being the lowest-margin part of our own value chain?</p>
          <p className="small">We didn&apos;t immediately recommend advertising. We didn&apos;t recommend a new logo. And we didn&apos;t start by building an app. We started with a business and industry diagnosis.</p>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="cs-section">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">Our Approach</span>
            <h2>We audited the business from the inside out.</h2>
            <p>Grow Spark conducted a detailed assessment covering business, market and field-level research.</p>
          </div>
          <div className="approach-grid" data-reveal="">
            <div className="approach-card">
              <h3>Business</h3>
              <ul>
                <li>Current business model</li>
                <li>Revenue structure</li>
                <li>Cost structure</li>
                <li>Existing margins</li>
                <li>Operational capacity</li>
                <li>Distribution model</li>
              </ul>
            </div>
            <div className="approach-card">
              <h3>Market</h3>
              <ul>
                <li>Customer behaviour</li>
                <li>Local demand</li>
                <li>Distribution dynamics</li>
                <li>Retail pricing</li>
                <li>Market opportunities</li>
              </ul>
            </div>
            <div className="approach-card">
              <h3>Competition</h3>
              <ul>
                <li>Competitor positioning</li>
                <li>Pricing</li>
                <li>Distribution models</li>
                <li>Customer acquisition</li>
                <li>Local market behaviour</li>
              </ul>
            </div>
          </div>
          <div className="field-note" data-reveal="">
            <span className="fn-label">Field Research</span>
            <p>We went beyond desk research. Our team conducted field-level research to understand how the product moved through the market and where value was being created — or lost — between the manufacturer and the end customer.</p>
          </div>
        </div>
      </section>

      {/* THE DIAGNOSIS */}
      <section className="cs-section panel">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Diagnosis</span>
            <h2>The business didn&apos;t have a production problem. It had a distribution and value-capture problem.</h2>
          </div>
          <div className="cs-narrow" data-reveal="">
            <p>The client had the infrastructure to produce the product. He had the ability to serve the market. But too much of the economic value was being captured between the manufacturer and the consumer.</p>
            <p className="lead">Our conclusion was clear: the business needed greater control over the customer relationship and the last mile.</p>
            <p>Instead of continuing to depend entirely on traditional distribution, we designed a direct-to-consumer distribution model around the client&apos;s existing manufacturing capability.</p>
          </div>
        </div>
      </section>

      {/* THE TRANSFORMATION */}
      <section className="cs-section">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Transformation</span>
            <h2>We didn&apos;t just build an app. We redesigned the route from factory to customer.</h2>
            <p>The transformation had five connected components.</p>
          </div>

          <div className="transform-block" data-reveal="">
            <div className="tb-head"><div className="tnum">01</div><h3>Customer Ordering Platform</h3></div>
            <div className="tb-body">
              <p>We designed a dedicated customer application through which customers could order bottled water packs, 10-litre cans, 20-litre cans and set up repeat deliveries.</p>
              <p className="obj">Objective: create a direct relationship between the brand and the customer.</p>
            </div>
          </div>

          <div className="transform-block" data-reveal="">
            <div className="tb-head"><div className="tnum">02</div><h3>Delivery Agent Application</h3></div>
            <div className="tb-body">
              <p>A separate application for delivery agents, designed around the realities of last-mile delivery.</p>
              <span className="p-label">Delivery Agents Could</span>
              <div className="p-tags">
                <span>Receive assigned orders</span><span>View customer details</span><span>Map-based navigation</span><span>Update delivery status</span><span>OTP-authenticated delivery</span>
              </div>
            </div>
          </div>

          <div className="transform-block" data-reveal="">
            <div className="tb-head"><div className="tnum">03</div><h3>Physical Distribution System</h3></div>
            <div className="tb-body">
              <p>Technology alone wouldn&apos;t solve the problem. We designed the physical distribution process around the digital ordering system, creating a structured flow from Order → Allocation → Delivery → Confirmation.</p>
              <p className="obj">Objective: make the system repeatable and scalable rather than dependent on ad-hoc coordination.</p>
            </div>
          </div>

          <div className="transform-block" data-reveal="">
            <div className="tb-head"><div className="tnum">04</div><h3>Data &amp; Business Intelligence</h3></div>
            <div className="tb-body">
              <p>We introduced data analytics and customised dashboards to give the leadership team greater visibility into the business.</p>
              <span className="p-label">Dashboards Covered</span>
              <div className="p-tags">
                <span>Customer orders</span><span>Demand patterns</span><span>Locality-level performance</span><span>Delivery activity</span><span>Customer queries</span><span>Operational performance</span>
              </div>
            </div>
          </div>

          <div className="transform-block" data-reveal="">
            <div className="tb-head"><div className="tnum">05</div><h3>Locality-Based Customer Acquisition</h3></div>
            <div className="tb-body">
              <p>Targeted advertising strategies built around specific localities. Rather than treating the entire district as one market, campaigns were directed toward individual areas based on demand and delivery feasibility.</p>
              <p className="obj">Acquire customers where we could serve them efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="impl-callout panel cs-section">
        <div className="wrap" data-reveal="">
          <span className="eyebrow">Implementation</span>
          <div className="big">Four Months</div>
          <p className="cap">From strategy to implementation. Grow Spark worked across the business, technology and distribution components to bring the new model together. The objective wasn&apos;t to create another piece of software — it was to create a working commercial system.</p>
        </div>
      </section>

      {/* THE RESULT */}
      <section className="cs-section">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Result</span>
            <h2>From 3–5% Margins to 20%</h2>
            <p>Approximately six months after implementation, the company moved from being heavily dependent on intermediaries toward having greater control over the full value chain.</p>
          </div>
          <div className="chain-flow" data-reveal="">
            <div className="chain-step">Customer Acquisition</div>
            <div className="chain-arrow" aria-hidden="true">↓</div>
            <div className="chain-step">Customer Relationship</div>
            <div className="chain-arrow" aria-hidden="true">↓</div>
            <div className="chain-step">Ordering</div>
            <div className="chain-arrow" aria-hidden="true">↓</div>
            <div className="chain-step">Distribution</div>
            <div className="chain-arrow" aria-hidden="true">↓</div>
            <div className="chain-step">Delivery</div>
            <div className="chain-arrow" aria-hidden="true">↓</div>
            <div className="chain-step">Customer Data</div>
          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT */}
      <section className="cs-section panel">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Business Impact</span>
            <h2>Not simply a technology improvement. A business model transformation.</h2>
          </div>
          <div className="ba-grid" data-reveal="">
            <div className="ba-card"><span className="tag">Before</span><div className="num">3–5%</div><p className="cap">Approximate operating margin</p></div>
            <div className="ba-card after"><span className="tag">After</span><div className="num">20%</div><p className="cap">Approximate margin six months after implementation</p></div>
            <div className="ba-card delta"><span className="tag">Transformation</span><div className="num">~4–6×</div><p className="cap">Improvement in margin percentage</p></div>
          </div>
        </div>
      </section>

      {/* WHAT CHANGED */}
      <section className="pull-quote">
        <div className="wrap" data-reveal="">
          <span className="tag">What Changed?</span>
          <p>The factory didn&apos;t suddenly become dramatically more efficient. The fundamental product didn&apos;t change. The business created more value by changing how the product reached the customer.</p>
          <p className="small">Sometimes the fastest way to improve profitability isn&apos;t to manufacture more. It&apos;s to redesign how you reach the market.</p>
        </div>
      </section>

      {/* THE GROW SPARK LESSON */}
      <section className="cs-section">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Grow Spark Lesson</span>
            <h2>We don&apos;t believe every business problem needs a conventional solution.</h2>
          </div>
          <div className="cs-narrow center" data-reveal="">
            <p>The client initially had a distribution problem. We could have recommended finding another distributor. Instead, we asked:</p>
            <p className="lead">Why should the business remain dependent on intermediaries when it already has the capability to serve the customer directly?</p>
            <p>That question led to a completely different strategy. The result was not simply an application — it was a new distribution infrastructure connecting one business system.</p>
            <div className="system-chips">
              <span>Manufacturing</span><span className="plus" aria-hidden="true">+</span><span>Technology</span><span className="plus" aria-hidden="true">+</span><span>Marketing</span><span className="plus" aria-hidden="true">+</span><span>Logistics</span><span className="plus" aria-hidden="true">+</span><span>Data</span>
            </div>
          </div>
        </div>
      </section>

      {/* ONE VIEW */}
      <section className="flow">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Transformation In One View</span>
            <h2>From Business Problem To Business Result</h2>
          </div>
          <div className="flow-vertical" data-reveal="">
            <div className="flow-step"><div className="ft">Business</div><div className="fd">Traditional intermediary-led distribution</div></div>
            <div className="flow-arrow" aria-hidden="true">↓</div>
            <div className="flow-step"><div className="ft">Diagnosis</div><div className="fd">Low margins + limited customer ownership</div></div>
            <div className="flow-arrow" aria-hidden="true">↓</div>
            <div className="flow-step"><div className="ft">Strategy</div><div className="fd">Build a direct-to-consumer distribution channel</div></div>
            <div className="flow-arrow" aria-hidden="true">↓</div>
            <div className="flow-step"><div className="ft">Technology</div><div className="fd">Customer App + Delivery App + Dashboards</div></div>
            <div className="flow-arrow" aria-hidden="true">↓</div>
            <div className="flow-step"><div className="ft">Marketing</div><div className="fd">Locality-focused customer acquisition</div></div>
            <div className="flow-arrow" aria-hidden="true">↓</div>
            <div className="flow-step"><div className="ft">Operations</div><div className="fd">Structured delivery and distribution system</div></div>
            <div className="flow-arrow" aria-hidden="true">↓</div>
            <div className="flow-step"><div className="ft">Result</div><div className="fd">3–5% → ~20% margins</div></div>
          </div>
        </div>
      </section>

      {/* WHAT THIS REPRESENTS */}
      <section className="cs-section">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">What This Case Study Represents</span>
            <h2>This is what Grow Spark means by Business Transformation.</h2>
          </div>
          <div className="qa-stack" data-reveal="">
            <div className="qa-row"><p className="q">&quot;What service can we sell them?&quot;</p></div>
            <div className="qa-row answer"><p className="q">&quot;What is preventing this business from creating and capturing more value?&quot;</p></div>
          </div>
          <p className="cs-narrow center" data-reveal="">We don&apos;t look at a business and ask the first question. We ask the second — then we build the transformation around that answer.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="wrap" data-reveal="">
          <span className="eyebrow">Diagnose Better. Transform Smarter. Build Better Businesses.</span>
          <h2 className="cta-heading">Your Business Has Its Own Route-To-Market Problem To Solve.</h2>
          <p>The first step is understanding where the value in your business is being created — and where it&apos;s being lost.</p>
          <div className="cta-row">
            <a href="/contact/" className="btn btn-accent">Request Your Business Transformation Assessment™</a>
            <a href="/strategy/" className="btn btn-secondary btn-on-dark">Book An Executive Strategy Session</a>
          </div>
        </div>
      </section>
    </main>
  );
}
