import React from "react";
import Image from "next/image";
const jobs = [
  {
    title: "All Car Makes",
    description:
      "We provide a variety of repair and maintenance services for all car makes and models, even for exotic and vintage ones.",
    icon: "/wrench.png",
  },
  {
    title: "Variety Services",
    description:
      "The main principle of our work is to offer a wide range of quality car repair services and we’ve been doing it since our first day.",
    icon: "/gear.png",
  },
  {
    title: "Quality Support",
    description:
      "Car Repair Services offers quality support programs for any vehicles that allow them to always stay fully functional.",
    icon: "/support.png",
  },
];

const WhatWeDo = () => {
  return (
    <div className="container py-20">
      <div className=" pb-14 text-center">
        <h2 className=" text-gray-800 font-bold tracking-widest text-3xl py-2">
          100% Result Guarantee
        </h2>
        <p className="text-gray-600">
          We offer full service auto repair & maintenance
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {jobs.map(({ title, description, icon }) => (
          <div key={title} className="flex gap-5">
            <div className="relative w-1/4 h-16  ">
              <Image
                src={icon}
                layout="fill"
                objectFit="contain"
                className=""
              />
            </div>
            <div className="h-16 bg-red-700 w-1 rounded-md"></div>
            <div className="w-3/4">
              <h2 className="py-2 text-gray-800 font-bold  tracking-widest">
                {title}
              </h2>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
