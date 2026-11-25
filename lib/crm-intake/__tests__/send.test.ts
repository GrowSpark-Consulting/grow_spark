import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

vi.mock('server-only', () => ({}));

const logs = vi.hoisted(() => ({ info: vi.fn(), warn: vi.fn(), error: vi.fn() }));
vi.mock('@/lib/logger', () => ({ log: logs, redact: (s: string) => s }));

import { buildCrmPayload, sendCrmIntake, CRM_TOTAL_BUDGET_MS } from '../send';

const INPUT = {
  submissionId: '3f1c2b0e-0000-4000-8000-000000000001',
  submittedAt: new Date('2026-11-18T09:12:44Z'),
  sourcePage: 'https://www.growsparkconsulting.com/contact/',
  data: {
    name: 'Asha Rao',
    email: 'asha@example.com',
    company: 'Example Foods',
    team_size: '51-200',
    challenge: 'Manual order tracking.',
    website: null,
    revenue: '2cr-10cr',
    context: null,
    company_website: undefined,
  },
} as unknown as Parameters<typeof sendCrmIntake>[0];

function enable() {
  process.env.CRM_INTAKE_ENABLED = 'true';
  process.env.CRM_INTAKE_URL = 'https://crm.test/api/v1/intake/website-enquiries';
  process.env.CRM_INTAKE_API_KEY = 'secret-key-123';
}

const ok = (status = 201) => new Response('{}', { status });

describe('crm intake', () => {
  const fetchMock = vi.fn();

  beforeEach(() => {
    vi.useFakeTimers();
    vi.stubGlobal('fetch', fetchMock);
    fetchMock.mockReset();
    // AbortSignal.timeout uses real timers; route it through the faked clock.
    vi.spyOn(AbortSignal, 'timeout').mockImplementation((ms: number) => {
      const c = new AbortController();
      setTimeout(() => c.abort(), ms);
      return c.signal;
    });
    Object.values(logs).forEach((m) => m.mockReset());
    enable();
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    delete process.env.CRM_INTAKE_ENABLED;
    delete process.env.CRM_INTAKE_URL;
    delete process.env.CRM_INTAKE_API_KEY;
  });

  it('does nothing when switched off or misconfigured', async () => {
    process.env.CRM_INTAKE_ENABLED = 'false';
    await sendCrmIntake(INPUT);
    enable();
    delete process.env.CRM_INTAKE_API_KEY;
    await sendCrmIntake(INPUT);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('maps fields per the contract and sends the right headers', async () => {
    fetchMock.mockResolvedValue(ok());
    await sendCrmIntake(INPUT);
    const [url, init] = fetchMock.mock.calls[0]!;
    expect(url).toBe(process.env.CRM_INTAKE_URL);
    expect(init.headers.Authorization).toBe('Bearer secret-key-123');
    expect(init.headers['Idempotency-Key']).toBe(INPUT.submissionId);
    expect(init.headers['Content-Type']).toBe('application/json');
    expect(JSON.parse(init.body)).toEqual({
      formType: 'contact',
      submittedAt: '2026-11-18T09:12:44.000Z',
      sourcePage: 'https://www.growsparkconsulting.com/contact/',
      hp: '',
      fields: {
        name: 'Asha Rao',
        email: 'asha@example.com',
        company: 'Example Foods',
        challenge: 'Manual order tracking.',
        team_size: '51-200',
        revenue: '2cr-10cr',
      },
    });
  });

  it('includes website/context only when filled and omits a missing sourcePage', () => {
    const p = buildCrmPayload({
      ...INPUT,
      sourcePage: null,
      data: { ...INPUT.data, website: 'https://x.com', context: 'hi' },
    }) as { fields: Record<string, string>; sourcePage?: string };
    expect(p.fields.website).toBe('https://x.com');
    expect(p.fields.context).toBe('hi');
    expect('sourcePage' in p).toBe(false);
  });

  it('never retries on 4xx', async () => {
    fetchMock.mockResolvedValue(ok(422));
    await sendCrmIntake(INPUT);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(logs.warn).toHaveBeenCalledWith('crm_intake.rejected', expect.anything());
  });

  it('retries 5xx with the same key, then succeeds', async () => {
    fetchMock.mockResolvedValueOnce(ok(503)).mockResolvedValueOnce(ok(201));
    const p = sendCrmIntake(INPUT);
    await vi.runAllTimersAsync();
    await p;
    expect(fetchMock).toHaveBeenCalledTimes(2);
    const keys = fetchMock.mock.calls.map((c) => c[1].headers['Idempotency-Key']);
    expect(new Set(keys)).toEqual(new Set([INPUT.submissionId]));
    expect(logs.error).not.toHaveBeenCalled();
  });

  it('gives up after 3 attempts on network errors, quietly, without throwing', async () => {
    fetchMock.mockRejectedValue(new TypeError('fetch failed'));
    const p = sendCrmIntake(INPUT);
    await vi.runAllTimersAsync();
    await expect(p).resolves.toBeUndefined();
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(logs.error).toHaveBeenCalledWith('crm_intake.failed', {
      id: INPUT.submissionId,
      reason: 'network_error',
    });
  });

  it('cold start: every attempt times out, worst case stays within the budget and logs safely', async () => {
    // Simulate a host that never answers: reject when the abort signal fires.
    fetchMock.mockImplementation(
      (_u: string, init: { signal: AbortSignal }) =>
        new Promise((_res, rej) => {
          init.signal.addEventListener('abort', () =>
            rej(Object.assign(new Error('aborted'), { name: 'TimeoutError' })),
          );
        }),
    );
    const start = Date.now();
    const p = sendCrmIntake(INPUT);
    await vi.runAllTimersAsync();
    await p;
    expect(Date.now() - start).toBeLessThanOrEqual(CRM_TOTAL_BUDGET_MS);
    expect(logs.error).toHaveBeenCalledWith('crm_intake.failed', {
      id: INPUT.submissionId,
      reason: 'timeout',
    });
  });

  it('never logs visitor data or the key', async () => {
    fetchMock.mockRejectedValue(new Error('boom asha@example.com secret-key-123'));
    const p = sendCrmIntake(INPUT);
    await vi.runAllTimersAsync();
    await p;
    const all = JSON.stringify(Object.values(logs).map((m) => m.mock.calls));
    expect(all).not.toContain('asha@example.com');
    expect(all).not.toContain('secret-key-123');
  });
});
