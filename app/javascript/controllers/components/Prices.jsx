import React from 'react'
import Navbar from './Navbar'

function Prices() {
  return (
    <div id="prices">
        <Navbar />
        <div id='prices-container'>
            <p id='prices-head'>Prices</p>
            <div id='prices-content'>
                <img id='prices-img' src='https://i.imgur.com/ppqHBXq.jpg'/>
                <p id='prices-text'>
                    Nails are offered as a walk in service, Monday-Friday 8am to 3pm.
                    <br/>
                    <br/>
                    $20 for nails (includes grinding to get them as short and smooth as possible) 
                    <br/>
                    $25 for Pawdicure Package (includes nail grinding & paw pad shaving)
                    <br/>
                    <br/>
                    **Final prices are subject to change based off of weight, coat condition & temperament**
                </p>
            </div>
        </div>
    </div>
  )
}

export default Prices