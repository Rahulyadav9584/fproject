import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // ✅ Add icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-800 flex items-center gap-2">
          <img src="https://img.icons8.com/ios-filled/50/000000/home.png" alt="logo" className="w-6 h-6" />
          <span>Real <span className="text-gray-700">Trust</span></span>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium ml-96">
          {["home", "projects", "about", "subscribers"].map((id) => (
            <li key={id}>
              <ScrollLink to={id} smooth duration={500} className="cursor-pointer hover:text-blue-600">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <ScrollLink to="contact" smooth duration={500}>
            <button className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition">
              Contact
            </button>
          </ScrollLink>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {["home", "projects", "about", "subscribers", "contact"].map((id) => (
              <li key={id}>
                <ScrollLink
                  to={id}
                  smooth
                  duration={500}
                  onClick={closeMenu}
                  className="block py-2 cursor-pointer hover:text-blue-600"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
