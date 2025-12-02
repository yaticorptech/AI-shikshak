// src/components/Navbar.jsx
import React, { useState } from "react";
import logo from "/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="h-12 cursor-pointer"
            onClick={() => window.open("https://yaticorp.com/", "_blank")}
          />
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu Links */}
        <ul
          className={`md:flex md:items-center md:gap-8 
            absolute md:static bg-white md:bg-black 
            w-full md:w-auto left-0 top-16 md:top-0 
            shadow-md md:shadow-none transition-all duration-300 
            ${isOpen ? "block" : "hidden"}`}
        >
          <li className="px-4 md:px-0 py-3 md:py-0 text-center border-b md:border-none">
            <a
              href="https://www.yaticorp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 md:text-white hover:text-blue-500 font-medium"
            >
              Home
            </a>
          </li>
          <li className="px-4 md:px-0 py-3 md:py-0 text-center border-b md:border-none">
            <a
              href="https://www.yaticorp.com/AI-Shikshak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 md:text-white hover:text-blue-500 font-medium"
            >
              AI-Shikshak
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
