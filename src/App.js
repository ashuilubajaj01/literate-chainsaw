

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// // import { faLink } from '@fortawesome/free-solid-svg-icons';

// import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';

// function App() {
//   return (
//     <>
//      {/* <div className="min-h-screen flex flex-col bg-gray-900 text-white"> */}
//       {/* Header containing Navigation Bars */}
//       <header className="flex flex-col text-white font-bold">
//         {/* Top Navigation Bar */}
//         <nav className="bg-blue-600 text-white flex justify-between items-center px-4 py-2 h-12">
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />
//               <span className="text-sm">Email</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-lg" />
//               <span className="text-sm">Address</span>
//             </div>
//           </div>
//           <ul className="flex items-center space-x-6">
//             <li>
//               <a href="#contact" className="hover:bg-blue-700 px-3 py-2 rounded text-sm">Contact</a>
//             </li>
//             <li>
//               <a href="https://wa.me/916205545358" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faWhatsapp} className="text-white text-xl hover:text-green-400" />
//               </a>
//             </li>
//             <li>
//               <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl hover:text-blue-400" />
//               </a>
//             </li>
//           </ul>
//         </nav>

//         {/* Secondary Navigation Bar */}
//         <nav className="bg-gray-800 p-6 flex justify-between items-center h-20 text-white font-bold">
//           <div className="flex items-center space-x-8">
//             {/* Company Logo */}
//             <div className="text-white text-3xl font-bold">Logo</div>
//           </div>
//           <ul className="flex items-center space-x-12">
//             <li>
//               <a href="#home" className="text-xl hover:underline">Home</a>
//             </li>
//             <li>
//               <a href="#about" className="text-xl hover:underline">About</a>
//             </li>
//             <li>
//               <a href="#services" className="text-xl hover:underline">Services</a>
//             </li>
//             <li>
//               <a href="#contact" className="text-xl hover:underline">Contact</a>
//             </li>
//           </ul>
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <FontAwesomeIcon icon={faPhone} className="text-white text-2xl" />
//               <span className="text-lg">+916205545358</span>
//             </div>
//             <FontAwesomeIcon icon={faSearch} className="text-white text-2xl cursor-pointer hover:text-gray-400" />
//           </div>
//         </nav>
//       </header>
//     </>
//     //   {/* <main className="flex-grow p-4">
//     //     <h1 className="text-2xl font-bold mb-4">Welcome to the App</h1>
//     //     <p>This is a simple app with a two-layer navigation bar.</p>
//     //   </main>
//     // </div> */}
//   );
// }

// export default App;


import React from 'react';
import Navbar from './components/navbar';
import Page1 from './components/Page1';

function App() {

  return(
    <>
      <Navbar />
      <Page1 />
    </>
  )
}
export default App;