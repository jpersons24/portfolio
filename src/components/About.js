// import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Picture from '../profile_photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';

const About = () => {
   return (
      <div className="about">
         <div id="about" className="container py-5">
            <div className="row">
               <div className="col-lg-6 col-xm-12">
                  <div className="photo-wrap mb-5">
                     <img className="profile-img" src={Picture} alt="author..."/>
                  </div>
               </div>
               <div className="col-lg-6 col-xm-12">
                  <h1 className="about-heading">about me</h1>
                  <p>
                     Hi, thanks for visting my page! My name is Jakob Persons. I am a full stack software developer, proficient with Ruby on Rails, JavaScript(ES6), HTML, CSS, React and more.
                  </p> 
                  <p>
                     My experiences in exercise science and sales have developed strong communication, leadership and target acheivement skills. Ranging from small private environments to large public corporations my desire for consistent improvement makes me confident in my ability to positively impacts results, increase workflow efficieny and contribute to a winning culture.
                  </p>
                  <div className="d-flex justify-content-center">
                     <a className="social-links" id="linkedin" href="https://www.linkedin.com/in/jakobpersons/">
                        <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
                     </a>
                     <a className="social-links" id="twitter" href="https://twitter.com/jakob_persons">
                        <FontAwesomeIcon className="icon" icon={faTwitter} size="2x" />
                     </a>
                     <a className="social-links" id="medium" href="https://jakobep24.medium.com/">
                        <FontAwesomeIcon className="icon" icon={faMedium} size="2x" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About;
