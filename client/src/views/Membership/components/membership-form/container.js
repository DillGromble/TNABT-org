import React, { Component } from 'react'

import MemberFormComponent from './component'
import PopupForm from '../../../../components/Popup-Form/PopupForm'


export default class MembershipForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      street: '',
      city: '',
      zip: '',
      phone: '',
      email: '',
      school: '',
      classes: ''
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
      <PopupForm {...this.props} header="TNABT Membership Form">
        <MemberFormComponent onSubmit={this.onSubmit} handleChange={this.handleChange} />
      </PopupForm>
    )
  }
}
