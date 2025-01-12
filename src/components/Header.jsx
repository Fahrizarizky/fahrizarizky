import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white fixed w-full z-10 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-extrabold">FAHRIZA RIZKY</h1>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-lg hover:text-gray-400 transition duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-lg hover:text-gray-400 transition duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-lg hover:text-gray-400 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-lg hover:text-gray-400 transition duration-300"
            >
              Contact
            </a>
          </nav>
          <button className="md:hidden text-xl text-gray-300">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
