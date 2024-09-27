
// //SliderComponent.js

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import "./SliderComponent.css";

// // Import local images
// import image1 from '../images/image1.jpg'; 
// import image2 from '../images/image2.jpg';
// import image3 from '../images/image3.jpg';
// import image4 from '../images/image4.jpg';
// import image5 from '../images/image5.jpg';


// const SliderComponent = () => {
//     const images = [
//         { url: image1, text: "Skyscraper 1" },
//         { url: image2, text: "Skyscraper 2" },
//         { url: image3, text: "Skyscraper 3" },
//         { url: image4, text: "Skyscraper 4" },
//         { url: image5, text: "Skyscraper 5" },
//       ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <div className="container1">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="slider-container" style={{ backgroundImage: `url(${image.url})` }}>
//             <img src={image.url} alt={image.text} className="img-fluid slider-image" />
//             <div className="overlay-text">{image.text}</div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SliderComponent;

import React from "react";
import "./SliderComponent.css";

const SliderComponent = ()=>{
  return(
    <>
        <div className="background-slideshow">
          <div className="slide-image" style={{ backgroundImage: `url(${require('../images/image1.jpg')})` }}></div>
          <div className="slide-image" style={{ backgroundImage: `url(${require('../images/image2.jpg')})` }}></div>
          <div className="slide-image" style={{ backgroundImage: `url(${require('../images/image3.jpg')})` }}></div>
          <div className="slide-image" style={{ backgroundImage: `url(${require('../images/image4.jpg')})` }}></div>
          <div className="slide-image" style={{ backgroundImage: `url(${require('../images/image5.jpg')})` }}></div>
          <div className="slide-image" style={{ backgroundImage: `url(${require('../images/image1.jpg')})` }}></div>
        </div>
    </>
  )
}
export default SliderComponent;