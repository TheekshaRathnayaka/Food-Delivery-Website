import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>

            <div className='footer-content-left'>
                <img src={assets.logo} alt='' />
                <p>"Freshly prepared, Fast delivered - Satisfy your cravings with just a few clicks!"</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook} alt='' />
                    <img src={assets.twitter} alt='' />
                    <img src={assets.linkedin} alt='' />
                </div>
            </div>

            <div className='footer-content-center'>

            </div>

            <div className='footer-content-right'>

            </div>

        </div>
      
    </div>
  )
}

export default Footer
