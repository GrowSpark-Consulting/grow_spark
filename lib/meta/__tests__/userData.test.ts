import { describe, it, expect, vi } from 'vitest';

/**
 * Normalisation and hashing for Conversions API customer information.
 *
 * The expected digests were computed independently (.NET's SHA256 over the
 * UTF-8 bytes), not with the code under test, so a wrong normalisation or a
 * wrong encoding fails here instead of silently never matching in Meta.
 */
vi.mock('server-only', () => ({}));

const HASH = {
  abc: 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
  'test@example.com': '973dfe463ec85785f5f95af5ba3906eedb2d931c24e69824a89ea65dba4e813b',
  '919876543210': '92b5072176e723878b5e06ff3ca61898e4eb74e8c46642a0f2db800b17364ab0',
  priya: '44bcff24eb6751fdcc80626affe0ad38e91deadf89b4c1df821055688b96aa47',
  sharma: 'c97bb3d1fa22affde0fe02f43eece8ab3fa20959e6434a3e40ff97c3265f7871',
};

const NO_SIGNALS = { ip: null, userAgent: null, fbp: null, fbc: null };

describe('sha256', () => {
  it('matches the standard test vector', async () => {
    const { sha256 } = await import('../userData');
    expect(sha256('abc')).toBe(HASH.abc);
  });
});

describe('normalizeEmail', () => {
  it('trims and lower-cases', async () => {
    const { normalizeEmail } = await import('../userData');
    expect(normalizeEmail('  Test@Example.COM \n')).toBe('test@example.com');
  });

  it('returns null for blank input', async () => {
    const { normalizeEmail } = await import('../userData');
    expect(normalizeEmail('   ')).toBeNull();
    expect(normalizeEmail(null)).toBeNull();
  });
});

describe('normalizePhone', () => {
  it.each([
    ['9876543210', '919876543210'], // bare 10 digits → India assumed
    ['98765 43210', '919876543210'],
    ['+91 98765-43210', '919876543210'],
    ['(+91) 98765 43210', '919876543210'],
    ['098765 43210', '919876543210'], // domestic trunk 0
    ['0091 98765 43210', '919876543210'], // 00 international prefix
    ['+44 20 7946 0958', '442079460958'], // already international: untouched
  ])('%s → %s', async (input, expected) => {
    const { normalizePhone } = await import('../userData');
    expect(normalizePhone(input)).toBe(expected);
  });

  it('drops values that cannot be a phone number', async () => {
    const { normalizePhone } = await import('../userData');
    expect(normalizePhone('12345')).toBeNull();
    expect(normalizePhone('call me')).toBeNull();
    expect(normalizePhone('1234567890123456')).toBeNull();
    expect(normalizePhone(null)).toBeNull();
  });
});

describe('normalizeNamePart', () => {
  it('keeps lower-case letters only', async () => {
    const { normalizeNamePart } = await import('../userData');
    expect(normalizeNamePart("O'Brien-Smith")).toBe('obriensmith');
    expect(normalizeNamePart('Dr. Priya')).toBe('drpriya');
    expect(normalizeNamePart('Priya2')).toBe('priya');
  });

  it('keeps non-ASCII letters rather than transliterating them', async () => {
    const { normalizeNamePart } = await import('../userData');
    expect(normalizeNamePart('José')).toBe('josé');
  });

  it('returns null when nothing is left', async () => {
    const { normalizeNamePart } = await import('../userData');
    expect(normalizeNamePart('—')).toBeNull();
    expect(normalizeNamePart('')).toBeNull();
  });
});

describe('buildUserData', () => {
  it('hashes email, phone, first and last name with the known digests', async () => {
    const { buildUserData } = await import('../userData');
    const user = buildUserData(
      { email: ' Test@Example.com ', phone: '98765 43210', name: 'Priya Sharma' },
      NO_SIGNALS,
    );
    expect(user).toEqual({
      em: [HASH['test@example.com']],
      ph: [HASH['919876543210']],
      fn: [HASH.priya],
      ln: [HASH.sharma],
    });
  });

  it('sends IP, user agent, _fbp and _fbc raw, as Meta requires', async () => {
    const { buildUserData } = await import('../userData');
    const user = buildUserData(
      { email: 'test@example.com' },
      {
        ip: '203.0.113.7',
        userAgent: 'Mozilla/5.0 Test',
        fbp: 'fb.1.1700000000000.123',
        fbc: 'fb.1.1700000000000.abc',
      },
    );
    expect(user.client_ip_address).toBe('203.0.113.7');
    expect(user.client_user_agent).toBe('Mozilla/5.0 Test');
    expect(user.fbp).toBe('fb.1.1700000000000.123');
    expect(user.fbc).toBe('fb.1.1700000000000.abc');
  });

  it('omits what was not provided instead of sending empty values', async () => {
    const { buildUserData } = await import('../userData');
    expect(buildUserData({ email: 'test@example.com', name: 'Priya', phone: null }, NO_SIGNALS)).toEqual({
      em: [HASH['test@example.com']],
      fn: [HASH.priya],
    });
  });

  it('never returns a raw email, phone or name', async () => {
    const { buildUserData } = await import('../userData');
    const serialised = JSON.stringify(
      buildUserData({ email: 'test@example.com', phone: '9876543210', name: 'Priya Sharma' }, NO_SIGNALS),
    );
    expect(serialised).not.toMatch(/test@example\.com|9876543210|priya|sharma/i);
  });
});
