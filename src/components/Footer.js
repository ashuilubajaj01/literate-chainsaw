import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1D1C] text-white py-8">
      <div className="container mx-auto px-4 lg:px-48">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <h2 className="text-green-500 text-3xl font-bold">Techida</h2>
            <p className="mt-4 text-sm">
              Lorem Ipsum Dolor Sit Amet Aspernatur Exercitationem Fugiat.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-green-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-green-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-green-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-green-500">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Site Map</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">X</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">SEO Services</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; 2024 Created By: <span className="text-green-500">Our Team</span>
          </p>
          <div className="flex justify-center space-x-8 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">Terms Of Use</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
