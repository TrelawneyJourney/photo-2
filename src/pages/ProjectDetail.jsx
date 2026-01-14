import { useNavigate, useParams, useLocation } from "react-router-dom";
import { allProjects } from "../data/projects";
import { icons } from "../assets/icons";
import CarouselImg from "../components/gallery/CarouselImg";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-neutral-900 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      >
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <CarouselImg
            photos={photos}
            initialIndex={initialIndex}
            onSlideChange={handleSlideChange}
          />
        </motion.div>
        <button
          className="absolute top-4 right-4 text-white text-2xl z-50"
          onClick={handleClose}
        >
          <CrossIcon />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
