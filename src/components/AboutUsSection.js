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
                    <h2 className="text-4xl font-bold mt-2 sm:text-3xl">The Best IT Solution Since <span className="text-green-500">20XX</span></h2>
                    <p className="text-lg text-gray-700 mt-4 sm:text-base">
                        Although, final stages of the internal network give a complete experience of the parameter of speculative environment, Lorem Ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas quibusdam libero quos rem unde, sequi distinctio eum excepturi nobis facere expedita sint nulla aliquam, odio ea laboriosam hic? Consectetur ullam eveniet.
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
