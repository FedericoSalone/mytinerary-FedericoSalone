// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiError } from 'react-icons/bi';
import axios from 'axios';
import ButtonCities from './ButtonCities'

const Cities = () => {
    const [filter, setFilter] = useState('');
    const [cities, setCities] = useState([]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    useEffect(() => {
        axios.get('http://localhost:3000/api/cities')
            .then(response => setCities(response.data))
            .catch(error => console.error('Error fetching cities:', error));
    }, []);

    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().startsWith(filter.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-blue-300">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <div className="w-full mb-2 md:w-1/2 lg:w-1/3 mx-auto relative">
                        <span className="absolute top-0 left-0 flex items-center pl-3 h-full text-gray-600">
                            <FiSearch />
                        </span>
                        <input
                            type="text"
                            placeholder="Search cities..."
                            value={filter}
                            onChange={handleFilterChange}
                            className="px-10 py-2 border rounded-lg w-full pl-10 focus:outline-none focus:border-blue-700 transition duration-300"
                        />
                    </div>
                </div>
                {filteredCities.length === 0 ? (
                    <div className="text-center">
                        <BiError className="mx-auto text-6xl text-gray-600 mb-4" />
                        <p className="text-gray-600 font-semibold text-2xl">
                            No cities found.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredCities.map(city => (
    <div
        key={city.name}
        className="border rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:opacity-90"
    >
        <div className="h-64 overflow-hidden relative">
            <img src={city.img} alt={city.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4 bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
                <div>
                    <h3 className="text-lg font-semibold mb-2">
                        {city.name}
                    </h3>
                    <p className="text-gray-300 mb-2">
                        {city.country}
                    </p>
                    <ButtonCities id={city._id} />
                </div>
            </div>
        </div>
    </div>
))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cities;



