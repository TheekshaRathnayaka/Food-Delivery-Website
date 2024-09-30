import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>

            <div className='footer-content-left'>
                <img className='logo' src={assets.logo} alt='' />
                <p>"Freshly prepared, Fast delivered - Satisfy your cravings with just a few clicks!"</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook} alt='' />
                    <img src={assets.twitter} alt='' />
                    <img src={assets.linkedin} alt='' />
                </div>
            </div>

            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>011-456-9321</li>
                    <li>yummyhub@gmail.com</li>
                </ul>
            </div>
        </div>
      
      <hr />
      <p className="footer-copyright">© YummyHub.com, 2024 Inc. All rights reserved.</p>
    </div>
  )
}

export default Footer
