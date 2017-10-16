import React, { Component } from 'react'

import MemberFormComponent from './index'


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
      <MemberFormComponent
        {...this.props}
        onSubmit={this.onSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}
