import React, { Component } from 'react'
import axios from 'axios'

import SignUpComponent from './component'


export default class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      password: '',
      reTypedPassword: '',
      error: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()
    const { password, reTypedPassword } = this.state

    if (password !== reTypedPassword) {
      this.setState({ error: true },
        () => setTimeout(() => this.setState({ error: false }), 3000)
      )
    }
    else {
      const updateUserPass = {
        username: this.props.username,
        newPassword: this.state.password,
        oldPassword: this.props.oldPassword
      }
      axios.post('/api/auth/update', updateUserPass)
        .then(res => {
          console.log(res.data)
          this.props.successfulLogin()
        })
        .catch(err => console.error(err))
    }
  }


  render() {
    const { onSubmit, handleChange } = this
    const { password, reTypedPassword, error } = this.state
    return (
      <SignUpComponent
        onSubmit={onSubmit}
        handleChange={handleChange}
        passVal={password}
        rePassVal={reTypedPassword}
        error={error}
      />
    )
  }
}
