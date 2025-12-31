import { useNavigate, useParams } from "react-router-dom";
import PhotoGrid from "../components/gallery/PhotoGrid";
import { allProjects } from "../data/projects";

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const projects = allProjects.find((p) => p.slug === slug);
  if (!projects) return null;

  return (
    <div>
      <PhotoGrid
        images={projects.photos}
        onItemClick={(item) => navigate(`/projects/${item.slug}`)}
      />
    </div>
  );
}
