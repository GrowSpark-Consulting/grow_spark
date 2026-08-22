'use client';

import { useState } from 'react';

/**
 * Shared submit behaviour for the public forms.
 *
 * ContactForm.tsx grew this logic first and still carries its own copy — it is
 * in production and its wording is tuned, so it is left alone rather than
 * refactored for the sake of symmetry. Every form added since shares this hook
 * instead of gaining a third and fourth transcription of the same fetch,
 * double-submit guard and error handling.
 *
 * Inputs stay uncontrolled and are read through FormData on submit, which keeps
 * the markup identical to the server-rendered version and means a field can be
 * added to the JSX without also wiring a piece of state.
 */

export type SubmitStatus =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'success'; message: string }
  | { kind: 'error'; message: string };

export function useFormSubmit(endpoint: string, successFallback: string) {
  const [status, setStatus] = useState<SubmitStatus>({ kind: 'idle' });
  const sending = status.kind === 'sending';

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Guard against a second submit while the first is still in flight.
    if (sending) return;

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: 'sending' });

    try {
      // The endpoint is passed with its trailing slash: next.config.ts sets
      // trailingSlash: true, so the unslashed path answers with a 308 and
      // every submission would pay for a redirect round trip.
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        setStatus({
          kind: 'error',
          message: result?.message ?? 'Something went wrong. Please try again in a moment.',
        });
        return;
      }

      setStatus({ kind: 'success', message: result.message ?? successFallback });
      form.reset();
    } catch {
      // Network-level failure: the request never reached the server, so there
      // is no server message to show.
      setStatus({
        kind: 'error',
        message: 'We could not reach the server. Please check your connection and try again.',
      });
    }
  }

  return { status, sending, handleSubmit };
}
