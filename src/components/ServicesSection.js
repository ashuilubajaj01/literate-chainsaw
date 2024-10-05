import React from 'react';
import { FaCode, FaBullhorn, FaSearch } from 'react-icons/fa';

const services = [
    {
        icon: <FaCode className="text-green-600 text-5xl mb-4" />,
        title: 'Web Development',
        description: 'Our team of skilled developers creates responsive and user-friendly websites that are tailored to meet your business needs, ensuring a seamless user experience across all devices.',
        link: 'Learn More →',
    },
    {
        icon: <FaBullhorn className="text-green-600 text-5xl mb-4" />,
        title: 'Digital Marketing',
        description: 'We offer comprehensive digital marketing services, including SEO, PPC, and social media marketing, to help you reach a wider audience and achieve your business goals.',
        link: 'Learn More →',
    },
    {
        icon: <FaSearch className="text-green-600 text-5xl mb-4" />,
        title: 'SEO Services',
        description: 'Our SEO experts implement proven strategies to enhance your website visibility on search engines, driving more organic traffic and improving your online presence.',
        link: 'Learn More →',
    },
];

const ServicesSection = () => {
    return (
        <section className="py-16 px-4 lg:px-40" id="services">
            <div className="text-left mb-12">
                <span className="text-green-600 font-bold uppercase tracking-wide">Our Services</span>
                <h2 className="text-4xl font-bold mt-2">What We're <span className='text-green-500'>Offering?</span></h2>
                <p className="text-lg text-gray-700 max-w-2xl mt-4">
                    As a matter of fact, the unification of the coherent software provides a strict control over the accomplishment of intended estimation.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg text-left transition-transform transform hover:scale-105 hover:shadow-lg">
                        {service.icon}
                        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-700 mb-4">{service.description}</p>
                        <a href="#" className="text-green-600 font-semibold hover:underline">
                            {service.link}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
