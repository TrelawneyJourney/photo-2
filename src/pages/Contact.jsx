import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <main>
      <div>
        <h1 className="text-4xl md:text-5xl">Contactame</h1>
        <p className="mt-4 max-w-xl text-neutral-600 leading-relaxed">
          Si te interesa trabajar juntes o tenés un proyecto en mente, podés
          escribirme a través del formulario. Estoy disponible para nuevos
          proyectos y colaboraciones.
        </p>
      </div>
      <ContactForm />
    </main>
  );
}
