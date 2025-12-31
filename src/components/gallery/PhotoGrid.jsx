export default function PhotoGrid({ images, onItemClick }) {
  return (
    <div className="grid grid-cols-[1fr_0.7fr] md:grid-cols-[1fr_0.7fr_1fr] gap-3">
      {images.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemClick?.(item)}
          className="group overflow-hidden "
        >
          {/* auto-rows-min aspect-[3/4] */}
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full transition-transform duration-500 group-hover:scale-105 object-cover "
          />
        </button>
      ))}
    </div>
  );
}
