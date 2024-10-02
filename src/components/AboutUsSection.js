import React from 'react';
import aboutUsImage from '../images/aboutus.png'; 

const AboutUsSection = () => {
    return (
        <section className="container  py-10 px-4" id="about-us">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 px-2 lg:px-40">
                <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
                    <span className="text-green-500 text-sm font-bold">ABOUT US</span>
                    <h2 className="text-4xl font-bold mt-2">The Best IT Solution Since <span className="text-green-500">20XX</span></h2>
                    <p className="text-lg text-gray-700 mt-4">
                        Although, final stages of the internal network give a complete experience of the parameter of speculative environment, Lorem Ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas quibusdam libero quos rem unde, sequi distinctio eum excepturi nobis facere expedita sint nulla aliquam, odio ea laboriosam hic? Consectetur ullam eveniet.
                    </p>
                    <div className="mt-6">
                        <a href="#" className="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300 hover:text-green-500">Join Now</a>
                    </div>
                </div>
                <div className=" selection:lg:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="200">
                    <img src={aboutUsImage} alt="About Us" className=" max-w-full h-80" />
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
