import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

/**
 * These tests cover the parts of the integration that are pure logic or that
 * can be exercised against a mocked SDK: field mapping, name splitting,
 * idempotency, and — most importantly — that a HubSpot failure is returned as
 * data rather than thrown, because the caller commits the row before this runs.
 *
 * `server-only` throws outside a server context, so it is stubbed for the suite.
 */
vi.mock('server-only', () => ({}));

const create = vi.fn();
const update = vi.fn();
const doSearch = vi.fn();
const dealCreate = vi.fn();

vi.mock('@hubspot/api-client', () => ({
  Client: class {
    crm = {
      contacts: {
        basicApi: { create, update },
        searchApi: { doSearch },
      },
      deals: { basicApi: { create: dealCreate } },
    };
  },
}));

const BASE: Record<string, string> = {
  name: 'Shaaz Alfaiz',
  email: 'shaaz@example.com',
  company: 'Grow Spark',
  team_size: '11-50',
  challenge: 'Margins are shrinking as we scale.',
  revenue: '2cr-10cr',
  website: 'https://example.com',
  context: 'Referred by a partner.',
};

beforeEach(() => {
  vi.clearAllMocks();
  process.env.HUBSPOT_ACCESS_TOKEN = 'test-token';
  process.env.HUBSPOT_DEAL_PIPELINE_ID = 'pipeline-1';
  process.env.HUBSPOT_DEAL_STAGE_ID = 'stage-1';
});

afterEach(() => {
  delete process.env.HUBSPOT_ACCESS_TOKEN;
});

describe('splitName', () => {
  it('splits first token from the remainder', async () => {
    const { splitName } = await import('../properties');
    expect(splitName('Shaaz Alfaiz')).toEqual({ firstname: 'Shaaz', lastname: 'Alfaiz' });
  });

  it('leaves lastname empty for a single token', async () => {
    const { splitName } = await import('../properties');
    expect(splitName('Shaaz')).toEqual({ firstname: 'Shaaz', lastname: '' });
  });

  it('keeps every remaining token in lastname', async () => {
    const { splitName } = await import('../properties');
    expect(splitName('Shaaz Alfaiz Khan')).toEqual({
      firstname: 'Shaaz',
      lastname: 'Alfaiz Khan',
    });
  });

  it('tolerates extra whitespace', async () => {
    const { splitName } = await import('../properties');
    expect(splitName('  Shaaz   Alfaiz  ')).toEqual({ firstname: 'Shaaz', lastname: 'Alfaiz' });
  });
});

describe('contactProperties', () => {
  it('maps standard fields and sends bands as gs_ custom properties', async () => {
    const { contactProperties } = await import('../properties');
    const p = contactProperties(BASE as never);
    expect(p.email).toBe('shaaz@example.com');
    expect(p.firstname).toBe('Shaaz');
    expect(p.lastname).toBe('Alfaiz');
    expect(p.company).toBe('Grow Spark');
    expect(p.website).toBe('https://example.com');
    expect(p.gs_challenge).toContain('Margins');
  });

  it('never writes a band into HubSpot numeric revenue/employee fields', async () => {
    const { contactProperties } = await import('../properties');
    const p = contactProperties(BASE as never);
    // The whole reason the gs_ properties exist.
    expect(p.annualrevenue).toBeUndefined();
    expect(p.numemployees).toBeUndefined();
    expect(p.gs_revenue_band).toBeTruthy();
    expect(p.gs_team_size).toBeTruthy();
  });

  it('omits empty optional fields so blanks cannot overwrite CRM data', async () => {
    const { contactProperties } = await import('../properties');
    const p = contactProperties({ ...BASE, website: '', context: '' } as never);
    expect('website' in p).toBe(false);
    expect('gs_context' in p).toBe(false);
  });
});

describe('upsertContact idempotency', () => {
  it('creates a contact when the email is new', async () => {
    create.mockResolvedValueOnce({ id: '123456' });
    const { upsertContact } = await import('../contacts');
    const r = await upsertContact({ email: 'new@example.com' });
    expect(r).toEqual({ id: '123456', created: true });
    expect(update).not.toHaveBeenCalled();
  });

  it('updates the existing contact on 409 instead of duplicating', async () => {
    create.mockRejectedValueOnce({ code: 409, body: { message: 'Contact already exists. Existing ID: 987654' } });
    update.mockResolvedValueOnce({ id: '987654' });
    const { upsertContact } = await import('../contacts');
    const r = await upsertContact({ email: 'dupe@example.com' });
    expect(r).toEqual({ id: '987654', created: false });
    expect(update).toHaveBeenCalledWith('987654', { properties: { email: 'dupe@example.com' } });
  });

  it('falls back to search when the 409 carries no id', async () => {
    create.mockRejectedValueOnce({ code: 409, body: { message: 'Contact already exists.' } });
    doSearch.mockResolvedValueOnce({ results: [{ id: '555555' }] });
    update.mockResolvedValueOnce({ id: '555555' });
    const { upsertContact } = await import('../contacts');
    const r = await upsertContact({ email: 'dupe2@example.com' });
    expect(r.id).toBe('555555');
    expect(r.created).toBe(false);
  });
});

describe('syncContactSubmissionToHubSpot failure behaviour', () => {
  it('returns skipped (not an error) when no token is configured', async () => {
    delete process.env.HUBSPOT_ACCESS_TOKEN;
    const { syncContactSubmissionToHubSpot } = await import('../sync');
    const r = await syncContactSubmissionToHubSpot('sub-1', BASE as never);
    expect(r).toMatchObject({ ok: false, skipped: true });
    expect(create).not.toHaveBeenCalled();
  });

  it('returns ok with the contact id on success', async () => {
    create.mockResolvedValueOnce({ id: '111' });
    const { syncContactSubmissionToHubSpot } = await import('../sync');
    const r = await syncContactSubmissionToHubSpot('sub-2', BASE as never);
    expect(r).toEqual({ ok: true, contactId: '111' });
  });

  it('never throws on an API error — failure is returned as data', async () => {
    create.mockRejectedValueOnce({ code: 500, body: { message: 'internal error' } });
    const { syncContactSubmissionToHubSpot } = await import('../sync');
    const r = await syncContactSubmissionToHubSpot('sub-3', BASE as never);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toContain('500');
  });

  it('never throws on a timeout', async () => {
    create.mockRejectedValueOnce(Object.assign(new Error('ETIMEDOUT'), { code: 'ETIMEDOUT' }));
    const { syncContactSubmissionToHubSpot } = await import('../sync');
    const r = await syncContactSubmissionToHubSpot('sub-4', BASE as never);
    expect(r.ok).toBe(false);
  });

  it('never leaks the access token into the stored error', async () => {
    create.mockRejectedValueOnce({
      code: 401,
      body: { message: 'auth failed for token=super-secret-token-value' },
    });
    const { syncContactSubmissionToHubSpot } = await import('../sync');
    const r = await syncContactSubmissionToHubSpot('sub-5', BASE as never);
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.error).not.toContain('super-secret-token-value');
      expect(r.error).toContain('[redacted]');
    }
  });
});

describe('deals', () => {
  it('uses pipeline and stage from the environment, never hardcoded', async () => {
    dealCreate.mockResolvedValueOnce({ id: 'deal-1' });
    const { createDealForContact } = await import('../deals');
    await createDealForContact({ dealname: 'Strategy Session — Acme', contactId: 'c-1' });
    const arg = dealCreate.mock.calls[0][0];
    expect(arg.properties.pipeline).toBe('pipeline-1');
    expect(arg.properties.dealstage).toBe('stage-1');
  });

  it('associates the deal with the contact', async () => {
    dealCreate.mockResolvedValueOnce({ id: 'deal-2' });
    const { createDealForContact } = await import('../deals');
    await createDealForContact({ dealname: 'x', contactId: 'c-9' });
    const arg = dealCreate.mock.calls[0][0];
    expect(arg.associations[0].to.id).toBe('c-9');
  });

  it('does not create a second deal when one already exists', async () => {
    const { ensureDealForContact } = await import('../deals');
    const r = await ensureDealForContact('existing-deal', { dealname: 'x', contactId: 'c-1' });
    expect(r).toEqual({ id: 'existing-deal', created: false });
    expect(dealCreate).not.toHaveBeenCalled();
  });
});

describe('careers', () => {
  it('has no careers sync function — applicants must not enter the sales pipeline', async () => {
    const sync = await import('../sync');
    expect(Object.keys(sync).some((k) => /career/i.test(k))).toBe(false);
  });
});
