import 'server-only';

/**
 * Server-only environment access.
 *
 * The `server-only` import is the guard that matters: if any of this is ever
 * pulled into a Client Component, the build fails instead of quietly inlining
 * SMTP credentials or the database password into a browser bundle.
 *
 * Values are read lazily rather than at module load. Reading them at import
 * time would make `next build` fail on a machine that has no credentials, and
 * the static pages in this project must keep building without a database.
 */

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing required environment variable ${name}. See .env.example.`,
    );
  }
  return value;
}

export const env = {
  get databaseUrl() {
    return required('DATABASE_URL');
  },
  get smtp() {
    return {
      host: required('SMTP_HOST'),
      port: Number(process.env.SMTP_PORT ?? 587),
      user: required('SMTP_USER'),
      password: required('SMTP_PASSWORD'),
      from: required('SMTP_FROM'),
      // Implicit TLS on 465; STARTTLS on 587.
      secure: (process.env.SMTP_SECURE ?? '').toLowerCase() === 'true'
        || Number(process.env.SMTP_PORT ?? 587) === 465,
    };
  },
  get contactEmail() {
    return required('CONTACT_EMAIL');
  },
};

/** True when every variable the contact workflow needs is present. */
export function contactWorkflowConfigured(): boolean {
  return Boolean(
    process.env.DATABASE_URL
      && process.env.SMTP_HOST
      && process.env.SMTP_USER
      && process.env.SMTP_PASSWORD
      && process.env.SMTP_FROM
      && process.env.CONTACT_EMAIL,
  );
}
