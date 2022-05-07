import React, { useEffect, useState } from "react";
import Image from "next/image";
import { imageBuilder } from "../lib/sanity";
const ImageModul = ({ shouldShow, currentImage, close, allImages }) => {
  const [imageUrl, setImageUrl] = useState(imageBuilder(currentImage).url());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setImageUrl(currentImage);
    setIndex(0);
  }, [currentImage]);

  const handleNext = () => {
    if (index < allImages.length - 1) {
      setIndex((i) => i + 1);
    }
  };

  const handlePrivuse = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
    }
  };
  return (
    <>
      {shouldShow && (
        <div
          onClick={close}
          className=" 
     fixed z-50 left-0 top-0 w-full h-full overflow-hidden bg-opacity-50 bg-gray-800  "
        >
          <div
            style={{ margin: "5% auto" }}
            className=" relative   p-5 w-10/12  md:h-5/6  h-1/2 "
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className=" absolute z-50 right-0 top-1/2  "
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mr-2  text-white cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div
              className="absolute z-50 left-0 top-1/2"
              onClick={handlePrivuse}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 ml-2 text-white cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
            </div>
            <Image
              className=" rounded-md"
              src={
                index > 0
                  ? imageBuilder(allImages[index].image).url()
                  : imageBuilder(imageUrl).url()
              }
              layout="fill"
              alt="image"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModul;
