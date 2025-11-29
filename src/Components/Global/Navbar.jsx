import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">AI-Shikshak</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">
          <a
            href="https://www.yaticorp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <a
            href="https://www.yaticorp.com/AI-Shikshak"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Product
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-5 md:hidden">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">
              <a
                href="https://www.yaticorp.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Home
              </a>
            </li>

            <li className="hover:text-blue-600 cursor-pointer">
              <a
                href="https://www.yaticorp.com/AI-Shikshak"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                About Product
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
