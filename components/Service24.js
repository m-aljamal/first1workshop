import React from "react";

const Service24 = () => {
  return (
    <section className="bg-service24 flex justify-center items-center  relative  bg-cover bg-fixed  h-[400px] ">
      <div className="bg-black w-full h-full opacity-50 absolute  "></div>
      <div className=" relative  container text-center    ">
        <p className="text-red-600 text-xl">
          OFFERING QUICK AND EFFICIENT SERVICE TO KEEP YOU ON THE ROAD
        </p>
        <div className="text-white font-bold md:text-5xl text-3xl text-center  ">
          <p className="py-5">24/7 SERVICES</p>
          <div className="flex justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-18 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <p> 056 314 2655</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service24;
