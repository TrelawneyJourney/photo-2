import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Keyboard,
  Pagination,
  Mousewheel,
  Zoom,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

export default function CarouselImg({ photos, initialIndex, onSlideChange }) {
  return (
    <Swiper
      modules={[Navigation, Keyboard, Pagination, Mousewheel, Zoom]}
      navigation={true}
      pagination={true}
      mousewheel={{ forceToAxis: true }}
      keyboard={{ enabled: true }}
      zoom={{
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
      }}
      initialSlide={initialIndex}
      onSlideChange={onSlideChange}
      spaceBetween={30}
      className="h-screen w-full [--swiper-navigation-color:#9ca3af]
    [--swiper-pagination-color:white]"
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo.id}>
          <div className="h-full w-full flex items-center justify-center swiper-zoom-container">
            <img
              src={photo.src}
              alt={photo.alt}
              className="max-w-full max-h-full object-contain select-none"
              draggable={false}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
