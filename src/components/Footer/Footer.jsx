import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Welcome to Oliver Coffee, where every cup tells a story. Nestled in the heart of the city, Oliver Coffee is a cozy haven for coffee enthusiasts and casual drinkers alike. Our shop exudes warmth and character, with rustic wooden tables, vintage-inspired décor, and the rich aroma of freshly brewed coffee filling the air.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+1-124-542-524-513-531</li>
                    <li>contact@oliver.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2077 OliverCoffee.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer