import { useLocation, useNavigate, useParams } from "react-router-dom";
import PhotoGrid from "../components/gallery/PhotoGrid";
import { allProjects } from "../data/projects";

export default function Projects() {
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
    <div>
      <PhotoGrid images={projects.photos} onItemClick={handleItemClick} />
    </div>
  );
}

{
  /**
  onItemClick={(item) =>
          navigate(`/photoitem/${item.slug}`, {
            state: { background: location, projectSlug: projects.slug },
          })
        }
  
  
  
  */
}
