import React from 'react'

import './resources.css'

import Header from '../../components/Header/Header'
import TipOfMonth from './components/tip-of-the-month'
import ResourceLinks from './components/links'

import LandsEndLogo from './img/lands_end_logo.png'
import headerBg from '../../img/resources.jpg'

const Resources = ({ toggleAuth, toggleContact, user }) => (
  <div>
    <Header bgImg={headerBg}>Resources</Header>
    <TipOfMonth toggleAuth={toggleAuth} toggleContact={toggleContact} user={user}/>
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
