import React from 'react'
import my_logo from '../my_logo.png';
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';


const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
         <div className="container">
            
            <a className="navbar-brand logo" href="#"><img src={my_logo} alt="my logo..." /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <FontAwesomeIcon icon={faBars} style={{ color: "white" }}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                     <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Home<span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item active">
                     <Link smooth={true} to="about" offset={-110} className="nav-link">About Me</Link>
                  </li>
                  <li className="nav-item active">
                     <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">Services</Link>
                  </li>
                  <li className="nav-item active">
                     <Link smooth={true} to="experience" offset={-150} className="nav-link" href="#">Experience</Link>
                  </li>
                  <li className="nav-item active">
                     <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
                  </li>
                  <li className="nav-item active">
                     <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">Contact</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>   
   )
}

export default Navbar;
