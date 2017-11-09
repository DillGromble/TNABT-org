import React from 'react'

import './tip-overview.css'
import placeholder from './tip-placeholder.png'


const TipOverview = () => (
  <div className="tip-overview-container">
    <h3 className="tip-header-placeholder">First tip of the month coming soon!</h3>
    <img className="tip-img-placeholder" src={placeholder} alt="Tip of the Month coming soon!" />
  </div>
)

export default TipOverview
