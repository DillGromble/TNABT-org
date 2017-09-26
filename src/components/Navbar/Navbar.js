import React from 'react'

import './Navbar.css'

const Navbar = () => (
  <nav className="nav-container">
    <img className="logo-nav" src="/assets/img/TNABT_logo.png" alt="TNABT Logo" />
    <ul className="main-nav">
      <li>Login</li>
      <li>About Us</li>
      <li>Membership</li>
      <li>Awards and Service</li>
      <li>Resources</li>
    </ul>
    <i className="ion-navicon-round mobile-nav"></i>
  </nav>
)

export default Navbar
