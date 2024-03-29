import React from 'react'

const Experience = () => {
   return (
      <div id="experience" className="experience">
         <div className="d-flex justify-content-center my-5">
            <h1>Experience</h1>
         </div>
         <div className="container experience-wrapper">
            <div className="timeline-block timeline-block-right">
               <div className="marker"></div>
               <div className="timeline-content">
                  <h3>July 2021-October 2022</h3>
                  <h5>Spruce - Associate Software Engineer</h5>
                  <p>
                    Spruce is a proptech company that deals with title insurance in commercial, iBuyer and single family residences. Working in an Agile environment and working cross funcitonally with business stakeholders I was responsible for building user interfaces for both internal and external users.
                  </p>
               </div>
            </div>
            {/*  -  */}
            <div className="timeline-block timeline-block-left">
               <div className="marker"></div>
               <div className="timeline-content">
                  <h3>2020-2021</h3>
                  <h5>Flatiron School</h5>
                  <p>
                     15 week immersive software engineering bootcamp. Learned Object Oriented Programming with Ruby on Rails, Javascript and React. The cirriculum includes pair programming, technical assesments and blogs, and four full stack web applications
                  </p>
               </div>
            </div>
            {/*  -  */}
            <div className="timeline-block timeline-block-right">
               <div className="marker"></div>
               <div className="timeline-content">
                  <h3>2019-2020</h3>
                  <h5>Yelp - Account Executive</h5>
                  <p>
                     Executed cold outreach over the phone and email to sell Yelp advertising to small business owners around the country. Acheiving 116% of quota and over 30% closing ratio using a consultative strategy to uncover  issues and offer solutions specific to client's needs
                  </p>
               </div>
            </div>
            {/*  -  */}
            <div className="timeline-block timeline-block-left">
               <div className="marker"></div>
               <div className="timeline-content">
                  <h3>2015-2019</h3>
                  <h5>Push Fitness - Certified Personal Trainer</h5>
                  <p>
                     Consulted with clients to implement personalized program and accountability processes for maximum results. Designed and lead group class program which resulted in monthly increase in members registered each month
                  </p>
               </div>
            </div>
            {/*  -  */}
            <div className="timeline-block timeline-block-right">
               <div className="marker"></div>
               <div className="timeline-content">
                  <h3>2010-2015</h3>
                  <h5>SUNY Fredonia</h5>
                  <p>
                     B.S. in Exercise Science (Minor in Coaching). Played four years with the Men's soccer team and one season as intern/assistant coach.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Experience;
