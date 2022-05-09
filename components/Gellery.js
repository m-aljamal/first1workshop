import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Scrollbar, Autoplay } from "swiper";
import { imageBuilder } from "../lib/sanity";
import ImageModul from "./ImageModul";
import "swiper/css";
import "swiper/css/autoplay";
const Gellery = ({ gellery }) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (image) => {
    setShouldShow(true);
    setCurrentImage(image);
  };
  return (
    <section
      className="bg-[url('/products-bg.jpg')]  relative  bg-cover bg-fixed  h-[600px] "
      name="gallery"
    >
      <div className="bg-black w-full h-full opacity-50 absolute  "></div>
      <div className=" container">
        <div className=" relative   ">
          <h2 className="text-red-700 text-3xl pt-10 text-center">
            Our Gallery
          </h2>
          <div className="py-20">
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={10}
              autoplay
              modules={[Scrollbar, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {gellery.map(({ _id, image }) => (
                <div key={_id}>
                  <SwiperSlide
                    key={_id}
                    onClick={() => handleImageClick(image)}
                  >
                    <div className="relative h-80 ">
                      <Image
                        src={imageBuilder(image).url()}
                        objectFit="cover"
                        className="rounded-lg"
                        layout="fill"
                        priority
                      />
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {currentImage && (
        <ImageModul
          shouldShow={shouldShow}
          currentImage={currentImage}
          allImages={gellery}
          close={async () => setShouldShow(false)}
        />
      )}
    </section>
  );
};

export default Gellery;
