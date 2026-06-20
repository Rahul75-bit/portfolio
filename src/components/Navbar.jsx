import React, { useState } from "react";
import ShinyText from "../Reactbits/ShinyText";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["skills", "about", "projects", "contact"];

  return (
    <div className="bg-gray-900 text-white font-sans backdrop-blur-md sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4 border-b border-gray-800">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold flex items-center">
          <Link to="/">
            <ShinyText text="Rahul" />
            <ShinyText text="Mourya" color="#dc2626" />
          </Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <NavLink
                to={item}
                className={({ isActive }) =>
                  `relative group transition duration-300 ${
                    isActive ? "text-red-500" : ""
                  }`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-gray-900 border-b border-gray-800">
          {menuItems.map((item) => (
            <NavLink
              key={item}
              to={item}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium hover:text-red-500 transition"
               className={({ isActive }) =>
                  `relative group transition duration-300 ${
                    isActive ? "text-red-500" : ""
                  }`
                }
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
