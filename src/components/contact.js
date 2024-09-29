import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section className="container mx-auto py-5" id="contact">
            <div className="text-center mb-8">
                <span className="text-gray-600" data-aos="fade-up">contact</span>
                <h2 className="text-4xl font-bold mt-2" data-aos="fade-up" data-aos-delay="100">contact us for Any Questions</h2>
                <p className="text-lg text-gray-700 mx-auto max-w-xl" data-aos="fade-up" data-aos-delay="150">
                    As a matter of fact the unification of the coherent software provides a strict control over
                    The Accomplishment of Intended Estimation
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-semibold" data-aos="fade-right" data-aos-delay="200">contact info :</h2>
                    <div className="flex items-center my-4" data-aos="fade-right" data-aos-delay="250">
                        <FaEnvelope className="text-xl mx-4" />
                        <h5>example@example.com</h5>
                    </div>
                    <div className="flex items-center my-4" data-aos="fade-up" data-aos-delay="300">
                        <FaPhone className="text-xl mx-4" />
                        <h5>+123 456 6789</h5>
                    </div>
                    <div className="flex items-center my-4" data-aos="fade-up" data-aos-delay="350">
                        <FaMapMarkerAlt className="text-xl mx-4" />
                        <h5>A108 Adam Street, New York, NY 535022</h5>
                    </div>
                    <div className="flex items-center my-4" data-aos="fade-up" data-aos-delay="400">
                        <FaInstagram className="text-xl mx-4" />
                        <h5>techida-company</h5>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <form className="main-form" id="contact-us-form" action="contact.php" method="post">
                        <div className="grid grid-cols-1 gap-4 mb-4">
                            <div className="flex flex-col lg:flex-row gap-3">
                                <input placeholder="name" type="text" id="name" name="name" className="text-input w-full" />
                                <input placeholder="subject" type="text" id="subject" name="subject" className="text-input w-full" />
                            </div>
                            <input placeholder="email" type="email" id="email" name="email" className="text-input" />
                            <textarea placeholder="message" className="text-input" rows="7" id="message" name="message"></textarea>
                            <button type="submit" value="Submit" className="btn mt-4">send now</button>
                        </div>
                    </form>
                </div>
            </div>
            <iframe className="contact-map w-full h-64 mt-8" data-aos="fade-up" data-aos-delay="450"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207912896!2d-0.14675028449633118!3d51.514958479636384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford+St%2C+London%2C+UK!5e0!3m2!1sen!2sro!4v1485889312335"
                allowFullScreen="" loading="lazy"></iframe>
        </section>
    );
};

export default ContactSection;
