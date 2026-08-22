import { z } from 'zod';

/**
 * Server-side schema for the careers application on /careers/.
 *
 * Field names come from the live markup in app/(site)/careers/page.tsx so the
 * client and server cannot drift.
 *
 * The markup marks nothing `required` — the form was designed to be answerable
 * in pieces. Name and email are required here anyway, because an application
 * nobody can reply to is not an application; every other field stays optional
 * exactly as the design intends. Server validation is the only gate: there are
 * no `required` attributes in the browser to lean on.
 */

/** C0 controls plus DEL. Stripped so nothing can smuggle newlines into a header. */
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

export const careersSchema = z.object({
  name: requiredText(120, 'Please enter your name.'),
  email: z
    .string({ message: 'Please provide a valid email address.' })
    .transform((s) => s.replace(CONTROL_CHARS, '').trim().toLowerCase())
    .pipe(z.email({ message: 'Please provide a valid email address.' }).max(254)),
  what_you_do: optionalText(300),
  strengths: optionalText(4000),
  problems: optionalText(4000),
  why_grow_spark: optionalText(4000),
  build_or_learn: optionalText(4000),
  link: optionalText(500),

  /**
   * Honeypot. Named to look plausible to a bot filling every field, and hidden
   * from people. Same field name as the contact form so one convention covers
   * every public endpoint.
   */
  company_website: z.string().optional().nullable(),
});

export type CareersInput = z.infer<typeof careersSchema>;
