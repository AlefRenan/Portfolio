import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/images/Image_1.jpg";
import img2 from "../assets/images/Image_2.jpg";
import img3 from "../assets/images/Image_3.jpg";
import img4 from "../assets/images/Image_4.jpg";
import img5 from "../assets/images/Image_5.jpg";

const ImageCarousel = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-2xl"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="w-full aspect-[16/9]">
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full "
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
