import React from 'react'
import "./Productivity.css"
import imm from "../im5.png"
function Productivity() {
  return (
    <div className='headerP'>
        <div className="Prod1">
            <div className="P1Head1">
                <p>
                Explore an array of features that elevate your <span  style={{color:"#fe8162"}}>Productivity</span> to new heights
                </p>
            </div>
            <div className="P1content">
                <p>
                Discover the tools that will revolutionize the way you manage and optimize your operations
                </p>
            </div>
            <div className="P1Cards">
                <div className="card">
                    <div className="hh">
                        <h4>Cross-Platform Compatibility</h4>
                        <p>Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="hh">
                        <h4>Stay Informed with Essential Notifications</h4>
                        <p>Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="hh">
                        <h4>Secure Data Encryption at all times</h4>
                        <p>Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="Prod2">
            <div className="P2Head">
                <p>
                Enable integration with other popular tools and platforms
                </p>
            </div>
            <div className="P2content">
                <p>
                Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.
                </p>
            </div>
            <div className="P2image">
                <img src={imm} alt="" srcset="" className='P2image' />
            </div>

        </div>
    </div>
  )
}

export default Productivity