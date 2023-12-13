import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white fixed bottom-0 left-0 px-8 py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-start">
        <div className="flex flex-col">
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="MySmartDrive" className="h-8" />
          <div className="flex mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 mr-4">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">Trademarks and brands are the property of their respective owners.</p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="px-4">
            <h6 className="font-bold mb-2">Pages</h6>
            <ul className="text-gray-400">
              <li className="hover:text-gray-300">About Us</li>
              <li className="hover:text-gray-300">Explore Vehicles</li>
              <li className="hover:text-gray-300">Contact Us</li>
            </ul>
          </div>
          <div className="px-4">
            <h6 className="font-bold mb-2">Information</h6>
            <ul className="text-gray-400">
              <li className="hover:text-gray-300">FAQ</li>
              <li className="hover:text-gray-300">Privacy Policy</li>
              <li className="hover:text-gray-300">Rental Terms</li>
            </ul>
          </div>
          <div className="px-4">
            <h6 className="font-bold mb-2">Subscribe</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

