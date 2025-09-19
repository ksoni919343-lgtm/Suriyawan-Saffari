export default function ProductCard({ product }) {
  return (
    <div className="p-4 border rounded">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
