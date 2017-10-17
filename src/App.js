import React, { Component } from 'react'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ContactUs from './components/Contact-Us/container'


import './index.css'
import './grid.css'

class App extends Component {

  constructor() {
    super()
    this.state = ({ popupShown: false })
    this.togglePopup = this.togglePopup.bind(this)
  }


  componentDidUpdate() {
    const scrollbarWidthPx = window.innerWidth - document.body.clientWidth
    const [overflow, marginRight] = this.state.popupShown
      ? ['hidden', `${scrollbarWidthPx}px`]
      : ['', '0px']
    Object.assign(document.body.style, { overflow, marginRight })
  }


  togglePopup() {
    this.setState({ popupShown: !this.state.popupShown })
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <ContactUs
          isVisible={this.state.popupShown ? 'popup-show' : ''}
          closeWindow={this.togglePopup}
        />
        {
          React.cloneElement(
            this.props.children,
            { togglePopup: this.togglePopup }
          )
        }
        <Footer togglePopup={ this.togglePopup }/>
      </div>
    );
  }
}

export default App
