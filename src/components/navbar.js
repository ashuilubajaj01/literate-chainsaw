import react from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp,faLinkedin } from "@fortawesome/free-brands-svg-icons";
function navbar() {
    return (
        <navbar className="min-h-screen flex flex-col"> 
            
      <header id="header-top" className="p-4 bg-slate-600  flex justify-between text-white">
        <div className = "flex items-center space-x-6"> 
        <div className="flex item-center space-x-2">
            <FontAwesomeIcon icon ={faEnvelope} className="text-white"/>
            <span>Email</span>
        </div>
        <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
<span>Address</span>
        </div>
        </div>
        
            <ul className="flex items-center space-x-6">
                <li>
                    <a href = "navbar.js" className="hower: bg-slate-400 px-3 py-2 rounded">Contact</a>
                </li>
                <li>
                    <a href="https://wa.me/916205545358" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-white text-xl hover=text-green-400"/>
                    </a>


                </li>
                <li>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl hover:text-blue-400" />
              </a>

                </li>
            </ul>
        
        

      </header>
      <header id="header-lower">
        <div className="main-box ">
        <div className="logo"><a href="navbar.js">
            
            <img
									src="" alt title="Tronis"></img></a></div>

        </div>

        <div className="nav-outer">
						<nav>
							<ul>
								<li><a href="index.js">Home</a></li>
								<li><a href="index.js">About</a></li>
								<li><a href="index.js">Services</a></li>
								<li><a href="index.js">Testimonial</a></li>
								
								<li><a href="index.js">Contact</a></li>
							</ul>
						</nav>

					</div>
                    <div className="outer-box">
                    <a href="tel:+91 9406806727">
							<i></i>
							+91 6205545358
						</a>

						<button >
							<span className="lnr-icon-search"></span>
						</button>
						<a href="index.js"><span>Get a quote</span></a>

						<div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
                    </div>
      </header>
      </navbar>
    );
  }
  
  export default navbar;