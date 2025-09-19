import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.text();
  // Handle webhook
  return NextResponse.json({ received: true });
}
