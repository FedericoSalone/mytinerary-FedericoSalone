// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaEnvelope, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleSubscribe = () => {
        
        console.log('Usuario suscrito');
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-800 py-6 text-white">
            <div className="container mx-auto grid md:grid-cols-3 gap-4 md:gap-8 px-4">
                {/* Columna de Información de Contacto */}
                <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3">
                        <FaMapMarkerAlt size={24} />
                        <p>Av. Corrientes, 1234, Buenos Aires</p>
                    </div>
                    <div className="flex items-center space-x-3 p-3">
                        <FaPhone size={24} />
                        <p>Phone: +1 234-5678</p>
                    </div>
                    <div className="flex items-center space-x-3 p-3">
                        <FaEnvelope size={24} />
                        <p>contact@tuempresa.com</p>
                    </div>
                </div>

                {/* Columna de Redes Sociales */}
                <div className="space-y-4  md:flex md:flex-col md:items-center md:space-x-4 md:space-y-4">
                    <div className="flex items-center space-x-4 p-3">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={32} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={32} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={32} />
                        </a>
                    </div>
                    <div className="flex items-center space-x-4 p-3">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={32} />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={32} />
                        </a>
                        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                            <FaPinterest size={32} />
                        </a>
                    </div>
                </div>

                {/* Columna de Enlaces */}
                <div className="flex flex-col space-y-4">
                    <Link to="/" className="hover:underline">Home</Link>
                    <a href="/contacto" className="hover:underline">Contact</a>
                    <a href="/terminos" className="hover:underline">Terms and Conditions</a>
                    <a href="/privacidad" className="hover:underline">Privacy Policy</a>
                    <a href="/ayuda" className="hover:underline">Help</a>
                </div>
            </div>
            {/* Suscripción al boletín */}
            <div className="flex items-center justify-center px-4 mt-8">
                <input
                    type="email"
                    placeholder="Ingresa tu correo"
                    className="px-3 py-2 rounded-l-lg outline-none"
                />
                <button
                    onClick={handleSubscribe}
                    className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-400 focus:outline-none"
                >
                    Subscribe
                </button>
            </div>
            {/* Botones de Soporte y Regresar arriba */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={handleScrollToTop}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-400 focus:outline-none"
                >
                    <FaQuestionCircle size={24} />
                    <span className="text-sm">Technical Support</span>
                </button>
                <button
                    onClick={handleScrollToTop}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 ml-4 hover:bg-blue-400 focus:outline-none"
                >
                    <FaChevronUp size={24} />
                    <span className="text-sm">Back to Top</span>
                </button>
            </div>
        </footer>
    );
};

export default Footer;








