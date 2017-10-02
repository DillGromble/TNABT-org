import React from 'react'

import './mission.css'

const Mission = () => (
  <section className="section-mission">
    <div className="row">
      <h2>Mission Statement</h2>
      <p className="copy">
        The Tennessee Association of Biology Teachers was formed on November 4,
        2016, to support the professional development of biology teachers in
        Tennessee.
      </p>
      <br />
      <p className="copy">
        The purposes of TNABT are exclusively educational, scientific, literary,
         charitable, and no other, and in furtherance of only these purposes the
          particular business and objectives of TNABT shall be at the state,
          regional, and local levels:
      </p>

      <ul className="mission-list copy">
        <li>
          To encourage scientific thinking and the utilization of the methods of
           science through the teaching of biology
        </li>
        <li>
          To encourage, support, and stimulate activities that will keep
          teachers current in the knowledge of biological sciences
        </li>
        <li>
          To establish a community for developing and sharing ideas to enhance
          teaching
        </li>
        <li>
          To provide a professional voice regarding issues that affect
          biological education
        </li>
        <li>
          To make available information concerning the selection, organization,
          and the presentation of resources
        </li>
        <li>
          To promote connections of biology to other educational and life
          experiences
        </li>
      </ul>
    </div>
  </section>
)

export default Mission
