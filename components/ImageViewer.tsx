export default function ImageViewer({ images }) {
  return (
    <div>
      {images.map((img, idx) => (
        <img key={idx} src={img} alt="Image" />
      ))}
    </div>
  );
}
