import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='mainFooter'>
        <div className="Footer1">
            <h4>Logo</h4>
            <div className="Footlinks">
                <a href="#">Features</a>
                <a href="#">FAQ</a>
                <a href="#">Pricing</a>
                <a href="#">Testimonials</a>
            </div>
        </div>
        <div className="Footer2">
            <h5> © 2022 ManageWise, Inc.</h5>
        </div>
    </div>
  )
}

export default Footer