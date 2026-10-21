import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Static guarantees that the Conversions API access token cannot reach a
 * browser. Next only inlines NEXT_PUBLIC_* variables into client bundles, so
 * the token leaks only if client code reads it, imports the module that does,
 * or someone renames it with that prefix — each of which is checked here.
 *
 * The runtime half (token in the body, never in the URL or a log line) is in
 * capi.test.ts.
 */

const ROOT = fileURLToPath(new URL('../../..', import.meta.url));

function sourceFiles(dir: string): string[] {
  return readdirSync(path.join(ROOT, dir), { withFileTypes: true, recursive: true })
    .filter((entry) => entry.isFile() && /\.(ts|tsx)$/.test(entry.name))
    .map((entry) => path.join(entry.parentPath, entry.name))
    .filter((file) => !file.includes(`${path.sep}__tests__${path.sep}`));
}

const read = (file: string) => readFileSync(file, 'utf8');
const rel = (file: string) => path.relative(ROOT, file).split(path.sep).join('/');
/** Code only: doc comments are allowed to *explain* where the token lives. */
const code = (file: string) => read(file).replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');

const ALL = [...sourceFiles('app'), ...sourceFiles('components'), ...sourceFiles('lib')];
const CLIENT = ALL.filter((file) => /^\s*['"]use client['"]/.test(read(file)) || rel(file).startsWith('components/'));
const SERVER_ONLY_MODULES = /from ['"]@\/lib\/(env|db|meta\/capi|meta\/userData)['"]/;

describe('the Conversions API token', () => {
  it('is read in exactly one place, behind server-only', () => {
    const readers = ALL.filter((file) => read(file).includes('META_CAPI_ACCESS_TOKEN')).map(rel);
    expect(readers).toEqual(['lib/env.ts']);
    expect(read(path.join(ROOT, 'lib/env.ts'))).toMatch(/^import 'server-only';/);
  });

  it('is never referenced or reachable from client code', () => {
    expect(CLIENT.length).toBeGreaterThan(0);
    for (const file of CLIENT) {
      const source = read(file);
      expect(source, rel(file)).not.toContain('META_CAPI_ACCESS_TOKEN');
      expect(source, rel(file)).not.toContain('access_token');
      expect(source, rel(file)).not.toMatch(SERVER_ONLY_MODULES);
    }
  });

  it('keeps the modules that build server events server-only', () => {
    for (const file of ['lib/meta/capi.ts', 'lib/meta/userData.ts']) {
      expect(read(path.join(ROOT, file)), file).toMatch(/^import 'server-only';/);
    }
  });

  it('keeps the browser-shared module free of anything secret', () => {
    const shared = code(path.join(ROOT, 'lib/meta/shared.ts'));
    expect(shared).not.toMatch(/server-only|META_CAPI|TEST_EVENT|access_token/);
    // The only environment variable it may read is the public Pixel ID.
    expect(shared.match(/process\.env\.[A-Z_]+/g)).toEqual(['process.env.NEXT_PUBLIC_META_PIXEL_ID']);
  });

  it('is never given the NEXT_PUBLIC_ prefix', () => {
    const files = [...ALL, path.join(ROOT, '.env.example')];
    for (const file of files) {
      expect(read(file), rel(file)).not.toMatch(/NEXT_PUBLIC_\w*(CAPI|TOKEN|TEST_EVENT)/);
    }
  });
});
