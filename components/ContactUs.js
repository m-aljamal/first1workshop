import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-300 py-20 ">
      <h3 className="text-red-700 text-center text-xl tracking-wider">
        Get In Touch
      </h3>
      <h2 className="text-gray-700 font-bold text-4xl text-center py-4">
        Contact Us
      </h2>
      <div>
        <form>
          <div className="flex">
            <div>
              <label className="text-red-700 text-lg font-bold">Name</label>
              <input type="text" className="border border-red-700 p-2" />
            </div>
            <div>
              <label className="text-red-700 text-lg font-bold">Email</label>
              <input type="text" className="border border-red-700 p-2" />
            </div>
          </div>
          <div>
            <label className="text-red-700 text-lg font-bold">Message</label>
            <textarea className="border border-red-700 p-2" />
          </div>
          <div className="flex justify-center">
            <button className="bg-red-700 text-white font-bold py-2 px-4 rounded-full">
              Submit
            </button>
          </div>+
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default ContactUs;
