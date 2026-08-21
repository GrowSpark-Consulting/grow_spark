import 'server-only';
import type { ContactInput } from '@/lib/validation/contact';
import { TEAM_SIZE_LABELS, REVENUE_LABELS } from '@/lib/validation/contact';

/**
 * The mapping between Grow Spark's form fields and HubSpot contact properties.
 *
 * Kept in one file, away from the API route and away from the SDK calls, so a
 * future HubSpot API version can be absorbed by changing client.ts without
 * touching what any field means.
 *
 * Standard HubSpot properties are used where the semantics genuinely match.
 * Everything else gets a `gs_`-prefixed custom property rather than being
 * forced into a standard field: HubSpot's `annualrevenue` and `numemployees`
 * are numeric, while this form collects *bands* ("2cr-10cr", "11-50"). Writing
 * a band into a numeric property either fails or silently coerces to a wrong
 * number, so the bands stay strings in gs_revenue_band / gs_team_size.
 */

/** Custom properties that must exist in the HubSpot portal before syncing. */
export const CUSTOM_PROPERTIES = [
  {
    name: 'gs_team_size',
    label: 'Team Size (band)',
    type: 'string',
    fieldType: 'text',
    description: 'Headcount band selected on the Grow Spark contact form.',
  },
  {
    name: 'gs_revenue_band',
    label: 'Annual Revenue (band)',
    type: 'string',
    fieldType: 'text',
    description: 'Revenue band selected on the Grow Spark form. Not numeric.',
  },
  {
    name: 'gs_challenge',
    label: 'Challenge To Solve',
    type: 'string',
    fieldType: 'textarea',
    description: 'What the prospect said they are trying to solve.',
  },
  {
    name: 'gs_context',
    label: 'Additional Context',
    type: 'string',
    fieldType: 'textarea',
    description: 'Optional extra context from the contact form.',
  },
  {
    name: 'gs_already_tried',
    label: 'Already Tried',
    type: 'string',
    fieldType: 'textarea',
    description: 'Engagement application: what has already been attempted.',
  },
  {
    name: 'gs_desired_outcome',
    label: 'Desired Outcome',
    type: 'string',
    fieldType: 'textarea',
    description: 'Engagement application: the outcome being sought.',
  },
  {
    name: 'gs_investment_readiness',
    label: 'Investment Readiness (band)',
    type: 'string',
    fieldType: 'text',
    description: 'Budget band selected on the engagement application.',
  },
  {
    name: 'gs_preferred_engagement',
    label: 'Preferred Engagement',
    type: 'string',
    fieldType: 'text',
    description: 'Engagement type selected on the engagement application.',
  },
] as const;

export const CUSTOM_PROPERTY_NAMES = CUSTOM_PROPERTIES.map((p) => p.name);

/** HubSpot's group for these; created by scripts/hubspot-setup.mjs. */
export const PROPERTY_GROUP = 'contactinformation';

/**
 * Split a single name field into HubSpot's firstname/lastname.
 *
 * Deliberately simple: first token is the first name, the remainder is the last
 * name. Anything cleverer guesses at particles, honorifics and name orders it
 * cannot actually know, and guessing wrong on a person's name is worse than
 * being plainly mechanical.
 *
 *   "Shaaz Alfaiz"       -> { firstname: 'Shaaz', lastname: 'Alfaiz' }
 *   "Shaaz"              -> { firstname: 'Shaaz', lastname: '' }
 *   "Shaaz Alfaiz Khan"  -> { firstname: 'Shaaz', lastname: 'Alfaiz Khan' }
 */
export function splitName(name: string): { firstname: string; lastname: string } {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstname: '', lastname: '' };
  const [first, ...rest] = parts;
  return { firstname: first!, lastname: rest.join(' ') };
}

/** Drop empty values so a blank optional field never overwrites existing CRM data. */
function compact(props: Record<string, string | undefined | null>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(props).filter(([, v]) => typeof v === 'string' && v.trim() !== ''),
  ) as Record<string, string>;
}

/**
 * Contact-form submission -> HubSpot contact properties.
 *
 * The human-readable label is sent for banded values ("₹2Cr – ₹10Cr" rather
 * than "2cr-10cr"), because a salesperson reading the CRM record should see
 * what the visitor saw, not this application's internal slug.
 */
export function contactProperties(data: ContactInput): Record<string, string> {
  const { firstname, lastname } = splitName(data.name);
  return compact({
    email: data.email,
    firstname,
    lastname,
    company: data.company,
    website: data.website,
    gs_team_size: TEAM_SIZE_LABELS[data.team_size] ?? data.team_size,
    gs_revenue_band: REVENUE_LABELS[data.revenue] ?? data.revenue,
    gs_challenge: data.challenge,
    gs_context: data.context,
  });
}
