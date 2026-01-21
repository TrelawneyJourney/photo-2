export default function PhotoGrid({ images, onItemClick }) {
  const rows = [];

  for (let i = 0; i < images.length; i += 2) {
    rows.push(images.slice(i, i + 2));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_0.7fr_1fr] gap-1 md:gap-3">
      {rows.map((row, rowIndex) => {
        const isReversed = rowIndex % 2 !== 0;

        return (
          <div
            key={rowIndex}
            className={`grid gap-1 ${
              isReversed ? "grid-cols-[0.7fr_1fr]" : "grid-cols-[1fr_0.7fr]"
            } md:contents`}
          >
            {row.map((item) => (
              <button
                key={item.id}
                onClick={() => onItemClick?.(item)}
                className="group overflow-hidden"
              >
                {/* auto-rows-min aspect-[3/4] */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105 object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
}
