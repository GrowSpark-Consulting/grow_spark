import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

/**
 * Vitest needs the same `@/` alias tsconfig.json declares — it does not read
 * TypeScript path mappings on its own, so without this every `@/lib/...`
 * import inside a module under test fails to resolve.
 */
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['**/__tests__/**/*.test.ts'],
  },
});
