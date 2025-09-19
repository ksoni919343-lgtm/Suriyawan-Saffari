import { NextResponse } from 'next/server';
import { generateInvoice } from '../../../lib/pdf';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const data = { id }; // Fetch real data
  const pdf = await generateInvoice(data);
  return new NextResponse(pdf, { headers: { 'Content-Type': 'application/pdf' } });
}
