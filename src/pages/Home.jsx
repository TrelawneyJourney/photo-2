import { useLocation, useNavigate } from "react-router-dom";
import PhotoGrid from "../components/gallery/PhotoGrid";
import { allProjects } from "../data/projects";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const projects = allProjects.flatMap((project) =>
    project.photos.map((photo) => ({
      ...photo,
      projectSlug: project.slug,
    })),
  );
  if (!projects) return null;

  const handleItemClick = (item) => {
    navigate(`/photoitem/${item.slug}`, {
      state: {
        background: location,
        mode: "global",
      },
    });
  };

  return (
    <>
      <Helmet key={location.pathname}>
        <title>Gala Fotografía</title>
        <meta
          name="description"
          content="Portfolio de fotografía y proyectos visuales de Gala Peralta Rosas. Exploración artística, estética y narrativa."
        />
      </Helmet>
      <main>
        <PhotoGrid images={projects} onItemClick={handleItemClick} />
      </main>
    </>
  );
}
