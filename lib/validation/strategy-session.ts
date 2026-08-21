import { z } from 'zod';

/**
 * Server-side schema for the Founder Strategy Session booking form.
 *
 * Field names and select values are taken from the live markup in
 * components/sections/StrategySessionForm.tsx — they are not invented here,
 * so the client and server cannot drift. Name and email are the only fields
 * required: they are the minimum needed to create a Razorpay Order and to
 * contact the founder if payment is abandoned. Every other field on the panel
 * has no `required` attribute in the original design and stays optional here.
 */

const REVENUE_BANDS = ['under-50l', '50l-2cr', '2cr-10cr', '10cr-plus'] as const;

/** C0 controls plus DEL. Stripped so nothing can smuggle newlines into a note. */
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

const optionalEnum = <T extends readonly [string, ...string[]]>(values: T) =>
  z
    .enum(values)
    .optional()
    .nullable()
    .transform((v) => v ?? null);

export const strategySessionSchema = z.object({
  name: requiredText(120, 'Please enter your name.'),

  email: requiredText(254, 'Please provide a valid email address.')
    .pipe(z.email('Please provide a valid email address.'))
    .refine((v) => !/[\r\n]/.test(v), 'Please provide a valid email address.'),

  phone: optionalText(40),
  company: optionalText(160),
  website: optionalText(300),
  revenue: optionalEnum(REVENUE_BANDS),
  challenge: optionalText(5000),

  // type="date" / type="time" inputs send plain strings; not parsed into a
  // Date here because they are advisory scheduling input, not validated
  // business logic.
  date: optionalText(20),
  time: optionalText(20),
});

export type StrategySessionInput = z.infer<typeof strategySessionSchema>;

export const REVENUE_LABELS: Record<string, string> = {
  'under-50l': 'Under ₹50L',
  '50l-2cr': '₹50L – ₹2Cr',
  '2cr-10cr': '₹2Cr – ₹10Cr',
  '10cr-plus': '₹10Cr+',
};
