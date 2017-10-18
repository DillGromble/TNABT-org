import React, { Component } from 'react'

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
    console.log(this.state)
  }

  render() {
    return (
      <PopupForm {...this.props} header="Contact Us!">
        <ContactComponent onSubmit={this.onSubmit} handleChange={this.handleChange} />
      </PopupForm>
    )
  }
}
