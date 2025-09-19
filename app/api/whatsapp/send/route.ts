import { NextResponse } from 'next/server';
import { twilioClient } from '../../../lib/twilioClient';

export async function POST(req) {
  const body = await req.json();
  await twilioClient.messages.create({
    body: body.message,
    from: 'whatsapp:+14155238886',
    to: `whatsapp:${body.to}`,
  });
  return NextResponse.json({ success: true });
}
