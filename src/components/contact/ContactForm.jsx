export default function ContactForm() {
  return (
    <form
      action=""
      method="post"
      className="flex flex-col justify-center gap-2 md:gap-4 mt-8 md:mt-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label for="name" className="font-light tracking-widest hidden">
          Nombre
        </label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="Nombre"
          className="w-full py-3 px-2 bg-transparent border border-neutral-300 text-neutral-800 font-light tracking-wide focus:outline-none focus:border-neutral-900 transition"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label for="email" className="font-light tracking-widest hidden">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-full py-3 px-2 bg-transparent border border-neutral-300 text-neutral-800 font-light tracking-wide focus:outline-none focus:border-neutral-900 transition"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label for="telefono" className="font-light tracking-widest hidden">
          Telefóno
        </label>
        <input
          type="tel"
          name="telefono"
          id="telefono"
          placeholder="Telefóno"
          className="w-full py-3 px-2 bg-transparent border border-neutral-300 text-neutral-800 font-light tracking-wide focus:outline-none focus:border-neutral-900 transition"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label for="telefono" className="font-light tracking-widest hidden">
          Asunto
        </label>
        <input
          type="text"
          name="asunto"
          id="asunto"
          placeholder="Asunto"
          className="w-full py-3 px-2 bg-transparent border border-neutral-300 text-neutral-800 font-light tracking-wide focus:outline-none focus:border-neutral-900 transition"
        />
      </div>

      <div className="flex flex-col">
        <label for="message" class="font-light tracking-widest hidden">
          Mensaje
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Contame un poco sobre el proyecto o la idea que tenés en mente."
          rows={6}
          className="w-full py-3 px-2 bg-transparent border border-neutral-300 text-neutral-800 font-light tracking-wide focus:outline-none focus:border-neutral-900 transition"
        ></textarea>
      </div>

      <button
        type="submit"
        className="self-start md:w-32 bg-neutral-900 text-white py-3 px-6 rounded-lg mt-3 hover:bg-neutral-500 transition ease-in-out duration-300"
      >
        Enviar
      </button>
    </form>
  );
}
