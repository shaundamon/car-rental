import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaImage, FaListUl, FaRegCommentDots, FaRegListAlt } from 'react-icons/fa';

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
        id: 8,
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
        id: 2,
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
        id: 3,
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
        id: 7,
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
        id: 4,
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
    const [activeTab, setActiveTab] = useState('specs');
    const imagePath = process.env.PUBLIC_URL + car.image;

    const TabContent = () => {
        switch (activeTab) {
            case 'specs':
                return (
                    <div className="text-gray-700">
                        <h4 className="font-semibold text-lg mb-2">Specifications</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li> <strong>Engine</strong>: 1.0L</li>
                            <li> <strong>Power</strong>: 50kW</li>
                            <li> <strong>Torque</strong>: 91Nm</li>
                            <li> <strong>Fuel Consumption</strong>: 4.7L/100km</li>
                            <li> <strong>CO2 Emissions</strong>: 112g/km</li>
                            <li> <strong>Transmission</strong>: Manual</li>
                            <li> <strong>Drive Wheels</strong>: Front</li>
                            <li> <strong>Doors</strong>: 5</li>
                            <li> <strong>Seats</strong>: 5</li>
                            <li> <strong>ABS</strong>: Yes</li>
                            <li> <strong>Airbags</strong>: 2</li>
                            <li> <strong>Service Intervals</strong>: 15 000km</li>
                        </ul>
                    </div>
                );
            case 'terms':
                return (
                    <div className="text-gray-700">
                        <h4 className="font-semibold text-lg mb-2">Rental Terms</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>A monthly fee of {car.priceNow} is paid to use the car.</li>
                            <li>
                                A once-off fee of R4950.00 called SMART-PAYMENT is required which covers:
                                <ul className="list-disc pl-8 space-y-1">
                                    <li>Comprehensive Insurance</li>
                                    <li>Service and Maintenance</li>
                                    <li>Vehicle Tracking Service</li>
                                </ul>
                            </li>
                            <li>3,000km per month included at no additional cost.</li>
                            <li>Free cancellation and modifications up to 24 hours before your rental starts.</li>
                        </ul>
                    </div>
                );
            case 'options':
                return (
                    <div className="text-gray-700">
                        <h4 className="font-semibold text-lg mb-2">Extra Options</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Additional 1000km per month for R3000.00</li>
                            <li>Additional 2000km per month for R5000.00</li>
                            <li>Additional 3000km per month for R7000.00</li>
                            <li>Additional 4000km per month for R9000.00</li>
                            <li>Additional 5000km per month for R11000.00</li>
                        </ul>
                    </div>
                );
            case 'gallery':
                return (
                    <div className="grid grid-cols-3 gap-2">
                        <img className="w-full h-32 object-cover" src={imagePath} alt={car.example} />
                        <img className="w-full h-32 object-cover" src={imagePath} alt={car.example} />
                        <img className="w-full h-32 object-cover" src={imagePath} alt={car.example} />
                        <img className="w-full h-32 object-cover" src={imagePath} alt={car.example} />
                        <img className="w-full h-32 object-cover" src={imagePath} alt={car.example} />
                        <img className="w-full h-32 object-cover" src={imagePath} alt={car.example} />
                    </div>
                );
            case 'comments':
                return (
                    <div className="text-gray-700">
                        <h4 className="font-semibold text-lg mb-2">Comments</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>This list</li>
                            <li>is for us to just</li>
                            <li>check how the comments would appear</li>
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg font-lato">
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
                        className="flex items-center px-3 py-1 border border-gray-400 text-gray-600 bg-gray-200 rounded-lg transition-colors hover:bg-gray-300 hover:border-gray-500"
                    >
                        More Info {isExpanded ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
                    </button>
                </div>
                {isExpanded && (
                    <div className="p-4 text-xs sm:text-sm">
                        <div className="flex justify-around text-gray-500 text-sm">
                            <TabButton
                                label="Rental Terms"
                                icon={<FaRegListAlt className="" />}
                                isActive={activeTab === 'terms'}
                                onClick={() => setActiveTab('terms')}
                            />
                            <button onClick={() => setActiveTab('options')} className={`flex items-center ${activeTab === 'options' ? 'text-red-500' : ''}`}>
                                <FaListUl className="mr-1" /> Extra Options
                            </button>

                            <button onClick={() => setActiveTab('gallery')} className={`flex items-center ${activeTab === 'gallery' ? 'text-red-500' : ''}`}>
                                <FaImage className="mr-1" /> Image Gallery
                            </button>
                            <button onClick={() => setActiveTab('comments')} className={`flex items-center ${activeTab === 'comments' ? 'text-red-500' : ''}`}>
                                <FaRegCommentDots className="mr-1" /> Comments
                            </button>
                        </div>
                        <div className="mt-4">
                            <TabContent />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const TabButton = ({ label, icon, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center px-1 sm:px-3 py-1 my-1 sm:my-0 transition-colors ${isActive ? 'text-red-500 font-semibold' : 'text-gray-500 hover:text-gray-600'
                }`}
        >
            {icon}
            <span className="hidden sm:inline ml-1">{label}</span>
        </button>
    );
};

const CarList = () => {
    return (
        <div className="container mx-auto px-4 pb-40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {cars.map((car, index) => (
                    <CarCard key={index} car={car} />
                ))}
            </div>
        </div>
    );
};


export default CarList;