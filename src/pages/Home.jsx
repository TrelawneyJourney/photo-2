import { useNavigate } from "react-router-dom";
import PhotoGrid from "../components/gallery/PhotoGrid";
import { allProjects } from "../data/projects";

export default function Home() {
  const navigate = useNavigate();

  const projects = allProjects.flatMap((project) => project.photos);
  if (!projects) return null;

  return (
    <div>
      <PhotoGrid
        images={projects}
        onItemClick={(item) => navigate(`/photoitem/${item.slug}`)}
      />
    </div>
  );
}
