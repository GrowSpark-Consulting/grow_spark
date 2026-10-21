import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

/**
 * Server-side Lead events. Meta is never contacted: `fetch` is stubbed for
 * every test and the database claim/mark functions are mocks.
 *
 * Covers the four promises sendMetaLead makes: nothing without consent and
 * configuration; at most once per row; never throws; and the access token
 * travels only in the request body — never in the URL, never in a log line.
 */
vi.mock('server-only', () => ({}));

const db = vi.hoisted(() => ({
  claimMetaCapiEvent: vi.fn(),
  markMetaCapiSent: vi.fn(),
  markMetaCapiFailed: vi.fn(),
}));
vi.mock('@/lib/db', () => db);

const TOKEN = 'EAAtestTOKENthatMustNeverLeak123';
const PIXEL_ID = '903539706058302';
const ROW_ID = '1b4e28ba-2fa1-11d2-883f-0016d3cca427';
const ENDPOINT = `https://graph.facebook.com/v24.0/${PIXEL_ID}/events`;

const HASH = {
  email: '973dfe463ec85785f5f95af5ba3906eedb2d931c24e69824a89ea65dba4e813b',
  phone: '92b5072176e723878b5e06ff3ca61898e4eb74e8c46642a0f2db800b17364ab0',
  fn: '44bcff24eb6751fdcc80626affe0ad38e91deadf89b4c1df821055688b96aa47',
  ln: 'c97bb3d1fa22affde0fe02f43eece8ab3fa20959e6434a3e40ff97c3265f7871',
};

const CONSENTED_COOKIES =
  'other=1; gs_consent=granted; _fbp=fb.1.1700000000000.123; _fbc=fb.1.1700000000000.abc';

function lead(overrides: { cookieHeader?: string | null; sourcePage?: string | null } = {}) {
  return {
    table: 'contact_submissions' as const,
    id: ROW_ID,
    formName: 'Contact Form',
    person: { email: ' Test@Example.com ', name: 'Priya Sharma', phone: '98765 43210' },
    context: {
      cookieHeader: CONSENTED_COOKIES,
      ip: '203.0.113.7',
      userAgent: 'Mozilla/5.0 Test',
      sourcePage: 'https://www.growsparkconsulting.com/contact/?utm_source=meta&fbclid=abc#form',
      ...overrides,
    },
  };
}

let fetchMock: ReturnType<typeof vi.fn>;
let logged: string[];

function sentBody() {
  const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
  return JSON.parse(String(init.body));
}

beforeEach(() => {
  vi.clearAllMocks();
  process.env.NEXT_PUBLIC_META_PIXEL_ID = PIXEL_ID;
  process.env.META_CAPI_ACCESS_TOKEN = TOKEN;
  db.claimMetaCapiEvent.mockResolvedValue(true);
  db.markMetaCapiSent.mockResolvedValue(undefined);
  db.markMetaCapiFailed.mockResolvedValue(undefined);

  fetchMock = vi.fn(async () => Response.json({ events_received: 1, fbtrace_id: 'AbCdEf' }));
  vi.stubGlobal('fetch', fetchMock);

  logged = [];
  for (const method of ['log', 'warn', 'error'] as const) {
    vi.spyOn(console, method).mockImplementation((...args: unknown[]) => {
      logged.push(args.map(String).join(' '));
    });
  }
});

afterEach(() => {
  delete process.env.NEXT_PUBLIC_META_PIXEL_ID;
  delete process.env.META_CAPI_ACCESS_TOKEN;
  delete process.env.META_TEST_EVENT_CODE;
  delete process.env.META_GRAPH_API_VERSION;
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('consent gating', () => {
  it.each([
    ['no cookies at all', null],
    ['no consent cookie', '_fbp=fb.1.1700000000000.123'],
    ['consent declined', 'gs_consent=denied; _fbp=fb.1.1700000000000.123'],
    ['an unrecognised value', 'gs_consent=GRANTED'],
  ])('sends and stores nothing with %s', async (_label, cookieHeader) => {
    const { sendMetaLead } = await import('../capi');
    const result = await sendMetaLead(lead({ cookieHeader }));

    expect(result).toEqual({ ok: false, skipped: 'no_consent' });
    expect(fetchMock).not.toHaveBeenCalled();
    expect(db.claimMetaCapiEvent).not.toHaveBeenCalled();
    expect(db.markMetaCapiSent).not.toHaveBeenCalled();
    expect(db.markMetaCapiFailed).not.toHaveBeenCalled();
  });
});

describe('configuration', () => {
  it.each([
    ['no access token', () => delete process.env.META_CAPI_ACCESS_TOKEN],
    ['no Pixel ID', () => delete process.env.NEXT_PUBLIC_META_PIXEL_ID],
    ['a non-numeric Pixel ID', () => (process.env.NEXT_PUBLIC_META_PIXEL_ID = '903/../me')],
  ])('does nothing with %s', async (_label, unset) => {
    unset();
    const { sendMetaLead } = await import('../capi');

    expect(await sendMetaLead(lead())).toEqual({ ok: false, skipped: 'not_configured' });
    expect(fetchMock).not.toHaveBeenCalled();
    expect(db.claimMetaCapiEvent).not.toHaveBeenCalled();
  });
});

describe('the request to Meta', () => {
  it('posts one Lead to the dataset endpoint with the token in the body only', async () => {
    const { sendMetaLead } = await import('../capi');
    expect(await sendMetaLead(lead())).toEqual({ ok: true });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe(ENDPOINT);
    expect(url).not.toContain(TOKEN);
    expect(init.method).toBe('POST');
    expect(sentBody().access_token).toBe(TOKEN);
  });

  it('builds the event Meta deduplicates against the browser Lead', async () => {
    const before = Math.floor(Date.now() / 1000);
    const { sendMetaLead } = await import('../capi');
    await sendMetaLead(lead());
    const body = sentBody();

    expect(body.data).toHaveLength(1);
    const [event] = body.data;
    expect(event).toMatchObject({
      event_name: 'Lead',
      event_id: ROW_ID,
      action_source: 'website',
      event_source_url: 'https://www.growsparkconsulting.com/contact/',
      custom_data: { content_name: 'Contact Form', content_category: 'website' },
    });
    expect(event.event_time).toBeGreaterThanOrEqual(before);
    expect(Number.isInteger(event.event_time)).toBe(true);
    expect(body).not.toHaveProperty('test_event_code');
  });

  it('sends hashed contact details and the raw signals Meta requires', async () => {
    const { sendMetaLead } = await import('../capi');
    await sendMetaLead(lead());

    expect(sentBody().data[0].user_data).toEqual({
      em: [HASH.email],
      ph: [HASH.phone],
      fn: [HASH.fn],
      ln: [HASH.ln],
      client_ip_address: '203.0.113.7',
      client_user_agent: 'Mozilla/5.0 Test',
      fbp: 'fb.1.1700000000000.123',
      fbc: 'fb.1.1700000000000.abc',
    });
  });

  it('falls back to the site root when there is no usable referer', async () => {
    const { sendMetaLead } = await import('../capi');
    await sendMetaLead(lead({ sourcePage: null }));
    expect(sentBody().data[0].event_source_url).toBe('https://www.growsparkconsulting.com/');
  });

  it('gives up after 8 seconds', async () => {
    const timeout = vi.spyOn(AbortSignal, 'timeout');
    const { sendMetaLead } = await import('../capi');
    await sendMetaLead(lead());

    expect(timeout).toHaveBeenCalledWith(8000);
    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(init.signal).toBeInstanceOf(AbortSignal);
  });

  it('adds test_event_code only while META_TEST_EVENT_CODE is set', async () => {
    process.env.META_TEST_EVENT_CODE = 'TEST12345';
    const { sendMetaLead } = await import('../capi');
    await sendMetaLead(lead());
    expect(sentBody().test_event_code).toBe('TEST12345');
  });

  it('honours META_GRAPH_API_VERSION, and ignores a malformed one', async () => {
    const { sendMetaLead } = await import('../capi');

    process.env.META_GRAPH_API_VERSION = 'v25.0';
    await sendMetaLead(lead());
    process.env.META_GRAPH_API_VERSION = 'v25.0/../../me?x=';
    await sendMetaLead(lead());

    expect(fetchMock.mock.calls[0]![0]).toBe(`https://graph.facebook.com/v25.0/${PIXEL_ID}/events`);
    expect(fetchMock.mock.calls[1]![0]).toBe(ENDPOINT);
  });

  it('records the delivery against the row', async () => {
    const { sendMetaLead } = await import('../capi');
    await sendMetaLead(lead());
    expect(db.claimMetaCapiEvent).toHaveBeenCalledWith('contact_submissions', ROW_ID);
    expect(db.markMetaCapiSent).toHaveBeenCalledWith('contact_submissions', ROW_ID);
  });
});

describe('duplicate prevention', () => {
  it('sends nothing when the row was already claimed', async () => {
    db.claimMetaCapiEvent.mockResolvedValue(false);
    const { sendMetaLead } = await import('../capi');

    expect(await sendMetaLead(lead())).toEqual({ ok: false, skipped: 'already_claimed' });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('sends a retried or doubled submission of the same row once', async () => {
    // First caller wins the claim; every later one finds it taken.
    db.claimMetaCapiEvent.mockResolvedValueOnce(true).mockResolvedValue(false);
    const { sendMetaLead } = await import('../capi');

    await Promise.all([sendMetaLead(lead()), sendMetaLead(lead()), sendMetaLead(lead())]);

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('does not resend after a failure: the claim is kept', async () => {
    fetchMock.mockRejectedValueOnce(new TypeError('fetch failed'));
    const { sendMetaLead } = await import('../capi');
    await sendMetaLead(lead());

    expect(db.markMetaCapiFailed).toHaveBeenCalledWith('contact_submissions', ROW_ID, 'network_error');
    expect(db.markMetaCapiSent).not.toHaveBeenCalled();
  });

  it('sends nothing when the claim cannot be made (e.g. migration not applied)', async () => {
    db.claimMetaCapiEvent.mockRejectedValue(new Error('column "meta_capi_claimed_at" does not exist'));
    const { sendMetaLead } = await import('../capi');

    expect(await sendMetaLead(lead())).toEqual({ ok: false, error: 'claim_failed' });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe('failures never throw', () => {
  it('handles a network failure', async () => {
    fetchMock.mockRejectedValue(new TypeError('fetch failed'));
    const { sendMetaLead } = await import('../capi');
    await expect(sendMetaLead(lead())).resolves.toEqual({ ok: false, error: 'network_error' });
  });

  it('handles the 8-second timeout', async () => {
    fetchMock.mockRejectedValue(new DOMException('The operation was aborted due to timeout', 'TimeoutError'));
    const { sendMetaLead } = await import('../capi');
    await expect(sendMetaLead(lead())).resolves.toEqual({ ok: false, error: 'timeout' });
    expect(db.markMetaCapiFailed).toHaveBeenCalledWith('contact_submissions', ROW_ID, 'timeout');
  });

  it('handles a rejection from Meta, recording only status and codes', async () => {
    fetchMock.mockResolvedValue(
      Response.json(
        {
          error: {
            message: `Invalid OAuth access token ${TOKEN} for test@example.com`,
            type: 'OAuthException',
            code: 190,
            fbtrace_id: 'Trace1',
          },
        },
        { status: 400 },
      ),
    );
    const { sendMetaLead } = await import('../capi');

    await expect(sendMetaLead(lead())).resolves.toEqual({ ok: false, error: 'http_400 code=190' });
    expect(db.markMetaCapiFailed).toHaveBeenCalledWith('contact_submissions', ROW_ID, 'http_400 code=190');
  });

  it('handles an unreadable response body', async () => {
    fetchMock.mockResolvedValue(new Response('<html>Bad gateway</html>', { status: 502 }));
    const { sendMetaLead } = await import('../capi');
    await expect(sendMetaLead(lead())).resolves.toEqual({ ok: false, error: 'http_502' });
  });

  it('still reports success when only the bookkeeping write fails', async () => {
    db.markMetaCapiSent.mockRejectedValue(new Error('connection reset'));
    const { sendMetaLead } = await import('../capi');
    await expect(sendMetaLead(lead())).resolves.toEqual({ ok: true });
  });
});

describe('logs', () => {
  it('never contain the token or the customer data, whatever the outcome', async () => {
    const { sendMetaLead } = await import('../capi');

    await sendMetaLead(lead()); // success
    fetchMock.mockRejectedValueOnce(new TypeError(`connect failed ${ENDPOINT}`));
    await sendMetaLead(lead()); // network failure
    fetchMock.mockResolvedValueOnce(
      Response.json(
        { error: { message: `Bad token ${TOKEN} for test@example.com 9876543210`, code: 190 } },
        { status: 400 },
      ),
    );
    await sendMetaLead(lead()); // Meta quoting the request back
    db.claimMetaCapiEvent.mockRejectedValueOnce(new Error(`claim failed token=${TOKEN}`));
    await sendMetaLead(lead()); // claim failure

    expect(logged.length).toBeGreaterThan(0);
    const output = logged.join('\n');
    expect(output).not.toContain(TOKEN);
    expect(output).not.toMatch(/test@example\.com/i);
    expect(output).not.toContain('9876543210');
    expect(output).not.toMatch(/priya|sharma/i);
    expect(output).not.toContain('203.0.113.7');
    expect(output).not.toContain('fb.1.1700000000000');
  });

  it('never put the token in what is stored on the row', async () => {
    fetchMock.mockResolvedValue(
      Response.json({ error: { message: `Bad token ${TOKEN}`, code: 190 } }, { status: 400 }),
    );
    const { sendMetaLead } = await import('../capi');
    await sendMetaLead(lead());

    const stored = db.markMetaCapiFailed.mock.calls.map((call) => String(call[2])).join(' ');
    expect(stored).not.toContain(TOKEN);
  });
});

describe('contactFormName', () => {
  it('tells the landing page form apart from the contact page form', async () => {
    const { contactFormName } = await import('../capi');
    expect(
      contactFormName('https://www.growsparkconsulting.com/growspark-transformation-framework/?utm=x'),
    ).toBe('Transformation Framework Assessment');
    expect(contactFormName('https://www.growsparkconsulting.com/contact/')).toBe('Contact Form');
    expect(contactFormName(null)).toBe('Contact Form');
    expect(contactFormName('not a url')).toBe('Contact Form');
  });
});
