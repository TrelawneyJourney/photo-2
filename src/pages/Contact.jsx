import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <main>
      <h1 className="text-4xl md:text-5xl mb-4">Contactame</h1>
      <p className="mb-6 max-w-xl text-neutral-500 leading-relaxed">
        Si te interesa trabajar juntes o tenés un proyecto en mente, podés
        escribirme a través del formulario. Estoy disponible para nuevos
        proyectos y colaboraciones.
      </p>

      <ContactForm />
    </main>
  );
}
