// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FiXCircle } from 'react-icons/fi';

const ItinerarySlide = () => {
    const [showSlide, setShowSlide] = useState(false);

    const toggleSlide = () => {
        setShowSlide(!showSlide);
    };

    return (
        <div className="relative">
            <button
                className="mt-3 mb-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
                onClick={toggleSlide}
            >
                View More
            </button>
            <div
                className={`overflow-hidden transition-max-height ease-in-out duration-300 ${
                    showSlide ? 'max-h-96 my-2' : 'max-h-0 my-0'
                } rounded-md shadow-lg bg-white`}
            >
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold">Under Construction</h2>
                        <button className="text-gray-600" onClick={toggleSlide}>
                            <FiXCircle className="text-red-600 text-2xl" />
                        </button>
                    </div>
                    <p className="mt-2 text-gray-800">
                        This feature is currently under construction.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItinerarySlide;










