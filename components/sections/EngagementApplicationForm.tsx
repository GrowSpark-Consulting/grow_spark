'use client';

import { useFormSubmit } from '@/components/forms/useFormSubmit';

/**
 * Long-form engagement application on /strategy/.
 *
 * The markup is the page's original form, moved verbatim into a Client
 * Component so it can submit through fetch instead of a full-page POST to an
 * endpoint that used to 404. Classes, ids, names, labels and field order are
 * unchanged; the honeypot and the status region are the only additions.
 *
 * Inputs stay uncontrolled and are read through FormData, so the rendered
 * markup is identical to what the server component produced before.
 */
export default function EngagementApplicationForm() {
  const { status, sending, handleSubmit } = useFormSubmit(
    '/api/engagement-application/',
    'Your application has been submitted successfully.',
  );

  return (
    <>
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
                    {' '}
                    <div>
                      <label className="form-label" htmlFor="a-name">
                        Founder Name
                      </label>
                      <input className="form-input" type="text" id="a-name" name="name" autoComplete="name" placeholder="Your full name" />
                    </div>
                    {' '}
                    <div>
                      <label className="form-label" htmlFor="a-company">
                        Company
                      </label>
                      <input className="form-input" type="text" id="a-company" name="company" autoComplete="organization" placeholder="Company" />
                    </div>
                    {' '}
                    <div>
                      <label className="form-label" htmlFor="a-website">
                        Website
                      </label>
                      <input className="form-input" type="text" id="a-website" name="website" placeholder="https://" />
                    </div>
                    {' '}
                    <div>
                      <label className="form-label" htmlFor="a-industry">
                        Industry
                      </label>
                      <input className="form-input" type="text" id="a-industry" name="industry" placeholder="e.g. E-commerce, Manufacturing" />
                    </div>
                    {' '}
                    <div>
                      {' '}
                      <label className="form-label" htmlFor="a-revenue">
                        Revenue Range
                      </label>
                      {' '}
                      <select className="form-input" id="a-revenue" name="revenue">
                        {' '}
                        <option>
                          Under ₹50L
                        </option>
                        {' '}
                        <option>
                          ₹50L – ₹2Cr
                        </option>
                        {' '}
                        <option>
                          ₹2Cr – ₹10Cr
                        </option>
                        {' '}
                        <option>
                          ₹10Cr – ₹50Cr
                        </option>
                        {' '}
                        <option>
                          ₹50Cr+
                        </option>
                        {' '}
                      </select>
                      {' '}
                    </div>
                    {' '}
                    <div>
                      <label className="form-label" htmlFor="a-team">
                        Team Size
                      </label>
                      <input className="form-input" type="text" id="a-team" name="team_size" placeholder="e.g. 12" />
                    </div>
                    {' '}
                    <div className="sm:col-span-2">
                      <label className="form-label" htmlFor="a-challenge">
                        Main Challenge
                      </label>
                      <textarea className="form-input" id="a-challenge" name="challenge" placeholder="What's the core problem?" />
                    </div>
                    {' '}
                    <div className="sm:col-span-2">
                      <label className="form-label" htmlFor="a-tried">
                        What Has Already Been Tried
                      </label>
                      <textarea className="form-input" id="a-tried" name="already_tried" placeholder="What have you already attempted?" />
                    </div>
                    {' '}
                    <div className="sm:col-span-2">
                      <label className="form-label" htmlFor="a-outcome">
                        Desired Outcome
                      </label>
                      <textarea className="form-input" id="a-outcome" name="desired_outcome" placeholder="What would a successful engagement look like?" />
                    </div>
                    {' '}
                    <div>
                      {' '}
                      <label className="form-label" htmlFor="a-readiness">
                        Investment Readiness
                      </label>
                      {' '}
                      <select className="form-input" id="a-readiness" name="investment_readiness">
                        {' '}
                        <option>
                          ₹50K – ₹1L
                        </option>
                        {' '}
                        <option>
                          ₹1L – ₹5L
                        </option>
                        {' '}
                        <option>
                          ₹5L – ₹15L
                        </option>
                        {' '}
                        <option>
                          ₹15L+
                        </option>
                        {' '}
                      </select>
                      {' '}
                    </div>
                    {' '}
                    <div>
                      {' '}
                      <label className="form-label" htmlFor="a-preferred">
                        Preferred Engagement
                      </label>
                      {' '}
                      <select className="form-input" id="a-preferred" name="preferred_engagement">
                        {' '}
                        <option>
                          Growth Diagnostic
                        </option>
                        {' '}
                        <option>
                          90-Day Growth Transformation
                        </option>
                        {' '}
                        <option>
                          Annual Founder Advisory
                        </option>
                        {' '}
                        <option>
                          Not sure — recommend one
                        </option>
                        {' '}
                      </select>
                      {' '}
                    </div>
                    {' '}
                    <div className="sm:col-span-2">
                      {' '}
                      <button type="submit" className="btn btn-primary btn-block" disabled={sending}>{sending ? 'Sending…' : 'Submit Application'}</button>
                      {' '}
                      <p className="text-[12.5px] text-muted mt-4 text-center">
                        Thank you. Grow Spark will review your application and contact you regarding the appropriate next step.
                      </p>
                      {' '}
                    </div>
                    {' '}
            
              {/* Honeypot. Hidden from people; bots fill every field. */}
              <div aria-hidden="true" className="hidden">
                <label htmlFor="engagementapplicationform-company-website">Company website</label>
                <input
                  type="text"
                  id="engagementapplicationform-company-website"
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
