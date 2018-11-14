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
      phoneError: false,
      errMsg: ''
    }
    this.state = Object.assign({}, this.initialState);
    this.setState = this.setState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetFields = this.resetFields.bind(this);
    this.displayError = this.displayError.bind(this);
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()
    if (this.state.phone.includes('-') || !parseInt(this.state.phone, 10)) {
      return this.displayError('Please use only numbers for phone', 'phone');
    }
    axios.post('/api/membership/apply', this.state)
      .then(res => this.setState({ formComplete: true }))
      .catch(err => {
        if (err.response.status === 409) {
          this.displayError(err.response.data, 'email');
        } else {
          alert('There was an error processing the request.');
        }
      })
  }


  resetFields() {
    this.setState(this.initialState)
  }


  displayError(msg, type) {
    const stateToSet = {};
    if (type === 'email') {
      stateToSet.error = true;
    } else {
      stateToSet.phoneError = true;
    }
    stateToSet.errMsg = msg;
    this.setState(stateToSet, () => {
      setTimeout(() => this.setState({ error: false, phoneError: false }), 3000)
    });
  }


  render() {
    const { onSubmit, handleChange, resetFields } = this
    const { fname,  lname,  street,  city,     zip,
            phone,  email,  school,  classes,  error, phoneError, errMsg } = this.state
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
              phoneError={phoneError}
              errMsg={errMsg}
            />
        }
      </PopupForm>
    )
  }
}
