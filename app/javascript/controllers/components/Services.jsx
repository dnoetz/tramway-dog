import React from 'react'
import Navbar from './Navbar'

function Services() {
  return (
    <div id="services">
      <Navbar />
      <div className="services-container">
        <p className="services-head">Products</p>
        <p id="services-tagline">
          All products used at Tramway Dog Grooming are all natural, certified gluten free, non-irritating and paraben and sulfate free. We ensure that your dogs don’t just look their best but feel their best as well! 
          <br/>
          <br/>
          We have multiple packages & scents to choose from! 
          <br/>
          <br/>
          Some scent packages we offer: Blueberry, Cranberry, Coconut, Girly Girl, Pretty Boy, Ginger Spice & Sweet Cookie 
        </p>
      </div>
      <div className="services-container">
        <p className="services-head">Services</p>
        <div className="services-section-container">
          <div className="services-img-container">
            <img className="services-img" src="https://i.imgur.com/NoCWm6M.jpg"/>
          </div>
          <div className="services-text-container">
            <p className="services-name">Bath and Brush</p>
            <p className="services-text">
            Our bath packages are deep cleaning. They remove oil, grease, dirt and stains from the coat. We use products that are non irritating to the skin for both animals and humans. Formulated with natural ingredients to condition & soothe the skin and leave the coat manageable with a quality finish!
            <br/>
            <br/>
            Includes: Bath, blow drying, hair brushing, nail grinding, paw pad shaving, ear cleaning and teeth brushing
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
            <br/>
            <br/>
            Includes: Bath with Deshed shampoo and conditioner, blow drying, nail grinding, ear cleaning, teeth brushing, paw pad shaving and hair brushing for an extended time to reduce as much shedding as possible.
            </p>
          </div>
        </div>
        <div className="services-section-container">
          <div className="services-img-container">
            <img className="services-img" src="https://i.imgur.com/Os9Gk6q.jpg"/>
          </div>
          <div className="services-text-container">
            <p className="services-name">Tidy Groom</p>
            <p className="services-text">
            Our Tidy Services are paired with the same high quality products you find in our other packages. Our Tidy Package is great for puppies as an introduction to the grooming process as well as those who are looking to maintain the essential areas between full service grooming. 
            <br/>
            <br/>
            Includes: Bath, blow drying, hair brushing, nail grinding, paw pad shaving, ear cleaning, teeth brushing, and a face, feet and sanitary trim (potty area)
            </p>
          </div>
        </div>
        <div className="services-section-container">
          <div className="services-img-container">
            <img className="services-img" src="https://i.imgur.com/tS8Hni6.jpg"/>
          </div>
          <div className="services-text-container">
            <p className="services-name">Full Service Groom</p>
            <p className="services-text">
            Our Full Service Groom is a full service package. Paired with the same high quality products as our other packages but this time your dog gets a full makeover! From long cuts to summer shave downs, our groomers are here to make your visions for your dogs breed come to life (within reason*).
            <br/>
            <br/>
            Includes: Bath, blow drying, hair brushing, nail grinding, ear cleaning, teeth brushing and a full body & head hair cut all over, of your choice, within *reason. 
            <br/>
            <br/>
            *Based off temperament, coat type and coat condition. Above all else the care for your dog comes first!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services