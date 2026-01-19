export default function ContactForm() {
  return (
    <form action="" method="post">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <label for="name" className="font-light tracking-widest sr-only">
          Nombre
        </label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="Nombre"
          className="w-full py-3 px-2 bg-transparent border md:border-r-0 border-neutral-300 text-neutral-800 font-light tracking-wide focus:border focus:border-neutral-700 transition-colors"
        />

        <label for="email" className="font-light tracking-widest sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-full py-3 px-2 bg-transparent border border-y-0 md:border-y border-neutral-300 text-neutral-800 font-light tracking-wide focus:border focus:border-neutral-700 transition-colors"
        />

        <label for="telefono" className="font-light tracking-widest sr-only">
          Telefóno
        </label>
        <input
          type="tel"
          name="telefono"
          id="telefono"
          placeholder="Telefóno"
          className="w-full py-3 px-2 bg-transparent border md:border-y-0 border-neutral-300 text-neutral-800 font-light tracking-wide focus:border focus:border-neutral-700 transition-colors"
        />

        <label for="asunto" className="font-light tracking-widest sr-only">
          Asunto
        </label>
        <input
          type="text"
          name="asunto"
          id="asunto"
          placeholder="Asunto"
          className="w-full py-3 px-2 bg-transparent text-neutral-800 border-x md:border-l-0 border-neutral-300 font-light tracking-wide focus:border focus:border-neutral-700 transition-colors"
        />

        <div className="md:col-span-2">
          <label for="message" class="font-light tracking-widest sr-only">
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Contame un poco sobre el proyecto o la idea que tenés en mente."
            rows={6}
            className="w-full py-3 px-2 bg-transparent border border-neutral-300 text-neutral-800 font-light tracking-wide focus:border focus:border-neutral-700 transition-colors"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="md:w-32 bg-neutral-900 text-white text-sm tracking-widest uppercase py-3 px-8 mt-3 hover:bg-neutral-500 transition ease-in-out duration-300"
      >
        Enviar
      </button>
    </form>
  );
}
