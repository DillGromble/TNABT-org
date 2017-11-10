import React, { Component } from 'react'

import './office-dropdown.css'



class OfficeDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDown: false,
      iconState: '',
      dropdownState: 'accordion-hide'
    }
    this.toggleAccordion = this.toggleAccordion.bind(this)
  }


  toggleAccordion() {
    const isDown = !this.state.isDown
    const [dropdownState, iconState] = isDown
      ? ['', 'accordion-icon-up']
      : ['accordion-hide', '']
    this.setState({ isDown, dropdownState, iconState })
  }


  render() {
    const { iconState, dropdownState } = this.state

    return (
      <div className="dropdown-container">

        <header className="dropdown-header" onClick={this.toggleAccordion}>
          <h4>{ this.props.title }</h4>
          <i className={`ion-arrow-down-b accordion-icon ${iconState}`}></i>
        </header>

        <article className={`dropdown-description ${dropdownState}`}>
          <p className="office-description">
            { this.props.description }
          </p>
          <button className="btn btn-ghost office-btn" disabled>Apply Now: Coming soon!</button>
        </article>

      </div>
    )
  }
}


export default OfficeDropdown
