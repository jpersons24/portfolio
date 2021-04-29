import React from 'react';
// IMAGE IMPORTS
import netflix from '../images/netflix.png';
import cityGuide from '../images/city-guide-app.png';
import portfolio from '../images/portfolio.png';
import taskManager from '../images/task-manager.png';
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// REACT POP UP BOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';



const Portfolio = () => {


   const openNetflix = () => {
      const content = (
         <>
            <img className="portfolio-image-popupbox" src={netflix} alt="Netflix Clone..." />
            <p>Description of the project. Make sure to link the github repository below.</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jpersons24/discourse")}>https://github.com/jpersons24/discourse</a>
         </>
      )
      PopupboxManager.open({ content })
   }

   const popUpBoxConfigNetflix = {
      titleBar: {
         enable: true,
         text: "Netflix Clone Project",
      },
      fadeIn: true,
      fadeInSpeed: 500,
   }




   return (
      <div className="portfolio-wrapper">
         <div className="container">
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">
               <div className="portfolio-image-box" onClick={openNetflix}>
                  <img className="portfolio-image" src={netflix} alt="Netflix Clone..." />
                  <div className="overflow"></div>
                  <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
            {/*  -  */}
               <div className="portfolio-image-box">
                  <img className="portfolio-image" src={cityGuide} alt="City Guide project..." />
                  <div className="overflow"></div>
                  <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
            {/*  -  */}
               <div className="portfolio-image-box">
                  <img className="portfolio-image" src={portfolio} alt="Portfolio project..." />
                  <div className="overflow"></div>
                  <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
            {/*  -  */}
               <div className="portfolio-image-box">
                  <img className="portfolio-image" src={taskManager} alt="Task manager project..." />
                  <div className="overflow"></div>
                  <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
               </div>
            </div>
         </div>
         <PopupboxContainer {...popUpBoxConfigNetflix} />
      </div>
   )
}

export default Portfolio;
