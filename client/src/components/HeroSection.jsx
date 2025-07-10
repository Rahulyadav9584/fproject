import React from "react";
import Form from "./Form";
import bgImage from "../assets/bgimage.jpg";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-auto md:h-screen flex items-center justify-center relative py-16 md:py-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Grid Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
        {/* Left Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Consultation,<br /> Design, & Marketing
          </h1>
          <p className="text-lg mt-4">
            Build your digital brand with us.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="flex justify-center md:justify-end">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
