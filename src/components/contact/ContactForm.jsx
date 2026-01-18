export default function ContactForm() {
  return (
    <form action="" method="post" className="max-w-[900px] ">
      <div className="grid grid-cols-2">
        <div className="">
          <label for="name" className="font-light tracking-widest sr-only">
            Nombre
          </label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Nombre"
            className="w-full py-3 px-2 bg-transparent border border-neutral-300 border-r-0 text-neutral-800 font-light tracking-wide focus:outline-none focus:border-neutral-900 transition"
          />
        </div>

        <div className="">
          <label for="email" className="font-light tracking-widest sr-only">
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

        <div className="">
          <label for="telefono" className="font-light tracking-widest sr-only">
            Telefóno
          </label>
          <input
            type="tel"
            name="telefono"
            id="telefono"
            placeholder="Telefóno"
            className="w-full py-3 px-2 bg-transparent border border-y-0 border-neutral-300 text-neutral-800 font-light tracking-wide focus:outline-none focus:border-neutral-900 transition"
          />
        </div>

        <div className="">
          <label for="asunto" className="font-light tracking-widest sr-only">
            Asunto
          </label>
          <input
            type="text"
            name="asunto"
            id="asunto"
            placeholder="Asunto"
            className="w-full py-3 px-2 bg-transparent text-neutral-800 border-r border-neutral-300 font-light tracking-wide focus:outline-none focus:border-neutral-900 transition"
          />
        </div>

        <div className="col-span-2">
          <label for="message" class="font-light tracking-widest sr-only">
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
