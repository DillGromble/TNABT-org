import React from 'react'
import { Link } from 'react-router'

import './picture-nav.css'

import about from '../../../../img/about-us.jpg'
import awards from '../../../../img/awards.jpg'
import membership from '../../../../img/membership.jpg'
import resources from '../../../../img/resources.jpg'

const PictureNav = () => (
  <section className="section-picture-nav">
    <ul className="picture-nav clearfix">

      <Link to="/about">
        <li>
          <figure className="link-photo">
            <h3>About Us</h3>
            <img src={ about } alt="About Us" />
          </figure>
        </li>
      </Link>

      <Link to="/membership">
        <li>
          <figure className="link-photo">
            <h3>Membership</h3>
            <img src={ membership } alt="Membership" />
          </figure>
        </li>
      </Link>

      <Link to="/resources">
        <li>
          <figure className="link-photo">
            <h3>Resources</h3>
            <img src={ resources } alt="Resources" />
          </figure>
        </li>
      </Link>

      <Link to="/awards-service">
        <li>
          <figure className="link-photo">
            <h3>Awards <br /> &nbsp; &nbsp; and <br /> Service</h3>
            <img src={ awards } alt="Awards and Service" />
          </figure>
        </li>
      </Link>

    </ul>
  </section>
)

export default PictureNav
