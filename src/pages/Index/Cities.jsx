// eslint-disable-next-line no-unused-vars
import React from 'react';
import constructionImage from '../../../public/construccion.jpg';

const Cities = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
            <img src={constructionImage} alt="Under Construction" className="max-w-md mb-4" />
            <h1 className="text-2xl font-bold">Page Under Construction</h1>
            <p className="text-gray-600">Check back soon for exciting updates!</p>
        </div>
    );
}

export default Cities;

