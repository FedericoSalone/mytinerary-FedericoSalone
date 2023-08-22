// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLocation } from 'react-router-dom';



const UnderConstruction = () => {
    const location = useLocation();
    const city = location.state && location.state.city;

    return (
        <div className="min-h-screen bg-blue-300">
            <div className="container mx-auto px-4 py-8 text-center">
                {city && (
                    <div className="border rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:opacity-90">
                        <div className="h-64 overflow-hidden relative">
                            <img
                                src={city.img}
                                alt={city.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4 bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        {city.name}
                                    </h3>
                                    <p className="text-gray-300 mb-2">
                                        {city.country}
                                    </p>
                                    <Link
                                        to="/under-construction"
                                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center"
                                    >
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <h2 className="text-4xl font-semibold mt-8">
                    Under Construction
                </h2>
                <p className="text-gray-600">
                    This page is currently under construction.
                </p>
                <Link
                    to="/cities"
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full mt-4 inline-block"
                >
                    Back to Cities
                </Link>
            </div>
        </div>
    );
}

export default UnderConstruction;





