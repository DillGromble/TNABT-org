import React, { Component } from 'react'
import axios from 'axios'

import PopupForm from '../Popup-Form/PopupForm'
import ContactComponent from './component'


export default class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.initialState = {
      fname: '',
      lname: '',
      email: '',
      subject: '',
      message: ''
    }
    this.state = Object.assign({}, this.initialState)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.resetFields = this.resetFields.bind(this)
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


  resetFields() {
    this.setState(this.initialState)
  }


  render() {
    const { resetFields, onSubmit, handleChange } = this
    const { fname, lname, email, subject, message } = this.state
    return (
      <PopupForm {...this.props} resetForm={resetFields} header="Contact Us!" type="form">
        <ContactComponent
          onSubmit={onSubmit}
          handleChange={handleChange}
          fname={fname}
          lname={lname}
          email={email}
          subject={subject}
          message={message}
        />
      </PopupForm>
    )
  }
}
