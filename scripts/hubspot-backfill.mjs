/**
 * One-time backfill: push bookings that predate the CRM integration into HubSpot.
 *
 *   node --env-file=.env.local scripts/hubspot-backfill.mjs            # dry run
 *   node --env-file=.env.local scripts/hubspot-backfill.mjs --commit   # for real
 *
 * Dry run is the default deliberately. This writes to a live CRM containing
 * real people, and the rows it reads include paid bookings — a mistake here is
 * visible to customers, not just to us.
 *
 * Only the four hubspot_* columns are ever written. Payment state, Razorpay
 * ids, booking data and timestamps are read-only to this script.
 *
 * Idempotency mirrors lib/hubspot/contacts.ts: create, and on 409 update the
 * contact HubSpot names instead. The logic is repeated rather than imported
 * because that module is TypeScript behind a `server-only` guard and an `@/`
 * path alias, neither of which resolves under plain node. If the upsert
 * strategy there changes, change it here too.
 */
import postgres from 'postgres';
import { Client } from '@hubspot/api-client';

const COMMIT = process.argv.includes('--commit');

if (!process.env.DATABASE_URL) {
  console.error('Missing DATABASE_URL. See .env.example.');
  process.exit(1);
}
if (!process.env.HUBSPOT_ACCESS_TOKEN) {
  console.error('Missing HUBSPOT_ACCESS_TOKEN. See .env.example.');
  process.exit(1);
}

const sql = postgres(process.env.DATABASE_URL, { prepare: false, max: 1, connect_timeout: 15 });
const hs = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN, numberOfApiCallRetries: 2 });

/** Same split as lib/hubspot/properties.ts. */
function splitName(name) {
  const parts = String(name ?? '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return { firstname: '', lastname: '' };
  const [first, ...rest] = parts;
  return { firstname: first, lastname: rest.join(' ') };
}

function describe(e) {
  const status = e?.code ?? e?.status ?? null;
  const message = e?.body?.message ?? e?.message ?? 'Unknown HubSpot error';
  const category = e?.body?.category;
  return { status, message: category ? `${category}: ${message}` : message };
}

/** Never let a token reach the database or the console. */
function redact(message) {
  return String(message)
    .replace(/pat-[a-z0-9-]+/gi, '[redacted]')
    .replace(/(token|secret|key)["'\s:=]+\S+/gi, '$1=[redacted]');
}

async function upsertContact(properties) {
  try {
    const created = await hs.crm.contacts.basicApi.create({ properties, associations: [] });
    return { id: created.id, created: true };
  } catch (e) {
    const { status, message } = describe(e);
    if (status !== 409) throw e;
    let existing = message.match(/\b(\d{6,})\b/)?.[1];
    if (!existing) {
      const found = await hs.crm.contacts.searchApi.doSearch({
        filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: properties.email }] }],
        properties: ['email'], limit: 1, after: '0', sorts: [],
      });
      existing = found.results?.[0]?.id;
    }
    if (!existing) throw e;
    await hs.crm.contacts.basicApi.update(existing, { properties });
    return { id: existing, created: false };
  }
}

const rows = await sql`
  select id, name, email, phone, company, website, revenue, challenge,
         engagement, status, created_at
    from strategy_session_bookings
   where hubspot_synced_at is null
   order by created_at
`;

console.log(`\n  ${COMMIT ? 'BACKFILL' : 'DRY RUN'} — ${rows.length} booking(s) with hubspot_synced_at IS NULL\n`);

let synced = 0, failed = 0, skipped = 0;
const contactIds = new Set();

for (const [i, b] of rows.entries()) {
  const label = `${String(i + 1).padStart(2)}. ${String(b.name ?? '').slice(0, 20).padEnd(21)}${String(b.email ?? '(none)').slice(0, 36).padEnd(37)}`;

  // No email means no key to upsert against; creating a contact anyway would
  // mint an orphan that can never be matched again.
  if (!b.email || !String(b.email).trim()) {
    console.log(`  ${label}SKIP  no email`);
    skipped++;
    continue;
  }

  const { firstname, lastname } = splitName(b.name);
  const properties = Object.fromEntries(
    Object.entries({
      email: String(b.email).trim().toLowerCase(),
      firstname, lastname,
      phone: b.phone,
      company: b.company,
      website: b.website,
      gs_revenue_band: b.revenue,
      gs_challenge: b.challenge,
      gs_preferred_engagement: b.engagement,
    }).filter(([, v]) => typeof v === 'string' && v.trim() !== ''),
  );

  if (!COMMIT) {
    console.log(`  ${label}would sync  (${Object.keys(properties).length} properties)`);
    synced++;
    continue;
  }

  try {
    const { id, created } = await upsertContact(properties);
    await sql`
      update strategy_session_bookings
         set hubspot_contact_id = ${id},
             hubspot_synced_at  = now(),
             hubspot_sync_error = null
       where id = ${b.id}
    `;
    contactIds.add(id);
    console.log(`  ${label}OK    contact ${id} ${created ? '(created)' : '(updated)'}`);
    synced++;
  } catch (e) {
    const { status, message } = describe(e);
    const error = redact(status ? `${status}: ${message}` : message);
    // Recorded, never fatal, and the booking row itself is untouched — one bad
    // record must not stop the other eighteen.
    await sql`
      update strategy_session_bookings
         set hubspot_sync_error = ${error.slice(0, 500)},
             hubspot_synced_at  = null
       where id = ${b.id}
    `.catch(() => {});
    console.log(`  ${label}FAIL  ${error.slice(0, 70)}`);
    failed++;
  }
}

console.log(`
  ─────────────────────────────────
  Total found      ${rows.length}
  ${COMMIT ? 'Synced         ' : 'Would sync     '}  ${synced}
  Failed           ${failed}
  Skipped          ${skipped}
  ${COMMIT ? `Distinct HubSpot contacts  ${contactIds.size}  (fewer than synced = duplicates collapsed correctly)` : '(re-run with --commit to apply)'}
`);

await sql.end();
process.exit(failed ? 1 : 0);
