import React from 'react'

import PopupForm from '../../../../../components/Popup-Form/PopupForm'
import Event from './event'

import './region-detail.css'

const RegionDetail = (props) => (
  <PopupForm {...props} type="form">
    <div className="region-events-list">
      {
        props.events.length
          ?
            props.events.map(event => ( <Event event={event} key={ event.title } />))
          :
            <p>There are currently no scheduled events in {props.region} TN</p>
      }
    </div>
  </PopupForm>
)

export default RegionDetail
