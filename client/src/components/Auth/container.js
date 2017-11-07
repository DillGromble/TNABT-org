import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import axios from 'axios'

import PopupForm from '../Popup-Form/PopupForm'
import LoginComponent from './component'


export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errField: '',
      errMsg: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.resetFields = this.resetFields.bind(this)
    this.setState = this.setState.bind(this)
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()
    const credentials = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post('/api/auth/login', credentials)
      .then(res => {
        if (res.status === 200) {
          this.props.setUser()
          this.resetFields()
          this.props.closeWindow()
          hashHistory.push('/home')
        }
      })
      .catch(err => {
        if (err.response) {
          const message = err.response.data.message
          if (message === 'IncorrectPasswordError') {
            this.setState({ errField: 'pass', errMsg: 'Incorrect password' })
          }
          else if (message === 'IncorrectUsernameError') {
            this.setState({ errField: 'user', errMsg: 'E-mail doesn\'t exist' })
          }
          else {
            this.setState({ errMsg: 'There was an error' })
          }
          setTimeout(() => this.setState({ errField: '', errMsg: '' }), 3000)
        }
      })
  }


  resetFields() {
    this.setState({ username: '', password: '', errMsg: '' })
  }


  render() {
    const { onSubmit, handleChange, resetFields } = this
    const { username, password, errMsg, errField } = this.state
    const header = errMsg || 'Login'

    return (
      <PopupForm {...this.props} resetForm={resetFields} header={header} type="auth">
        <LoginComponent
          closeWindow={this.props.closeWindow}
          resetForm={resetFields}
          onSubmit={onSubmit}
          handleChange={handleChange}
          emailVal={username}
          passVal={password}
          errField={errField}
        />
      </PopupForm>
    )
  }
}
