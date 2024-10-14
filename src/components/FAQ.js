import React, { useState } from 'react';
import faqImage from '../images/faq.png'; 
import { FaPlus, FaMinus } from 'react-icons/fa'; 

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null); 

    const faqs = [
        {
            question: 'What is the purpose of your services?',
            answer: 'Our services aim to provide comprehensive IT solutions tailored to your needs.'
        },
        {
            question: 'How can I contact support?',
            answer: 'You can reach out to our support team via the contact form on our website or email us directly or you can whatsapp us on +916205545358.'
        },
        {
            question: 'What are your business hours?',
            answer: 'We operate 24/7 to assist you at any time.'
        },
        {
            question: 'Do you offer custom solutions?',
            answer: 'Yes, we can customize our services to fit your specific requirements.'
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index); 
    };

    return (
        <section className="container mx-auto py-16 px-4 lg:px-48" id="faq">
            <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
                <div className="lg:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="200">
                    <img src={faqImage} alt="FAQ" className="max-w-full h-80" />
                </div>
                <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
                    <span className="text-green-600 font-bold uppercase tracking-wide">FAQ</span>
                    <h2 className="text-4xl font-bold mt-2">Frequently Asked <span className="text-green-500">Questions</span></h2>
                    <div className="mt-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-300 rounded-xl px-4 py-4 mt-5">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold cursor-pointer" onClick={() => toggleFAQ(index)}>
                                        {faq.question}
                                    </h3>
                                    <button onClick={() => toggleFAQ(index)} className="focus:outline-none">
                                        {activeIndex === index ? <FaMinus className="text-green-600" /> : <FaPlus className="text-green-600" />}
                                    </button>
                                </div>
                                {activeIndex === index && (
                                    <div className="text-gray-700 mt-2">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
