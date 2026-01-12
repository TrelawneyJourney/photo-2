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
  const mode = location.state?.mode;

  const handleSlideChange = (swiper) => {
    const currentPhoto = photos[swiper.activeIndex];
    if (!currentPhoto) return;

    navigate(`/photoitem/${currentPhoto.slug}`, {
      replace: true,
      state: {
        background,
        mode,
        projectSlug,
      },
    });
  };

  let photos = [];

  if (mode === "global") {
    photos = allProjects.flatMap((p) => p.photos);
  } else if (mode === "project") {
    const project = allProjects.find((p) => p.slug === projectSlug);

    if (!project) return null;
    photos = project.photos;
  } else {
    return null;
  }

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
      className="fixed inset-0 z-50 bg-neutral-900 flex items-center justify-center py-8"
      onClick={handleClose}
    >
      <div
        className="relative w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <CarouselImg
          photos={photos}
          initialIndex={initialIndex}
          onSlideChange={handleSlideChange}
        />
      </div>
      <button
        className="absolute top-4 right-4 text-white text-2xl z-50"
        onClick={handleClose}
      >
        <CrossIcon />
      </button>
    </div>
  );
}
