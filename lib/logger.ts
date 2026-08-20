import 'server-only';

/**
 * Minimal structured logger.
 *
 * The project had no logger, and this feature does not justify pulling one in.
 * Vercel captures stdout/stderr per invocation, so one JSON line per event is
 * both greppable and enough.
 *
 * Submission content is deliberately never logged — only the id and the fields
 * needed to triage a failure. A lead's message and email address belong in the
 * database, not in log storage.
 */

type Fields = Record<string, string | number | boolean | null | undefined>;

function emit(level: 'info' | 'warn' | 'error', event: string, fields: Fields = {}) {
  const line = JSON.stringify({
    level,
    event,
    at: new Date().toISOString(),
    ...fields,
  });
  if (level === 'error') console.error(line);
  else if (level === 'warn') console.warn(line);
  else console.log(line);
}

export const log = {
  info: (event: string, fields?: Fields) => emit('info', event, fields),
  warn: (event: string, fields?: Fields) => emit('warn', event, fields),
  error: (event: string, fields?: Fields) => emit('error', event, fields),
};

/**
 * Strip anything credential-shaped out of a message before it is logged or
 * stored. SMTP errors are the specific risk: some servers echo the AUTH line
 * back in the failure text.
 */
export function redact(message: string): string {
  return message
    .replace(/AUTH\s+\S+\s+\S+/gi, 'AUTH [redacted]')
    .replace(/(password|passwd|pwd|secret|token|key)["'\s:=]+\S+/gi, '$1=[redacted]')
    .replace(/postgres(ql)?:\/\/[^\s]+/gi, 'postgresql://[redacted]');
}
