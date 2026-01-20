import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Mousewheel, Zoom } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { useState } from "react";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 20 : -20,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -20 : 20,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function CarouselImg({ photos, initialIndex, onSlideChange }) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const handleOnSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
    onSlideChange(swiper);
  };

  return (
    <Swiper
      modules={[Navigation, Keyboard, Mousewheel, Zoom]}
      navigation={true}
      mousewheel={{ forceToAxis: true }}
      keyboard={{ enabled: true }}
      zoom={{
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
      }}
      initialSlide={initialIndex}
      onSlideChange={handleOnSlideChange}
      className="h-screen w-full [--swiper-navigation-color:#9ca3af]
    [--swiper-pagination-color:white]"
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={photo.slug}>
          <div className="h-full w-full flex items-center justify-center swiper-zoom-container">
            <AnimatePresence mode="wait" custom={direction}>
              {index === activeIndex && (
                <motion.img
                  key={photo.slug}
                  src={photo.src}
                  alt={photo.alt}
                  className="max-w-full max-h-full object-contain select-none"
                  draggable={false}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.85, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
