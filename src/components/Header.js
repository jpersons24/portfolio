import React from 'react'
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Header = () => {
   return (
      <div id="home" className="header-wrapper">
         <div className="main-info">
            <h1>Software Engineer</h1>
            <h1>Full Stack Web Developer</h1>
            <Typed
               className="typed-text"
               strings={[
                  "JavaScript",
                  "React",
                  "Ruby on Rails",
                  "Git",
                  "PostgreSQL",
                  "HTML",
                  "CSS",
                  "Python",
                  "BootStrap"
               ]} 
               typeSpeed={40}
               backSpeed={60}
               loop
            />
            <Link smooth={true} to="contact" offset={-110} className="btn-main-offer">Contact</Link>
            
         </div>
      </div>
   )
}

export default Header;
