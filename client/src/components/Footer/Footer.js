import React from 'react'

import './Footer.css'

const Footer = ({ toggleContact }) => (
  <footer>
    <div className="footer-banner" />
    <div className="footer">

      <div className="footer-links footer-content">
        <a href="top">Back to Top</a>
        <a href="top">About Us</a>
        <a href="top">Pay Dues</a>
      </div>

      <div className="footer-icons footer-content">
        <i className="ion-email contact-us" onClick={toggleContact}></i>
        <i className="ion-social-facebook facebook"></i>
      </div>

      <p className="footer-rights">Copyright © 2017 by the TNABT organization.</p>

    </div>

  </footer>
)

export default Footer
