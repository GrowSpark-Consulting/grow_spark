/**
 * Transcribed from sections/contact-form.html by scripts/html-to-tsx.py.
 * Server Component: the source partial carries no behaviour of its own,
 * so nothing here needs the browser. Markup, classes, ids, data
 * attributes and content are unchanged from the source.
 */
export default function ContactForm() {
  return (
    <>
      <section id="contact-form" className="py-20 sm:py-24 lg:py-28 bg-paper-sunken scroll-mt-24">
        {' '}
        <div className="mx-auto max-w-[var(--container-page)] px-5 sm:px-8">
          {' '}
          <div className="section-head" data-reveal="">
            {' '}
            <span className="eyebrow block mb-3.5">
              Request a Strategy Session
            </span>
            {' '}
            <h2 id="contact-form-heading">
              Tell us about your business
            </h2>
            {' '}
            <p>
              The more context you give us, the more useful the first conversation will be.
            </p>
            {' '}
          </div>
          {' '}
          <div className="max-w-[720px] mx-auto bg-paper-raised border border-hairline rounded-md shadow-[var(--shadow-card-md)] p-6 sm:p-10" data-reveal="">
            {' '}
            {/* Front-end only: this project has no backend (see CLAUDE.md). Wire `action` to a real form-handling endpoint or form service before this goes live. */}
            {' '}
            <form action="/api/contact" method="post" aria-labelledby="contact-form-heading" className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
              {' '}
              <div>
                {' '}
                <label htmlFor="cf-name" className="block text-[13px] font-semibold mb-2 text-ink">
                  Name
                </label>
                {' '}
                <input type="text" id="cf-name" name="name" autoComplete="name" required className="w-full rounded-md border border-hairline-strong bg-paper px-4 py-3 text-[16px] text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent-tint transition-colors duration-200" />
                {' '}
              </div>
              {' '}
              <div>
                {' '}
                <label htmlFor="cf-email" className="block text-[13px] font-semibold mb-2 text-ink">
                  Work Email
                </label>
                {' '}
                <input type="email" id="cf-email" name="email" autoComplete="email" required className="w-full rounded-md border border-hairline-strong bg-paper px-4 py-3 text-[16px] text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent-tint transition-colors duration-200" />
                {' '}
              </div>
              {' '}
              <div>
                {' '}
                <label htmlFor="cf-company" className="block text-[13px] font-semibold mb-2 text-ink">
                  Company
                </label>
                {' '}
                <input type="text" id="cf-company" name="company" autoComplete="organization" required className="w-full rounded-md border border-hairline-strong bg-paper px-4 py-3 text-[16px] text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent-tint transition-colors duration-200" />
                {' '}
              </div>
              {' '}
              <div>
                {' '}
                <label htmlFor="cf-team-size" className="block text-[13px] font-semibold mb-2 text-ink">
                  Team Size
                </label>
                {' '}
                <select id="cf-team-size" name="team_size" required className="w-full rounded-md border border-hairline-strong bg-paper px-4 py-3 text-[16px] text-ink focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent-tint transition-colors duration-200">
                  {' '}
                  <option value="" disabled selected>
                    Select team size
                  </option>
                  {' '}
                  <option value="1-10">
                    1–10
                  </option>
                  {' '}
                  <option value="11-50">
                    11–50
                  </option>
                  {' '}
                  <option value="51-200">
                    51–200
                  </option>
                  {' '}
                  <option value="201-500">
                    201–500
                  </option>
                  {' '}
                  <option value="500+">
                    500+
                  </option>
                  {' '}
                </select>
                {' '}
              </div>
              {' '}
              <div className="sm:col-span-2">
                {' '}
                <label htmlFor="cf-challenge" className="block text-[13px] font-semibold mb-2 text-ink">
                  What challenge are you trying to solve?
                </label>
                {' '}
                <textarea id="cf-challenge" name="challenge" rows={3} required className="w-full rounded-md border border-hairline-strong bg-paper px-4 py-3 text-[16px] text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent-tint transition-colors duration-200 resize-y" />
                {' '}
              </div>
              {' '}
              <div>
                {' '}
                <label htmlFor="cf-website" className="block text-[13px] font-semibold mb-2 text-ink">
                  Company Website / LinkedIn
                </label>
                {' '}
                <input type="text" id="cf-website" name="website" autoComplete="url" placeholder="https://" className="w-full rounded-md border border-hairline-strong bg-paper px-4 py-3 text-[16px] text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent-tint transition-colors duration-200" />
                {' '}
              </div>
              {' '}
              <div>
                {' '}
                <label htmlFor="cf-revenue" className="block text-[13px] font-semibold mb-2 text-ink">
                  Approximate Annual Revenue Range
                </label>
                {' '}
                <select id="cf-revenue" name="revenue" required className="w-full rounded-md border border-hairline-strong bg-paper px-4 py-3 text-[16px] text-ink focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent-tint transition-colors duration-200">
                  {' '}
                  <option value="under-50l">
                    Under ₹50L
                  </option>
                  {' '}
                  <option value="50l-2cr">
                    ₹50L – ₹2Cr
                  </option>
                  {' '}
                  <option value="2cr-10cr">
                    ₹2Cr – ₹10Cr
                  </option>
                  {' '}
                  <option value="10cr-plus">
                    ₹10Cr+
                  </option>
                  {' '}
                </select>
                {' '}
              </div>
              {' '}
              <div className="sm:col-span-2">
                {' '}
                <label htmlFor="cf-context" className="block text-[13px] font-semibold mb-2 text-ink">
                  Additional Context {' '}
                  <span className="text-muted font-normal">
                    (optional)
                  </span>
                </label>
                {' '}
                <textarea id="cf-context" name="context" rows={3} className="w-full rounded-md border border-hairline-strong bg-paper px-4 py-3 text-[16px] text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent-tint transition-colors duration-200 resize-y" />
                {' '}
              </div>
              {' '}
              <div className="sm:col-span-2">
                {' '}
                <button type="submit" className="btn btn-primary w-full sm:w-auto justify-center">
                  Request Strategy Session
                </button>
                {' '}
              </div>
              {' '}
            </form>
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
