
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ButtonCities = ({ id }) => {
    return (
        <Link
            to={`/city/${id}`}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center"
        >
            View More
        </Link>
    );
}

export default ButtonCities;




