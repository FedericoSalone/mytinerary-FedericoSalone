// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { FiXCircle } from 'react-icons/fi';
import axios from 'axios';

const ItinerarySlide = () => {
    const [showSlide, setShowSlide] = useState(false);
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    const toggleSlide = () => {
        setShowSlide(!showSlide);
    };

    useEffect(() => {
        axios.get('http://localhost:3000/api/activities') 
            .then(response => {
                setActivities(response.data.response); 
                setLoading(false); 
            })
            .catch(error => {
                console.error('Error al obtener datos de actividades:', error);
                setLoading(false); 
            });
    }, []); 

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
                        <h2 className="text-2xl font-semibold">Activities</h2>
                        <button className="text-gray-600" onClick={toggleSlide}>
                            <FiXCircle className="text-red-600 text-2xl" />
                        </button>
                    </div>
                    {loading ? (
                        <p className="mt-2 text-gray-800">Loading activities...</p>
                    ) : (
                        <ul>
                            {activities.map((activity, index) => (
                                <li key={index}>
                                    <h3>{activity.title}</h3>
                                    <img src={activity.image} alt={activity.title} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItinerarySlide;















