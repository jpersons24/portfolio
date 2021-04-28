import React from 'react';
import netflix from '../images/netflix.png';
import cityGuide from '../images/city-guide-app.png';
import portfolio from '../images/portfolio.png';
import taskManager from '../images/task-manager.png';



const Portfolio = () => {
   return (
      <div className="portfolio-wrapper">
         <div className="container">
            <h1 className="text-uppercase text-center py-5">Portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">
               <img className="portfolio-image" src={netflix} alt="Netflix Clone..." />
            </div>
            {/*  -  */}
            <div className="image-box-wrapper row justify-content-center">
               <img className="portfolio-image" src={cityGuide} alt="City Guide project..." />
            </div>
            {/*  -  */}
            <div className="image-box-wrapper row justify-content-center">
               <img className="portfolio-image" src={portfolio} alt="Portfolio project..." />
            </div>
            {/*  -  */}
            <div className="image-box-wrapper row justify-content-center">
               <img className="portfolio-image" src={taskManager} alt="Task manager project..." />
            </div>
         </div>
      </div>
   )
}

export default Portfolio;
