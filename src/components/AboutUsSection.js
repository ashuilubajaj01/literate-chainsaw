import React from 'react';
import aboutUsImage from '../images/aboutus.png'; 
import Deal from './Deals';

const AboutUsSection = () => {
    return (
        <>
        <section className="container mt-10 py-10 px-4 lg:px-40" id="about-us">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
                    <span className="text-green-500 text-sm font-bold">ABOUT US</span>
                    <h2 className="text-4xl font-bold mt-2 sm:text-3xl">The Most Affordable IT Solution Since <span className="text-green-500">2024</span></h2>
                    <p className="text-lg text-gray-700 mt-4 sm:text-base">
                    We offer top-notch and affordable IT solutions tailored to your needs. Since 2024, our expert team, comprising the best developers from top MNCs, has been dedicated to empowering businesses in the digital landscape. From managed IT services to software development and cybersecurity, we provide the expertise and support you need to succeed. Choose us as your trusted partner in technology.
                    </p>
                    <div className="mt-6">
                        <a href="#" className="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300 hover:text-green-500 sm:py-2 sm:px-4">
                            Join Now
                        </a>
                    </div>
                </div>
                
                <div className="lg:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="200">
                    <img src={aboutUsImage} alt="About Us" className="w-full max-w-sm h-auto rounded-md sm:max-w-full sm:h-60 md:h-80 lg:h-auto" />
                </div>
            </div>
        </section>
        <Deal />
        </>
    );
};

export default AboutUsSection;
