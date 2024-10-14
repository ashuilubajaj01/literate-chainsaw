import React, { useState } from 'react';
import JoinNow from './JoinNow';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="cursor-pointer text-green-600 text-3xl font-bold" onClick={() => window.location.reload()}>
        Codovite
        </div>

        <div className="flex items-center lg:hidden">
          
          <div className="mr-10">
            <JoinNow text="Join Now" />
          </div>
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        
        <ul className={`hidden lg:flex space-x-6 text-gray-600 font-medium`}>
          <li><a href="/" className="hover:text-green-600">Home</a></li>
          <li><a href="/about-us" className="hover:text-green-600">About</a></li>
          <li><a href="/services" className="hover:text-green-600">Services</a></li>
          <li><a href="/FAQ" className="hover:text-green-600">FAQ</a></li>
          {/* <li><a href="#" className="hover:text-green-600">Pages</a></li> */}
          {/* <li><a href="#" className="hover:text-green-600">Portfolio</a></li> */}
          {/* <li><a href="#" className="hover:text-green-600">Blog</a></li> */}
          <li><a href="/contact" className="hover:text-green-600">Contact Us</a></li>
        </ul>

        
        <div className="hidden lg:block">
          <JoinNow text="Join Now" />
        </div>
      </div>

      
      {isOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col space-y-4 mt-4 text-gray-600 font-medium bg-gray-50 bg-opacity-90 backdrop-filter backdrop-blur-md px-6 py-4 shadow-md">
            <li><a href="/" className="hover:text-green-600">Home</a></li>
            <li><a href="/about-us" className="hover:text-green-600">About</a></li>
            <li><a href="/services" className="hover:text-green-600">Services</a></li>
            {/* <li><a href="#" className="hover:text-green-600">Pages</a></li> */}
            {/* <li><a href="#" className="hover:text-green-600">Portfolio</a></li> */}
            {/* <li><a href="#" className="hover:text-green-600">Blog</a></li> */}
            <li><a href="/contact" className="hover:text-green-600">Contact Us</a></li>
          </ul>
        </div>
      )}
    </nav>




  );
};

export default Navbar;















