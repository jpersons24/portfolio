import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSketch } from '@fortawesome/free-brands-svg-icons';
import { faCode, faBriefcase } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
   return (
      <div className="services">
         <div className="py-5">
            <div className="row">
               <div className="col-md-3 col-sm-6">
                  <div className="box">
                     <div className="circle">
                        <FontAwesomeIcon icon={faCode} size="2x" />
                     </div>
                     <h3>Software Engineering</h3>
                     <p>Individual and collaborative software engineering from start to finish. Projects mainly managed using Agile tactics and git workflow</p>
                  </div>
               </div>
               {/*  - */}
               <div className="col-md-3 col-sm-6">
                  <div className="box">
                     <div className="circle">
                        <FontAwesomeIcon icon={faReact} size="2x" />
                     </div>
                     <h3>Front End Development</h3>
                     <p>Proficient with React with Hooks, Redux for state management and Node.js</p>
                  </div>
               </div>
               {/*  - */}
               <div className="col-md-3 col-sm-6">
                  <div className="box">
                     <div className="circle">
                        <FontAwesomeIcon icon={faSketch} size="2x" />
                     </div>
                     <h3>Back End Development</h3>
                     <p>Experienced in Ruby on Rails API builds, SQL and PostgreSQL database systems</p>
                  </div>
               </div>
               {/*  -  */}
               <div className="col-md-3 col-sm-6">
                  <div className="box">
                     <div className="circle">
                        <FontAwesomeIcon icon={faBriefcase} size="2x" />
                     </div>
                     <h3>Freelancing</h3>
                     <p>Any challenge is welcome! Please email via contact form for inquiries</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Services;
