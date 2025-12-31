export default function PhotoGrid({ images, onItemClick }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemClick?.(item)}
          className="group overflow-hidden"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </button>
      ))}
    </div>
  );
}
