// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FaFileInvoiceDollar, FaRegMoneyBillAlt } from 'react-icons/fa';
import { FiClock, FiHeart } from 'react-icons/fi';
import ItinerarySlide from './ItinerarySlide';

const NoItinerariesMessage = () => (
    <div className="mt-12">
        <img
            src="https://images.pexels.com/photos/4118958/pexels-photo-4118958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="No itineraries available"
            className="mx-auto w-64 h-64 rounded-full animate-bounce"
        />
        <p className="text-center text-4xl animate-pulse">No itineraries available.</p>
    </div>
);

const Itineraries = () => {
    const itineraries = useSelector((state) => state.itineraries.itineraries);
    const loading = useSelector((state) => state.itineraries.loading);
    const error = useSelector((state) => state.itineraries.error);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (itineraries.length === 0) {
        return <NoItinerariesMessage />;
    }

    return (
        <div className="mt-4">
            {itineraries.map(itinerary => (
                <div key={itinerary._id} className="border p-4 mb-4 cursor-pointer">
                <div className="w-32 h-32 mx-auto mb-2 overflow-hidden rounded-full">
                        <img
                            src={itinerary.photo}
                            alt={itinerary.name}
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <h3 className="text-xl font-semibold mt-2">{itinerary.name}</h3>
                    <div className="flex items-center justify-center mt-1">
                        <FaFileInvoiceDollar className="inline text-black text-2xl mr-1" />
                        {Array.from({ length: itinerary.price }, (_, index) => (
                            <span key={index} className="text-green-700 text-2xl mr-2">
                                <FaRegMoneyBillAlt />
                            </span>
                        ))}
                    </div>
                    <p>
                        <FiClock className="inline mr-1 text-2xl" />
                        Duration: {itinerary.duration} hours
                    </p>
                    <p>
                        <FiHeart className="inline mr-1 text-2xl" />
                        Likes: {itinerary.likes}
                    </p>
                    <div className="flex justify-center mt-2">
                        {itinerary.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full mr-2"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <ItinerarySlide /> 
                </div>
        
            ))}
        </div>
    );
};

Itineraries.propTypes = {
    itineraries: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Itineraries;



