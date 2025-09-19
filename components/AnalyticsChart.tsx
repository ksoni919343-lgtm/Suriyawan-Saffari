'use client';
import { LineChart, Line } from 'recharts';

export default function AnalyticsChart({ data }) {
  return <LineChart data={data}><Line dataKey="price" /></LineChart>;
}
