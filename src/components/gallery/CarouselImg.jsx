import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarouselImg({ photos, initialIndex }) {
  return (
    <Swiper
      modules={[Navigation, Keyboard, Pagination, Mousewheel]}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={{ enabled: true }}
      initialSlide={initialIndex}
      spaceBetween={30}
      className="h-screen w-full [--swiper-navigation-color:#9ca3af]
    [--swiper-pagination-color:white]"
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo.id}>
          <div className="h-full w-full flex items-center justify-center">
            <img
              src={photo.src}
              alt={photo.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
