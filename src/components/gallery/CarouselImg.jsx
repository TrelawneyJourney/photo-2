import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function CarouselImg({ photos, initialIndex }) {
  return (
    <Swiper
      modules={[Navigation, Keyboard]}
      navigation
      keyboard={{ enabled: true }}
      initialSlide={initialIndex}
      spaceBetween={30}
      className="h-full w-full"
    >
      {photos.map((photo) => (
        <SwiperSlide
          key={photo.id}
          className="flex items-center justify-center"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-w-full max-h-full object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
