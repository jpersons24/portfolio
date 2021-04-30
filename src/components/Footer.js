import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';



{/* <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" /> */}

const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="d-flex">
                     <p>Stamford, CT / New York, NY</p>
                  </div>
                  <div className="d-flex">
                     <a href="tel:555-555-5555">518-275-6596</a>
                  </div>
                  <div className="d-flex">
                     <p>jakob.e.persons@gmail.com</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-2 col-sm-6">
                  <div className="row">
                     <div className="col">
                        <Link className="footer-nav" smooth={true} to="home" offset={-110}>Home</Link>
                        <br/>
                        <Link className="footer-nav" smooth={true} to="about" offset={-110}>About Me</Link>
                        <br/>
                        <Link className="footer-nav" smooth={true} to="services" offset={-110}>Services</Link>
                     </div>
                     <div className="col">
                        <Link className="footer-nav" smooth={true} to="experience" offset={-150}>Experience</Link>
                        <br/>
                        <Link className="footer-nav" smooth={true} to="portfolio" offset={-110}>Portfolio</Link>
                        <br/>
                        <Link className="footer-nav" smooth={true} to="contact" offset={-110}>Contacts</Link>
                     </div>
                  </div>
               </div>
               <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                  <div className="d-flex justify-content-center">
                     <a className="social-links" href="https://www.linkedin.com/in/jakobpersons/">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
                     </a>
                     <a className="social-links" href="https://twitter.com/jakob_persons">
                        <FontAwesomeIcon className="icon" icon={faTwitter} size="2x" />
                     </a>
                     <a className="social-links" href="https://jakobep24.medium.com/">
                        <FontAwesomeIcon className="icon" icon={faMedium} size="2x" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer;
