import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
        <div className="logo">
            <p>Logo</p>
        </div>
        <div className="links">
            <a href="" className="link">Features</a>
            <a href="" className="link">FAQ</a>
            <a href="" className="link">Pricing</a>
            <a href="" className="link">Testimonials</a>
            <button className='button'>Buy Template</button>
        </div>
    
    </div>
  )
}

export default Header