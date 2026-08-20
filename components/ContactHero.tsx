/**
 * Transcribed from sections\contact-hero.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function ContactHero() {
  return (
    <>
      <section className="border-b border-hairline pt-16 pb-16 lg:pt-20 lg:pb-20">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="max-w-[720px] mx-auto text-center" data-reveal="">
            {' '}
            <span className="eyebrow block mb-5">
              Get In Touch
            </span>
            {' '}
            <h1 className="page-hero-heading mb-6 text-balance">
              Let's talk about what's next.
            </h1>
            {' '}
            <p className="text-[17px] text-ink-soft leading-relaxed max-w-[560px] mx-auto mb-8">
              {' '} One conversation is usually enough to know if we're the right fit — no lengthy sales process. {' '}
            </p>
            {' '}
            <a href="#contact-form" className="btn btn-primary">
              Request a Strategy Session
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
