import 'server-only';
import { createHash } from 'node:crypto';
import { splitName } from '@/lib/hubspot/properties';

/**
 * Customer information for a Conversions API event.
 *
 * Meta matches on SHA-256 hashes of *normalised* values, so normalisation has
 * to follow theirs exactly: a hash of "Priya@Example.com " never matches a hash
 * of "priya@example.com". Hashing happens here, on the server, so a raw email
 * address, phone number or name is never part of the request to Meta.
 *
 * Client IP, user agent and the _fbp/_fbc cookies are sent unhashed, because
 * Meta requires them that way.
 */

export function sha256(value: string): string {
  return createHash('sha256').update(value, 'utf8').digest('hex');
}

/** Trimmed and lower-cased. */
export function normalizeEmail(email: string | null | undefined): string | null {
  const normalized = (email ?? '').trim().toLowerCase();
  return normalized === '' ? null : normalized;
}

/**
 * Digits only, with the country code. The forms collect Indian numbers in
 * free text ("+91 98765 43210", "098765 43210", "9876543210"), so a bare
 * 10-digit number gets 91 in front, and so does an 11-digit one written with
 * the domestic trunk 0. A leading 00 international prefix is dropped. Anything
 * outside E.164's length range is discarded rather than hashed, since a hash of
 * a wrong number can only produce a false match.
 */
export function normalizePhone(phone: string | null | undefined): string | null {
  let digits = (phone ?? '').replace(/\D/g, '');
  if (digits.startsWith('00')) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  if (digits.length === 10) digits = `91${digits}`;
  return digits.length >= 8 && digits.length <= 15 ? digits : null;
}

/**
 * Lower-case letters only: no spaces, punctuation or digits. Letters outside
 * a–z (é, ñ, Devanagari) are kept, as Meta asks for UTF-8 rather than
 * transliteration.
 */
export function normalizeNamePart(part: string | null | undefined): string | null {
  const normalized = (part ?? '').toLowerCase().replace(/[^\p{L}]/gu, '');
  return normalized === '' ? null : normalized;
}

export type MetaPerson = {
  email: string;
  name?: string | null;
  phone?: string | null;
};

export type MetaRequestSignals = {
  ip: string | null;
  userAgent: string | null;
  fbp: string | null;
  fbc: string | null;
};

export type MetaUserData = {
  em?: string[];
  ph?: string[];
  fn?: string[];
  ln?: string[];
  client_ip_address?: string;
  client_user_agent?: string;
  fbp?: string;
  fbc?: string;
};

/** Absent values are left out entirely rather than sent empty. */
export function buildUserData(person: MetaPerson, signals: MetaRequestSignals): MetaUserData {
  const user: MetaUserData = {};

  const email = normalizeEmail(person.email);
  if (email) user.em = [sha256(email)];

  const phone = normalizePhone(person.phone);
  if (phone) user.ph = [sha256(phone)];

  if (person.name) {
    // Same split the CRM uses: first token, then the rest.
    const { firstname, lastname } = splitName(person.name);
    const fn = normalizeNamePart(firstname);
    const ln = normalizeNamePart(lastname);
    if (fn) user.fn = [sha256(fn)];
    if (ln) user.ln = [sha256(ln)];
  }

  if (signals.ip) user.client_ip_address = signals.ip;
  if (signals.userAgent) user.client_user_agent = signals.userAgent;
  if (signals.fbp) user.fbp = signals.fbp;
  if (signals.fbc) user.fbc = signals.fbc;

  return user;
}
