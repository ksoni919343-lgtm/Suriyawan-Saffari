import { NextResponse } from 'next/server';
import { sheets } from '../../../lib/googleClient';

export async function POST(req) {
  const body = await req.json();
  await sheets.spreadsheets.values.append({
    spreadsheetId: 'your-id',
    range: 'Sheet1',
    valueInputOption: 'RAW',
    resource: { values: [body.values] },
  });
  return NextResponse.json({ success: true });
}
