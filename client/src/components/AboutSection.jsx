import React from "react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-2">About Us</h2>
      <div className="w-28 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>

      <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
        Fifteen years of experience in real estate, excellent customer service and a commitment to work hard, listen and follow through.
        We provide quality services to build relationships with clients and, more importantly, maintain those relationships by communicating effectively.
      </p>

      <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
        LEARN MORE
      </button>
    </section>
  );
};

export default AboutSection;
