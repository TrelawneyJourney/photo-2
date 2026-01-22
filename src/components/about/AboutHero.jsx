export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden h-[55vh]">
      <img
        src={`${import.meta.env.BASE_URL}images/contact/gala.jpg`}
        alt="foto de Gala Peralta Rosas"
        className="absolute inset-0 w-full h-[200%] object-cover"
      />
    </section>
  );
}
