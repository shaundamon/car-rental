// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CarList from './components/CarList';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<><HeroSection /><CarList /></>} />
        {/* Add additional routes here */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
