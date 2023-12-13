// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CarProvider } from './contexts/CarContext'; // Import CarProvider
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CarProvider> {/* Wrap App with CarProvider */}
      <App />
    </CarProvider>
  </React.StrictMode>
);

reportWebVitals();
