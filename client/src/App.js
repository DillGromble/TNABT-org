import React, { Component } from 'react'
import axios from 'axios'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ContactUs from './components/Contact-Us/container'
import Login from './components/Auth/container'
import InactiveMember from './components/InactiveMember/container'

import './index.css'
import './grid.css'



class App extends Component {
  constructor() {
    super()
    this.state = ({
      contactShown: false,
      authShown: false,
      bgDisabled: false,
      user: {},
      inactiveMemberShown: false
    })
    this.toggleAuth = this.toggleAuth.bind(this)
    this.toggleContact = this.toggleContact.bind(this)
    this.setUser = this.setUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
  }


  componentWillMount() {
    this.setUser()
  }


  componentDidUpdate() {
    const scrollbarWidthPx = window.innerWidth - document.body.clientWidth
    const [overflow, marginRight] = this.state.bgDisabled
      ? ['hidden', `${scrollbarWidthPx}px`]
      : ['', '0px']
    Object.assign(document.body.style, { overflow, marginRight })
  }


  setUser() {
    axios.get('/api/auth/me')
      .then(res => this.setState({ user: res.data || {} }, () => {
        if (this.state.user.account_active === false) {
          this.setState({
            inactiveMemberShown: !this.state.inactiveMemberShown,
            bgDisabled: !this.state.bgDisabled
          })
        }
      }))
      .catch(err => console.error(err))
  }


  logoutUser() {
    axios.post('/api/auth/logout')
      .then(res => this.setState({
          user: {},
          inactiveMemberShown: false,
          bgDisabled: false
        })
      )
      .catch(err => console.error(err))
  }


  toggleContact() {
    this.setState({
      contactShown: !this.state.contactShown,
      bgDisabled: !this.state.bgDisabled
    })
  }


  toggleAuth() {
    this.setState({
      authShown: !this.state.authShown,
      bgDisabled: !this.state.bgDisabled
    })
  }


  render() {
    const { toggleAuth, setUser, toggleContact, logoutUser } = this
    const authShow = this.state.authShown ? 'popup-show' : ''
    const popupShow = this.state.contactShown ? 'popup-show' : ''
    const inactiveMemberShow = this.state.inactiveMemberShown ? 'popup-show' : ''

    return (
      <div className="App">
        <Navbar toggleAuth={toggleAuth} user={this.state.user} logoutUser={logoutUser}/>
        <Login
          isVisible={authShow}
          closeWindow={toggleAuth}
          setUser={setUser}
          logoutUser={logoutUser}
        />
        <ContactUs isVisible={popupShow} closeWindow={toggleContact} />
        <InactiveMember
          isVisible={inactiveMemberShow}
          closeWindow={logoutUser}
          user={this.state.user}
        />

        {
          React.cloneElement(
            this.props.children,
            {
              toggleContact: toggleContact,
              toggleAuth: toggleAuth,
              user: this.state.user
            }
          )
        }
        <Footer toggleContact={toggleContact} />
      </div>
    )
  }
}

export default App
