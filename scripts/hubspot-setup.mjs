/**
 * One-time HubSpot property provisioning.
 *
 *   node --env-file=.env.local scripts/hubspot-setup.mjs [--dry-run]
 *
 * Creates the `gs_`-prefixed custom contact properties this application writes
 * to. HubSpot rejects an update that references a property the portal does not
 * have, so this must be run once per portal before the contact form can sync.
 *
 * Run explicitly, never from the request path: provisioning schema on every
 * form submission would burn rate limit on work that changes about once a year,
 * and would let a transient API error rewrite the portal's schema.
 *
 * Idempotent — a property that already exists is left exactly as it is, because
 * overwriting a live property's type or options would break historical data.
 */
import { Client } from '@hubspot/api-client';

const DRY_RUN = process.argv.includes('--dry-run');
const GROUP = 'contactinformation';

// Mirrors CUSTOM_PROPERTIES in lib/hubspot/properties.ts. Duplicated rather
// than imported because this is a plain node script and that module is TS with
// a `server-only` guard; the names are asserted against each other by
// lib/hubspot/__tests__/properties.test.ts.
const PROPERTIES = [
  { name: 'gs_team_size', label: 'Team Size (band)', type: 'string', fieldType: 'text',
    description: 'Headcount band selected on the Grow Spark contact form.' },
  { name: 'gs_revenue_band', label: 'Annual Revenue (band)', type: 'string', fieldType: 'text',
    description: 'Revenue band selected on the Grow Spark form. Not numeric.' },
  { name: 'gs_challenge', label: 'Challenge To Solve', type: 'string', fieldType: 'textarea',
    description: 'What the prospect said they are trying to solve.' },
  { name: 'gs_context', label: 'Additional Context', type: 'string', fieldType: 'textarea',
    description: 'Optional extra context from the contact form.' },
  { name: 'gs_already_tried', label: 'Already Tried', type: 'string', fieldType: 'textarea',
    description: 'Engagement application: what has already been attempted.' },
  { name: 'gs_desired_outcome', label: 'Desired Outcome', type: 'string', fieldType: 'textarea',
    description: 'Engagement application: the outcome being sought.' },
  { name: 'gs_investment_readiness', label: 'Investment Readiness (band)', type: 'string', fieldType: 'text',
    description: 'Budget band selected on the engagement application.' },
  { name: 'gs_preferred_engagement', label: 'Preferred Engagement', type: 'string', fieldType: 'text',
    description: 'Engagement type selected on the engagement application.' },
];

const token = process.env.HUBSPOT_ACCESS_TOKEN;
if (!token) {
  console.error('Missing HUBSPOT_ACCESS_TOKEN. See .env.example.');
  process.exit(1);
}

const client = new Client({ accessToken: token });

let created = 0;
let existing = 0;
let failed = 0;

for (const prop of PROPERTIES) {
  try {
    await client.crm.properties.coreApi.getByName('contacts', prop.name);
    console.log(`  exists   ${prop.name}`);
    existing++;
    continue;
  } catch (e) {
    const status = e?.code ?? e?.status;
    if (status !== 404) {
      console.error(`  ERROR    ${prop.name} — lookup failed (${status ?? 'unknown'})`);
      failed++;
      continue;
    }
  }

  if (DRY_RUN) {
    console.log(`  would create  ${prop.name} (${prop.fieldType})`);
    created++;
    continue;
  }

  try {
    await client.crm.properties.coreApi.create('contacts', {
      name: prop.name,
      label: prop.label,
      type: prop.type,
      fieldType: prop.fieldType,
      groupName: GROUP,
      description: prop.description,
      hasUniqueValue: false,
      hidden: false,
      formField: false,
    });
    console.log(`  created  ${prop.name}`);
    created++;
  } catch (e) {
    // Never print the error object itself: HubSpot errors carry the request,
    // including the Authorization header.
    const status = e?.code ?? e?.status ?? 'unknown';
    const message = e?.body?.message ?? e?.message ?? 'unknown error';
    console.error(`  ERROR    ${prop.name} — ${status}: ${message}`);
    failed++;
  }
}

console.log(
  `\n${created} ${DRY_RUN ? 'to create' : 'created'}, ${existing} already present, ${failed} failed.`,
);
process.exit(failed ? 1 : 0);
