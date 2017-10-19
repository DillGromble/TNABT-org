import React from 'react'

import Header from '../../components/Header/Header'
import Officers from './components/officers'
import PhotoCarousel from './components/carousel'


import './about.css'
import bgImage from '../../img/about-us.jpg'


const About = () => (
  <div>
    <Header bgImg={bgImage}>About Us</Header>

    <PhotoCarousel />
    <Officers />
    <section className="section-constitution">
      <div className="row">
        <h2>Constitution</h2>
        <p className="copy">You can read the full version of the TNABT constitution and bylaws <a href="top">here</a></p>
      </div>
    </section>
  </div>
)

export default About
