import React from 'react'

import Header from '../../components/Header/Header'
import Mission from './components/mission'
import PictureNav from './components/picture-nav'
import Upcoming from './components/upcoming'


import headerBg from '../../img/home-hero.jpg'

const headerSubtext = (
  <h3 className="hero-subtext">
    <em>Supporting Tennessee's teachers in providing the best possible life
    science education to our students</em>
  </h3>
)

const Home = () => (
  <div>
    <Header height="100vh" bgImg={headerBg} subtext={headerSubtext}>
      Tennessee Association of Biology Teachers
    </Header>

    <Mission />
    <PictureNav />
    <Upcoming />
  </div>
)

export default Home
