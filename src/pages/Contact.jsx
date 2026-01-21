import { Helmet } from "react-helmet-async";
import ContactForm from "../components/contact/ContactForm";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();

  return (
    <>
      <Helmet key={location.pathname}>
        <title>Contacto ~ Gala fotografía</title>
        <meta
          name="description"
          content="Contactá a Gala fotografía para consultas, proyectos o colaboraciones."
        />
      </Helmet>

      <main>
        <h1 className="text-4xl md:text-5xl mb-4">Contactame</h1>
        <h2 className="mb-6 max-w-xl text-neutral-500 leading-relaxed">
          Si te interesa trabajar juntos o tenés un proyecto en mente, podés
          escribirme a través del formulario. Estoy disponible para nuevos
          proyectos y colaboraciones.
        </h2>

        <section>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
