import React from 'react';
import dealImage from '../images/aboutus2.png'; 

const Deal = () => {
    return (
        <section className="py-16 px-4 lg:px-52" id="about-us">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Image section */}
                <div className="lg:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="200">
                    <img src={dealImage} alt="Deal" className="max-w-full h-80 object-cover" />
                </div>

                {/* Text and buttons section */}
                <div className="lg:w-5/2" data-aos="fade-right" data-aos-delay="100">
                    <h2 className="text-4xl font-bold mt-2">
                        We Deal With The Aspects Of Professional <span className="text-green-500">IT Services</span>
                    </h2>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button className="bg-gray-200 rounded-md p-4 flex items-center justify-center shadow-md hover:bg-gray-300 transition duration-300">
                            <i className="fas fa-globe mr-3 text-green-500"></i> Worldwide Services
                        </button>
                        <button className="bg-gray-200 rounded-md p-4 flex items-center justify-center shadow-md hover:bg-gray-300 transition duration-300">
                            <i className="fas fa-clock mr-3 text-green-500"></i> Support 24h/24
                        </button>
                        <button className="bg-gray-200 rounded-md p-4 flex items-center justify-center shadow-md hover:bg-gray-300 transition duration-300">
                            <i className="fas fa-phone mr-3 text-green-500"></i> Easy To Reach
                        </button>
                        <button className="bg-gray-200 rounded-md p-4 flex items-center justify-center shadow-md hover:bg-gray-300 transition duration-300">
                            <i className="fas fa-medal mr-3 text-green-500"></i> First On Field
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Deal;
