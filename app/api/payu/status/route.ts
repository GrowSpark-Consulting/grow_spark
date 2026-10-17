import { NextResponse } from 'next/server';
import { getGrowthAuditPayment } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const txnid = new URL(request.url).searchParams.get('txnid') ?? '';
  if (!/^[a-f0-9]{24}$/.test(txnid)) {
    return NextResponse.json({ status: 'UNKNOWN' }, { status: 400, headers: { 'cache-control': 'no-store' } });
  }

  try {
    const payment = await getGrowthAuditPayment(txnid);
    return NextResponse.json(
      { status: payment?.status ?? 'UNKNOWN' },
      { headers: { 'cache-control': 'no-store' } },
    );
  } catch {
    return NextResponse.json(
      { status: 'UNKNOWN' },
      { status: 503, headers: { 'cache-control': 'no-store' } },
    );
  }
}
