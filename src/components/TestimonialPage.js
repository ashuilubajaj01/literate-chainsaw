import React from 'react';

import testmonial1 from '../images/testmonial1.png';
import testmonial2 from '../images/testmonial2.png';
import testmonial3 from '../images/testmonial3.png';

const testimonials = [
  {
    name: '-Rohan Bajpa',
    text: 'This service is fantastic! Highly recommend to everyone.',
    image: testmonial1,
  },
  {
    name: '-Jaya Sharma',
    text: 'Amazing experience, very satisfied with the results.',
    image: testmonial2,
  },
  {
    name: '-Nikhal Raj',
    text: 'Exceeded my expectations in every way.',
    image: testmonial3,
  },
];

const TestimonialPage = () => {
  return (
    <div className="flex flex-col items-center mt-5">
      <h1 className="text-gray-500 text-sm font-bold">OUR TESTIMONIAL</h1>
      <h2 className="text-5xl font-bold text-gray-900 mb-10 text-center">
        What Our Customers are Talking<br /> About us.
      </h2>
      <div className="flex flex-wrap justify-between p-4">
        {testimonials.map((testimonial, index) => (
          <div
            className="flex flex-1 0 30% flex-col items-center bg-white border border-gray-300 rounded-lg  m-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            key={index}
          >
            <div className="bg-gray-800 h-2 w-full rounded-t-lg mb-4"></div>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full mb-4"
              style={{ width: '100px', height: '100px' }}
            />
            <p className="text-center mb-4">{testimonial.text}</p>
            <h4 className="font-semibold">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
