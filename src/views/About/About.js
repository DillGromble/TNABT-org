import React from 'react'

import Header from './components/header'
import Officers from './components/officers'
import PhotoCarousel from './components/carousel'

import './about.css'


const About = () => (
  <div>
    <Header />
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
