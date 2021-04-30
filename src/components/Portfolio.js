import React from 'react';
// IMAGE IMPORTS
import discourse from '../discourse_img.png';
import overlay from '../overlay_img.png';
import gamebuster from '../gamebuster_img.png';
import hustler from '../hustler_img.png';
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// REACT POP UP BOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';



const Portfolio = () => {

   // NETFLIX CLONE
   const openDiscourse = () => {
      const content = (
         <>
            <img className="portfolio-image-popupbox" src={discourse} alt="Discourse social chatting app..." />
            <p>Chat app build with React front end and Ruby on Rails back end. GetStream API and actioncable used for chatting feature.</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jpersons24/discourse")}>https://github.com/jpersons24/discourse</a>
         </>
      )
      PopupboxManager.open({ content })
   }

   const popUpBoxConfigDiscourse = {
      titleBar: {
         enable: true,
         text: "More deployed projects coming soon...",
      },
      fadeIn: true,
      fadeInSpeed: 500,
   }

   // Overlay
   const openOverlay = () => {
      const content = (
         <>
            <img className="portfolio-image-popupbox" src={overlay} alt="React online gambling app" />
            <p>Online sports gambling app with social aspect!</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jpersons24/overlay")}>https://github.com/jpersons24/overlay</a>
         </>
      )
      PopupboxManager.open({ content })
   }

   const popUpBoxConfigOverlay = {
      titleBar: {
         enable: true,
         text: "More deployed projects coming soon...",
      },
      fadeIn: true,
      fadeInSpeed: 500,
   }

   // PORTFOLIO PROJECT
   const openGamebuster = () => {
      const content = (
         <>
            <img className="portfolio-image-popupbox" src={gamebuster} alt="False e-commerce app" />
            <p>False e-commerce website for renting video games.</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jpersons24/gamebuster")}>https://github.com/jpersons24/gamebuster</a>
         </>
      )
      PopupboxManager.open({ content })
   }

   const popUpBoxConfigGamebuster = {
      titleBar: {
         enable: true,
         text: "More deployed projects coming soon...",
      },
      fadeIn: true,
      fadeInSpeed: 500,
   }

   // TASK MANAGER
   const openHustler = () => {
      const content = (
         <>
            <img className="portfolio-image-popupbox" src={hustler} alt="E-commerce app" />
            <p>Fiverr clone application. Build with Ruby on Rails.</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jpersons24/hustler")}>https://github.com/jpersons24/hustler</a>
         </>
      )
      PopupboxManager.open({ content })
   }

   const popUpBoxConfigHustler = {
      titleBar: {
         enable: true,
         text: "More deployed projects coming soon...",
      },
      fadeIn: true,
      fadeInSpeed: 500,
   }


   return (
      <div id="portfolio" className="portfolio-wrapper">
         <div className="container">
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">
               <div className="portfolio-image-box" onClick={openDiscourse}>
                  <img className="portfolio-image" src={discourse} alt="Discourse social chatting app..." />
                  <div className="overflow"></div>
                  <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
            {/*  -  */}
               <div className="portfolio-image-box" onClick={openOverlay}>
                  <img className="portfolio-image" src={overlay} alt="React online gambling" />
                  <div className="overflow"></div>
                  <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
            {/*  -  */}
               <div className="portfolio-image-box" onClick={openGamebuster}>
                  <img className="portfolio-image" src={gamebuster} alt="E-commerce app" />
                  <div className="overflow"></div>
                  <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
            {/*  -  */}
               <div className="portfolio-image-box" onClick={openHustler}>
                  <img className="portfolio-image" src={hustler} alt="Fiverr clone built with Ruby on Rails" />
                  <div className="overflow"></div>
                  <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
            </div>
         </div>
         <PopupboxContainer {...popUpBoxConfigDiscourse} />
         <PopupboxContainer {...popUpBoxConfigOverlay} />
         <PopupboxContainer {...popUpBoxConfigGamebuster} />
         <PopupboxContainer {...popUpBoxConfigHustler} />
      </div>
   )
}

export default Portfolio;
