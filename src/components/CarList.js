import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';


// Example car data structure
const cars = [
    {
        id: 1,
        category: 'Small',
        example: 'Renault Kwid',
        seats: '5 seats',
        doors: '5 doors',
        transmission: 'Manual',
        image: 'renault_20kwid_sideview.png',
        priceOnCollection: 'ZAR 956.19',
        priceNow: 'ZAR 914.00'
    },
    {
        id: 1,
        category: 'Small',
        example: 'Renault Kwid',
        seats: '5 seats',
        doors: '5 doors',
        transmission: 'Manual',
        image: 'renault_20kwid_sideview.png',
        priceOnCollection: 'ZAR 956.19',
        priceNow: 'ZAR 914.00'
    },
];


const CarCard = ({ car }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const imagePath = process.env.PUBLIC_URL + car.image;
  
    return (
      <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
        <img className="w-full h-48 object-cover" src={imagePath} alt={car.example} />
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900">{car.category}</h3>
          <p className="font-medium text-gray-800">{car.example}</p>
          <p className="text-gray-600">{`${car.seats} | ${car.doors} | ${car.transmission}`}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">{car.priceNow}</span>
            <span className="text-sm text-gray-500 line-through">{car.priceOnCollection}</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button className="bg-blue-600 text-white px-3 py-1 rounded-lg transition-colors hover:bg-blue-700">
              Choose
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-500 hover:text-gray-600 transition-colors"
            > More Info
              {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
            </button>
          </div>
          {isExpanded && (
            <div className="mt-4 text-sm text-gray-600">
              <p>Additional information about the car...</p>
              {/* Insert any additional information here */}
            </div>
          )}
        </div>
      </div>
    );
  };


const CarList = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {cars.map(car => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default CarList;