import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

import emailjs from 'emailjs-com';

const Contact = () => {
    return (
        <section className="container mt-10 mx-auto py-16 px-4 lg:px-52" id="Contact">
            <div className="text-left mb-12">
                <span className="text-green-600 uppercase tracking-wide text-sm font-bold">Contact</span>
                <h2 className="text-4xl font-bold mt-2">Contact Us For Any <span className="text-green-500">Questions</span></h2>
                <p className="text-lg text-gray-700 max-w-2xl mt-4">
                    As a matter of fact, the unification of the coherent software provides a strict control over the accomplishment of intended estimation.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 px-2">
                <div className="lg:w-1/2 flex flex-col text-left mb-20">
                    <h2 className="text-2xl font-semibold mb-4">Contact Info:</h2>
                    <div className="flex items-center my-4">
                        <FaEnvelope className="text-3xl text-green-600 mx-4" />
                        <h5 className="text-lg">@codovite@gmail.com</h5>
                    </div>
                    <div className="flex items-center my-4">
                        <FaPhone className="text-3xl text-green-600 mx-4" />
                        <h5 className="text-lg">+91 6205545358</h5>
                    </div>
                    <div className="flex items-center my-4">
                        <FaMapMarkerAlt className="text-3xl text-green-600 mx-4" />
                        <h5 className="text-lg">Senior Boys Hostel, BVB, Hubli</h5>
                    </div>
                    {/* <div className="flex items-center my-4">
                        <FaInstagram className="text-3xl text-green-600 mx-4" />
                        <h5 className="text-lg">CodoVite-company</h5>
                    </div> */}
                </div>
                <div className="lg:w-1/2">
                    <form className="main-form" id="contact-us-form" action="" method="post">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                            <input
                                placeholder="Name"
                                type="text"
                                id="name"
                                name="name"
                                className="bg-slate-100 text-input w-full p-3 border rounded-lg"
                            />
                            <input
                                placeholder="Subject"
                                type="text"
                                id="subject"
                                name="subject"
                                className="bg-slate-100 text-input w-full p-3 border rounded-lg"
                            />
                        </div>
                        <input
                            placeholder="Email"
                            type="email"
                            id="email"
                            name="email"
                            className="bg-slate-100 text-input w-full p-3 border rounded-lg mb-4"
                        />
                        <textarea
                            placeholder="Message"
                            className="bg-slate-100 text-input w-full p-3 border rounded-lg mb-4"
                            rows="7"
                            id="message"
                            name="message"
                        ></textarea>
                        <button type="submit" value="Submit" className="btn mt-4 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300">
                            Send Now
                        </button>
                    </form>
                </div>
            </div>
            <iframe
                className="contact-map w-full h-64 mt-8 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207912896!2d-0.14675028449633118!3d51.514958479636384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford+St%2C+London%2C+UK!5e0!3m2!1sen!2sro!4v1485889312335"
                title="Map of Oxford Street, London"
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </section>
    );
};

export default Contact;
