'use client';

import { useRef, useState } from 'react';

/**
 * Contact form.
 *
 * Originally transcribed from sections/contact-form.html as a Server
 * Component. It became a Client Component when the backend landed, because the
 * submission now needs a loading state, an inline result and duplicate-submit
 * protection. The markup, classes, ids, labels and field names are unchanged —
 * only the honeypot and the status region are new.
 *
 * Inputs stay uncontrolled and are read through FormData on submit. That keeps
 * every field exactly as it was, and means a failed request leaves what the
 * visitor typed untouched so they can retry without losing anything.
 *
 * `action` and `method` are left on the element deliberately: without
 * JavaScript the form still posts to the same endpoint, which is how it
 * behaved before.
 */

type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'success'; message: string }
  | { kind: 'error'; message: string };

const INPUT_CLASS =
  'w-full rounded-md border border-hairline-strong bg-paper px-4 py-3 text-[16px] text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent-tint transition-colors duration-200';
const LABEL_CLASS = 'block text-[13px] font-semibold mb-2 text-ink';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const sending = status.kind === 'sending';

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Guard against a second submit while the first is still in flight.
    if (sending) return;

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: 'sending' });

    try {
      // Trailing slash on purpose: next.config.ts sets trailingSlash: true, so
      // /api/contact answers with a 308 to /api/contact/. Posting straight to
      // the canonical path avoids a redirect round trip on every submission.
      const response = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        setStatus({
          kind: 'error',
          message:
            result?.message ?? 'Something went wrong. Please try again in a moment.',
        });
        return;
      }

      setStatus({ kind: 'success', message: result.message });
      form.reset();
    } catch {
      // Network-level failure: the request never reached the server.
      setStatus({
        kind: 'error',
        message:
          'We could not reach the server. Please check your connection and try again.',
      });
    }
  }

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
            <form
              ref={formRef}
              action="/api/contact"
              method="post"
              onSubmit={handleSubmit}
              aria-labelledby="contact-form-heading"
              className="grid sm:grid-cols-2 gap-x-6 gap-y-6"
            >
              {/*
                Honeypot. Hidden from people and from assistive technology;
                only automated submitters fill it in, and anything that does is
                accepted-looking but discarded server-side.
              */}
              <div aria-hidden="true" className="hidden">
                <label htmlFor="cf-company-website">Company website</label>
                <input
                  type="text"
                  id="cf-company-website"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              {' '}
              <div>
                {' '}
                <label htmlFor="cf-name" className={LABEL_CLASS}>
                  Name
                </label>
                {' '}
                <input type="text" id="cf-name" name="name" autoComplete="name" required disabled={sending} className={INPUT_CLASS} />
                {' '}
              </div>
              {' '}
              <div>
                {' '}
                <label htmlFor="cf-email" className={LABEL_CLASS}>
                  Work Email
                </label>
                {' '}
                <input type="email" id="cf-email" name="email" autoComplete="email" required disabled={sending} className={INPUT_CLASS} />
                {' '}
              </div>
              {' '}
              <div>
                {' '}
                <label htmlFor="cf-company" className={LABEL_CLASS}>
                  Company
                </label>
                {' '}
                <input type="text" id="cf-company" name="company" autoComplete="organization" required disabled={sending} className={INPUT_CLASS} />
                {' '}
              </div>
              {' '}
              <div>
                {' '}
                <label htmlFor="cf-team-size" className={LABEL_CLASS}>
                  Team Size
                </label>
                {' '}
                {/*
                  defaultValue on the select rather than `selected` on the
                  option: React manages selection through the select element,
                  and `selected` on an option warns in the console.
                */}
                <select id="cf-team-size" name="team_size" required disabled={sending} defaultValue="" className={INPUT_CLASS}>
                  {' '}
                  <option value="" disabled>
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
                <label htmlFor="cf-challenge" className={LABEL_CLASS}>
                  What challenge are you trying to solve?
                </label>
                {' '}
                <textarea id="cf-challenge" name="challenge" rows={3} required disabled={sending} className={`${INPUT_CLASS} resize-y`} />
                {' '}
              </div>
              {' '}
              <div>
                {' '}
                <label htmlFor="cf-website" className={LABEL_CLASS}>
                  Company Website / LinkedIn
                </label>
                {' '}
                <input type="text" id="cf-website" name="website" autoComplete="url" placeholder="https://" disabled={sending} className={INPUT_CLASS} />
                {' '}
              </div>
              {' '}
              <div>
                {' '}
                <label htmlFor="cf-revenue" className={LABEL_CLASS}>
                  Approximate Annual Revenue Range
                </label>
                {' '}
                <select id="cf-revenue" name="revenue" required disabled={sending} defaultValue="under-50l" className={INPUT_CLASS}>
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
                <label htmlFor="cf-context" className={LABEL_CLASS}>
                  Additional Context {' '}
                  <span className="text-muted font-normal">
                    (optional)
                  </span>
                </label>
                {' '}
                <textarea id="cf-context" name="context" rows={3} disabled={sending} className={`${INPUT_CLASS} resize-y`} />
                {' '}
              </div>
              {' '}
              <div className="sm:col-span-2">
                {' '}
                <button type="submit" disabled={sending} className="btn btn-primary w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                  {sending ? 'Sending…' : 'Request Strategy Session'}
                </button>
                {' '}
                {/*
                  aria-live so the outcome is announced rather than only shown.
                  The region is always present so screen readers pick up the
                  change instead of missing a newly inserted node.
                */}
                <p
                  role="status"
                  aria-live="polite"
                  className={
                    status.kind === 'success'
                      ? 'mt-4 text-[15px] text-accent font-semibold'
                      : status.kind === 'error'
                        ? 'mt-4 text-[15px] text-[#B42318] font-semibold'
                        : 'sr-only'
                  }
                >
                  {status.kind === 'success' || status.kind === 'error' ? status.message : ''}
                </p>
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
