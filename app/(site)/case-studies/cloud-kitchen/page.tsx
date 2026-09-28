import type { Metadata } from 'next';

/**
 * Ported from case-study-cloud-kitchen.html. Content is unchanged; the
 * standalone header, footer and inline script were dropped in favour of the
 * site shell, and the page's styles live in styles/case-study.css under
 * .cs-page. The payback footnote and the closing figures note must stay.
 */
export const metadata: Metadata = {
  title: "Case Study: Building a Scalable Cloud-Kitchen Business | Grow Spark Consulting",
  description: "A founder was about to invest heavily in a traditional restaurant with a projected 6+ year payback. Grow Spark helped redesign the business around a cloud kitchen — three locations eight months later.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/case-studies/cloud-kitchen/" },
  openGraph: {
    type: "article",
    siteName: "Grow Spark Consulting",
    title: "Case Study: Building a Scalable Cloud-Kitchen Business | Grow Spark Consulting",
    description: "He was about to build a restaurant. We helped him build a business instead.",
    url: "https://www.growsparkconsulting.com/case-studies/cloud-kitchen/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study: Building a Scalable Cloud-Kitchen Business | Grow Spark Consulting",
    description: "He was about to build a restaurant. We helped him build a business instead.",
  },
};

export default function Page() {
  return (
    <main id="main" className="pt-24 cs-page">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/case-studies/">Our Work</a></li>
          <li><span aria-current="page">Cloud Kitchen</span></li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="cs-hero">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="wrap" data-reveal="">
          <span className="eyebrow">Case Study</span>
          <h1>He Was About To Build A Restaurant.<span className="sub-line">We Helped Him Build A Business Instead.</span></h1>
          <div className="cs-meta">
            <span>Industry: Food &amp; Beverage / Restaurant</span>
            <span>Focus: Business Model &amp; Capital Risk</span>
          </div>
          <p className="lede">A founder came to Grow Spark ready to invest heavily in a physical restaurant. Our analysis showed a projected payback period of more than six years under the original model and assumptions tested. <strong>We helped him redesign the business model around a cloud kitchen.</strong></p>
        </div>
      </section>

      {/* METRICS BLOCK */}
      <section className="metrics-block">
        <div className="wrap" data-reveal="">
          <div className="metrics-grid">
            <div className="metric-card"><div className="num">6+ Years</div><div className="label">Projected payback under the original restaurant model*</div></div>
            <div className="metric-card"><div className="num">8 Months</div><div className="label">Time from initial cloud-kitchen strategy to reported 3-location footprint</div></div>
            <div className="metric-card"><div className="num">3 Locations</div><div className="label">Reported cloud-kitchen footprint after 8 months</div></div>
          </div>
          <p className="metric-note">*Based on the assumptions and financial model used during the original analysis. Not presented as a guaranteed or universal restaurant payback period.</p>
        </div>
      </section>

      {/* FOUNDER'S VISION */}
      <section className="story alt">
        <div className="wrap-narrow">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Founder&apos;s Vision</span>
            <h2>He Had The Ambition. He Was Ready To Build The Restaurant.</h2>
          </div>
          <div className="story-body" data-reveal="">
            <p className="para">The founder came to Grow Spark with a clear vision: open his own restaurant. He was preparing for the traditional restaurant model — a physical location, significant rent, interiors, kitchen equipment, staff, inventory and ongoing operating expenses.</p>
            <p className="para">The vision was exciting. But before he committed a significant portion of his capital, we asked a more important question:</p>
            <div className="q-callout"><p>What would the economics look like after the excitement of the opening day?</p></div>
            <p className="para">Because the investment would begin working against the business before the business had fully proven demand.</p>
            <div className="stack-lines">
              <p>Rent would arrive.</p>
              <p>Staff costs would arrive.</p>
              <p>Utilities would arrive.</p>
              <p>Inventory and operating costs would arrive.</p>
            </div>
            <p className="para">The restaurant would need to generate enough contribution every month just to carry the weight of its fixed-cost structure.</p>
            <p className="pivot">So we slowed the decision down. And started with an audit.</p>
          </div>
        </div>
      </section>

      {/* PRE-INVESTMENT AUDIT */}
      <section className="story">
        <div className="wrap-narrow">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Pre-Investment Audit</span>
            <h2>We Audited The Business Model Before He Spent The Money</h2>
          </div>
          <div className="story-body" data-reveal="">
            <p className="para">Grow Spark didn&apos;t begin by designing the restaurant. We began by challenging the model. We researched the target area and surrounding market, assessed the competitive environment and examined the proposed investment and operating structure. Then we modelled the economics of the proposed restaurant.</p>
            <span className="tag-label">We Asked</span>
            <div className="audit-list">
              <p>How much capital would be committed?</p>
              <p>What fixed costs would the business carry?</p>
              <p>How much revenue would it need?</p>
              <p>What would the projected payback period look like?</p>
              <p>What assumptions would need to remain true?</p>
              <p>What happens if those assumptions change?</p>
            </div>
            <div className="q-callout"><p>Is this the smartest model for this founder, this market and this level of capital?</p></div>
            <p className="para center">That analysis changed the conversation.</p>
          </div>
        </div>
      </section>

      {/* THE ECONOMIC FINDING */}
      <section className="story alt">
        <div className="wrap-narrow">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Finding</span>
            <h2>The Restaurant Could Work. But The Economics Were The Problem.</h2>
          </div>
          <div className="story-body" data-reveal="">
            <p className="para">Based on the financial model and assumptions tested for the proposed location, the original restaurant concept showed a projected payback period of more than six years. That projection also depended on the business maintaining the assumptions used in the analysis and avoiding major disruptions.</p>
            <div className="finding-box mb-7">
              <span className="fb-label">Projected Payback — Original Model</span>
              <div className="fb-main">6+ Years</div>
              <div className="fb-sub">For a founder preparing to commit heavily to a single physical location, that created a significant concentration of capital and operating risk.</div>
            </div>
            <p className="para center">The problem wasn&apos;t necessarily the restaurant idea.</p>
            <p className="pivot emerald center">The problem was the business model.</p>
            <div className="risk-tags">
              <span>Too much fixed cost</span><span>Too much capital committed too early</span><span>Too much risk in one location</span>
            </div>
            <p className="para center">We believed there was a smarter way to test and build the opportunity.</p>
          </div>
        </div>
      </section>

      {/* THE QUESTION */}
      <section className="story">
        <div className="wrap-narrow">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Question That Changed The Business</span>
            <h2>What If We Built The Food Business Without Building The Restaurant First?</h2>
          </div>
          <div className="story-body center" data-reveal="">
            <p className="para">Instead of immediately committing to a full restaurant, Grow Spark proposed a cloud-kitchen model.</p>
            <p className="para">The founder was initially reluctant. He had imagined a restaurant — not a delivery-focused kitchen.</p>
            <p className="pivot">So we didn&apos;t ask him to trust our opinion. We showed him the economics. Side by side.</p>
          </div>
        </div>
      </section>

      {/* SIDE-BY-SIDE COMPARISON */}
      <section className="story alt">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Two Models, Side By Side</span>
            <h2>Traditional Restaurant vs. Cloud Kitchen</h2>
          </div>
          <div className="versus-wrap" data-reveal="">
            <div className="versus-grid">
              <div className="versus-col rest">
                <h3>Traditional Restaurant</h3>
                <div className="versus-chain">
                  <div className="versus-step">High upfront investment</div>
                  <div className="versus-arrow" aria-hidden="true">↓</div>
                  <div className="versus-step">High rent &amp; fixed overhead</div>
                  <div className="versus-arrow" aria-hidden="true">↓</div>
                  <div className="versus-step">Interior &amp; fit-out costs</div>
                  <div className="versus-arrow" aria-hidden="true">↓</div>
                  <div className="versus-step">Larger staffing requirement</div>
                  <div className="versus-arrow" aria-hidden="true">↓</div>
                  <div className="versus-step">One physical location</div>
                  <div className="versus-arrow" aria-hidden="true">↓</div>
                  <div className="versus-step">Higher capital concentration</div>
                  <div className="versus-arrow" aria-hidden="true">↓</div>
                  <div className="versus-step">Longer projected payback</div>
                </div>
              </div>
              <div className="versus-vs">VS</div>
              <div className="versus-col cloud">
                <h3>Cloud Kitchen</h3>
                <div className="versus-chain">
                  <div className="versus-step">Lower initial physical overhead</div>
                  <div className="versus-arrow" aria-hidden="true">↓</div>
                  <div className="versus-step">Lean operating footprint</div>
                  <div className="versus-arrow" aria-hidden="true">↓</div>
                  <div className="versus-step">Faster market entry</div>
                  <div className="versus-arrow" aria-hidden="true">↓</div>
                  <div className="versus-step">Lower capital concentration</div>
                  <div className="versus-arrow" aria-hidden="true">↓</div>
                  <div className="versus-step">Ability to validate demand</div>
                  <div className="versus-arrow" aria-hidden="true">↓</div>
                  <div className="versus-step">Repeatable location model</div>
                  <div className="versus-arrow" aria-hidden="true">↓</div>
                  <div className="versus-step">Greater expansion potential</div>
                </div>
              </div>
            </div>
            <div className="compare-dims">
              <span>Investment</span><span>Profitability</span><span>Scalability</span><span>Operating Costs</span><span>Risk</span><span>Payback Period</span><span>Location Strategy</span><span>Expansion Potential</span>
            </div>
            <p className="para center mt-[30px]">Once the founder could see the economics side by side, the decision became much clearer.</p>
          </div>
        </div>
      </section>

      {/* STRATEGIC DECISION */}
      <section className="story">
        <div className="wrap-narrow">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Strategic Decision</span>
            <h2>Don&apos;t Build The Most Expensive Version Of The Business First. Build The Most Economically Intelligent Version.</h2>
          </div>
          <div className="story-body center" data-reveal="">
            <p className="para">The founder chose the cloud-kitchen model. And this is where Grow Spark&apos;s role changed from diagnosis to transformation.</p>
            <p className="para">We helped turn the new strategy into an operating business — and then into a model designed for expansion.</p>
            <p className="para">The objective wasn&apos;t simply to open one kitchen.</p>
            <p className="pivot emerald">It was to create a business model that could be repeated.</p>
          </div>
        </div>
      </section>

      {/* REPEATABLE SYSTEM */}
      <section className="story alt">
        <div className="wrap-narrow">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">From One Kitchen To A Repeatable System</span>
            <h2>A Simple Operating Logic</h2>
          </div>
          <div className="story-body" data-reveal="">
            <p className="para">We helped establish the initial cloud-kitchen operation and the foundation for expansion. The strategy followed a simple operating logic:</p>
            <div className="flow-horizontal">
              <span className="fh-step">Launch</span><span className="fh-arrow" aria-hidden="true">→</span>
              <span className="fh-step">Validate</span><span className="fh-arrow" aria-hidden="true">→</span>
              <span className="fh-step">Optimise</span><span className="fh-arrow" aria-hidden="true">→</span>
              <span className="fh-step">Measure</span><span className="fh-arrow" aria-hidden="true">→</span>
              <span className="fh-step">Replicate</span><span className="fh-arrow" aria-hidden="true">→</span>
              <span className="fh-step">Expand</span>
            </div>
            <p className="para center mt-[30px]">Instead of placing the entire business&apos;s future on one expensive restaurant, the founder could test the model, learn from the operation and use those learnings to inform subsequent locations.</p>
            <p className="pivot center">The business was no longer just a restaurant concept. It was becoming a repeatable operating model.</p>
          </div>
        </div>
      </section>

      {/* THE RESULT */}
      <section className="story">
        <div className="wrap-narrow">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Result</span>
            <h2>Eight Months Later. Three Cloud-Kitchen Locations.</h2>
          </div>
          <div className="story-body" data-reveal="">
            <div className="result-stats">
              <div><div className="rnum">8 Mo.</div><div className="rlabel">Since strategy shift</div></div>
              <div><div className="rnum">3</div><div className="rlabel">Cloud-kitchen locations</div></div>
            </div>
            <p className="para">The founder had expanded from the initial cloud-kitchen operation to three locations. The business was operating with a fundamentally different cost and expansion structure from the original restaurant concept.</p>
            <p className="para">Instead of carrying the full fixed-cost burden of a traditional restaurant from day one, the founder had built a leaner, more scalable model and was keeping more of the economics in the business.</p>
            <p className="para">Most importantly, he had moved from a single high-risk physical-location plan to a business model that could be replicated.</p>
            <blockquote className="quote-block">
              <p>He was grateful that Grow Spark helped him choose the right direction before committing his capital to the original plan.</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* THE REAL TRANSFORMATION */}
      <section className="story alt">
        <div className="wrap-narrow">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Real Transformation</span>
            <h2>The Biggest Transformation Wasn&apos;t The Kitchen. It Was The Decision.</h2>
          </div>
          <div className="story-body center" data-reveal="">
            <p className="para">We helped the founder move from one statement to another:</p>
            <div className="contrast-grid">
              <div className="contrast-box no"><span>From</span><p>&quot;I&apos;m opening a restaurant.&quot;</p></div>
              <div className="contrast-box yes"><span>To</span><p>&quot;I&apos;m building a scalable food business.&quot;</p></div>
            </div>
            <p className="para mt-[30px]">That distinction matters. A restaurant is a physical location. A scalable food business is a system that can potentially be replicated across locations.</p>
            <p className="para">The insight wasn&apos;t simply &quot;build a cloud kitchen.&quot;</p>
          </div>
        </div>
      </section>

      {/* PROMINENT INSIGHT BLOCK */}
      <section className="story">
        <div className="wrap" data-reveal="">
          <div className="insight-block">
            <p className="il-not">The insight wasn&apos;t simply: <strong>&quot;Build a cloud kitchen.&quot;</strong></p>
            <div className="il-divider" aria-hidden="true" />
            <p className="il-yes">The insight was: <strong>choose a business model whose economics match the founder, the market, the capital available and the growth objective.</strong></p>
          </div>
        </div>
      </section>

      {/* GROW SPARK METHOD IN ACTION */}
      <section className="method">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Grow Spark Method™ In Action</span>
            <h2>From Audit To Scale</h2>
          </div>
          <div className="method-steps" data-reveal="">
            <div className="method-step"><div className="mnum">01</div><div><h3>Audit</h3><p>We challenged the original plan before major capital was committed.</p></div></div>
            <div className="method-step"><div className="mnum">02</div><div><h3>Research</h3><p>We studied the target market, location and competitive environment.</p></div></div>
            <div className="method-step"><div className="mnum">03</div><div><h3>Model</h3><p>We analysed investment, operating costs, profitability, projected payback and risk.</p></div></div>
            <div className="method-step"><div className="mnum">04</div><div><h3>Reframe</h3><p>We identified a lower-overhead cloud-kitchen model as an alternative.</p></div></div>
            <div className="method-step"><div className="mnum">05</div><div><h3>Compare</h3><p>We presented the restaurant and cloud-kitchen models side by side.</p></div></div>
            <div className="method-step"><div className="mnum">06</div><div><h3>Implement</h3><p>We helped establish the initial cloud-kitchen operation.</p></div></div>
            <div className="method-step"><div className="mnum">07</div><div><h3>Scale</h3><p>We helped create the foundation for a repeatable multi-location expansion strategy.</p></div></div>
          </div>
        </div>
      </section>

      {/* THE BIGGER LESSON */}
      <section className="story">
        <div className="wrap-narrow">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Bigger Lesson</span>
            <h2>Sometimes Growth Consulting Means Telling A Founder Not To Build The Business They Planned.</h2>
          </div>
          <div className="story-body center" data-reveal="">
            <p className="para">Founders fall in love with the vision.</p>
            <div className="risk-tags">
              <span>The restaurant</span><span>The storefront</span><span>The office</span><span>The factory</span><span>The big team</span>
            </div>
            <p className="para">But the vision is not the business model. Before committing capital, the economics need to make sense.</p>
            <div className="contrast-grid">
              <div className="contrast-box no"><span>We Don&apos;t Simply Ask</span><p>&quot;How do we execute the founder&apos;s plan?&quot;</p></div>
              <div className="contrast-box yes"><span>We Ask</span><p>&quot;Is this the smartest way to build the business?&quot;</p></div>
            </div>
            <p className="para mt-[30px]">Sometimes the best growth decision isn&apos;t doing more.</p>
            <p className="pivot emerald">It&apos;s changing the model before the money is spent.</p>
            <p className="footnote">Figures on this page reflect projections from the original financial analysis and a reported multi-location footprint after 8 months. Detailed financial outcomes — revenue, profit, margin and capital saved — will be published once verified and approved by the client.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="wrap" data-reveal="">
          <span className="eyebrow">Before You Commit The Capital</span>
          <h2 className="cta-heading">Are You About To Invest Heavily In A Business Model You&apos;re Not Completely Sure About?</h2>
          <p>Grow Spark helps founders identify the risks, constraints and opportunities hiding inside their business model. <strong>Build the right business model before you scale it.</strong></p>
          <div className="cta-row">
            <a href="/contact/" className="btn btn-accent">Book A Grow Spark Growth Diagnostic</a>
            <a href="/framework/" className="btn btn-secondary btn-on-dark">See Our Framework</a>
          </div>
        </div>
      </section>
    </main>
  );
}
