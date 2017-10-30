import React, { Component } from 'react'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ContactUs from './components/Contact-Us/container'
import Login from './components/Auth/Login'

import './index.css'
import './grid.css'



class App extends Component {
  constructor() {
    super()
    this.state = ({
      contactShown: false,
      authShown: false,
      bgDisabled: false
    })
    this.toggleAuth = this.toggleAuth.bind(this)
    this.toggleContact = this.toggleContact.bind(this)
  }


  componentDidUpdate() {
    const scrollbarWidthPx = window.innerWidth - document.body.clientWidth
    const [overflow, marginRight] = this.state.bgDisabled
      ? ['hidden', `${scrollbarWidthPx}px`]
      : ['', '0px']
    Object.assign(document.body.style, { overflow, marginRight })
  }


  toggleContact() {
    this.setState({
      contactShown: !this.state.contactShown,
      bgDisabled: !this.state.bgDisabled
    })
  }


  toggleAuth() {
    console.log('auth!')
    this.setState({
      authShown: !this.state.authShown,
      bgDisabled: !this.state.bgDisabled
    })
  }


  render() {
    const authShow = this.state.authShown ? 'popup-show' : ''
    const popupShow = this.state.contactShown ? 'popup-show' : ''

    return (
      <div className="App">
        <Navbar toggleAuth={this.toggleAuth} />
        <Login isVisible={authShow} closeWindow={this.toggleAuth} />
        <ContactUs isVisible={popupShow} closeWindow={this.toggleContact} />
        {
          React.cloneElement(
            this.props.children,
            { toggleContact: this.toggleContact, toggleAuth: this.toggleAuth }
          )
        }
        <Footer toggleContact={this.toggleContact} />
      </div>
    )
  }
}

export default App
