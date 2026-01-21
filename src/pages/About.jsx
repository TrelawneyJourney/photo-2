import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  return (
    <>
      <Helmet key={location.pathname}>
        <title>Acerca de mí ~ Gala Peralta Rosas</title>
        <meta
          name="description"
          content="Conocé a Gala Peralta Rosas, fotógrafa enfocada en proyectos visuales y exploración artística."
        />
      </Helmet>

      <main>
        <h1>Acerca de mí</h1>
        <h2>Gala Peralta Rosas</h2>
      </main>
    </>
  );
}
