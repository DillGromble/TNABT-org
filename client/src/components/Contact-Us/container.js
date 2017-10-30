import React, { Component } from 'react'
import axios from 'axios'

import PopupForm from '../Popup-Form/PopupForm'
import ContactComponent from './component'

export default class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      email: '',
      subject: '',
      message: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()
    axios.post('/api/mailer/contact-us', this.state)
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
  }


  render() {
    return (
      <PopupForm {...this.props} header="Contact Us!" type="form">
        <ContactComponent onSubmit={this.onSubmit} handleChange={this.handleChange} />
      </PopupForm>
    )
  }
}
