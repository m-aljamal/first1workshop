import React from "react";

const Services = () => {
  return (
    <div className="container py-24" name="services">
      <h2 className="text-2xl font-bold text-center">AUTO REPAIR SERVICES</h2>
      <div className="text-red-700 text-center">
        <p>WE OFFER A VARIETY OF SERVICES TO HELP YOU GET BACK</p>
        <p>ON THE ROAD AND KEEP YOUR LIFE SAFE</p>
      </div>
      <div className="grid grid-cols-3 gap-4 py-20">
        {services.map(({ title, description, image }) => (
          <div className="bg-blue-300 p-2">
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
  },
  {
    title: "OIL CHANGES",
    description:
      "Regularly changing your oil and filter will help the engine work its best.",
    image: "oil.jpg",
  },
  {
    title: "OIL CHANGES",
    description:
      "Regularly changing your oil and filter will help the engine work its best.",
    image: "oil.jpg",
  },
  {
    title: "OIL CHANGES",
    description:
      "Regularly changing your oil and filter will help the engine work its best.",
    image: "oil.jpg",
  },
  {
    title: "OIL CHANGES",
    description:
      "Regularly changing your oil and filter will help the engine work its best.",
    image: "oil.jpg",
  },
  {
    title: "OIL CHANGES",
    description:
      "Regularly changing your oil and filter will help the engine work its best.",
    image: "oil.jpg",
  },
];
