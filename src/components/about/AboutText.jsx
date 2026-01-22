import { motion } from "framer-motion";

export default function AboutText() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-6 py-10 md:py-20 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 text-sm leading-relaxed text-neutral-600">
        <p>
          Soy fotógrafa y trabajo desde una mirada íntima y sensible, interesada
          en los vínculos entre las personas, el entorno y la luz natural. Mi
          búsqueda se apoya en lo cotidiano, en los gestos simples y en aquello
          que sucede sin ser forzado. Me interesa construir imágenes desde la
          escucha y la observación, dejando que cada historia se revele a su
          propio ritmo.
        </p>

        <p>
          Junto a mi colega Eru co-creo Hechizarte Estudio Fotográfico, un
          espacio que nace como una extensión de esa misma mirada. Además de mis
          proyectos personales, allí desarrollamos retratos y sesiones pensadas
          como experiencias cuidadas y auténticas, con una atención
          personalizada en cada detalle. Diseñamos escenarios a medida para cada
          sesión, adaptándolos a las personas y a sus historias, desde retratos
          íntimos hasta encuentros para parejas, familias o momentos especiales,
          buscando siempre capturar la esencia de quienes confían en nosotras.
        </p>
      </div>
    </motion.section>
  );
}
