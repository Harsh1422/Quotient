import React from 'react'
import "./Potential.css"
import PotentIm from "../lim.png"
function Potential() {
  return (
    <div className='mainPotent'>
        <div className="Potent1">
            <div className="Potent1Head">
                <h3>Unleash your Potential with us</h3>
                <p>Join our community of ambitious individuals and organizations eager to make a difference.</p>
            </div>
            <button className='buttonPotent'>Try Out Now</button>
        </div>
        <div className="Potent2">
            <img src={PotentIm} alt="" srcset="" className='PotentImage' />
        </div>
    </div>
  )
}

export default Potential