import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import axios from 'axios'

import PopupForm from '../Popup-Form/PopupForm'
import LoginComponent from './Login'


export default class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()
    axios.post('/api/auth/login', this.state)
      .then(res => {
        if (res.status === 200) {
          this.props.setUser()
          this.props.closeWindow()
          hashHistory.push('/home')
        }
      })
      .catch(err => console.error(err))
  }


  render() {
    return (
      <PopupForm {...this.props} header="Login" type="auth">
        <LoginComponent onSubmit={this.onSubmit} handleChange={this.handleChange} />
      </PopupForm>
    )
  }
}
