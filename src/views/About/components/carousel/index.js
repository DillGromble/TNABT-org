import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './carousel.css'

import pic1 from './img/1.jpg'
import pic2 from './img/2.jpg'
import pic3 from './img/3.jpg'
import pic4 from './img/4.jpg'


const PhotoCarousel = () => (
  <section className="section-carousel">
      <h2>Past Events</h2>
      <div className="photo-carousel">
        <Carousel infiniteLoop={true} autoPlay={true} interval={5000}>
          <div>
            <img src={pic1} alt="TNABT Event" />
          </div>
          <div>
            <img src={pic2} alt="TNABT Event" />
          </div>
          <div>
            <img src={pic3} alt="TNABT Event" />
          </div>
          <div>
            <img src={pic4} alt="TNABT Event" />
          </div>
        </Carousel>
      </div>
  </section>
)

export default PhotoCarousel
