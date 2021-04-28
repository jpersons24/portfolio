import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Picture from '../portfolio-photo.jpeg';

const About = () => {
   return (
      <div>
         <div className="container py-5">
            <div className="row">
               <div className="col-lg-6 col-xm-12">
                  <div className="photo-wrap mb-5">
                     <img className="profile-img" src={Picture} alt="author..."/>
                  </div>
               </div>
               <div className="col-lg-6 col-xm-12">
                  <h1 className="about-heading">about me</h1>
                  <p>
                     Full stack web developer, with experience in Ruby on Rails and JavaScript based programming. Through a background in exercise science and sales, I possess strong skills in target achievement and natural leadership at both small and large companies. Driven by a desire for consistent improvement, I’m confident in my ability to positively impact results, increase workflow efficiency and contribute to a productive culture. This drive is shown in my blog post on ‘styled-components’ in React, which was hand chosen by an editor of NoteWorthy to be previewed on their exclusive publication.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About;
