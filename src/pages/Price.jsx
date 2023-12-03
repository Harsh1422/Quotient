import React from 'react'
import "./Price.css"
function Price() {
    return (
        <div className='mainPrice'>
            <div className="Price1">
                <h3>
                    Select your ideal Pricing plan
                </h3>
                <p>
                    At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.
                </p>
            </div>
            <div className="Price2">
                <div className="Pricecard">
                    <div className="priceLabel">
                        <h3>$0/month</h3>
                    </div>
                    <div className="priceDetails">
                        <p>Access to all basic features</p>
                        <p>Reporting and analytics</p>
                        <p>Up to 5 individual users</p>
                        <p>Chat and email support</p>
                    </div>
                    <button className='buttonP1'>Get Started</button>
                </div>
                <div className="Pricecard">
                    <div className="priceLabel">
                        <h3>$25/month</h3>
                    </div>
                    <div className="priceDetails">
                        <p>Access to all basic features</p>
                        <p>Reporting and analytics</p>
                        <p>Up to 5 individual users</p>
                        <p>Chat and email support</p>
                        <p>3+ integrations</p>
                        <p>Account performance reporting</p>
                    </div>
                    <button className='buttonP1'>Get Started</button>
                </div>
                <div className="Pricecard">
                    <div className="priceLabel">
                        <h3>$42/month</h3>
                    </div>
                    <div className="priceDetails">
                        <p>Access to all basic features</p>
                        <p>Reporting and analytics</p>
                        <p>Up to 5 individual users</p>
                        <p>Chat and email support</p>
                        <p>3+ integrations</p>
                    </div>
                    <button className='buttonP1'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Price