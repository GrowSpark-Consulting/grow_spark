import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { ReactElement } from 'react';

/**
 * The browser half of "Lead only on confirmed success": every lead form calls
 * trackLead only after the server answered success, and passes the id the
 * server returned — never on the click, never on a failed request.
 *
 * There is no DOM library in this project, so the handlers are exercised
 * directly: React's state hooks are replaced with inert stand-ins, a
 * component is called as a function, and the <form>'s onSubmit is taken from
 * the element tree it returns. trackLead itself is a spy here; that it is a
 * no-op without consent or without an id is covered in
 * components/tracking/__tests__/metaPixel.test.ts.
 */

const h = vi.hoisted(() => ({ trackLead: vi.fn() }));

vi.mock('@/components/tracking/metaPixel', () => ({ trackLead: h.trackLead }));

vi.mock('react', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react')>();
  return {
    ...actual,
    useState: (initial: unknown) => [typeof initial === 'function' ? (initial as () => unknown)() : initial, () => {}],
    useRef: (current: unknown) => ({ current }),
  };
});

/** FormData stand-in: node's own refuses anything that is not a real <form>. */
class FakeFormData {
  constructor(private readonly form: { values: Record<string, string> }) {}
  entries() {
    return Object.entries(this.form.values)[Symbol.iterator]();
  }
}

function submitEvent(values: Record<string, string> = { name: 'Priya', email: 'priya@example.com' }) {
  const form = { values, reset: vi.fn() };
  return { preventDefault: vi.fn(), currentTarget: form } as unknown as React.FormEvent<HTMLFormElement>;
}

function reply(status: number, body: unknown) {
  return Response.json(body, { status });
}

/** The onSubmit handler of the first <form> in a rendered element tree. */
function formSubmitHandler(node: unknown): (event: React.FormEvent<HTMLFormElement>) => Promise<void> {
  const stack = [node];
  while (stack.length) {
    const current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    if (!current || typeof current !== 'object') continue;
    const element = current as ReactElement<{ onSubmit?: unknown; children?: unknown }>;
    if (element.type === 'form' && typeof element.props?.onSubmit === 'function') {
      return element.props.onSubmit as never;
    }
    stack.push(element.props?.children);
  }
  throw new Error('no <form onSubmit> found');
}

let fetchMock: ReturnType<typeof vi.fn>;

beforeEach(() => {
  vi.clearAllMocks();
  fetchMock = vi.fn();
  vi.stubGlobal('fetch', fetchMock);
  vi.stubGlobal('FormData', FakeFormData);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('useFormSubmit (engagement application, landing page form)', () => {
  async function submit(leadForm: string | undefined) {
    const { useFormSubmit } = await import('../useFormSubmit');
    const { handleSubmit } = useFormSubmit('/api/engagement-application/', 'Thanks', leadForm);
    await handleSubmit(submitEvent());
  }

  it('sends Lead with the server-returned id once the server confirms success', async () => {
    fetchMock.mockResolvedValue(reply(200, { success: true, message: 'Saved', id: 'row-1' }));
    await submit('Engagement Application');
    expect(h.trackLead).toHaveBeenCalledTimes(1);
    expect(h.trackLead).toHaveBeenCalledWith('Engagement Application', 'row-1');
  });

  it('sends nothing on a server error', async () => {
    fetchMock.mockResolvedValue(reply(500, { success: false, message: 'Could not save' }));
    await submit('Engagement Application');
    expect(h.trackLead).not.toHaveBeenCalled();
  });

  it('sends nothing on a 200 that is not a success', async () => {
    fetchMock.mockResolvedValue(reply(200, { success: false }));
    await submit('Engagement Application');
    expect(h.trackLead).not.toHaveBeenCalled();
  });

  it('sends nothing when the request never reaches the server', async () => {
    fetchMock.mockRejectedValue(new TypeError('Failed to fetch'));
    await submit('Engagement Application');
    expect(h.trackLead).not.toHaveBeenCalled();
  });

  it('sends nothing for a form that is not a lead (careers), even on success', async () => {
    fetchMock.mockResolvedValue(reply(200, { success: true, id: 'row-1' }));
    await submit(undefined);
    expect(h.trackLead).not.toHaveBeenCalled();
  });

  it('does nothing before the response arrives', async () => {
    let respond!: (value: Response) => void;
    fetchMock.mockReturnValue(new Promise<Response>((resolve) => (respond = resolve)));
    const { useFormSubmit } = await import('../useFormSubmit');
    const pending = useFormSubmit('/api/engagement-application/', 'Thanks', 'Engagement Application')
      .handleSubmit(submitEvent());

    await Promise.resolve();
    expect(h.trackLead).not.toHaveBeenCalled(); // the click alone sends nothing

    respond(reply(200, { success: true, id: 'row-9' }));
    await pending;
    expect(h.trackLead).toHaveBeenCalledWith('Engagement Application', 'row-9');
  });
});

describe('ContactForm', () => {
  async function submit() {
    const { default: ContactForm } = await import('@/components/sections/ContactForm');
    await formSubmitHandler(ContactForm())(submitEvent());
  }

  it('sends Lead with the saved row id on success', async () => {
    fetchMock.mockResolvedValue(reply(200, { success: true, message: 'Saved', id: 'contact-1' }));
    await submit();
    expect(h.trackLead).toHaveBeenCalledWith('Contact Form', 'contact-1');
  });

  it('sends nothing on failure', async () => {
    fetchMock.mockResolvedValue(reply(429, { success: false, message: 'Slow down' }));
    await submit();
    expect(h.trackLead).not.toHaveBeenCalled();
  });
});

describe('StrategySessionForm', () => {
  const ORDER = {
    success: true,
    bookingId: 'booking-1',
    orderId: 'order_123',
    amount: 999900,
    currency: 'INR',
    keyId: 'rzp_test_unused',
  };

  beforeEach(() => {
    // Checkout is already "loaded", so nothing is fetched; open() does nothing.
    vi.stubGlobal('window', {
      Razorpay: class {
        on() {}
        open() {}
      },
    });
  });

  async function submit(engagement?: 'strategy_session' | 'growth_intensive') {
    const { default: StrategySessionForm } = await import('@/components/sections/StrategySessionForm');
    await formSubmitHandler(StrategySessionForm({ engagement }))(submitEvent());
  }

  it('sends Lead with the booking id once the booking is saved', async () => {
    fetchMock.mockResolvedValue(reply(200, ORDER));
    await submit();
    expect(h.trackLead).toHaveBeenCalledWith('Founder Strategy Session', 'booking-1');
  });

  it('names the Growth Intensive booking separately', async () => {
    fetchMock.mockResolvedValue(reply(200, { ...ORDER, bookingId: 'booking-2', amount: 1599900 }));
    await submit('growth_intensive');
    expect(h.trackLead).toHaveBeenCalledWith('Founder Growth Intensive', 'booking-2');
  });

  it('sends nothing when the booking is refused', async () => {
    fetchMock.mockResolvedValue(reply(502, { success: false, message: 'Could not start the payment' }));
    await submit();
    expect(h.trackLead).not.toHaveBeenCalled();
  });
});
