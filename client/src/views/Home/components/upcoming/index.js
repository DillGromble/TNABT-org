import React, { Component } from 'react'

import './upcoming.css'

import west from './img/westTN.png'
import mid from './img/midTN.png'
import east from './img/eastTN.png'

import RegionDetail from './components/region-detail'

const stateEvents = {
  East: ['East Event Super Good 11/13', 'Event Super Nice 11/30'],
  Middle: [],
  West: ['West Event Super Good 11/13']
}


export default class Upcoming extends Component {

  constructor(props) {
    super(props)
    this.state = {
      events: '',
      detailOpen: false,
      region: ''
    }
    this.loadEvents = this.loadEvents.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
  }


  loadEvents(region) {
    this.setState({
      events: stateEvents[region],
      detailOpen: !this.state.detailOpen,
      region: region
    })
  }


  togglePopup() {
    this.setState({ detailOpen: !this.state.detailOpen})
  }


  generateMobileEvents(region) {
    if (!stateEvents[region].length) {
      return (
        <div className="mobile-region-container">
          <h1 className="mobile-region-header">{region} TN Events:</h1>
          <p className="mobile-upcoming-events">There are currently no schedules events for {region} TN</p>
          <hr />
        </div>
      )
    }
    else {
      return (
        <div className="mobile-region-container">
          <h1 className="mobile-region-header">{region} TN Events:</h1>
          {stateEvents[region].map(event => (
            <p className="mobile-upcoming-events" key={event}>{event}</p>
          ))}
          <hr />
        </div>
      )
    }
  }


  render() {
    const { togglePopup, loadEvents } = this
    const { events, detailOpen, region } = this.state
    const showRegion = detailOpen ? 'popup-show' : ''
    const header = `Upcoming Events in ${region} TN`

    return (
      <section className="section-upcoming">
        <h2>Upcoming Events</h2>

        <div className="mobile-upcoming-container">
          {this.generateMobileEvents('West')}
          {this.generateMobileEvents('Middle')}
          {this.generateMobileEvents('East')}
        </div>

        <div className="upcoming-container">
          {
            detailOpen &&
            <RegionDetail
              isVisible={showRegion}
              closeWindow={togglePopup}
              header={header}
              events={events}
              region={region}
            />
          }
          <img
            src={west}
            className="upcoming-west region"
            alt="West TN Events"
            onClick={() => loadEvents('West')}
          />
          <img
            src={mid}
            className="upcoming-mid region"
            alt="Middle TN Events"
            onClick={() => loadEvents('Middle')}
          />
          <img
            src={east}
            className="upcoming-east region"
            alt="East TN Events"
            onClick={() => loadEvents('East')}
          />
        </div>
        <p>Click a region to see their events!</p>
      </section>
    )
  }
}
