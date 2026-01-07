import { useNavigate, useParams, useLocation } from "react-router-dom";
import { allProjects } from "../data/projects";
import { icons } from "../assets/icons";

export default function ProjectDetail() {
  const CrossIcon = icons.Cross;
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background;

  const photos = allProjects.flatMap((p) => p.photos);
  const photo = photos.find((p) => p.slug === slug);
  if (!photo) return <p>Foto no encontrada</p>;

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
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-w-full max-h-full object-contain"
        />
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
