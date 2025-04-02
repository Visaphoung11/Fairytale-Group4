import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white  fixed w-full top-0 z-50 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="w-20" src={logo} alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 px-4 py-2 border border-pink-700 rounded-full">
            <a href="#" className="hover:text-green-400">
              Home
            </a>
            <a href="#" className="hover:text-green-400">
              Story
            </a>
            <a href="#" className="hover:text-green-400">
              Favourite
            </a>
          </div>

          {/* Login Section */}
          <div className="hidden lg:flex space-x-6 text-pink-700">
            <a href="#" className="hover:text-green-400">
              Login
            </a>
            <a href="#" className="hover:text-green-400">
              Register
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Fixed Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-white shadow-md z-50 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <a href="#" className="hover:text-green-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">
              Story
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400">
              Favourite
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 text-pink-700">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 text-pink-700">
              Register
            </a>
          </li>
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
