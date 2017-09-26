import React from 'react'

import './Home.css'
import './img/home-hero.jpg'

const Home = () => (
  <div className="home-container">
    <header>
      <div className="hero-text-box">
        <h1>Tennessee Association of Biology Teachers</h1>
        <h3 className="hero-subtext"><em>Supporting Tennessee's teachers in providing the best possible life science education to our students</em></h3>
      </div>
    </header>

    <section className="section-mission">
      <div className="row">
        <h2>Mission Statement</h2>
        <p className="copy">The Tennessee Association of Biology Teachers was formed on November 4, 2016, to support the professional development of biology teachers in Tennessee.</p>
        <br />
        <p className="copy">The purposes of TNABT are exclusively educational, scientific, literary, charitable, and no other, and in furtherance of only these purposes the particular business and objectives of TNABT shall be at the state, regional, and local levels:</p>

        <ul className="mission-list copy">
          <li>To encourage scientific thinking and the utilization of the methods of science through the teaching of biology</li>
          <li>To encourage, support, and stimulate activities that will keep teachers current in the knowledge of biological sciences</li>
          <li>To establish a community for developing and sharing ideas to enhance teaching</li>
          <li>To provide a professional voice regarding issues that affect biological education</li>
          <li>To make available information concerning the selection, organization, and the presentation of resources</li>
          <li>To promote connections of biology to other educational and life experiences</li>
        </ul>
      </div>
    </section>

    <section className="section-picture-nav">
      <ul className="picture-nav clearfix">
        <li>
          <figure className="link-photo">
            <h3>About Us</h3>
            <img src="assets/img/about-us.jpg" alt="About Us" />
          </figure>
        </li>
        <li>
          <figure className="link-photo">
            <h3>Membership</h3>
            <img src="assets/img/membership.jpg" alt="Membership" />
          </figure>
        </li>
        <li>
          <figure className="link-photo">
            <h3>Resources</h3>
            <img src="assets/img/resources.jpg" alt="Resources" />
          </figure>
        </li>
        <li>
          <figure className="link-photo">
            <h3>Awards <br /> &nbsp; &nbsp; and <br /> Service</h3>
            <img src="assets/img/awards.jpg" alt="Awards and Service" />
          </figure>
        </li>
      </ul>
    </section>
  </div>
)

export default Home
