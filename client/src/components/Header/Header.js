import React from 'react'

import './header.css'


const Header = ({ height='75vh', bgImg, subtext, children }) => {

  const headerStyle = {
    backgroundImage: `
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImg})`,
    height: `${height}`
  }

  return (
    <header style={headerStyle}>
      <div className="hero-text-box">
        <h1>{ children }</h1>
        {subtext && subtext}
      </div>
    </header>
  )
}

export default Header
