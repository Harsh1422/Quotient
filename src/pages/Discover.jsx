import React from 'react'
import "./Discover.css"
import image from '../im1.png'
import im2 from "../im2.png"
import im3 from "../im3.png"
import im4 from "../im4.png"
function Discover () {
  return (
    <div className='main1'>
        <div className="sub1">
            <div className="head1">
            <p>Discover our product's Capabilities</p>
            </div>
            <div className="para1">
                <p>
                Don't settle for mediocrity - embrace the future of management with Manage Wise.
                </p>
            </div>
        </div>
        <div className="sub2">
            <div className="head2">
                <p>
                Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.
                </p>
            </div>
            <div className="image2">
                <img src={image} alt="" srcset="" className='imm1' />
            </div>
        </div>
        <div className="sub3">
            <div className="im1">
                <img src={im2} alt="" srcset="" className='im' />g
            </div>
            <div className="im2">
                <img src={im3} alt="" srcset="" className='im' />
            </div>
            <div className="im3">
                <img src={im4} alt="" srcset=""  className='im'/>
            </div>
        </div>
    </div>
  )
}

export default Discover;