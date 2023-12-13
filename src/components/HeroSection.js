// src/components/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-blue-600 text-white p-10 text-center"
    >
      <h1 className="text-4xl font-bold mb-4">Find Your Perfect Car Rental</h1>
      <p className="mb-6">Choose from a wide variety of cars at competitive prices.</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-white text-blue-600 px-5 py-2 rounded-full font-bold"
      >
        Browse Cars
      </motion.button>
    </motion.div>
  );
};

export default HeroSection;
