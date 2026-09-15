export default function NotFound() {
  return (
    <main id="main" className="pt-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8 pt-10 pb-1">
        <ol className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog/">Blog</a>
          </li>
          <li>
            <span aria-current="page">Not found</span>
          </li>
        </ol>
      </nav>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[560px] px-5 sm:px-8 text-center">
          <span className="eyebrow block mb-5">404</span>
          <h1 className="page-hero-heading mb-5 text-balance">
            This post doesn&apos;t exist, or isn&apos;t published yet
          </h1>
          <p className="text-[17px] text-ink-soft leading-relaxed mb-10">
            It may have been unpublished or the link may be out of date.
          </p>
          <a href="/blog/" className="btn btn-primary">
            Back to all posts
          </a>
        </div>
      </section>
    </main>
  );
}
