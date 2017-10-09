import React from 'react'

import Header from './components/header'
import CurrentOBT from './components/currentOBT'
import PreviousOBT from './components/previousOBT'
import OpenOffices from './components/open-offices'


import './awards.css'


const Awards = () => (
  <div>
    <Header />

    <section className="section-awards-info">
      <div className="row">
        <h2>Awards</h2>
        <p className="copy">
          To nominate someone for the Outstanding Biology Teacher Award:
        </p>
        <p className="copy nominate-link">
          Click <a href="http://nabt.org/Awards-2017-NABT-Award-Nomination-Form">Here</a>
        </p>
      </div>
    </section>

    <CurrentOBT />
    <PreviousOBT />
    <OpenOffices />
  </div>
)


export default Awards
