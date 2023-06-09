import React from 'react'
import Navbar from './Navbar'
import MeetTeam from './MeetTeam'

function About() {
  return (
    <div id="about">
      <Navbar />
      <div id="about-section-container">
        <div id="about-text-container">
          <p id="about-head">About Us</p>
          <p id="about-text">
            Here at Tramway Dog Grooming we always put the care of your dogs first. Our salon has been designed to give your dogs the least stressful experience possible while providing the best quality and comfort! Our salon layout is designed for your dog to receive the highest level of one on one care possible in a salon setting. 
          </p>
        </div>
      </div>
      <div id="about-img-container">
        <img className="about-img" src="https://i.imgur.com/FXOHvDy.jpg"/>
        <img id="img-two" className="about-img" src="https://i.imgur.com/nMbBXUE.jpg"/>
        <img id="img-three" className="about-img" src="https://i.imgur.com/nC7nlCZ.jpg"/>
      </div>
      <MeetTeam />
    </div>
  )
}

export default About