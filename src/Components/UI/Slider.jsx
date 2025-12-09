import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  const sliderImages = [
    "/images/leader1.JPG",
    "/images/leader2.JPG",
    "/images/leader3.JPG",
    "/images/congresslogo.png",
    "/images/leader2.JPG",
    "/images/leader3.JPG",
  ];

  return (
    <div className="w-full flex justify-center py-10">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-[90%] sm:w-[80%] md:w-[70%]"
      >
        {sliderImages.map((src, i) => (
          <SwiperSlide
            key={i}
            className="!w-[70%] sm:!w-[50%] md:!w-[30%] lg:!w-[25%] rounded-2xl overflow-hidden"
          >
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
