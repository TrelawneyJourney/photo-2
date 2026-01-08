import { useNavigate, useParams, useLocation } from "react-router-dom";
import { allProjects } from "../data/projects";
import { icons } from "../assets/icons";
import CarouselImg from "../components/gallery/CarouselImg";

export default function ProjectDetail() {
  const CrossIcon = icons.Cross;
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const background = location.state?.background;
  const projectSlug = location.state?.projectSlug;

  // const photos = allProjects.flatMap((p) => p.photos);
  // const photo = photos.find((p) => p.slug === slug);
  // if (!photo) return <p>Foto no encontrada</p>;

  const project = allProjects.find((p) => p.slug === projectSlug);
  if (!project) return null;

  const photos = project.photos;
  const initialIndex = photos.findIndex((p) => p.slug === slug);

  const handleClose = () => {
    if (background) {
      navigate(background.pathname);
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center py-8"
      onClick={handleClose}
    >
      <div
        className="relative max-w-lg max-h-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <CarouselImg photos={photos} initialIndex={initialIndex} />
      </div>
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={handleClose}
      >
        <CrossIcon />
      </button>
    </div>
  );
}
