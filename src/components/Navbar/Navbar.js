import React from 'react'
import { Link } from 'react-router'

import './Navbar.css'


const Navbar = () => (
  <nav className="nav-container">

    <Link to="/home">
      <img className="logo-nav" src="assets/img/TNABT_logo.png" alt="TNABT Logo" />
    </Link>


    <ul className="main-nav">
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/membership">Membership</Link>
      </li>
      <li>
        <Link to="/awards-service">Awards and Service</Link>
      </li>
      <li>
        <Link to="/resources">Resources</Link>
      </li>
      <li>Login</li>
    </ul>
    <i className="ion-navicon-round mobile-nav"></i>
  </nav>
)

export default Navbar
