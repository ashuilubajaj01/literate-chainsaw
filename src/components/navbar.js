import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-green-600 text-3xl font-bold">
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
        <div>
          <a href="#" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
