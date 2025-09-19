export default function StatsCards({ stats }) {
  return (
    <div>
      <p>Products: {stats.products}</p>
      <p>Orders: {stats.orders}</p>
    </div>
  );
}
