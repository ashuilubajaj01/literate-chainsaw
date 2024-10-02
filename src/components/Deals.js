import React from 'react';
import dealImage from '../images/aboutus2.png'; 

const Deal = () => {
    return (
        <section className="container py-10 px-4" id="about-us">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 px-2 lg:px-40 mr-20">
                <div className="lg:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="200">
                    <img src={dealImage} alt="Deal" className="max-w-full h-80" />
                </div>
                <div className="mr-20 lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
                    <h2 className="text-4xl font-bold mt-2">
                        We Deal With The Aspects Of Professional <span className="text-green-500">IT Services</span>
                    </h2>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button className="bg-gray-200 rounded-md p-4 flex items-center justify-center text-center shadow-md hover:bg-gray-300 transition duration-300">
                            <i className="fas fa-globe mr-3 text-green-500"></i> Worldwide Services
                        </button>
                        <button className="bg-gray-200 rounded-md p-4 flex items-center justify-center text-center shadow-md hover:bg-gray-300 transition duration-300">
                            <i className="fas fa-clock mr-3 text-green-500"></i> Support 24h/24
                        </button>
                        <button className="bg-gray-200 rounded-md p-4 flex items-center justify-center text-center shadow-md hover:bg-gray-300 transition duration-300">
                            <i className="fas fa-phone mr-3 text-green-500"></i> Easy To Reach
                        </button>
                        <button className="bg-gray-200 rounded-md p-4 flex items-center justify-center text-center shadow-md hover:bg-gray-300 transition duration-300">
                            <i className="fas fa-medal mr-3 text-green-500"></i> First On Field
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Deal;
