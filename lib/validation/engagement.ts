import { z } from 'zod';

/**
 * Server-side schema for the engagement application on /strategy/.
 *
 * Field names and select values are taken from the live markup in
 * app/(site)/strategy/page.tsx so the client and server cannot drift.
 *
 * Only `name` is required. The markup marks nothing required, and this is a
 * qualifier rather than a contact form — a founder part-way through it is still
 * a lead worth keeping. Note there is deliberately no email field on this form;
 * the follow-up happens through whatever channel the enquiry arrived on, which
 * is why HubSpot sync here is best-effort (see the route).
 */

// These <option> elements carry NO value attribute, so the browser submits the
// option's text. The accepted values are therefore the labels themselves,
// extracted from the live markup — inventing slugs here would reject every
// real submission.
const REVENUE_BANDS = [
  "Under ₹50L",
  "₹50L – ₹2Cr",
  "₹2Cr – ₹10Cr",
  "₹10Cr – ₹50Cr",
  "₹50Cr+",
] as const;
const READINESS_BANDS = [
  "₹50K – ₹1L",
  "₹1L – ₹5L",
  "₹5L – ₹15L",
  "₹15L+",
] as const;
const ENGAGEMENTS = [
  "Growth Diagnostic",
  "90-Day Growth Transformation",
  "Annual Founder Advisory",
  "Not sure — recommend one",
] as const;

/** C0 controls plus DEL. */
const CONTROL_CHARS = /[\x00-\x1f\x7f]/g;

const requiredText = (max: number, message: string) =>
  z
    .string({ message })
    .transform((s) => s.replace(CONTROL_CHARS, '').trim())
    .pipe(z.string().min(1, message).max(max, 'That entry is too long.'));

const optionalText = (max: number) =>
  z
    .string()
    .max(max, 'That entry is too long.')
    .optional()
    .nullable()
    .transform((s) => {
      const cleaned = (s ?? '').replace(CONTROL_CHARS, '').trim();
      return cleaned === '' ? null : cleaned;
    });

/**
 * Unknown select values are dropped rather than rejected. A stale cached page
 * sending a retired option should not cost the whole application — the answer
 * is simply not recorded, and everything else is kept.
 */
const optionalEnum = <T extends readonly [string, ...string[]]>(values: T) =>
  z
    .enum(values)
    .optional()
    .nullable()
    .catch(null)
    .transform((v) => v ?? null);

export const engagementSchema = z.object({
  name: requiredText(120, 'Please enter your name.'),
  company: optionalText(200),
  website: optionalText(500),
  industry: optionalText(200),
  revenue: optionalEnum(REVENUE_BANDS),
  team_size: optionalText(60),
  challenge: optionalText(4000),
  already_tried: optionalText(4000),
  desired_outcome: optionalText(4000),
  investment_readiness: optionalEnum(READINESS_BANDS),
  preferred_engagement: optionalEnum(ENGAGEMENTS),

  /** Honeypot — same convention as the other public endpoints. */
  company_website: z.string().optional().nullable(),
});

export type EngagementInput = z.infer<typeof engagementSchema>;

