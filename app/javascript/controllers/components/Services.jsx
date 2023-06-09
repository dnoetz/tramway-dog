import React from 'react'
import Navbar from './Navbar'

function Services() {
  return (
    <div id="services">
      <Navbar />
      <div id="services-container">
        <p id="services-head">Services</p>
        <p id="services-tagline">
          All products used at Tramway Dog Grooming are all natural, certified gluten free, non-irritating and paraben and sulfate free. We ensure that your dogs don’t just look their best but feel their best as well!
        </p>
        <div className="services-section-container">
          <div className="services-img-container">
            <img className="services-img" src="https://i.imgur.com/NoCWm6M.jpg"/>
          </div>
          <div className="services-text-container">
            <p className="services-name">Bath and Brush</p>
            <p className="services-text">
              Our bath packages are deep cleaning. They remove oil, grease, dirt and stains from the coat. We use products that are non irritating to the skin for both animals and humans. Formulated with natural ingredients to condition & soothe the skin and leave the coat manageable with a quality finish!
            </p>
          </div>
        </div>
        <div className="services-section-container">
          <div className="services-img-container">
            <img className="services-img" src="https://i.imgur.com/McKtkUa.jpg"/>
          </div>
          <div className="services-text-container">
            <p className="services-name">Deshed Treatment</p>
            <p className="services-text">
              Our Natural De-Shedding Package is a premium solution for removing loose hair and undercoat. This powerful formula will detangle, release and remove loose hair and undercoat reducing stress on the pet from time spent brushing and blow drying. This premium hypoallergenic formulation will leave all coat types conditioned, moisturized and silky smooth with reduction of shedding. Vitamin and protein enriched as well as amino acids to strengthen the hair shaft, rejuvenate and promote healthy skin!
            </p>
          </div>
        </div>
        <div className="services-section-container">
          <div className="services-img-container">
            <img className="services-img" src="https://i.imgur.com/5ZQ3Z4q.jpg"/>
          </div>
          <div className="services-text-container">
            <p className="services-name">Tidy Groom</p>
            <p className="services-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="services-section-container">
          <div className="services-img-container">
            <img className="services-img" src="https://i.imgur.com/5ZQ3Z4q.jpg"/>
          </div>
          <div className="services-text-container">
            <p className="services-name">Full Service Groom</p>
            <p className="services-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services