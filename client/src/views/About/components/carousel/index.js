import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './carousel.css'

import pic1 from './img/1.jpg'
import pic2 from './img/2.jpg'
import pic3 from './img/3.jpg'
import pic4 from './img/4.jpg'
import pic5 from './img/5.jpg'
import pic6 from './img/6.jpg'
import pic7 from './img/7.jpg'
import pic8 from './img/8.jpg'
import pic9 from './img/9.jpg'
import pic10 from './img/10.jpg'
import pic11 from './img/11.jpg'


const PhotoCarousel = () => (
  <section className="section-carousel">
      <h2>Past Events</h2>
      <div className="photo-carousel">
        <Carousel infiniteLoop={true} autoPlay={true} interval={4000} dynamicHeight={true}>
          <div>
            <img src={pic1} alt="TNABT Event 1" />
          </div>
          <div>
            <img src={pic2} alt="TNABT Event 2" />
          </div>
          <div>
            <img src={pic3} alt="TNABT Event 3" />
          </div>
          <div>
            <img src={pic4} alt="TNABT Event 4" />
          </div>
          <div>
            <img src={pic5} alt="TNABT Event 5" />
          </div>
          <div>
            <img src={pic6} alt="TNABT Event 6" />
          </div>
          <div>
            <img src={pic7} alt="TNABT Event 7" />
          </div>
          <div>
            <img src={pic8} alt="TNABT Event 8" />
          </div>
          <div>
            <img src={pic9} alt="TNABT Event 9" />
          </div>
          <div>
            <img src={pic10} alt="TNABT Event 10" />
          </div>
          <div>
            <img src={pic11} alt="TNABT Event 11" />
          </div>
        </Carousel>
      </div>
  </section>
)

export default PhotoCarousel
