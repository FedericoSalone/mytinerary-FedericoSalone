// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCityDetailsAsync } from '../../redux/actions/citiesDetailsActions';
import { FiArrowLeft } from 'react-icons/fi';
import Itineraries from './Itineraries';

const CityDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const cityData = useSelector((state) => state.cityDetails.cityData);
    const itineraries = useSelector((state) => state.itineraries.itineraries);

    useEffect(() => {
        dispatch(fetchCityDetailsAsync(id));
    }, [dispatch, id]);

    if (!cityData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300">
            <div className="container mx-auto px-4 py-8 text-center">
                {cityData && (
                    <div className="border rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:opacity-90">
                        <div className="h-80 overflow-hidden relative">
                            <img
                                src={cityData.img}
                                alt={cityData.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4 bg-black bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2">
                                        {cityData.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                <Itineraries itineraries={itineraries} />
                <Link
                    to="/cities"
                    className="px-6 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full mt-4 inline-flex text-lg items-center"
                >
                    <FiArrowLeft className="mr-2" /> Back to Cities
                </Link>
            </div>
        </div>
    );
};

export default CityDetails;






