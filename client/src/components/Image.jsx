import React from "react";
import onePerson from "../assets/oneP.jpeg";
import twoPeople from "../assets/onep1.jpeg";  
import threePeople from "../assets/threeP.jpg";

const Image = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white relative overflow-hidden mt-20">
      {/* Left Text */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          Not Your Average Realtor
        </h2>
        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          Real estate is an eye for staging a property, standout content, selling design, and effective marketing to get homes more exposure on the market.
        </p>
      </div>

      {/* Right Images Layout */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
        {/* Large Main Image */}
        <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg z-10">
          <img
            src={threePeople}
            alt="Realtor 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Column with two small images (closer + overlapping) */}
        <div className="absolute right-6 md:right-[110px] flex flex-col gap-2 z-20">
          {/* Top Small Circle */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={onePerson}
              alt="Realtor 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Small Circle */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={twoPeople}
              alt="Realtor 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
