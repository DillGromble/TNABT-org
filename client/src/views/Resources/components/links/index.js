import React from 'react'

import './links.css'


import NABTlogo from './img/NABT_logo.png'
import TSTAlogo from './img/TSTA_logo.png'
import ASBlogo from './img/ASB_logo.png'


const resourceLinks = [
  {
    link: "https://www.nabt.org/",
    src: NABTlogo,
    alt: "Link to National Association of Biology Teachers"
  },
  {
    link: "http://www.tsta.wildapricot.org/",
    src: TSTAlogo,
    alt: "Link to Tennessee Science Teachers Association"
  },
  {
    link: "http://www.sebiologists.org/",
    src: ASBlogo,
    alt: "Link to Association of Southeastern Biologists"
  }
]


const ResourceLinks = () => (
  <section className="section-resource-links">
    <h2>Links</h2>
    <div className="row flex-between resource-link-container">
      {
        resourceLinks.map(link => (
          <a key={link.link} href={link.link}>
            <div className="resource-link">
              <img src={link.src} alt={link.alt} />
            </div>
          </a>
        ))
      }
    </div>
  </section>
)

export default ResourceLinks
