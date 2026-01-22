import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import AboutHero from "../components/about/AboutHero";
import AboutText from "../components/about/AboutText";

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
        {/* <link rel="canonical" href="https://galafotografia.com/about" /> */}
      </Helmet>

      <main className="min-h-screen">
        {/* <h1 className="text-4xl md:text-5xl mb-4">Acerca de mí</h1> */}
        <AboutHero />
        <AboutText />
      </main>
    </>
  );
}
