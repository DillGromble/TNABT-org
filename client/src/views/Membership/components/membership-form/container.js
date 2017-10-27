import React, { Component } from 'react'
import axios from 'axios'

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
    axios.post('/api/apply/membership', this.state)
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
  }


  render() {
    return (
      <PopupForm {...this.props} header="Membership Form">
        <MemberFormComponent onSubmit={this.onSubmit} handleChange={this.handleChange} />
      </PopupForm>
    )
  }
}
