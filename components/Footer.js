import React from "react";
import { email, location, phone } from "./icons";
import Image from "next/image";
const info = [
  {
    text: "Ras Al Khor industrial area 2 Dubai, UAE",
    icon: location,
  },
  {
    text: "056 314 2655",
    icon: phone,
  },
  {
    text: "info@first1workshop.com",
    icon: email,
  },
];

const Footer = () => {
  return (
    <footer className="bg-footer-bg py-4">
      <div className="container flex flex-col md:flex-row    ">
        <div className="relative  h-36">
          <Logo />
        </div>
        <div className=" ">
          <h2 className="text-red-700 tracking-wider font-bold py-3 text-2xl">
            Contact Info
          </h2>
          {info.map(({ text, icon }) => (
            <div className="flex items-center gap-3 py-2" key={text}>
              <div>{icon}</div>
              <p className="text-gray-200">{text}</p>
            </div>
          ))}
        </div>
        <div className="relative flex-1 invisible md:visible">
          <Logo />
        </div>

        <div className="">
          <h2 className="text-red-700 tracking-wider font-bold py-3 text-2xl">
            Opening Hours
          </h2>
          <div className="flex items-center gap-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="text-gray-200">
              <p>From Monday till Saturday </p>
              <p>8 AM to 7 pm</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
const Logo = () => {
  return <Image src="/white_logo.png" layout="fill" objectFit="contain" />;
};
