'use client';

import { useRef, useState } from 'react';

/**
 * Booking form + Razorpay Standard Checkout for the two 1:1 paid engagements
 * on the Strategy Sessions page: the ₹9,999 Founder Strategy Session and the
 * ₹15,999 Founder Growth Intensive. Originally built for the Strategy Session
 * alone (extracted from that panel in app/(site)/strategy/page.tsx — same
 * move ContactForm.tsx made when its backend landed) and generalized via the
 * `engagement` prop rather than duplicated when the Growth Intensive booking
 * needed the same flow: same fields, same Checkout handling, same
 * verify/error/retry states — only the API endpoint, id prefix, Checkout
 * description and price label differ, and those live in ENGAGEMENT_CONFIG
 * below. Markup, ids, labels and field names for the default (session) engagement
 * are unchanged from the original — the revenue <option>s carry the slug
 * `value`s lib/validation/strategy-session.ts validates against (visible text
 * is untouched).
 *
 * Unlike ContactForm, this form has no no-JS fallback: Razorpay Checkout is a
 * JavaScript popup, so `action`/`method` are dropped rather than kept for
 * progressive enhancement — there is nothing meaningful for a plain POST to
 * do here.
 *
 * The Razorpay checkout.js script is only ever requested from inside
 * handleSubmit, once a booking has actually been created — never on mount —
 * so the other 26 routes, and even this page on first load, never fetch it.
 */

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayCheckoutOptions) => RazorpayCheckoutInstance;
  }
}

interface RazorpayCheckoutOptions {
  key: string;
  amount: number;
  currency: string;
  order_id: string;
  name: string;
  description?: string;
  prefill?: { name?: string; email?: string; contact?: string };
  notes?: Record<string, string>;
  theme?: { color?: string };
  modal?: { ondismiss?: () => void };
  handler: (response: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) => void;
}

interface RazorpayCheckoutInstance {
  open: () => void;
  on: (event: 'payment.failed', handler: (response: unknown) => void) => void;
}

const CHECKOUT_SCRIPT_ID = 'razorpay-checkout-js';
const CHECKOUT_SCRIPT_SRC = 'https://checkout.razorpay.com/v1/checkout.js';

function loadRazorpayCheckout(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve();
      return;
    }
    const existing = document.getElementById(CHECKOUT_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('checkout_script_failed')));
      return;
    }
    const script = document.createElement('script');
    script.id = CHECKOUT_SCRIPT_ID;
    script.src = CHECKOUT_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('checkout_script_failed'));
    document.body.appendChild(script);
  });
}

type Engagement = 'strategy_session' | 'growth_intensive';

type EngagementConfig = {
  apiEndpoint: string;
  idPrefix: string;
  checkoutDescription: string;
  priceLabel: string;
};

const ENGAGEMENT_CONFIG: Record<Engagement, EngagementConfig> = {
  strategy_session: {
    apiEndpoint: '/api/strategy-session/',
    idPrefix: 's',
    checkoutDescription: 'Founder Strategy Session',
    priceLabel: '₹9,999',
  },
  growth_intensive: {
    apiEndpoint: '/api/growth-intensive/',
    idPrefix: 'i',
    checkoutDescription: 'Founder Growth Intensive',
    priceLabel: '₹15,999',
  },
};

type Status =
  | { kind: 'idle' }
  | { kind: 'booking' }
  | { kind: 'paying' }
  | { kind: 'verifying' }
  | { kind: 'error'; message: string }
  | { kind: 'cancelled' };

export default function StrategySessionForm({
  engagement = 'strategy_session',
}: {
  engagement?: Engagement;
}) {
  const config = ENGAGEMENT_CONFIG[engagement];
  const idFor = (field: string) => `${config.idPrefix}-${field}`;

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const busy = status.kind === 'booking' || status.kind === 'paying' || status.kind === 'verifying';

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: 'booking' });

    let order: {
      bookingId: string;
      orderId: string;
      amount: number;
      currency: string;
      keyId: string;
    };
    try {
      // Trailing slash on purpose: next.config.ts sets trailingSlash: true.
      const response = await fetch(config.apiEndpoint, {
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
      order = result;
    } catch {
      setStatus({
        kind: 'error',
        message: 'We could not reach the server. Please check your connection and try again.',
      });
      return;
    }

    setStatus({ kind: 'paying' });

    try {
      await loadRazorpayCheckout();
    } catch {
      setStatus({
        kind: 'error',
        message: 'We could not load the secure payment window. Please try again.',
      });
      return;
    }

    const name = String(payload.name ?? '');
    const email = String(payload.email ?? '');
    const phone = String(payload.phone ?? '');

    const razorpay = new window.Razorpay!({
      key: order.keyId,
      amount: order.amount,
      currency: order.currency,
      order_id: order.orderId,
      name: 'Grow Spark Consulting',
      description: config.checkoutDescription,
      prefill: { name, email, contact: phone },
      notes: { booking_id: order.bookingId },
      theme: { color: '#0d9488' },
      modal: {
        ondismiss: () => {
          // Checkout closed without completing — no success page, booking
          // row stays PENDING, and the visitor can simply submit again.
          setStatus({ kind: 'cancelled' });
        },
      },
      handler: async (response) => {
        setStatus({ kind: 'verifying' });
        try {
          const verifyResponse = await fetch('/api/razorpay/verify/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              bookingId: order.bookingId,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
          const verifyResult = await verifyResponse.json().catch(() => null);

          if (!verifyResponse.ok || !verifyResult?.success) {
            setStatus({
              kind: 'error',
              message:
                verifyResult?.message
                ?? 'We could not verify your payment. Please contact us before retrying.',
            });
            return;
          }

          // A full navigation, not client routing: the success page reads
          // verified state fresh from the server on every load, and this is a
          // one-time transactional redirect where that matters more than a
          // smooth transition.
          window.location.assign(`/payment/success/?ref=${encodeURIComponent(order.bookingId)}`);
        } catch {
          setStatus({
            kind: 'error',
            message:
              'Your payment may have succeeded, but we could not confirm it here. Please contact us with your booking reference before retrying.',
          });
        }
      },
    });

    razorpay.on('payment.failed', () => {
      setStatus({
        kind: 'error',
        message: 'The payment did not go through. Your details are saved — please try again.',
      });
    });

    razorpay.open();
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
      <div>
        <label className="form-label" htmlFor={idFor('date')}>
          Preferred Date
        </label>
        <input className="form-input" type="date" id={idFor('date')} name="date" disabled={busy} />
      </div>
      <div>
        <label className="form-label" htmlFor={idFor('time')}>
          Preferred Time
        </label>
        <input className="form-input" type="time" id={idFor('time')} name="time" disabled={busy} />
      </div>
      <div>
        <label className="form-label" htmlFor={idFor('name')}>
          Founder Name
        </label>
        <input
          className="form-input"
          type="text"
          id={idFor('name')}
          name="name"
          autoComplete="name"
          placeholder="Your full name"
          required
          disabled={busy}
        />
      </div>
      <div>
        <label className="form-label" htmlFor={idFor('email')}>
          Email
        </label>
        <input
          className="form-input"
          type="email"
          id={idFor('email')}
          name="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
          disabled={busy}
        />
      </div>
      <div>
        <label className="form-label" htmlFor={idFor('phone')}>
          Phone / WhatsApp
        </label>
        <input
          className="form-input"
          type="tel"
          id={idFor('phone')}
          name="phone"
          autoComplete="tel"
          placeholder="+91"
          disabled={busy}
        />
      </div>
      <div>
        <label className="form-label" htmlFor={idFor('company')}>
          Company Name
        </label>
        <input
          className="form-input"
          type="text"
          id={idFor('company')}
          name="company"
          autoComplete="organization"
          placeholder="Company"
          disabled={busy}
        />
      </div>
      <div>
        <label className="form-label" htmlFor={idFor('website')}>
          Company Website / LinkedIn
        </label>
        <input
          className="form-input"
          type="text"
          id={idFor('website')}
          name="website"
          placeholder="https://"
          disabled={busy}
        />
      </div>
      <div>
        <label className="form-label" htmlFor={idFor('revenue')}>
          Approximate Annual Revenue Range
        </label>
        <select
          className="form-input"
          id={idFor('revenue')}
          name="revenue"
          defaultValue=""
          disabled={busy}
        >
          <option value="" disabled>
            Select a range
          </option>
          <option value="under-50l">Under ₹50L</option>
          <option value="50l-2cr">₹50L – ₹2Cr</option>
          <option value="2cr-10cr">₹2Cr – ₹10Cr</option>
          <option value="10cr-plus">₹10Cr+</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="form-label" htmlFor={idFor('challenge')}>
          Primary Challenge
        </label>
        <textarea
          className="form-input"
          id={idFor('challenge')}
          name="challenge"
          placeholder={
            engagement === 'growth_intensive'
              ? "What's the complex problem you want to unpack?"
              : "What's the one problem you want to work through?"
          }
          disabled={busy}
        />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-primary btn-block" disabled={busy}>
          {status.kind === 'booking' && 'Starting Your Booking…'}
          {status.kind === 'paying' && 'Opening Secure Payment…'}
          {status.kind === 'verifying' && 'Confirming Payment…'}
          {(status.kind === 'idle' || status.kind === 'error' || status.kind === 'cancelled')
            && 'Continue To Payment'}
        </button>
        {status.kind === 'error' && (
          <p className="text-[12.5px] text-red-600 mt-4 text-center" role="alert">
            {status.message}
          </p>
        )}
        {status.kind === 'cancelled' && (
          <p className="text-[12.5px] text-muted mt-4 text-center">
            Payment was not completed. Your details are saved — you can try again whenever you're
            ready.
          </p>
        )}
        {(status.kind === 'idle' || status.kind === 'booking') && (
          <p className="text-[12.5px] text-muted mt-4 text-center">
            {config.priceLabel} · Secure payment via Razorpay
          </p>
        )}
      </div>
    </form>
  );
}
