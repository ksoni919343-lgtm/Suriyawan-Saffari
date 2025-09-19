import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseClient';

export async function POST(req) {
  const body = await req.json();
  const { data, error } = await supabaseAdmin.from('products').insert([body]);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data);
}

export async function GET() {
  const { data, error } = await supabaseAdmin.from('products').select('*');
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data);
}

// PUT and DELETE similar
