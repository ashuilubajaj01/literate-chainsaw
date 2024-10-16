import React from 'react';
import page1 from '../images/page1.png';
import JoinNow from './JoinNow';

const Page1 = () => {
  return (
    <div className="bg-[#53989d] py-32 mt-8">
      <div className="container mx-auto max-w-screen-lg px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-[46px] font-bold text-[#F7F2F2] mb-4">
            Excellent IT <span className="text-green-600">Solutions</span> for Your Business.
          </h1>
          <p className="text-[#F7F2F2] mb-8">
          At Codovite, we offer tailored IT solutions to optimize your operations and drive success.
          </p>
          
          <div className="flex space-x-4 mb-8">
            <a href="#" className="bg-gray-200 text-green-600 p-3 rounded-full hover:bg-green-600 hover:text-white transition duration-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="bg-gray-200 text-green-600 p-3 rounded-full hover:bg-green-600 hover:text-white transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="bg-gray-200 text-green-600 p-3 rounded-full hover:bg-green-600 hover:text-white transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="bg-gray-200 text-green-600 p-3 rounded-full hover:bg-green-600 hover:text-white transition duration-300">
              <i className="fab fa-youtube"></i>
            </a>
          </div>

          <JoinNow text="Join Now" />
        </div>

        
        <div className="flex justify-center">
          <img
            src={page1}
            alt="IT Solutions"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
