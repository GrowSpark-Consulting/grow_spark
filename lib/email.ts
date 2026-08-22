import 'server-only';
import nodemailer, { type Transporter } from 'nodemailer';
import { env } from './env';
import { redact } from './logger';
import {
  REVENUE_LABELS,
  TEAM_SIZE_LABELS,
  type ContactInput,
} from './validation/contact';

/**
 * SMTP service.
 *
 * Kept out of the route handler so the transport can be reused, verified and
 * swapped without touching request handling. The transporter is cached on
 * globalThis: creating one per invocation would open a fresh TCP+TLS session
 * for every submission.
 */
declare global {
  // eslint-disable-next-line no-var
  var __mailer: Transporter | undefined;
}

function transporter(): Transporter {
  if (!globalThis.__mailer) {
    const { host, port, user, password, secure } = env.smtp;
    globalThis.__mailer = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass: password },
      // Fail rather than hang: a serverless invocation that waits on a dead
      // SMTP host burns the whole request budget and returns nothing useful.
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
  }
  return globalThis.__mailer;
}

/** Confirm credentials and connectivity without sending anything. */
export async function verifySmtp(): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    await transporter().verify();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: redact(e instanceof Error ? e.message : String(e)) };
  }
}

/** Escape before interpolating any user-supplied value into the HTML body. */
function esc(value: string | null | undefined): string {
  if (value === null || value === undefined || value === '') return '—';
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Strip CR/LF so a value can never inject an extra SMTP header. */
function headerSafe(value: string): string {
  return value.replace(/[\r\n]/g, ' ').trim();
}

const IST = 'Asia/Kolkata';

function formatWhen(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: IST,
  }).format(date) + ' IST';
}

export type ContactNotification = {
  id: string;
  submittedAt: Date;
  data: ContactInput;
  sourcePage: string | null;
};

/**
 * Send the internal notification for a stored submission.
 *
 * Reply-To is the submitter so a reply from the inbox reaches them directly,
 * while From stays the authenticated sender — putting the visitor's address in
 * From would fail SPF/DKIM and land the mail in spam.
 */
export async function sendContactNotification(n: ContactNotification): Promise<void> {
  const { data } = n;
  const teamSize = TEAM_SIZE_LABELS[data.team_size] ?? data.team_size;
  const revenue = REVENUE_LABELS[data.revenue] ?? data.revenue;
  const when = formatWhen(n.submittedAt);

  const rows: Array<[string, string | null]> = [
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company],
    ['Team Size', teamSize],
    ['Annual Revenue', revenue],
    ['Website / LinkedIn', data.website],
  ];

  const text = [
    'New contact form submission received.',
    '',
    ...rows.map(([k, v]) => `${k}: ${v ?? '—'}`),
    '',
    'Challenge:',
    data.challenge,
    '',
    'Additional context:',
    data.context ?? '—',
    '',
    `Submitted At: ${when}`,
    `Source Page: ${n.sourcePage ?? '—'}`,
    `Submission ID: ${n.id}`,
  ].join('\n');

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#FAFAF8;font-family:'Open Sans',Segoe UI,Arial,sans-serif;color:#14171A;">
  <div style="max-width:640px;margin:0 auto;background:#FFFFFF;border:1px solid #E4E6E8;border-radius:10px;padding:28px;">
    <p style="margin:0 0 4px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#0B5E45;">Grow Spark Consulting</p>
    <h1 style="margin:0 0 20px;font-size:20px;font-weight:800;">New contact form submission</h1>
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:14px;">
      ${rows
      .map(
        ([k, v]) => `<tr>
        <td style="padding:8px 12px 8px 0;color:#696D72;white-space:nowrap;vertical-align:top;width:170px;">${esc(k)}</td>
        <td style="padding:8px 0;vertical-align:top;">${k === 'Email'
            ? `<a href="mailto:${esc(v)}" style="color:#0B5E45;">${esc(v)}</a>`
            : esc(v)
          }</td>
      </tr>`,
      )
      .join('')}
    </table>
    <h2 style="margin:24px 0 6px;font-size:13px;font-weight:700;color:#696D72;text-transform:uppercase;letter-spacing:.06em;">Challenge</h2>
    <p style="margin:0;white-space:pre-wrap;line-height:1.6;">${esc(data.challenge)}</p>
    <h2 style="margin:24px 0 6px;font-size:13px;font-weight:700;color:#696D72;text-transform:uppercase;letter-spacing:.06em;">Additional context</h2>
    <p style="margin:0;white-space:pre-wrap;line-height:1.6;">${esc(data.context)}</p>
    <hr style="border:0;border-top:1px solid #E4E6E8;margin:26px 0 16px;">
    <p style="margin:0;font-size:12px;color:#696D72;line-height:1.8;">
      Submitted at ${esc(when)}<br>
      Source page ${esc(n.sourcePage)}<br>
      Submission ID <code style="font-family:ui-monospace,Menlo,monospace;">${esc(n.id)}</code>
    </p>
  </div>
</body></html>`;

  await transporter().sendMail({
    from: env.smtp.from,
    to: env.contactEmail,
    replyTo: headerSafe(data.email),
    subject: headerSafe(`New contact form submission — ${data.name}, ${data.company}`),
    text,
    html,
  });
}

/* ────────────────────────────────────────────────────────────────────────── */

/**
 * Generic submission notification.
 *
 * sendContactNotification predates this and stays as it is — it is in
 * production and its wording is tuned. Rather than duplicate that whole
 * template per form, later forms describe themselves as rows plus long-form
 * sections and share one renderer. A new form should need a shape, not a
 * second copy of the HTML.
 *
 * Every interpolated value goes through esc(); subject and Reply-To go through
 * headerSafe(), because a newline in a name is a header-injection attempt.
 */
export type FormNotification = {
  /** Shown in the subject and as the heading. */
  title: string;
  subject: string;
  /** Short key/value pairs rendered as a table. */
  rows: Array<[string, string | null]>;
  /** Long free-text answers, rendered as their own blocks. */
  sections?: Array<[string, string | null]>;
  /** Set when the form collected an address worth replying to. */
  replyTo?: string | null;
  submittedAt: Date;
  sourcePage?: string | null;
  id: string;
};

export async function sendFormNotification(n: FormNotification): Promise<void> {
  const when = formatWhen(n.submittedAt);
  const sections = n.sections ?? [];

  const text = [
    n.title,
    '',
    ...n.rows.map(([k, v]) => `${k}: ${v ?? '—'}`),
    '',
    ...sections.flatMap(([k, v]) => [`${k}:`, v ?? '—', '']),
    `Submitted At: ${when}`,
    `Source Page: ${n.sourcePage ?? '—'}`,
    `Submission ID: ${n.id}`,
  ].join('\n');

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#FAFAF8;font-family:'Open Sans',Segoe UI,Arial,sans-serif;color:#14171A;">
  <div style="max-width:640px;margin:0 auto;background:#FFFFFF;border:1px solid #E4E6E8;border-radius:10px;padding:28px;">
    <p style="margin:0 0 4px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#0B5E45;">Grow Spark Consulting</p>
    <h1 style="margin:0 0 20px;font-size:20px;font-weight:800;">${esc(n.title)}</h1>
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:14px;">
      ${n.rows
      .map(
        ([k, v]) => `<tr>
        <td style="padding:8px 12px 8px 0;color:#696D72;white-space:nowrap;vertical-align:top;width:170px;">${esc(k)}</td>
        <td style="padding:8px 0;vertical-align:top;">${k === 'Email' && v
            ? `<a href="mailto:${esc(v)}" style="color:#0B5E45;">${esc(v)}</a>`
            : esc(v)
          }</td>
      </tr>`,
      )
      .join('')}
    </table>
    ${sections
      .map(
        ([k, v]) => `<h2 style="margin:24px 0 6px;font-size:13px;font-weight:700;color:#696D72;text-transform:uppercase;letter-spacing:.06em;">${esc(k)}</h2>
    <p style="margin:0;white-space:pre-wrap;line-height:1.6;">${esc(v)}</p>`,
      )
      .join('')}
    <hr style="border:0;border-top:1px solid #E4E6E8;margin:26px 0 16px;">
    <p style="margin:0;font-size:12px;color:#696D72;line-height:1.8;">
      Submitted at ${esc(when)}<br>
      Source page ${esc(n.sourcePage)}<br>
      Submission ID <code style="font-family:ui-monospace,Menlo,monospace;">${esc(n.id)}</code>
    </p>
  </div>
</body></html>`;

  await transporter().sendMail({
    from: env.smtp.from,
    to: env.contactEmail,
    ...(n.replyTo ? { replyTo: headerSafe(n.replyTo) } : {}),
    subject: headerSafe(n.subject),
    text,
    html,
  });
}
