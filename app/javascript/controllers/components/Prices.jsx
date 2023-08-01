import React from 'react'
import Navbar from './Navbar'

function Prices() {
  return (
    <div id="prices">
        <Navbar />
        <div id='prices-container'>
            <p id='prices-head'>Prices</p>
            <div id='prices-content'>
                <img id='prices-img' src='https://i.imgur.com/jG4CBkS.jpg'/>
                <p id='prices-text'>
                    Nails are done as a walk in service, Monday-Friday 8am to 4pm.
                    <br/>
                    <br/>
                    $20 for nails (includes grinding to get them as short and smooth as possible) 
                    <br/>
                    $25 for Pawdicure Package (includes nail grinding & paw pad shaving)
                </p>
            </div>
        </div>
    </div>
  )
}

export default Prices