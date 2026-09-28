import type { Metadata } from 'next';

/**
 * Ported from case-study-founder-dependency.html. Content is unchanged; the
 * standalone header, footer and inline script were dropped in favour of the
 * site shell, and the page's styles live in styles/case-study.css under
 * .cs-page. This is an illustrative scenario — the disclaimer band and the
 * metric note must stay.
 */
export const metadata: Metadata = {
  title: "Case Study: The Business Was Growing, The Founder Was Drowning | Grow Spark Consulting",
  description: "An illustrative case study: how Grow Spark transforms a successful founder-led business from a founder-dependent operation into a scalable, system-dependent organisation.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/case-studies/founder-dependency/" },
  openGraph: {
    type: "article",
    siteName: "Grow Spark Consulting",
    title: "Case Study: The Business Was Growing, The Founder Was Drowning | Grow Spark Consulting",
    description: "From founder-dependent to system-dependent — an illustrative transformation.",
    url: "https://www.growsparkconsulting.com/case-studies/founder-dependency/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study: The Business Was Growing, The Founder Was Drowning | Grow Spark Consulting",
    description: "From founder-dependent to system-dependent — an illustrative transformation.",
  },
};

export default function Page() {
  return (
    <main id="main" className="pt-24 cs-page">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href="/case-studies/">Our Work</a></li>
          <li><span aria-current="page">Founder Dependency</span></li>
        </ol>
      </nav>

      {/* DISCLAIMER */}
      <p className="disclaimer-band mt-6">
        Illustrative case study based on a realistic business transformation scenario. Results shown are illustrative, not a claim about an actual client.
      </p>

      {/* HERO */}
      <section className="cs-hero">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-tint opacity-60 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="wrap" data-reveal="">
          <span className="eyebrow">Illustrative Case Study · Organisational Scalability</span>
          <h1>The Business Was Growing. The Founder Was Drowning.</h1>
          <p className="lede">How Grow Spark transformed a successful founder-led business from a founder-dependent operation into a scalable organisation.</p>
          <div className="cs-meta">
            <span>Founder-Led Business</span>
            <span>Organisational Design</span>
            <span>Leadership &amp; Systems</span>
            <span>Scalability</span>
          </div>
        </div>
      </section>

      {/* THE BUSINESS */}
      <section className="cs-section">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Business</span>
            <h2>A successful company that had become impossible to run.</h2>
          </div>
          <div className="cs-narrow short" data-reveal="">
            <p>The company had been in business for more than a decade. Revenue was growing. Customers were coming in. The team had expanded. The brand had a strong reputation in its market. From the outside, it looked like a success story.</p>
            <p className="mt-[18px]">But behind the scenes, the founder was exhausted. Every important decision came back to him.</p>
          </div>
          <div className="symptom-grid mt-9" data-reveal="">
            <div className="symptom-item"><span className="mark2" aria-hidden="true">—</span><p>A customer had a problem? The founder handled it.</p></div>
            <div className="symptom-item"><span className="mark2" aria-hidden="true">—</span><p>A major employee wanted approval? The founder handled it.</p></div>
            <div className="symptom-item"><span className="mark2" aria-hidden="true">—</span><p>A supplier needed a decision? The founder handled it.</p></div>
            <div className="symptom-item"><span className="mark2" aria-hidden="true">—</span><p>A salesperson couldn&apos;t close a deal? The founder got involved.</p></div>
          </div>
          <p className="cs-narrow cs-statement" data-reveal="">Something went wrong in operations? Everyone knew who to call. The founder.</p>
        </div>
      </section>

      {/* THE MOMENT EVERYTHING BECAME CLEAR */}
      <section className="cs-section panel">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Moment Everything Became Clear</span>
            <h2>One Monday morning, the founder sat down to work on expansion strategy.</h2>
            <p>By lunchtime, this is what had actually happened.</p>
          </div>
          <div className="moment-grid" data-reveal="">
            <div className="moment-card"><div className="num">37</div><div className="label">WhatsApp messages answered</div></div>
            <div className="moment-card"><div className="num">14</div><div className="label">Operational decisions approved</div></div>
            <div className="moment-card"><div className="num">3</div><div className="label">Customer complaints resolved</div></div>
            <div className="moment-card"><div className="num">2</div><div className="label">Supplier conversations</div></div>
            <div className="moment-card"><div className="num">6</div><div className="label">Employee issues reviewed</div></div>
            <div className="moment-card"><div className="num">1</div><div className="label">Sales opportunity closed</div></div>
          </div>
          <p className="cs-narrow lead center" data-reveal="">And he spent almost no time on the strategy that was supposed to take the business to its next level.</p>
          <p className="cs-narrow center font-semibold" data-reveal="">He wasn&apos;t running the business anymore. The business was running him. That was the real problem.</p>
        </div>
      </section>

      {/* THE SYMPTOMS */}
      <section className="cs-section">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Symptoms</span>
            <h2>The company was making money. But growth was becoming painful.</h2>
          </div>
          <div className="symptom-grid" data-reveal="">
            <div className="symptom-item"><span className="mark2" aria-hidden="true">—</span><p>The founder couldn&apos;t take a week off without something going wrong.</p></div>
            <div className="symptom-item"><span className="mark2" aria-hidden="true">—</span><p>Managers waited for instructions.</p></div>
            <div className="symptom-item"><span className="mark2" aria-hidden="true">—</span><p>Employees depended on individual knowledge.</p></div>
            <div className="symptom-item"><span className="mark2" aria-hidden="true">—</span><p>Important information lived inside people&apos;s heads.</p></div>
            <div className="symptom-item"><span className="mark2" aria-hidden="true">—</span><p>Different departments used different processes.</p></div>
            <div className="symptom-item"><span className="mark2" aria-hidden="true">—</span><p>Reports arrived late.</p></div>
            <div className="symptom-item"><span className="mark2" aria-hidden="true">—</span><p>Customer issues were handled differently depending on who answered them.</p></div>
            <div className="symptom-item"><span className="mark2" aria-hidden="true">—</span><p>The founder couldn&apos;t confidently answer: &quot;What exactly is happening across the business right now?&quot;</p></div>
          </div>
          <p className="cs-narrow lead center" data-reveal="">The company was growing. But it wasn&apos;t becoming more scalable.</p>
        </div>
      </section>

      {/* THE FEAR */}
      <section className="pull-quote">
        <div className="wrap" data-reveal="">
          <span className="tag">The Fear</span>
          <p>What if growth made the business worse?</p>
          <ul className="fear-list">
            <li>Hiring more people meant more management.</li>
            <li>More customers meant more problems.</li>
            <li>More revenue meant more operational pressure.</li>
            <li>Opening another location felt risky.</li>
            <li>Expanding into a new market felt impossible.</li>
          </ul>
          <p className="small">The founder had created the business he always wanted. But he couldn&apos;t see how to build the business he wanted without himself being at the centre of everything.</p>
        </div>
      </section>

      {/* THEN THEY CALLED GROW SPARK */}
      <section className="cs-section panel">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">Then They Called Grow Spark</span>
            <h2>We didn&apos;t start with technology.</h2>
          </div>
          <div className="cs-narrow center" data-reveal="">
            <p>We didn&apos;t begin by recommending a CRM. We didn&apos;t recommend hiring another manager. We didn&apos;t recommend automation.</p>
            <p>We started with one question:</p>
          </div>
          <div className="moment-box" data-reveal="">
            <p className="q">&quot;If you disappeared from the business for 90 days, what would break?&quot;</p>
            <p className="mt-[18px]">The founder paused. Then he started listing things. It became a very long list.</p>
            <p className="strong">That list became the beginning of the transformation.</p>
          </div>
        </div>
      </section>

      {/* OUR DIAGNOSIS */}
      <section className="cs-section">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">Our Diagnosis</span>
            <h2>The company didn&apos;t have a growth problem. It had a scalability problem.</h2>
          </div>
          <div className="cs-narrow" data-reveal="">
            <p>The business had successfully grown its revenue. But its people, processes, technology, decision-making, reporting and leadership structure had not evolved at the same pace.</p>
            <p className="lead center mt-6">The company had outgrown the way it operated.</p>
          </div>
        </div>
      </section>

      {/* WE MAPPED THE BUSINESS */}
      <section className="cs-section panel">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">We Mapped The Business</span>
            <h2>A full business diagnostic across six dimensions.</h2>
          </div>
          <div className="map-grid" data-reveal="">
            <div className="map-card"><h3>Leadership</h3><ul><li>Who makes decisions?</li><li>Who owns outcomes?</li><li>Where does accountability sit?</li></ul></div>
            <div className="map-card"><h3>Operations</h3><ul><li>How does work move through the organisation?</li><li>Where are the bottlenecks?</li><li>Where is work duplicated?</li></ul></div>
            <div className="map-card"><h3>People</h3><ul><li>Which responsibilities belong to whom?</li><li>Where are capability gaps?</li><li>Where is the organisation overly dependent on individuals?</li></ul></div>
            <div className="map-card"><h3>Customers</h3><ul><li>Where does the customer experience break?</li><li>Where are opportunities being lost?</li></ul></div>
            <div className="map-card"><h3>Technology</h3><ul><li>Which systems are being used?</li><li>Which systems aren&apos;t connected?</li><li>Where could technology remove manual work?</li></ul></div>
            <div className="map-card"><h3>Financial Performance</h3><ul><li>Where is revenue being generated?</li><li>Where is profitability being lost?</li><li>Which activities consume resources without value?</li></ul></div>
          </div>
        </div>
      </section>

      {/* THE REAL PROBLEM */}
      <section className="cs-section">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">Then We Found The Real Problem</span>
            <h2>There wasn&apos;t one. There were seven interconnected constraints.</h2>
          </div>
          <div className="constraints-grid mb-9" data-reveal="">
            <div className="constraint-card"><span className="cnum">01</span><p>Founder dependency</p></div>
            <div className="constraint-card"><span className="cnum">02</span><p>Unclear accountability</p></div>
            <div className="constraint-card"><span className="cnum">03</span><p>Undocumented critical processes</p></div>
            <div className="constraint-card"><span className="cnum">04</span><p>Fragmented management information</p></div>
            <div className="constraint-card"><span className="cnum">05</span><p>Poor cross-department coordination</p></div>
            <div className="constraint-card"><span className="cnum">06</span><p>Inconsistent customer processes</p></div>
            <div className="constraint-card span-2"><span className="cnum">07</span><p>Technology used as individual tools rather than an integrated system</p></div>
          </div>
          <p className="cs-narrow lead center" data-reveal="">Fixing one would not solve the problem. The business needed a transformation.</p>
        </div>
      </section>

      {/* THE TRANSFORMATION */}
      <section className="cs-section panel">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Transformation</span>
            <h2>We redesigned the business around the next stage — not the previous one.</h2>
          </div>

          <div className="transform-block" data-reveal="">
            <div className="tb-head"><div className="tnum">01</div><h3>We Redesigned The Organisation</h3></div>
            <div className="tb-body">
              <span className="p-label">We Clarified</span>
              <div className="p-tags">
                <span>Leadership responsibilities</span><span>Department ownership</span><span>Decision rights</span><span>Reporting lines</span><span>Accountability</span><span>KPIs</span>
              </div>
              <p className="obj">Objective: decisions should happen at the right level. Not everything needed the founder.</p>
            </div>
          </div>

          <div className="transform-block" data-reveal="">
            <div className="tb-head"><div className="tnum">02</div><h3>We Systemised The Business</h3></div>
            <div className="tb-body">
              <span className="p-label">Critical Processes Documented &amp; Redesigned</span>
              <div className="p-tags">
                <span>Sales</span><span>Customer onboarding</span><span>Operations</span><span>Procurement</span><span>Support</span><span>Reporting</span><span>Approvals</span>
              </div>
              <p className="obj">Instead of &quot;How does this person do it?&quot; — we asked &quot;How should the organisation do it?&quot; That distinction changed everything.</p>
            </div>
          </div>

          <div className="transform-block" data-reveal="">
            <div className="tb-head"><div className="tnum">03</div><h3>We Built Management Visibility</h3></div>
            <div className="tb-body">
              <p>Leadership dashboards were introduced to bring critical information into one place. Instead of waiting for weekly reports, leadership could monitor key indicators across revenue, sales, operations, customers, productivity and profitability.</p>
              <p className="obj">The founder finally had visibility without needing to ask ten people for updates.</p>
            </div>
          </div>

          <div className="transform-block" data-reveal="">
            <div className="tb-head"><div className="tnum">04</div><h3>We Redesigned The Customer Journey</h3></div>
            <div className="tb-body">
              <p className="mb-[26px]">We mapped the customer experience end to end and identified friction at each stage, redesigning the handoffs between departments.</p>
              <div className="chain-flow">
                <div className="chain-step">First Contact</div><div className="chain-arrow" aria-hidden="true">↓</div>
                <div className="chain-step">Sales</div><div className="chain-arrow" aria-hidden="true">↓</div>
                <div className="chain-step">Onboarding</div><div className="chain-arrow" aria-hidden="true">↓</div>
                <div className="chain-step">Delivery</div><div className="chain-arrow" aria-hidden="true">↓</div>
                <div className="chain-step">Support</div><div className="chain-arrow" aria-hidden="true">↓</div>
                <div className="chain-step">Retention</div><div className="chain-arrow" aria-hidden="true">↓</div>
                <div className="chain-step">Referral</div>
              </div>
            </div>
          </div>

          <div className="transform-block" data-reveal="">
            <div className="tb-head"><div className="tnum">05</div><h3>We Created A Technology Roadmap</h3></div>
            <div className="tb-body">
              <p>Only after understanding the business did we determine where technology could help. Some processes needed automation. Some needed better systems. Some simply needed to be simplified.</p>
              <p className="obj">That distinction saved the company from buying technology it didn&apos;t actually need.</p>
            </div>
          </div>

          <div className="transform-block" data-reveal="">
            <div className="tb-head"><div className="tnum">06</div><h3>We Created A New Management Rhythm</h3></div>
            <div className="tb-body">
              <p>The leadership team moved from reactive management to structured management.</p>
              <span className="p-label">The New Rhythm</span>
              <div className="p-tags">
                <span>Weekly operating reviews</span><span>Monthly performance reviews</span><span>Quarterly strategic planning</span><span>Clear KPIs</span><span>Defined ownership</span><span>Decisions based on data</span>
              </div>
              <p className="obj">The business started becoming less dependent on the founder.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE MOMENT THAT MATTERED */}
      <section className="pull-quote">
        <div className="wrap" data-reveal="">
          <span className="tag">The Moment That Mattered</span>
          <p>Three months into the transformation, the founder went on holiday. For the first time in years.</p>
          <p className="small">No emergency calls. No constant approvals. No midnight messages. The company continued operating. When he returned, he didn&apos;t ask &quot;What happened while I was away?&quot; He asked &quot;What did we accomplish while I was away?&quot; That was the real transformation.</p>
        </div>
      </section>

      {/* THE BUSINESS AFTER TRANSFORMATION */}
      <section className="cs-section">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Business After Transformation</span>
            <h2>From founder-dependent to system-dependent.</h2>
          </div>
          <div className="after-grid" data-reveal="">
            <div className="after-card"><h3>Clear leadership accountability</h3><p>Everyone knew who owned what.</p></div>
            <div className="after-card"><h3>Documented operating processes</h3><p>Critical knowledge no longer lived only inside people&apos;s heads.</p></div>
            <div className="after-card"><h3>Management visibility</h3><p>Leadership could see performance without chasing information.</p></div>
            <div className="after-card"><h3>Better customer journeys</h3><p>Departments worked together around the customer rather than independently.</p></div>
            <div className="after-card"><h3>Scalable infrastructure</h3><p>The organisation had a foundation for its next stage of growth.</p></div>
            <div className="after-card"><h3>Reduced founder dependency</h3><p>The founder could finally focus on the future instead of constantly fixing the present.</p></div>
          </div>
        </div>
      </section>

      {/* ILLUSTRATIVE BUSINESS IMPACT */}
      <section className="cs-section panel">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">Illustrative Business Impact</span>
            <h2>After implementation, the transformation was designed to target outcomes such as:</h2>
          </div>
          <div className="metric-grid" data-reveal="">
            <div className="metric-card"><div className="num down">↓ 60%</div><div className="label">Founder involvement in operational decisions</div></div>
            <div className="metric-card"><div className="num down">↓ 30%</div><div className="label">Process cycle times</div></div>
            <div className="metric-card"><div className="num down">↓ 70%</div><div className="label">Management reporting time</div></div>
            <div className="metric-card"><div className="num down">↓ 40%</div><div className="label">Customer response time</div></div>
            <div className="metric-card"><div className="num">↑ 25%</div><div className="label">Employee productivity</div></div>
            <div className="metric-card"><div className="num text">Fragmented → Centralised</div><div className="label">Operational visibility</div></div>
          </div>
          <p className="metric-note" data-reveal="">Illustrative figures for demonstrating the transformation model; these are not claimed client results.</p>
        </div>
      </section>

      {/* BIGGEST RESULT */}
      <section className="pull-quote">
        <div className="wrap" data-reveal="">
          <span className="tag">But The Biggest Result Wasn&apos;t A Number</span>
          <p>It was freedom.</p>
          <p className="small">The founder could finally spend time on strategy, expansion, relationships, innovation, leadership and the future — instead of spending every morning fixing yesterday&apos;s problems.</p>
        </div>
      </section>

      {/* THE GROW SPARK DIAGNOSIS */}
      <section className="cs-section">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Grow Spark Diagnosis</span>
            <h2>We don&apos;t believe in selling isolated services.</h2>
          </div>
          <div className="cs-narrow center" data-reveal="">
            <p>If the founder had simply bought a CRM, a new dashboard, a few SOPs, or another operations manager — the underlying problem would have remained.</p>
            <p className="lead">The transformation worked because we looked at the entire business system.</p>
            <div className="system-chips">
              <span>People</span><span className="plus" aria-hidden="true">+</span><span>Process</span><span className="plus" aria-hidden="true">+</span><span>Technology</span><span className="plus" aria-hidden="true">+</span><span>Customer</span><span className="plus" aria-hidden="true">+</span><span>Strategy</span><span className="plus" aria-hidden="true">+</span><span>Leadership</span>
            </div>
          </div>
        </div>
      </section>

      {/* THE BUSINESS TRANSFORMATION */}
      <section className="cs-section panel">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Business Transformation</span>
            <h2>From Founder-Dependent To System-Dependent</h2>
            <p>The objective wasn&apos;t to remove the founder. It was to free the founder to do the work only the founder should be doing.</p>
          </div>
          <div className="ba-columns" data-reveal="">
            <div className="ba-col before">
              <div className="ba-col-head">Before</div>
              <div className="ba-row">Founder-dependent</div>
              <div className="ba-row">Reactive management</div>
              <div className="ba-row">Disconnected processes</div>
              <div className="ba-row">Limited visibility</div>
              <div className="ba-row">Operational complexity</div>
              <div className="ba-row">Growth creates pressure</div>
            </div>
            <div className="ba-col after">
              <div className="ba-col-head">After</div>
              <div className="ba-row">Leadership-led</div>
              <div className="ba-row">Structured management</div>
              <div className="ba-row">Systemised processes</div>
              <div className="ba-row">Real-time visibility</div>
              <div className="ba-row">Scalable infrastructure</div>
              <div className="ba-row">Growth creates leverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE GROW SPARK LESSON */}
      <section className="cs-section">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">The Grow Spark Lesson</span>
            <h2>Growth doesn&apos;t always require more people. Sometimes it requires a better system.</h2>
          </div>
          <div className="cs-narrow center" data-reveal="">
            <p>A business can have great products, great employees, strong demand and a respected brand — and still struggle to scale. Because the organisation itself hasn&apos;t evolved.</p>
            <p className="lead">The next stage of growth requires the business to become better designed than the stage that came before it.</p>
          </div>
        </div>
      </section>

      {/* THIS IS WHAT WE DO */}
      <section className="cs-section panel">
        <div className="wrap">
          <div className="section-head" data-reveal="">
            <span className="eyebrow">This Is What We Do</span>
            <h2>At Grow Spark, we don&apos;t ask &quot;What service do you need?&quot;</h2>
          </div>
          <div className="qa-stack" data-reveal="">
            <div className="qa-row"><p className="q">&quot;What service do you need?&quot;</p></div>
            <div className="qa-row answer"><p className="q">&quot;What is preventing your business from becoming what it has the potential to become?&quot;</p></div>
          </div>
          <p className="cs-narrow center" data-reveal="">Then we diagnose it. Design the transformation. Help implement it. And stay focused on the outcomes.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="wrap" data-reveal="">
          <span className="eyebrow">Ready To Find Your Constraint?</span>
          <h2 className="cta-heading">Your Business May Not Need More People. It May Need A Better System.</h2>
          <p>It may simply need someone to step back, look at the entire system and identify what&apos;s really holding it back.</p>
          <div className="cta-row">
            <a href="/contact/" className="btn btn-accent">Request Your Business Transformation Assessment™</a>
            <a href="/strategy/" className="btn btn-secondary btn-on-dark">Book An Executive Strategy Session</a>
          </div>
        </div>
      </section>
    </main>
  );
}
