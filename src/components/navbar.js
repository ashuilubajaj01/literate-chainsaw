import React from 'react';
import JoinNow from './JoinNow';
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="cursor-pointer text-green-600 text-3xl font-bold">
          Techida
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li><a href="#" className="hover:text-green-600">Home</a></li>
          <li><a href="#" className="hover:text-green-600">About</a></li>
          <li><a href="#" className="hover:text-green-600">Services</a></li>
          <li><a href="#" className="hover:text-green-600">Pages</a></li>
          <li><a href="#" className="hover:text-green-600">Portfolio</a></li>
          <li><a href="#" className="hover:text-green-600">Blog</a></li>
          <li><a href="#" className="hover:text-green-600">Contact Us</a></li>
        </ul>

        {/* Join Now Button */}
        < JoinNow text="Join Now" />
      </div>
    </nav>
  );
};

export default Navbar;
