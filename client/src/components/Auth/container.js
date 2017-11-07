import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import axios from 'axios'

import PopupForm from '../Popup-Form/PopupForm'
import LoginComponent from './component'
import SignUpContainer from './Signup/container'

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errField: '',
      errMsg: '',
      header: 'Login',
      changeRequired: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.resetFields = this.resetFields.bind(this)
    this.successfulLogin = this.successfulLogin.bind(this)
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
        if (res.data.changeRequired) {
          this.setState({ header: 'Password Change Required', changeRequired: true })
        }
        else {
          this.successfulLogin()
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


  successfulLogin() {
    this.props.setUser()
    this.resetFields()
    this.props.closeWindow()
    hashHistory.push('/home')
  }


  resetFields() {
    this.setState({ username: '', password: '', errMsg: '' })
  }


  render() {
    const { onSubmit, handleChange, resetFields, successfulLogin } = this
    const { username, password, errMsg, errField, changeRequired } = this.state
    const header = errMsg || this.state.header

    return (
      <PopupForm {...this.props} resetForm={resetFields} header={header} type="auth">
        {
          changeRequired
            ?
              <SignUpContainer
                username={username}
                oldPassword={password}
                successfulLogin={successfulLogin}
              />
            :
              <LoginComponent
                closeWindow={this.props.closeWindow}
                resetForm={resetFields}
                onSubmit={onSubmit}
                handleChange={handleChange}
                emailVal={username}
                passVal={password}
                errField={errField}
              />
        }
      </PopupForm>
    )
  }
}
