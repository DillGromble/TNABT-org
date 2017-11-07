import React, { Component } from 'react'
import axios from 'axios'

import MemberFormComponent from './component'
import PopupForm from '../../../../components/Popup-Form/PopupForm'
import PayPalPage from './Paypal/paypal'

export default class MembershipForm extends Component {

  constructor(props) {
    super(props)
    this.initialState = {
      fname: '',
      lname: '',
      street: '',
      city: '',
      zip: '',
      phone: '',
      email: '',
      school: '',
      classes: '',
      formComplete: false,
      error: false,
      errMsg: ''
    }
    this.state = Object.assign({}, this.initialState)
    this.setState = this.setState.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.resetFields = this.resetFields.bind(this)
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()
    axios.post('/api/membership/apply', this.state)
      .then(res => this.setState({ formComplete: true }))
      .catch(err => {
        if (err.response.status === 409) {
          this.setState({ error: true, errMsg: err.response.data }, () => {
            setTimeout(() => this.setState({ error: false }), 3000)
          })
        }
      })
  }


  resetFields() {
    this.setState(this.initialState)
  }


  render() {
    const { onSubmit, handleChange, resetFields } = this
    const { fname,  lname,  street,  city,     zip,
            phone,  email,  school,  classes,  error,  errMsg } = this.state
    return (
      <PopupForm {...this.props} resetForm={resetFields} header="Membership Form" type="form">
        {
          this.state.formComplete
          ?
            <PayPalPage message={`${fname}, we are happy to have you!`} email={email}/>
          :
            <MemberFormComponent
              onSubmit={onSubmit}
              handleChange={handleChange}
              fname={fname}
              lname={lname}
              street={street}
              city={city}
              zip={zip}
              phone={phone}
              email={email}
              school={school}
              classes={classes}
              error={error}
              errMsg={errMsg}
            />
        }
      </PopupForm>
    )
  }
}
