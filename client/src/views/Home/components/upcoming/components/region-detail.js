import React from 'react'

import PopupForm from '../../../../../components/Popup-Form/PopupForm'

import './region-detail.css'

const RegionDetail = (props) => (
  <PopupForm {...props} type="form">
    <div className="region-events-list">
      {
        props.events.length
          ?
            props.events.map(event => (<p key={event}>{event}</p>))
          :
            <p>There are currently no schedules events in {props.region} TN</p>
      }
    </div>
  </PopupForm>
)

export default RegionDetail
