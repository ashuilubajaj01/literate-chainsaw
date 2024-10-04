import React from 'react';

const JoinNow = ({text}) => {
  return (

<div>
          <a href="#" 
          className="bg-green-600 text-white px-6 py-2 rounded-full transition"
          style={{ transition: 'background-color 0.3s, color 0.3s' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#EFF0EF';
            e.currentTarget.style.color = '#000'; // Change text color to black
          }}
          onMouseLeave={(e) => {
           e.currentTarget.style.backgroundColor = '#16A34A'; // Original green color
            e.currentTarget.style.color = '#fff'; // Change text color back to white
          }}
          >
            {text}
          </a>
        </div>

);
};

export default JoinNow;