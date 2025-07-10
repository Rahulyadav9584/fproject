import React from "react";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import ClientsSection from "../components/ClientsSection";
import FooterNewsletter from "../components/FooterNewsletter";
import Image from "../components/Image";
import Image1 from "../components/Image1";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import HeroSection from "../components/HeroSection";


const LandingPage = () => {

  return (
    <div className="font-sans">

      <Navbar />
      {/* Hero Section */}
      <section id="home">
      <HeroSection/>
       </section>

      {/*image section*/}
      <Image />

      {/* Why Choose Us */}
      <WhyChooseUs/>

      {/*image1 section*/}
        <Image1/>

      {/* About Section */}
      <section id="about">
      <AboutSection />
      </section>

      {/* Our Projects */}
      <section id="projects">
      <ProjectsSection />
      </section>

      {/* Happy Clients */}
      <ClientsSection />

      {/* Newsletter */}
       <section id="contact">
     <FooterNewsletter />
    </section>
    </div>
  );
};

export default LandingPage;
