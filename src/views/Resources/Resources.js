import React from 'react'

import './resources.css'

import Header from './components/header'
import TipOfMonth from './components/tip-of-the-month'
import ResourceLinks from './components/links'

import LandsEndLogo from './img/lands_end_logo.png'


const Resources = () => (
  <div>
    <Header />
    <TipOfMonth />
    <ResourceLinks />

    <section className="section-resource-gear">
      <h2>NABT Gear</h2>
      <div className="lands-end-container">
        <p className="copy">
          Lands' End offers clothing with the NABT logo.  You can shop for clothing
          with the option to add the NABT logo using the link provided:
        </p>
        <a href="https://business.landsend.com/store/nabt/">
          <div className="resource-link lands-end">
            <img src={LandsEndLogo} alt="Link to NABT Lands End Gear" />
          </div>
        </a>
      </div>
    </section>
  </div>
)

export default Resources
