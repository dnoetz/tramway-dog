import React from 'react'
import Navbar from './Navbar'

function Testimonials() {
  return (
    <div id="testimonials">
      <Navbar />
      <p id="testimonials-head">Don't just take it from us, hear it from our happy clients!</p>
      <div id="testimonials-container"> 
        <div className="testimonials-section-container">
          <div className="testimonials-img-container">
            <img className="testimonials-img" src="https://i.imgur.com/ES6L9p5.png"/>
          </div>
          <div className="testimonials-text-container">
            <p className="testimonials-author">Dixie B.</p>
            <p className="testimonials-text">
              "Tramway Dog Grooming is the best around! My fur babies LOVE them! They make grooming a great experience for them. I have one nervous and one outgoing little girl and they both enjoy their spa day here! Jackey, Ian, Mackenzie and Melanie are amazing! It’s hard to find people you trust with your pets but there is no issue here as they’re treated as their own pets! The appointments are quick which is convenient but also very efficient! I love how they take the time to take pictures of all of the babies that come through their doors. My girls come home smelling good and looking as cute as ever! Highly recommend!"
            </p>
          </div>
        </div>
        <div className="testimonials-section-container">
          <div className="testimonials-img-container">
            <img className="testimonials-img" src="https://i.imgur.com/24KCwPV.jpg"/>
          </div>
          <div className="testimonials-text-container">
            <p className="testimonials-author">Alyssa C.</p>
            <p className="testimonials-text">
              "Gibby is a bull mastiff 'puppy' whose hobbies include chewing sticks, drooling, going for walks and SHEDDING. Two expensive de-shedding treatments elsewhere were making it worse, it seemed. We found Tramway Dog Grooming where the owners were some of the nicest people Ive ever met and they were able to see Gibby the day we called! Gibby came home so clean, smelling good and NOT shedding! He was such a happy boy and even got a goody bag 😁 We have found his permanent groomer!"
            </p>
          </div>
        </div>
        <div className="testimonials-section-container">
          <div className="testimonials-img-container">
            <img className="testimonials-img" src="https://i.imgur.com/hjt2Xcg.jpg"/>
          </div>
          <div className="testimonials-text-container">
            <p className="testimonials-author">Wynona B.</p>
            <p className="testimonials-text">
              "Took my yorkie in a week ago for her first puppy cut, I was referred to them by another groomer who was not accepting new customers. Not sure what to expect, never having used a dog groomer before. When I arrived I met two of the nicest people that made me and my Sassy feel very comfortable.  Before I left they explained exactly what they would be doing for my puppy, asking me if I had any questions or concerns. I left feeling as though I was leaving her with friends that I totally trusted. When I returned I was not disappointed my puppy looked and smelled amazing. But the most important thing for me was I knew that they had taken good care of my puppy cause she was just loving on both of them. I could not have had a better experience being a first time customer. Was so pleased with them before I left I had made 5 more appointments for my puppy thru the end of the year. I can’t express how happy I was with them and can’t wait to take my puppy back for her next cut."
            </p>
          </div>
        </div>
        <div className="testimonials-section-container">
          <div className="testimonials-img-container">
            <img className="testimonials-img" src="https://i.imgur.com/jMuGX2u.jpg"/>
          </div>
          <div className="testimonials-text-container">
            <p className="testimonials-author">Yazmin D.C.</p>
            <p className="testimonials-text">
              "Literally a great experience! I would love to bring my baby back again! Such an amazing team and so friendly! I will definitely be booking with Tramway Dog Grooming from now on! Thank you for treating my baby so wonderful!"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials