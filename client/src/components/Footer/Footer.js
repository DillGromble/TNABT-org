import React from 'react'

import './Footer.css'

const Footer = ({ toggleContact }) => (
  <footer>
    <div className="footer-banner" />
    <div className="footer">

      <div className="footer-links footer-content">
        <a href="#top">Back to Top</a>
        <a href="/#/about">About Us</a>
        <a href="/#/membership">Pay Dues</a>
      </div>

      <div className="footer-icons footer-content">
        <i className="ion-email contact-us icon-single" onClick={toggleContact}></i>
        <a href="https://www.facebook.com/groups/821834731293122/"><i className="ion-social-facebook facebook icon-single"></i></a>
      </div>

      <p className="footer-rights">Copyright © 2017 by the TNABT organization.</p>

    </div>

  </footer>
)

export default Footer
