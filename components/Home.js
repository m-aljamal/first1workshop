import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Scrollbar, Autoplay, EffectFade } from "swiper";
const Home = () => {
  return (
    <div className="relative" name="home">
      <div className="text-white z-30  absolute  top-52 flex  items-center justify-center  ">
        <div className=" container">
          <h2 className="text-4xl font-bold ">Best Car Maintenance</h2>
          <h1 className="text-7xl font-bold">Service And Repair</h1>
          <p className="text-4xl font-semibold">+1 123 456 789</p>
          <p>
            AUTO REPAIR IS COMMITTED TO EARNING YOUR TRUST BY PROVIDING THE
            EXPERTISE
          </p>
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay
        modules={[Scrollbar, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        effect="fade"
      >
        <SwiperSlide>
          <ImageContainer>
            <Image
              src="/photo-01.png"
              layout="fill"
              alt="main"
              objectFit="cover"
              objectPosition="bottom"
              priority
            />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <Image
              src="/photo-03.png"
              layout="fill"
              alt="main"
              objectFit="cover"
              objectPosition="bottom"
              priority
            />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <Image
              src="/photo-02.png"
              layout="fill"
              alt="main"
              objectFit="cover"
              objectPosition="bottom"
              priority
            />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <Image
              src="/photo-04.png"
              layout="fill"
              alt="main"
              objectFit="cover"
              objectPosition="bottom"
              priority
            />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <Image
              src="/photo-05.png"
              layout="fill"
              alt="main"
              objectFit="cover"
              objectPosition="bottom"
              priority
            />
          </ImageContainer>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;

const ImageContainer = ({ children }) => {
  return (
    <div
      className="relative   bg-white"
      style={{ height: `calc(100vh - 50px)` }}
    >
      {children}
    </div>
  );
};
