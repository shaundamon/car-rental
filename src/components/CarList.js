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
                return <div>Specifications content...</div>;
            case 'terms':
                return <div>Rental terms content...</div>;
            case 'options':
                return <div>Extra options content...</div>;
            case 'gallery':
                return <div>Image gallery content...</div>;
            case 'comments':
                return <div>Comments content...</div>;
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
                    <div className="p-4">
                        <div className="flex justify-around text-gray-500 text-sm">
                            <button onClick={() => setActiveTab('terms')} className={`flex items-center ${activeTab === 'terms' ? 'text-red-500' : ''}`}>
                                <FaRegListAlt className="mr-1" /> Rental Terms
                            </button>
                            <button onClick={() => setActiveTab('options')} className={`flex items-center ${activeTab === 'options' ? 'text-red-500' : ''}`}>
                                <FaListUl className="mr-1" /> Extra Options
                            </button>
                            <button onClick={() => setActiveTab('specs')} className={`flex items-center ${activeTab === 'specs' ? 'text-red-500' : ''}`}>
                                <FaRegListAlt className="mr-1" /> All Specifications
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