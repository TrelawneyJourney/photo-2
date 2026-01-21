import { useLocation, useNavigate, useParams } from "react-router-dom";
import PhotoGrid from "../components/gallery/PhotoGrid";
import { allProjects } from "../data/projects";
import { Helmet } from "react-helmet-async";

export default function ProjectsPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const location = useLocation();

  const projects = allProjects.find((p) => p.slug === slug);
  if (!projects) return null;

  const handleItemClick = (item) => {
    navigate(`/photoitem/${item.slug}`, {
      state: {
        background: location,
        mode: "project",
        projectSlug: projects.slug,
      },
    });
  };

  return (
    <>
      <Helmet key={location.pathname}>
        <title>Proyecto {projects.title} ~ Gala Fotografía</title>
        <meta
          name="description"
          content="Galería de proyectos fotográficos de Gala Fotografía. Series visuales y trabajos seleccionados."
        />
      </Helmet>
      <main>
        <PhotoGrid images={projects.photos} onItemClick={handleItemClick} />
      </main>
    </>
  );
}
