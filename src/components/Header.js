import React from 'react'
import Typed from 'react-typed';

const Header = () => {
   return (
      <div className="header-wrapper">
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
            <a href="#" className="btn-main-offer">Contact</a>
         </div>
      </div>
   )
}

export default Header;
