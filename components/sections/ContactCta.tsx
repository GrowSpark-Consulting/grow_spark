/**
 * Transcribed from sections/contact-cta.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function ContactCta() {
  return (
    <>
      <section className="py-24 sm:py-28 lg:py-32 text-center bg-ink">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8" data-reveal="">
          {' '}
          <h2 className="text-white cta-heading mb-5">
            Prefer to skip the form?
          </h2>
          {' '}
          <p className="text-[#9BA1A7] text-[17px] mb-10 max-w-[520px] mx-auto">
            Email us directly and a founder or lead consultant will get back to you personally.
          </p>
          {' '}
          <div className="flex gap-4 justify-center flex-wrap">
            {' '}
            <a href="mailto:info@growsparkconsulting.com" className="btn btn-accent">
              Email Us Directly
            </a>
            {' '}
            <a href="/case-studies/" className="btn btn-secondary btn-on-dark">
              See How We Document Results
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
