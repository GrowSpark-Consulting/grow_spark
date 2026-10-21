import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { MetaLead, MetaLeadResult } from '@/lib/meta/capi';

/**
 * The server half of "Lead only on confirmed success": a route schedules the
 * Conversions API event only on its success path, after the row is committed,
 * and with the committed row's id. Every failure path — validation, honeypot,
 * database, Razorpay — must schedule nothing.
 *
 * Nothing real is touched: the database, mail, HubSpot, Razorpay and the Meta
 * sender are all mocks. `after` is captured rather than run, so each test can
 * see whether — and with what — the event would have been sent.
 */
vi.mock('server-only', () => ({}));

const m = vi.hoisted(() => {
  const crmSkipped = async () => ({ ok: false, error: 'HubSpot is not configured', skipped: true });
  return {
    after: vi.fn(),
    sendMetaLead: vi.fn(async (_lead: MetaLead): Promise<MetaLeadResult> => ({ ok: true })),
    insertContactSubmission: vi.fn(),
    insertEngagementApplication: vi.fn(),
    insertCareersApplication: vi.fn(),
    insertStrategySessionBooking: vi.fn(),
    createOrder: vi.fn(),
    crmSkipped,
  };
});

vi.mock('next/server', () => ({
  NextResponse: { json: (body: unknown, init?: ResponseInit) => Response.json(body, init) },
  after: m.after,
}));

vi.mock('@/lib/db', () => ({
  insertContactSubmission: m.insertContactSubmission,
  insertEngagementApplication: m.insertEngagementApplication,
  insertCareersApplication: m.insertCareersApplication,
  insertStrategySessionBooking: m.insertStrategySessionBooking,
  attachRazorpayOrder: vi.fn(),
  recentSubmissionCount: vi.fn(async () => 0),
  recentEngagementCount: vi.fn(async () => 0),
  recentCareersCount: vi.fn(async () => 0),
  recentBookingCount: vi.fn(async () => 0),
  markEmailSent: vi.fn(),
  markEmailFailed: vi.fn(),
  markEngagementEmailSent: vi.fn(),
  markEngagementEmailFailed: vi.fn(),
  markCareersEmailSent: vi.fn(),
  markCareersEmailFailed: vi.fn(),
  markHubspotSynced: vi.fn(),
  markHubspotFailed: vi.fn(),
  markTableHubspotSynced: vi.fn(),
  markTableHubspotFailed: vi.fn(),
  claimMetaCapiEvent: vi.fn(),
  markMetaCapiSent: vi.fn(),
  markMetaCapiFailed: vi.fn(),
}));

vi.mock('@/lib/email', () => ({
  sendContactNotification: vi.fn(),
  sendFormNotification: vi.fn(),
}));

vi.mock('@/lib/hubspot/sync', () => ({
  syncContactSubmissionToHubSpot: m.crmSkipped,
  syncEngagementApplicationToHubSpot: m.crmSkipped,
  syncBookingToHubSpot: m.crmSkipped,
}));

vi.mock('@/lib/razorpay', () => ({
  razorpayClient: () => ({ orders: { create: m.createOrder } }),
  STRATEGY_SESSION_AMOUNT_PAISE: 999900,
  GROWTH_INTENSIVE_AMOUNT_PAISE: 1599900,
  STRATEGY_SESSION_CURRENCY: 'INR',
}));

vi.mock('@/lib/meta/capi', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/meta/capi')>()),
  sendMetaLead: m.sendMetaLead,
}));

const ORIGIN = 'https://www.growsparkconsulting.com';
const COOKIES = 'gs_consent=granted; _fbp=fb.1.1700000000000.123';

function post(path: string, body: unknown, referer = `${ORIGIN}/contact/`) {
  return new Request(`${ORIGIN}${path}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      cookie: COOKIES,
      referer,
      'user-agent': 'Mozilla/5.0 Test',
      'x-forwarded-for': '203.0.113.7, 10.0.0.1',
    },
    body: JSON.stringify(body),
  });
}

/** Run what the route handed to after(), as Next would once the response is sent. */
async function runScheduled() {
  for (const [callback] of m.after.mock.calls) await (callback as () => Promise<unknown>)();
}

const CONTACT = {
  name: 'Priya Sharma',
  email: 'priya@example.com',
  company: 'Example Co',
  team_size: '11-50',
  challenge: 'Margins are shrinking as we scale.',
  revenue: '2cr-10cr',
};

const BOOKING = { name: 'Priya Sharma', email: 'priya@example.com', phone: '98765 43210' };

const ENV = {
  DATABASE_URL: 'postgres://unused',
  SMTP_HOST: 'smtp.invalid',
  SMTP_USER: 'u',
  SMTP_PASSWORD: 'p',
  SMTP_FROM: 'from@example.com',
  CONTACT_EMAIL: 'inbox@example.com',
  RAZORPAY_KEY_ID: 'rzp_test_unused',
  RAZORPAY_KEY_SECRET: 'unused',
};

beforeEach(() => {
  vi.clearAllMocks();
  Object.assign(process.env, ENV);
  for (const method of ['log', 'warn', 'error'] as const) {
    vi.spyOn(console, method).mockImplementation(() => {});
  }
  const row = (id: string) => async () => ({ id, created_at: new Date('2026-10-21T10:00:00Z') });
  m.insertContactSubmission.mockImplementation(row('contact-row-1'));
  m.insertEngagementApplication.mockImplementation(row('engagement-row-1'));
  m.insertCareersApplication.mockImplementation(row('careers-row-1'));
  m.insertStrategySessionBooking.mockImplementation(row('booking-row-1'));
  m.createOrder.mockResolvedValue({ id: 'order_123' });
});

afterEach(() => {
  for (const key of Object.keys(ENV)) delete process.env[key];
  vi.restoreAllMocks();
});

describe('/api/contact', () => {
  it('schedules one Lead after the row is saved, keyed by the row id', async () => {
    const { POST } = await import('../contact/route');
    const response = await POST(post('/api/contact/', CONTACT));
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.id).toBe('contact-row-1');
    expect(m.after).toHaveBeenCalledTimes(1);
    expect(m.sendMetaLead).not.toHaveBeenCalled(); // only once the response is out

    await runScheduled();
    expect(m.sendMetaLead).toHaveBeenCalledTimes(1);
    expect(m.sendMetaLead).toHaveBeenCalledWith({
      table: 'contact_submissions',
      id: json.id, // the browser's eventID comes from this same field
      formName: 'Contact Form',
      person: { email: 'priya@example.com', name: 'Priya Sharma' },
      context: {
        cookieHeader: COOKIES,
        ip: '203.0.113.7',
        userAgent: 'Mozilla/5.0 Test',
        sourcePage: `${ORIGIN}/contact/`,
      },
    });
  });

  it('names the landing page form by the page it came from', async () => {
    const { POST } = await import('../contact/route');
    await POST(post('/api/contact/', CONTACT, `${ORIGIN}/growspark-transformation-framework/`));
    await runScheduled();
    expect(m.sendMetaLead.mock.calls[0]![0]).toMatchObject({
      formName: 'Transformation Framework Assessment',
    });
  });

  it('schedules nothing when the row could not be saved', async () => {
    m.insertContactSubmission.mockRejectedValue(new Error('connection refused'));
    const { POST } = await import('../contact/route');
    const response = await POST(post('/api/contact/', CONTACT));

    expect(response.status).toBe(500);
    expect(m.after).not.toHaveBeenCalled();
  });

  it('schedules nothing for an invalid submission', async () => {
    const { POST } = await import('../contact/route');
    const response = await POST(post('/api/contact/', { ...CONTACT, email: 'not-an-email' }));

    expect(response.status).toBe(400);
    expect(m.after).not.toHaveBeenCalled();
  });

  it('schedules nothing for a honeypot hit, which looks successful but has no id', async () => {
    const { POST } = await import('../contact/route');
    const response = await POST(post('/api/contact/', { ...CONTACT, company_website: 'spam.example' }));
    const json = await response.json();

    expect(json.success).toBe(true);
    expect(json.id).toBeUndefined();
    expect(m.insertContactSubmission).not.toHaveBeenCalled();
    expect(m.after).not.toHaveBeenCalled();
  });
});

describe('/api/engagement-application', () => {
  it('schedules one Lead after the row is saved', async () => {
    const { POST } = await import('../engagement-application/route');
    const response = await POST(post('/api/engagement-application/', BOOKING));
    await runScheduled();

    expect((await response.json()).id).toBe('engagement-row-1');
    expect(m.sendMetaLead).toHaveBeenCalledTimes(1);
    expect(m.sendMetaLead.mock.calls[0]![0]).toMatchObject({
      table: 'engagement_applications',
      id: 'engagement-row-1',
      formName: 'Engagement Application',
    });
  });

  it('schedules nothing when the row could not be saved', async () => {
    m.insertEngagementApplication.mockRejectedValue(new Error('connection refused'));
    const { POST } = await import('../engagement-application/route');
    await POST(post('/api/engagement-application/', BOOKING));
    expect(m.after).not.toHaveBeenCalled();
  });
});

describe('/api/strategy-session', () => {
  it('schedules one Lead for the saved booking, with the phone number', async () => {
    const { POST } = await import('../strategy-session/route');
    const response = await POST(post('/api/strategy-session/', BOOKING, `${ORIGIN}/strategy/`));
    await runScheduled();

    expect((await response.json()).bookingId).toBe('booking-row-1');
    expect(m.sendMetaLead).toHaveBeenCalledTimes(1);
    expect(m.sendMetaLead.mock.calls[0]![0]).toMatchObject({
      table: 'strategy_session_bookings',
      id: 'booking-row-1',
      formName: 'Founder Strategy Session',
      person: { email: 'priya@example.com', name: 'Priya Sharma', phone: '98765 43210' },
    });
  });

  it('schedules nothing when the Razorpay Order cannot be created', async () => {
    m.createOrder.mockRejectedValue(new Error('Razorpay unavailable'));
    const { POST } = await import('../strategy-session/route');
    const response = await POST(post('/api/strategy-session/', BOOKING));

    expect(response.status).toBe(502);
    expect(m.after).not.toHaveBeenCalled();
  });
});

describe('/api/growth-intensive', () => {
  it('schedules one Lead named for the Growth Intensive', async () => {
    const { POST } = await import('../growth-intensive/route');
    await POST(post('/api/growth-intensive/', BOOKING, `${ORIGIN}/strategy/`));
    await runScheduled();

    expect(m.sendMetaLead).toHaveBeenCalledTimes(1);
    expect(m.sendMetaLead.mock.calls[0]![0]).toMatchObject({
      table: 'strategy_session_bookings',
      formName: 'Founder Growth Intensive',
    });
  });
});

describe('/api/careers-application', () => {
  it('never sends a Lead: a job applicant is not a sales lead', async () => {
    const { POST } = await import('../careers-application/route');
    const response = await POST(post('/api/careers-application/', BOOKING, `${ORIGIN}/careers/`));

    expect(response.status).toBe(200);
    expect(m.after).not.toHaveBeenCalled();
    expect(m.sendMetaLead).not.toHaveBeenCalled();
  });
});
