import React, { Component } from 'react'
import axios from 'axios'

import PopupForm from '../Popup-Form/PopupForm'
import ContactComponent from './component'
import ConfirmationPage from './Confirmation'

export default class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.initialState = {
      fname: '',
      lname: '',
      email: '',
      subject: '',
      message: '',
      submitted: false,
      confirmation: ''
    }
    this.state = Object.assign({}, this.initialState)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.resetFields = this.resetFields.bind(this)
    this.flashAndClear = this.flashAndClear.bind(this)
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()
    axios.post('/api/mailer/contact-us', this.state)
      .then(res => { this.flashAndClear('Message sent!') })
      .catch(err => { this.flashAndClear('Error sending message, try again') })
  }


  resetFields() {
    this.setState(this.initialState)
  }


  flashAndClear(confirmation) {
    this.setState({ submitted: true, confirmation }, () => {
      setTimeout(() => {
        this.props.closeWindow()
        this.resetFields()
      }, 2000)
    })
  }

  render() {
    const { resetFields, onSubmit, handleChange } = this
    const { fname, lname, email, subject, message, submitted, confirmation } = this.state
    return (
      <PopupForm
        {...this.props}
        resetForm={resetFields}
        header="Contact Us!"
        type="form"
        disableClose={submitted}
      >
        {
          !submitted
            ?
              <ContactComponent
                onSubmit={onSubmit}
                handleChange={handleChange}
                fname={fname}
                lname={lname}
                email={email}
                subject={subject}
                message={message}
              />
            :
            <ConfirmationPage confirmationTxt={confirmation}/>
        }
      </PopupForm>
    )
  }
}
