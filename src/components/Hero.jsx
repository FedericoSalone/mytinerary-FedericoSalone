// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft, FaTimes } from 'react-icons/fa';
import { BiSolidCity } from 'react-icons/bi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import carouselSlides from '../pages/Index/Carrousel';
import { Link } from 'react-router-dom';

const Hero = () => {
    const slidesPerGroup = 4;
    const totalGalleries = Math.ceil(carouselSlides.length / slidesPerGroup);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [modalImageUrl, setModalImageUrl] = useState('');

    const showNextSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === totalGalleries - 1 ? 0 : prevIndex + 1
        );
    };

    const showPreviousSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? totalGalleries - 1 : prevIndex - 1
        );
    };

    const renderSlideGroup = (startIndex) => {
        return (
            <div className="flex space-x-6">
                {carouselSlides
                    .slice(startIndex * slidesPerGroup, startIndex * slidesPerGroup + slidesPerGroup)
                    .map((slide, index) => (
                        <div
                            key={index}
                            className="relative flex-1 cursor-pointer transform hover:scale-110 transition-transform"
                            onClick={() => openModal(slide.imageUrl)}
                        >
                            <img
                                src={slide.imageUrl}
                                alt={`Carousel Slide ${startIndex * slidesPerGroup + index + 1}`}
                                className="w-full h-96 object-cover rounded-xl"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                <p className="text-xl font-bold">{slide.cityName}, {slide.countryName}</p>
                            </div>
                        </div>
                    ))}
            </div>
        );
    };

    const openModal = (imageUrl) => {
        setIsImageModalOpen(true);
        setModalImageUrl(imageUrl);
    };

    const closeModal = () => {
        setIsImageModalOpen(false);
    };

    useEffect(() => {
        const interval = setInterval(showNextSlide, 5000); // Cambiar cada 5 segundos

        return () => {
            clearInterval(interval);
        };
    }, []); 

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 py-10">
            <div className="max-w-3xl mx-14">
                <h1 className="text-4xl font-bold mb-6 text-center">
                    Find the perfect trip, designed by insiders who know and love their.
                </h1>
                <p className="text-lg mb-8 text-center">
                    Our app will help you find the perfect path for your next trip. With
                    an easy-to-use interface and a host of itinerary options, planning
                    your next trip has never been easier.
                </p>
                <div className="text-center">
                    <button className="px-10 py-6 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-400 focus:outline-none text-xl font-bold mx-auto flex items-center">
                        <MdOutlineTravelExplore className="text-white mr-2" />
                        View More
                    </button>
                </div>
            </div>
            <div className="relative w-full max-w-3xl mt-12 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Popular MyTineraries</h2>
                <div className="relative flex items-center">
                    <button
                        onClick={showPreviousSlide}
                        className="p-3 bg-gray-800 text-white rounded-full shadow-lg opacity-75 hover:opacity-100 focus:outline-none absolute left-0"
                    >
                        <FaArrowLeft size={24} />
                    </button>
                    <div className="mx-10 flex-1">
                        {renderSlideGroup(currentSlideIndex)}
                    </div>
                    <button
                        onClick={showNextSlide}
                        className="p-3 bg-gray-800 text-white rounded-full shadow-lg opacity-75 hover:opacity-100 focus:outline-none absolute right-0"
                    >
                        <FaArrowRight size={24} />
                    </button>
                </div>
                <div className="flex justify-center mt-8">
                    {Array.from({ length: totalGalleries }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlideIndex(index)}
                            className={`mx-1 w-6 h-6 rounded-full ${index === currentSlideIndex ? 'bg-black' : 'bg-gray-500'
                                }`}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <Link to="/cities">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-400 focus:outline-none text-xl font-bold md:w-auto flex items-center">
                            <BiSolidCity className="text-white mr-2" />
                            Explore more Cities
                        </button>
                    </Link>
                </div>

                {/* Modal para mostrar la imagen ampliada */}
                {isImageModalOpen && (
                    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl">
                            <img src={modalImageUrl} alt="Ampliada" className="w-full h-auto" />
                            <button
                                className="absolute top-2 right-2 p-2 bg-gray-800 text-white rounded-full shadow-lg opacity-75 hover:opacity-100 focus:outline-none"
                                onClick={closeModal}
                            >
                                <FaTimes size={24} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;
















