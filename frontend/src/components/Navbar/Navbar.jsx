import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">

      <img src={assets.logo} alt="" className="logo" />

      <ul className="navbar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Mobile-App</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      
      <div className="navbar-right">

        <img src={assets.search_icon} alt="" />

        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>

        <button>Sign in</button>

      </div>

    </div>
  )
}

export default Navbar
