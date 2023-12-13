// src/components/Navbar.js
import React from 'react';
import { FaCar, FaBars } from 'react-icons/fa'; 
import { MdContactMail } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <FaCar className="text-xl mr-2" /> 
        <span className="font-semibold text-xl tracking-tight">MY SMART DRIVE</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <FaBars /> 
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home Page
          </a>
          <a href="#explore" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Explore Vehicles
          </a>
          <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact Us
          </a>
        </div>
        <div>
          <a href="tel:123-456-7890" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
