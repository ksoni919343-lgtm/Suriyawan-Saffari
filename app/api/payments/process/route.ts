import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  // Process payment
  return NextResponse.json({ success: true });
}
