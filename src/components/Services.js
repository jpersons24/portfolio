import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSketch } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faCogs } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
   return (
      <div className="services">
         <h1 className="py-5">My Services</h1>
         <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
               <div className="box">
                  <div className="circle">
                     <FontAwesomeIcon className="icon" icon={faCogs} size="2x" />
                  </div>
                  <h3>Software Engineering</h3>
                  <p>Comfortable working in group environment. Experienced in git collaboration and Agile methods</p>
               </div>
            </div>
            {/*  - */}
            <div className="col-lg-3 col-md-6 col-sm-6">
               <div className="box">
                  <div className="circle">
                     <FontAwesomeIcon className="icon" icon={faReact} size="2x" />
                  </div>
                  <h3>Front End Development</h3>
                  <p>Proficient with React with Hooks, Redux for state management and Node.js</p>
               </div>
            </div>
            {/*  - */}
            <div className="col-lg-3 col-md-6 col-sm-6">
               <div className="box">
                  <div className="circle">
                     <FontAwesomeIcon className="icon" icon={faSketch} size="2x" />
                  </div>
                  <h3>Back End Development</h3>
                  <p>Experienced in Ruby on Rails API builds, SQL and PostgreSQL database systems</p>
               </div>
            </div>
            {/*  -  */}
            <div className="col-lg-3 col-md-6 col-sm-6">
               <div className="box">
                  <div className="circle">
                     <FontAwesomeIcon className="icon" icon={faBriefcase} size="2x" />
                  </div>
                  <h3>Freelancing</h3>
                  <p>Any challenge is welcome! Please email via contact form for inquiries</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Services;
