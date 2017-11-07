import React, { Component } from 'react'

import PopupForm from '../Popup-Form/PopupForm'
import PayPalPage from '../../views/Membership/components/membership-form/Paypal/paypal'


export default class InactiveMember extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fname: props.user.fname,
      email: props.user.email
    }
  }

  componentWillReceiveProps() {
    this.setState({
      fname: this.props.user.fname,
      email: this.props.user.email
    })
  }

  render() {
    const { fname, email } = this.state
    return (
      <PopupForm {...this.props} header="Inactive Membership" type="form">
        <PayPalPage message={`${fname}, your membership is inactive.`} email={email} />
      </PopupForm>
    )
  }
}
