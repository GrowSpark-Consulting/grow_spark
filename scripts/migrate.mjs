/**
 * Migration runner.
 *
 * The project has no ORM, and one is not warranted by a single table. This
 * applies the .sql files in db/migrations in filename order and records what
 * ran, so it is safe to re-run and safe to run on a fresh database.
 *
 *   node scripts/migrate.mjs            # apply pending migrations
 *   node scripts/migrate.mjs --status   # show what has run, change nothing
 *
 * Reads DATABASE_URL from the environment or .env.local.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import postgres from 'postgres';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const migrationsDir = path.join(root, 'db', 'migrations');

// Minimal .env.local reader: this script runs outside Next, which is what
// normally loads that file.
function loadEnvLocal() {
  const file = path.join(root, '.env.local');
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue;
    const idx = trimmed.indexOf('=');
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"'))
      || (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (value && !process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set. Add it to .env.local (see .env.example).');
  process.exit(1);
}

const statusOnly = process.argv.includes('--status');
const sql = postgres(process.env.DATABASE_URL, { prepare: false, max: 1, connect_timeout: 15 });

try {
  await sql`
    create table if not exists schema_migrations (
      name       text primary key,
      applied_at timestamptz not null default now()
    )
  `;

  // Same reasoning as contact_submissions in 0001: Supabase exposes every
  // public-schema table through PostgREST using an anon key that ships to
  // browsers. This table holds only migration filenames, but leaking the
  // schema history tells an attacker exactly what the database looks like.
  // Enabled here rather than in a migration file because this table is created
  // by the runner itself — doing it here means a fresh database is covered on
  // the very first run instead of only once a later migration executes.
  // Idempotent, and the runner connects as the owner, which bypasses RLS.
  await sql`alter table schema_migrations enable row level security`;

  const applied = new Set(
    (await sql`select name from schema_migrations`).map((r) => r.name),
  );
  const files = fs.existsSync(migrationsDir)
    ? fs.readdirSync(migrationsDir).filter((f) => f.endsWith('.sql')).sort()
    : [];

  if (statusOnly) {
    console.log('migration                              status');
    for (const f of files) {
      console.log(`  ${f.padEnd(38)}${applied.has(f) ? 'applied' : 'PENDING'}`);
    }
    process.exit(0);
  }

  let ran = 0;
  for (const file of files) {
    if (applied.has(file)) {
      console.log(`  skip     ${file} (already applied)`);
      continue;
    }
    const contents = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
    // Each migration runs in a transaction: a failure leaves nothing behind.
    await sql.begin(async (tx) => {
      await tx.unsafe(contents);
      await tx`insert into schema_migrations (name) values (${file})`;
    });
    console.log(`  applied  ${file}`);
    ran += 1;
  }
  console.log(ran === 0 ? '\nNothing to apply — database is up to date.' : `\n${ran} migration(s) applied.`);
} catch (error) {
  // Never echo the connection string, which carries the password.
  const message = String(error?.message ?? error).replace(
    /postgres(ql)?:\/\/[^\s]+/gi,
    'postgresql://[redacted]',
  );
  console.error('\nMigration failed:', message);
  process.exit(1);
} finally {
  await sql.end({ timeout: 5 });
}
