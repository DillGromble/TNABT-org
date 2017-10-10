import React from 'react'

import './resources.css'

import Header from './components/header'
import TipOfMonth from './components/tip-of-the-month'


import NABTlogo from './img/NABT_logo.png'
import TSTAlogo from './img/TSTA_logo.png'
import ASBlogo from './img/ASB_logo.png'
import LandsEndLogo from './img/lands_end_logo.png'

const Resources = () => (
  <div>
    <Header />
    <TipOfMonth />

    <section className="section-resource-links">
      <h2>Links</h2>
      <div className="row flex-between resource-link-container">
        <a href="https://www.nabt.org/">
          <div className="resource-link">
            <img
              src={NABTlogo}
              alt="Link to National Association of Biology Teachers"
              />
          </div>
        </a>

        <a href="http://www.tsta.wildapricot.org/">
          <div className="resource-link">
            <img
              src={TSTAlogo}
              alt="Link to Tennessee Science Teachers Association"
            />
          </div>
        </a>

        <a href="http://www.sebiologists.org/">
          <div className="resource-link">
            <img
              src={ASBlogo}
              alt="Link to Association of Southeastern Biologists"
            />
          </div>
        </a>
      </div>
    </section>

  </div>
)

export default Resources
