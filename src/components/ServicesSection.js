import React from 'react';
import { FaCode, FaBullhorn, FaSearch } from 'react-icons/fa';

const services = [
    {
        icon: <FaCode className="text-green-600 text-5xl mb-4" />,
        title: 'Web Development',
        description: 'Our expert developers build responsive and intuitive websites designed to fit your business requirements, providing a smooth user experience on all devices.',
        link: 'Learn More →',
    },
    {
        icon: <FaBullhorn className="text-green-600 text-5xl mb-4" />,
        title: 'Digital Marketing',
        description: 'We provide a full range of digital marketing solutions, such as PPC, content marketing, and social media marketing, designed to expand your audience and help you achieve your business objectives.',
        link: 'Learn More →',
    },
    {
        icon: <FaSearch className="text-green-600 text-5xl mb-4" />,
        title: 'SEO Services',
        description: 'Our digital marketing specialists employ effective strategies to boost your website\'s visibility on search engines, increasing organic traffic and enhancing your online presence.',
        link: 'Learn More →',
    },
];

const ServicesSection = () => {
    return (
        <section className="py-16 px-4 mt-10 lg:px-40" id="services">
            <div className="text-left mb-12">
                <span className="text-green-600 font-bold uppercase tracking-wide">Our Services</span>
                <h2 className="text-4xl font-bold mt-2">What We're <span className='text-green-500'>Offering?</span></h2>
                <p className="text-lg text-gray-700 max-w-2xl mt-4">
                The integration of cohesive software ensures effective control over achieving the desired outcomes.
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
