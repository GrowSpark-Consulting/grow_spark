import { z } from 'zod';

/**
 * Server-side schema for the contact form.
 *
 * Field names and select values are taken from the live markup in
 * components/sections/ContactForm.tsx — they are not invented here, so the
 * client and server cannot drift. The browser's own `required` attributes are
 * a convenience only; this schema is the actual gate.
 */

const TEAM_SIZES = ['1-10', '11-50', '51-200', '201-500', '500+'] as const;
const REVENUE_BANDS = ['under-50l', '50l-2cr', '2cr-10cr', '10cr-plus'] as const;

/** C0 controls plus DEL. Stripped so nothing can smuggle newlines into a header. */
const CONTROL_CHARS = new RegExp('[\u0000-\u001f\u007f]', 'g');

/**
 * A required text field.
 *
 * The message is attached to the base `z.string()` as well as to `min(1)`,
 * because a field that is absent entirely fails the type check first — without
 * it the caller gets Zod's internal "expected string, received undefined"
 * rather than something a visitor can act on.
 */
const requiredText = (max: number, message: string) =>
  z
    .string({ message })
    .transform((s) => s.replace(CONTROL_CHARS, '').trim())
    .pipe(z.string().min(1, message).max(max, 'That entry is too long.'));

/**
 * An optional text field.
 *
 * Accepts missing, null or blank and normalises all three to null, so an
 * untouched input never writes an empty string into the database. `.nullable()`
 * alone is not enough: it permits null but still rejects `undefined`, which is
 * exactly what arrives when the field is absent from the payload.
 */
const optionalText = (max: number) =>
  z
    .string()
    .max(max, 'That entry is too long.')
    .optional()
    .nullable()
    // No .pipe() here on purpose: piping produces a schema Zod no longer treats
    // as optional, so the object key becomes required again and an absent
    // field fails with "expected nonoptional, received undefined". The length
    // check runs on the raw value instead, which is equivalent because
    // trimming can only shorten it.
    .transform((s) => {
      const cleaned = (s ?? '').replace(CONTROL_CHARS, '').trim();
      return cleaned === '' ? null : cleaned;
    });

export const contactSchema = z.object({
  name: requiredText(120, 'Please enter your name.'),

  email: requiredText(254, 'Please provide a valid email address.')
    .pipe(z.email('Please provide a valid email address.'))
    // Header-injection guard: an address containing CR/LF must never reach the
    // mail transport, where it could append extra headers.
    .refine((v) => !/[\r\n]/.test(v), 'Please provide a valid email address.'),

  company: requiredText(160, 'Please enter your company.'),

  team_size: z.enum(TEAM_SIZES, { message: 'Please select a team size.' }),

  challenge: requiredText(5000, 'Please describe the challenge you want to solve.'),

  website: optionalText(300),

  revenue: z.enum(REVENUE_BANDS, { message: 'Please select a revenue range.' }),

  context: optionalText(5000),

  /**
   * Honeypot. Hidden from people, so they leave it empty; bots that fill every
   * input give themselves away. Any value here means the submission is dropped.
   */
  company_website: z.string().optional().nullable(),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Human-readable labels, used in the notification email. */
export const TEAM_SIZE_LABELS: Record<string, string> = {
  '1-10': '1–10',
  '11-50': '11–50',
  '51-200': '51–200',
  '201-500': '201–500',
  '500+': '500+',
};

export const REVENUE_LABELS: Record<string, string> = {
  'under-50l': 'Under ₹50L',
  '50l-2cr': '₹50L – ₹2Cr',
  '2cr-10cr': '₹2Cr – ₹10Cr',
  '10cr-plus': '₹10Cr+',
};
