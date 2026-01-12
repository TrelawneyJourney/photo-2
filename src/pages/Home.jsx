import { useLocation, useNavigate } from "react-router-dom";
import PhotoGrid from "../components/gallery/PhotoGrid";
import { allProjects } from "../data/projects";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const projects = allProjects.flatMap((project) =>
    project.photos.map((photo) => ({
      ...photo,
      projectSlug: project.slug,
    }))
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
    <div>
      <PhotoGrid images={projects} onItemClick={handleItemClick} />
    </div>
  );
}
//  onItemClick={(item) =>
//           navigate(`/photoitem/${item.slug}`, {
//             state: { background: location, projectSlug: item.projectSlug },
//           })
//         }
