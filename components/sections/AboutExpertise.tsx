import { Bot, Cloud, Code2, RefreshCw } from 'lucide-react';

/**
 * Transcribed from sections/about-expertise.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function AboutExpertise() {
  return (
    <>
      <section className="py-20 sm:py-24 lg:py-28">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Technology & AI
            </span>
            {' '}
            <h2>
              Built to work inside modern AI and software stacks
            </h2>
            {' '}
            <p>
              We're hands-on with the tools behind the recommendations we make — not just advising on transformation, but building it.
            </p>
            {' '}
          </div>
          {' '}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal="">
            {' '}
            <div className="service-card">
              {' '}
              <Bot className="service-card__icon" />
              {' '}
              <h3>
                AI Agents & Automation
              </h3>
              {' '}
              <p>
                Custom agents and workflow automation connected to your real systems, not generic templates.
              </p>
              {' '}
            </div>
            {' '}
            <div className="service-card">
              {' '}
              <Cloud className="service-card__icon" />
              {' '}
              <h3>
                Cloud & Enterprise Systems
              </h3>
              {' '}
              <p>
                Architecture, migration and CRM/ERP implementation built for reliability at scale.
              </p>
              {' '}
            </div>
            {' '}
            <div className="service-card">
              {' '}
              <Code2 className="service-card__icon" />
              {' '}
              <h3>
                Modern Software Engineering
              </h3>
              {' '}
              <p>
                Web, SaaS and mobile product development, engineered to be handed over and maintained.
              </p>
              {' '}
            </div>
            {' '}
            <div className="service-card">
              {' '}
              <RefreshCw className="service-card__icon" />
              {' '}
              <h3>
                Legacy Modernization
              </h3>
              {' '}
              <p>
                Turning manual, paper-based processes into connected digital workflows.
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
    </>
  );
}
