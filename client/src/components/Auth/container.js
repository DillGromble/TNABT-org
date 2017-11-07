import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import axios from 'axios'

import PopupForm from '../Popup-Form/PopupForm'
import LoginComponent from './Login'


export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.resetFields = this.resetFields.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    axios.post('/api/auth/login', this.state)
      .then(res => {
        if (res.status === 200) {
          this.props.setUser()
          this.resetFields()
          this.props.closeWindow()
          hashHistory.push('/home')
        }
      })
      .catch(err => console.error(err))
  }

  resetFields() {
    this.setState({ username: '', password: '' })
  }

  render() {
    const { onSubmit, handleChange, resetFields } = this
    const { username, password } = this.state
    return (
      <PopupForm {...this.props} resetForm={resetFields} header="Login" type="auth">
        <LoginComponent
          closeWindow={this.props.closeWindow}
          resetForm={resetFields}
          onSubmit={onSubmit}
          handleChange={handleChange}
          emailVal={username}
          passVal={password}
        />
      </PopupForm>
    )
  }
}
