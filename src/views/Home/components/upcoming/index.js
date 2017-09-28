import React from 'react'

import './upcoming.css'

import west from './img/westTN.png'
import mid from './img/midTN.png'
import east from './img/eastTN.png'


const Upcoming = () => (
  <section className="section-upcoming">
    <h2>Upcoming Events</h2>
    <div className="upcoming-container">
      <img src={ west } className="upcoming-west region" alt="West TN Events" />
      <img src={ mid } className="upcoming-mid region" alt="Middle TN Events" />
      <img src={ east } className="upcoming-east region" alt="East TN Events" />
    </div>
      <p>Click a region to see their events!</p>
  </section>
)

export default Upcoming
