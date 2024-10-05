import React from 'react';
import Slider from 'react-slick';
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
  {
    name: '-Priya Verma',
    text: 'Very professional team, loved the service!',
    image: testmonial2,
  },
];

const TestimonialPage = () => {
  // Slider settings for responsiveness
  const sliderSettings = {
    dots: true,
    infinite: testimonials.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Medium screens (Tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Small screens (Mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-lg mx-auto py-12 px-4 lg:px-0">
      <div className="mb-10">
        <h2 className="text-green-500 text-sm font-bold">OUR TESTIMONIAL</h2>
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-left">
          What Our Customers are Talking<span className="text-green-500"> About us</span>
        </h2>
      </div>

      <Slider {...sliderSettings} className="px-4 m-4">
        {testimonials.map((testimonial, index) => (
          <div
            className="flex flex-col  items-center bg-gray-50 border border-gray-300 rounded-lg m-10 transition-transform transform hover:scale-105 hover:shadow-lg"
            key={index}
          >
            <div className="bg-green-500 h-2 w-full rounded-t-lg mb-2"></div>
            <div className='p-4'>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full mb-4 mx-auto" 
              style={{ width: '100px', height: '100px' }}
            />
            <p className="text-center mb-4">{testimonial.text}</p>
            <h4 className="font-semibold text-center">{testimonial.name}</h4> 
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialPage;
