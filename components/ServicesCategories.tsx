import { Bot, Boxes, Cloud, Code2, Compass, Layers, Megaphone, MessageCircle, Palette, RefreshCw, Smartphone, TrendingUp, Users, Workflow } from 'lucide-react';

/**
 * Transcribed from sections\services-categories.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function ServicesCategories() {
  return (
    <>
      <section id="services" className="py-20 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          {/* Sticky offset matches the fixed header's real scrolled height (105px below lg, 115px at lg+ where the nav is taller) so the tab bar parks directly beneath the header instead of sliding underneath it. */}
          {' '}
          <nav aria-label="Service categories" className="sticky top-[105px] lg:top-[115px] z-30 -mx-5 px-5 sm:mx-0 sm:px-0 bg-paper/95 backdrop-blur-md py-4 mb-16 flex flex-wrap justify-center gap-2.5 border-b border-hairline" data-service-tabs="">
            {' '}
            <a href="#cat-ai-automation" className="service-tab" data-tab-for="cat-ai-automation">
              AI & Automation
            </a>
            {' '}
            <a href="#cat-software" className="service-tab" data-tab-for="cat-software">
              Software & Product
            </a>
            {' '}
            <a href="#cat-systems" className="service-tab" data-tab-for="cat-systems">
              Enterprise Systems
            </a>
            {' '}
            <a href="#cat-growth" className="service-tab" data-tab-for="cat-growth">
              Growth & Brand
            </a>
            {' '}
          </nav>
          {' '}
          <div id="cat-ai-automation" className="mb-20 lg:mb-28 scroll-mt-36" data-service-category="">
            {' '}
            <div className="mb-10" data-reveal="">
              {' '}
              <span className="eyebrow block mb-2">
                Category 01
              </span>
              {' '}
              <h2 className="subsection-heading">
                AI & Automation
              </h2>
              {' '}
            </div>
            {' '}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal="">
              {' '}
              <a href="/contact/" id="ai-automation" className="service-card card-elevate">
                {' '}
                <Workflow className="service-card__icon" />
                {' '}
                <h3>
                  AI Automation
                </h3>
                {' '}
                <p>
                  We identify the repetitive, rules-based work inside your operations and automate it — from back-office processing to internal approvals — so your team spends less time on tasks a system can handle reliably.
                </p>
                {' '}
              </a>
              {' '}
              <a href="/contact/" id="ai-agents" className="service-card card-elevate">
                {' '}
                <Bot className="service-card__icon" />
                {' '}
                <h3>
                  AI Agents
                </h3>
                {' '}
                <p>
                  We design and deploy AI agents that handle real workflows end to end — qualifying leads, triaging support, pulling data across systems — built around your processes, not a generic template.
                </p>
                {' '}
              </a>
              {' '}
              <a href="/contact/" id="chatbots" className="service-card card-elevate">
                {' '}
                <MessageCircle className="service-card__icon" />
                {' '}
                <h3>
                  AI Chatbots
                </h3>
                {' '}
                <p>
                  Conversational assistants for your website, product or support desk that actually resolve requests — trained on your content and connected to your real systems, not scripted decision trees.
                </p>
                {' '}
              </a>
              {' '}
              <a href="/contact/" id="sales-automation" className="service-card card-elevate">
                {' '}
                <TrendingUp className="service-card__icon" />
                {' '}
                <h3>
                  Sales Automation
                </h3>
                {' '}
                <p>
                  We build the pipelines, sequences and CRM logic that keep deals moving without manual chasing, so your sales team spends time selling, not updating spreadsheets.
                </p>
                {' '}
              </a>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <div id="cat-software" className="mb-20 lg:mb-28 scroll-mt-36" data-service-category="">
            {' '}
            <div className="mb-10" data-reveal="">
              {' '}
              <span className="eyebrow block mb-2">
                Category 02
              </span>
              {' '}
              <h2 className="subsection-heading">
                Software & Product
              </h2>
              {' '}
            </div>
            {' '}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="">
              {' '}
              <a href="/contact/" id="web-development" className="service-card card-elevate">
                {' '}
                <Code2 className="service-card__icon" />
                {' '}
                <h3>
                  Web Development
                </h3>
                {' '}
                <p>
                  Marketing sites, client portals and web applications built for performance and conversion, engineered on modern frameworks and handed over with documentation your team can actually maintain.
                </p>
                {' '}
              </a>
              {' '}
              <a href="/contact/" id="saas-development" className="service-card card-elevate">
                {' '}
                <Layers className="service-card__icon" />
                {' '}
                <h3>
                  SaaS Development
                </h3>
                {' '}
                <p>
                  From first product spec to production release, we design and build multi-tenant SaaS products — architecture, billing, onboarding and the operational tooling behind them.
                </p>
                {' '}
              </a>
              {' '}
              <a href="/contact/" id="mobile-apps" className="service-card card-elevate">
                {' '}
                <Smartphone className="service-card__icon" />
                {' '}
                <h3>
                  Mobile Apps
                </h3>
                {' '}
                <p>
                  Native and cross-platform apps for iOS and Android, built around a single codebase where it makes sense and native performance where it matters.
                </p>
                {' '}
              </a>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <div id="cat-systems" className="mb-20 lg:mb-28 scroll-mt-36" data-service-category="">
            {' '}
            <div className="mb-10" data-reveal="">
              {' '}
              <span className="eyebrow block mb-2">
                Category 03
              </span>
              {' '}
              <h2 className="subsection-heading">
                Enterprise Systems
              </h2>
              {' '}
            </div>
            {' '}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal="">
              {' '}
              <a href="/contact/" id="crm" className="service-card card-elevate">
                {' '}
                <Users className="service-card__icon" />
                {' '}
                <h3>
                  CRM Development
                </h3>
                {' '}
                <p>
                  We implement and customise CRM systems around how your sales and account teams actually work, not the vendor's default workflow, with clean data and integrations that keep it accurate.
                </p>
                {' '}
              </a>
              {' '}
              <a href="/contact/" id="erp" className="service-card card-elevate">
                {' '}
                <Boxes className="service-card__icon" />
                {' '}
                <h3>
                  ERP Solutions
                </h3>
                {' '}
                <p>
                  We design and implement ERP systems that connect finance, operations and supply chain into one source of truth, scoped to what your business needs now and can grow into.
                </p>
                {' '}
              </a>
              {' '}
              <a href="/contact/" id="cloud" className="service-card card-elevate">
                {' '}
                <Cloud className="service-card__icon" />
                {' '}
                <h3>
                  Cloud Solutions
                </h3>
                {' '}
                <p>
                  Migration, architecture and cost optimisation across AWS, Azure and Google Cloud, built for reliability and scale, not just to get workloads off-premise.
                </p>
                {' '}
              </a>
              {' '}
            </div>
            {' '}
          </div>
          {' '}
          <div id="cat-growth" className="scroll-mt-36" data-service-category="">
            {' '}
            <div className="mb-10" data-reveal="">
              {' '}
              <span className="eyebrow block mb-2">
                Category 04
              </span>
              {' '}
              <h2 className="subsection-heading">
                Growth & Brand
              </h2>
              {' '}
            </div>
            {' '}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal="">
              {' '}
              <a href="/contact/" id="digital-marketing" className="service-card card-elevate">
                {' '}
                <Megaphone className="service-card__icon" />
                {' '}
                <h3>
                  Digital Marketing
                </h3>
                {' '}
                <p>
                  Performance marketing, SEO and lifecycle campaigns built on the same data and systems as the rest of your business, so spend is measurable against real revenue.
                </p>
                {' '}
              </a>
              {' '}
              <a href="/contact/" id="branding" className="service-card card-elevate">
                {' '}
                <Palette className="service-card__icon" />
                {' '}
                <h3>
                  Branding
                </h3>
                {' '}
                <p>
                  Positioning, identity and brand systems built for enterprise credibility — the kind of brand that holds up in a boardroom, not just a pitch deck.
                </p>
                {' '}
              </a>
              {' '}
              <a href="/contact/" id="business-consulting" className="service-card card-elevate">
                {' '}
                <Compass className="service-card__icon" />
                {' '}
                <h3>
                  Business Consulting
                </h3>
                {' '}
                <p>
                  The strategic layer behind every engagement — operating model design, growth strategy and the executive advisory that keeps technology decisions aligned to business outcomes.
                </p>
                {' '}
              </a>
              {' '}
              <a href="/contact/" id="business-digitalization" className="service-card card-elevate">
                {' '}
                <RefreshCw className="service-card__icon" />
                {' '}
                <h3>
                  Business Digitalization
                </h3>
                {' '}
                <p>
                  We take manual, paper-based or fragmented processes and rebuild them as connected digital workflows — groundwork that makes every other system here work together.
                </p>
                {' '}
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
    </>
  );
}
