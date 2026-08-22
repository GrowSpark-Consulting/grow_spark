'use client';

import { useFormSubmit } from '@/components/forms/useFormSubmit';

/**
 * General careers application on /careers/.
 *
 * The markup is the page's original form, moved verbatim into a Client
 * Component so it can submit through fetch instead of a full-page POST to an
 * endpoint that used to 404. Classes, ids, names, labels and field order are
 * unchanged; the honeypot and the status region are the only additions.
 *
 * Inputs stay uncontrolled and are read through FormData, so the rendered
 * markup is identical to what the server component produced before.
 */
export default function CareersApplicationForm() {
  const { status, sending, handleSubmit } = useFormSubmit(
    '/api/careers-application/',
    'Your application has been submitted successfully.',
  );

  return (
    <>
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
                    {' '}
                    <div>
                      <label className="form-label" htmlFor="c-name">
                        Name
                      </label>
                      <input className="form-input" type="text" id="c-name" name="name" autoComplete="name" placeholder="Your full name" />
                    </div>
                    {' '}
                    <div>
                      <label className="form-label" htmlFor="c-email">
                        Email
                      </label>
                      <input className="form-input" type="email" id="c-email" name="email" autoComplete="email" placeholder="you@email.com" />
                    </div>
                    {' '}
                    <div className="sm:col-span-2">
                      <label className="form-label" htmlFor="c-what">
                        What You Do
                      </label>
                      <input className="form-input" type="text" id="c-what" name="what_you_do" placeholder="Your current role / focus" />
                    </div>
                    {' '}
                    <div className="sm:col-span-2">
                      <label className="form-label" htmlFor="c-good">
                        What You're Unusually Good At
                      </label>
                      <textarea className="form-input" id="c-good" name="strengths" />
                    </div>
                    {' '}
                    <div className="sm:col-span-2">
                      <label className="form-label" htmlFor="c-enjoy">
                        What Kind Of Problems You Enjoy Solving
                      </label>
                      <textarea className="form-input" id="c-enjoy" name="problems" />
                    </div>
                    {' '}
                    <div className="sm:col-span-2">
                      <label className="form-label" htmlFor="c-why">
                        Why Grow Spark
                      </label>
                      <textarea className="form-input" id="c-why" name="why_grow_spark" />
                    </div>
                    {' '}
                    <div className="sm:col-span-2">
                      <label className="form-label" htmlFor="c-build">
                        What You Want To Build Or Learn
                      </label>
                      <textarea className="form-input" id="c-build" name="build_or_learn" />
                    </div>
                    {' '}
                    <div className="sm:col-span-2">
                      <label className="form-label" htmlFor="c-link">
                        Portfolio / LinkedIn / Resume Link
                      </label>
                      <input className="form-input" type="text" id="c-link" name="link" placeholder="https://" />
                    </div>
                    {' '}
                    <div className="sm:col-span-2">
                      {' '}
                      <button type="submit" className="btn btn-primary btn-block" disabled={sending}>{sending ? 'Sending…' : 'Submit General Application'}</button>
                      {' '}
                      <p className="text-[13px] text-muted mt-4 text-center">
                        [Application submission integration to be connected.]
                      </p>
                      {' '}
                    </div>
                    {' '}
            
              {/* Honeypot. Hidden from people; bots fill every field. */}
              <div aria-hidden="true" className="hidden">
                <label htmlFor="careersapplicationform-company-website">Company website</label>
                <input
                  type="text"
                  id="careersapplicationform-company-website"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
            </form>
      {/*
        Announced as well as shown: a sighted user sees the message appear,
        a screen-reader user gets it from the live region.
      */}
      {status.kind !== 'idle' && status.kind !== 'sending' && (
        <p
          role={status.kind === 'error' ? 'alert' : 'status'}
          aria-live="polite"
          className={
            status.kind === 'error'
              ? 'mt-5 text-[15px] font-semibold text-[#B3261E]'
              : 'mt-5 text-[15px] font-semibold text-accent'
          }
        >
          {status.message}
        </p>
      )}
    </>
  );
}
