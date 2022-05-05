import React from "react";

const Services = () => {
  return (
    <div className="container  " name="services">
      <h2 className="text-5xl font-bold text-center text-gray-700">
        General Auto Maintenance
      </h2>
      <div className="text-red-700 text-center text-xl font-bold">
        <p>Auto repair with latest technology and</p>
        <p>expertise to earn your trust</p>
      </div>
      <div className="grid grid-cols-3 gap-4 py-20">
        {services.map(({ title, description, image, id }) => (
          <div key={id} className="bg-blue-300 p-2">
            <p>{image}</p>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

const services = [
  {
    title: "OIL CHANGES",
    description:
      "Regularly changing your oil and filter will help the engine work its best.",
    image: "oil.jpg",
    id: 1,
  },
  {
    title: "OIL CHANGES",
    description:
      "Regularly changing your oil and filter will help the engine work its best.",
    image: "oil.jpg",
    id: 2,
  },
  {
    title: "OIL CHANGES",
    description:
      "Regularly changing your oil and filter will help the engine work its best.",
    image: "oil.jpg",
    id: 3,
  },
  {
    title: "OIL CHANGES",
    description:
      "Regularly changing your oil and filter will help the engine work its best.",
    image: "oil.jpg",
    id: 4,
  },
  {
    title: "OIL CHANGES",
    description:
      "Regularly changing your oil and filter will help the engine work its best.",
    image: "oil.jpg",
    id: 5,
  },
  {
    title: "OIL CHANGES",
    description:
      "Regularly changing your oil and filter will help the engine work its best.",
    image: "oil.jpg",
    id: 6,
  },
];
