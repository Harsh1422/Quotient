import React from 'react'
import Graph from '../graph.png'
import './Home.css'
function Home() {
  return (
    <div className='main'>
        <div className="content">
            <div className="header1">
                <p>Empower your business with <span className='highlight' style={{color:"#fe8162"}}>Stategic</span> insights</p>
            </div>
            <div className="para">
                <p>Powerful management platform designed to streamline your business operations, boost productivity, and drive success
                </p>
            </div>
            <div className="buttons">
                <button className='button1'>Get Started</button>
                <button className='button2'>Watch Demo</button>
            </div>
        </div>
        <div className="imageContent">
            <img src={Graph} alt="" srcset="" className='image'/>
        </div>
    </div>
  )
}

export default Home