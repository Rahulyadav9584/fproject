import React from "react";
import onePerson from "../assets/oneP.jpeg";
import twoPeople from "../assets/onep1.jpeg";  
import threePeople from "../assets/threeP.jpg";

const Image1 = () => {
  return (
    <div className="relative bg-white py-24 px-4 md:px-8 overflow-hidden min-h-[600px]">
      {/* Background Decorations */}
      <div className="absolute left-0 bottom-0 w-64 md:w-96 h-64 md:h-96 bg-blue-100 rounded-full opacity-30 -z-10" />
      <div className="absolute right-0 top-0 w-64 md:w-80 h-64 md:h-80 bg-blue-100 rounded-full opacity-10 -z-10" />
      <div className="hidden md:block absolute right-10 top-10 w-28 h-28 border border-dotted border-gray-300 opacity-10 -z-10" />

      {/* Images Container */}
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 relative items-center">
        {/* Image 1 */}
        <div className="relative mt-0">
          <img src={threePeople} alt="Image 1" className="w-52 md:w-64 rounded-md" />
          <div className="absolute -top-1 -left-1 w-4 h-8 bg-orange-500" />
          <div className="absolute -top-1 -left-1 w-8 h-4 bg-orange-500" />
        </div>

        {/* Image 2 */}
        <div className="relative mt-8 md:mt-16">
          <img src={twoPeople} alt="Image 2" className="w-64 md:w-80 rounded-md" />
          <div className="absolute -top-1 -right-1 w-4 h-8 bg-blue-500" />
          <div className="absolute -top-1 -right-1 w-8 h-4 bg-blue-500" />
        </div>

        {/* Image 3 */}
        <div className="relative mt-8 md:mt-32">
          <img src={onePerson} alt="Image 3" className="w-52 md:w-64 rounded-md" />
          <div className="absolute -bottom-1 -right-1 w-4 h-8 bg-orange-500" />
          <div className="absolute -bottom-1 -right-1 w-8 h-4 bg-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default Image1;
