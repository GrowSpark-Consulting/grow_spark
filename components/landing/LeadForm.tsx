'use client';

import { useState } from 'react';
import { ChevronRight, CircleCheck } from 'lucide-react';
import { useFormSubmit } from '@/components/forms/useFormSubmit';
import { booking } from './content';

/**
 * Assessment request form for the Transformation Framework landing page.
 *
 * Posts to the existing free contact endpoint, /api/contact/, through the
 * shared useFormSubmit hook. Field names and select values are the ones
 * lib/validation/contact.ts accepts — name, email, company, team_size,
 * revenue, challenge, the optional website and the company_website honeypot —
 * so this form and ContactForm.tsx feed the same table, email and CRM sync.
 *
 * Validation runs here first so a visitor gets an inline, per-field message
 * without a round trip; the server schema remains the real gate, and its
 * message is shown if it disagrees. Inputs stay uncontrolled and are read
 * through FormData, as elsewhere on the site.
 */

type FieldName = 'name' | 'email' | 'company' | 'team_size' | 'revenue' | 'challenge' | 'website';
type Errors = Partial<Record<FieldName, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Checked in DOM order, so the first failure is also the first field on screen. */
const RULES: Array<[FieldName, (value: string) => string | null]> = [
  ['name', (v) => (v ? null : 'Please enter your name.')],
  ['email', (v) => (EMAIL_PATTERN.test(v) ? null : 'Please provide a valid email address.')],
  ['company', (v) => (v ? null : 'Please enter your company.')],
  ['team_size', (v) => (v ? null : 'Please select a team size.')],
  ['revenue', (v) => (v ? null : 'Please select a revenue range.')],
  ['website', () => null],
  ['challenge', (v) => (v ? null : 'Please describe the challenge you want to solve.')],
];

function validate(form: HTMLFormElement): Errors {
  const data = new FormData(form);
  const errors: Errors = {};
  for (const [field, rule] of RULES) {
    const message = rule(String(data.get(field) ?? '').trim());
    if (message) errors[field] = message;
  }
  return errors;
}

export default function LeadForm() {
  const { status, sending, handleSubmit } = useFormSubmit(
    // Trailing slash: next.config.ts sets trailingSlash, so the unslashed path
    // would answer with a 308 first.
    '/api/contact/',
    booking.form.successBody,
  );
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    const found = validate(event.currentTarget);
    setErrors(found);
    const first = RULES.find(([field]) => found[field])?.[0];
    if (first) {
      event.preventDefault();
      event.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    void handleSubmit(event);
  }

  // Clear a field's message as soon as the visitor edits it.
  function onEdit(event: React.FormEvent<HTMLFormElement>) {
    const name = (event.target as HTMLInputElement).name as FieldName;
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  }

  if (status.kind === 'success') {
    return (
      <div className="lp-form-success" role="status" aria-live="polite">
        <CircleCheck className="lp-form-success__icon" aria-hidden="true" />
        <p className="lp-form-success__title">{booking.form.successTitle}</p>
        <p>{booking.form.successBody}</p>
      </div>
    );
  }

  const fieldProps = (name: FieldName) => ({
    id: `lf-${name}`,
    name,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `lf-${name}-error` : undefined,
  });

  const fieldError = (name: FieldName) =>
    errors[name] ? (
      <p id={`lf-${name}-error`} className="lp-field__error">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form
      // Without JavaScript the browser still POSTs to the same endpoint
      // rather than falling back to a GET that would put the lead's details
      // in the URL.
      action="/api/contact/"
      method="post"
      noValidate
      onSubmit={onSubmit}
      onInput={onEdit}
      onChange={onEdit}
      aria-labelledby="lead-form-heading"
      className="lp-form"
    >
      {/* Honeypot: hidden from people and assistive technology. */}
      <div aria-hidden="true" hidden>
        <label htmlFor="lf-company-website">Company website</label>
        <input type="text" id="lf-company-website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset disabled={sending} className="lp-form__grid">
        <legend className="sr-only">Your details</legend>

        <div className="lp-field">
          <label htmlFor="lf-name">Name</label>
          <input type="text" autoComplete="name" required maxLength={120} {...fieldProps('name')} />
          {fieldError('name')}
        </div>

        <div className="lp-field">
          <label htmlFor="lf-email">Work email</label>
          <input type="email" autoComplete="email" required maxLength={254} {...fieldProps('email')} />
          {fieldError('email')}
        </div>

        <div className="lp-field lp-field--full">
          <label htmlFor="lf-company">Company</label>
          <input type="text" autoComplete="organization" required maxLength={160} {...fieldProps('company')} />
          {fieldError('company')}
        </div>

        <div className="lp-field">
          <label htmlFor="lf-team_size">Team size</label>
          <select required defaultValue="" {...fieldProps('team_size')}>
            <option value="" disabled>
              Select team size
            </option>
            <option value="1-10">1–10</option>
            <option value="11-50">11–50</option>
            <option value="51-200">51–200</option>
            <option value="201-500">201–500</option>
            <option value="500+">500+</option>
          </select>
          {fieldError('team_size')}
        </div>

        <div className="lp-field">
          <label htmlFor="lf-revenue">Annual revenue</label>
          <select required defaultValue="" {...fieldProps('revenue')}>
            <option value="" disabled>
              Select a range
            </option>
            <option value="under-50l">Under ₹50L</option>
            <option value="50l-2cr">₹50L – ₹2Cr</option>
            <option value="2cr-10cr">₹2Cr – ₹10Cr</option>
            <option value="10cr-plus">₹10Cr+</option>
          </select>
          {fieldError('revenue')}
        </div>

        <div className="lp-field lp-field--full">
          <label htmlFor="lf-website">
            Company website / LinkedIn <span className="lp-field__optional">(optional)</span>
          </label>
          <input type="text" autoComplete="url" placeholder="https://" maxLength={300} {...fieldProps('website')} />
        </div>

        <div className="lp-field lp-field--full">
          <label htmlFor="lf-challenge">What challenge are you trying to solve?</label>
          <textarea rows={4} required maxLength={5000} {...fieldProps('challenge')} />
          {fieldError('challenge')}
        </div>

        <div className="lp-field--full">
          <button type="submit" className="lp-form__submit">
            {sending ? 'Sending…' : booking.form.submit}
            {!sending && <ChevronRight className="lp-form__submit-icon" aria-hidden="true" />}
          </button>
          <p role="alert" className={status.kind === 'error' ? 'lp-form__error' : 'sr-only'}>
            {status.kind === 'error' ? status.message : ''}
          </p>
          <p className="lp-form__note">{booking.form.note}</p>
        </div>
      </fieldset>
    </form>
  );
}
