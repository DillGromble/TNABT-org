import React from 'react'
import { Link } from 'react-router'

import './Navbar.css'


const Navbar = () => (
  <nav className="nav-container">

    <Link to="/home">
      <img className="logo-nav" src="assets/img/TNABT_logo.png" alt="TNABT Logo" />
    </Link>

    <ul className="main-nav">
      <Link to="/about"><li>About Us</li></Link>
      <li>Membership</li>
      <li>Awards and Service</li>
      <li>Resources</li>
      <li>Login</li>
    </ul>
    <i className="ion-navicon-round mobile-nav"></i>

  </nav>
)

export default Navbar
