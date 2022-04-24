import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
const Home = () => {
  return (
    <div
      name="home"
      //  className="h-[calc(100vh-134.84px)] "
    >
      <Swiper spaceBetween={50} slidesPerView={1} effect="fade">
        <SwiperSlide>
          <img src="/images/car-f.jpg" className="w-" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/car-f.jpg" className="w-" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
