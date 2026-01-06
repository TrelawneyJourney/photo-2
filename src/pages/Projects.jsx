import { useLocation, useNavigate, useParams } from "react-router-dom";
import PhotoGrid from "../components/gallery/PhotoGrid";
import { allProjects } from "../data/projects";

export default function Projects() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const location = useLocation();

  const projects = allProjects.find((p) => p.slug === slug);
  if (!projects) return null;

  return (
    <div>
      <PhotoGrid
        images={projects.photos}
        onItemClick={(item) =>
          navigate(`/photoitem/${item.slug}`, {
            state: { background: location },
          })
        }
      />
    </div>
  );
}
