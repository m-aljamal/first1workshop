import React from "react";
import Image from "next/image";
const ContactUs = () => {
  return (
    <div className="py-20 container ">
      <h3 className="text-red-700 text-center text-xl tracking-wider">
        Get In Touch
      </h3>
      <h2 className="text-gray-700 font-bold text-4xl text-center py-4">
        Contact Us
      </h2>
      <div className="flex">
        <form className="w-1/2 bg-gray-200 p-4 rounded-lg mt-8">
          <div className="flex gap-5 ">
            <div className="w-full">
              <label className="text-red-700 text-lg ">Name</label>
              <input
                type="text"
                className="border border-red-700 p-2 w-full"
                placeholder="Name"
              />
            </div>
            <div className="w-full">
              <label className="text-red-700 text-lg ">Email</label>
              <input
                type="text"
                className="border border-red-700 p-2 w-full"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="mt-2">
            <label className="text-red-700 text-lg ">Message</label>
            <textarea
              className="border border-red-700 p-2 w-full"
              placeholder="Message"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-red-700 text-white  py-2 px-4 rounded-full mt-2 "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div className=" relative   w-1/4  flex-1">
          <Image src="/email.png" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
