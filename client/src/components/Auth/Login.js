import React from 'react'
import { Link } from 'react-router'
// import axios from 'axios'

import PopupForm from '../Popup-Form/PopupForm'
import './login.css'

const Login = (props) => (
  <PopupForm {...props} header="Login" type="auth">

    <div className="auth-container">
      <div className="auth-inputs">
        <form className="form-auth">
          <input type="email" name="email" placeholder="E-mail Address" />
          <input type="password" name="password" placeholder="Password" />
          <button className="btn btn-ghost" type="submit">Submit</button>
        </form>
      </div>

      <div>
        <p>or</p>
      </div>

      <div className="auth-inputs oauth-btns">
        <button className="btn btn-ghost" type="submit">Submit</button>
        <button className="btn btn-ghost" type="submit">Submit</button>
      </div>
    </div>

    <p className="auth-footer">
      Not a member? Check out our &nbsp;
      <Link to="/membership" onClick={props.closeWindow}>Membership</Link>
      &nbsp; page!
    </p>

  </PopupForm>
)


export default Login
