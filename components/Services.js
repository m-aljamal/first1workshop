import Image from "next/image";
import React from "react";
import { imageBuilder } from "../lib/sanity";

const Services = ({ services }) => {
  return (
    <div className="container" name="services">
      <h2 className="md:text-5xl text-3xl  font-bold text-center text-gray-700">
        General Auto Maintenance
      </h2>
      <div className="text-red-700 text-center md:text-xl text-lg py-4 font-bold tracking-wider">
        <p>Auto repair with latest technology and</p>
        <p>expertise to earn your trust</p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 py-20">
        {services.map(({ title, description, Icon, _id }) => (
          <div key={_id} className=" ">
            <div className="flex justify-center">
              <Image
                width={100}
                height={100}
                alt={`Cover Image for ${title}`}
                src={imageBuilder(Icon).url()}
              />
            </div>
            <h2 className="text-gray-800 font-bold text-center text-xl my-2 tracking-wider">
              {title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
