import React, { Component } from 'react'
import { Link } from 'react-router'

import './Navbar.css'


class Navbar extends Component {

  constructor() {
    super()
    this.state = ({
      hamburgerOpen: false,
      mobileLinkState: '',
      hamburgerIcon: 'ion-navicon-round'
    })

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.handleMobileClick = this.handleMobileClick.bind(this)
  }


  toggleDropdown() {
    const hamburgerOpen = !this.state.hamburgerOpen
    const [ hamburgerIcon, mobileLinkState ] = hamburgerOpen
      ? ['ion-close-round close-icon', 'mobile-nav-open']
      : ['ion-navicon-round', '']
    this.setState({ hamburgerOpen, mobileLinkState, hamburgerIcon })
  }


  handleMobileClick() {
    if (this.state.hamburgerOpen) this.toggleDropdown()
  }


  render() {
    const { hamburgerIcon, mobileLinkState } = this.state
    const { handleMobileClick, toggleDropdown } = this

    return (
      <nav className="nav-container">
        <Link to="/home" onClick={handleMobileClick}>
          <img
            className="logo-nav"
            src="assets/img/TNABT_logo.png"
            alt="TNABT Logo"
          />
        </Link>

        <i className={`${hamburgerIcon} mobile-nav`} onClick={toggleDropdown} />
        <ul className={`main-nav ${mobileLinkState}`} onClick={ handleMobileClick }>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/membership">Membership</Link>
          </li>
          <li>
            <Link to="/awards-service">Awards and Service</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>Login</li>
        </ul>
      </nav>
    )
  }
}


export default Navbar
