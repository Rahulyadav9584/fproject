import React, { useState } from "react";
import livingRoom from "../assets/livingRoom.png"; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/axios"; // 👈 import your API instance

const FooterNewsletter = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  
  const handleNewsletterSubmit = async (email) => {
    try {
      await api.post("/newsletter", { email });
      toast.success("Subscribed successfully!");
    } catch (error) {
      toast.error("Subscription failed. Try again.");
    }
  };

  return (
    <footer className="text-white">
      {/* CTA Section */}
      <div className="relative">
        <img
          src={livingRoom}
          alt="Living Room Background"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 max-w-2xl mx-auto">
            Learn more about our listing process, as well as our additional staging and design work.
          </h2>
          <button className="bg-white text-blue-800 px-6 py-2 rounded font-semibold hover:bg-gray-200">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Blue Footer Bar */}
      <div className="bg-blue-700 text-white py-6 px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Nav Links */}
        <ul className="flex flex-wrap gap-6 text-sm font-medium">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Projects</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
          <button
            className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 transition cursor-pointer"
            onClick={() => {
              if (localStorage.getItem("isAdmin") === "true") {
                navigate("/admin");
              } else {
                navigate("/admin-login");
              }
            }}
          >
            Admin
          </button>
        </ul>

        {/* Newsletter */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (!email) return toast.error("Please enter a valid email");
            await handleNewsletterSubmit(email);
            setEmail("");
          }}
          className="flex flex-wrap gap-2 items-center"
        >
          <input
            type="email"
            value={email}
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded text-white w-[220px] max-w-full"
          />
          <button type="submit" className="bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:bg-gray-200">
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#1f1f1f] py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-400">© All Rights Reserved 2025</p>

        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <span className="font-bold text-white">Real</span>
          <span className="text-gray-300">trust</span>
        </div>

        <div className="flex gap-4 mt-2 md:mt-0 text-white text-lg">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default FooterNewsletter;
