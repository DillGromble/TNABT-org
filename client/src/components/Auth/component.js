import React from 'react'
import { Link } from 'react-router'


import './login.css'

const Login = ({ closeResetLogout, onSubmit, handleChange, emailVal, passVal, errField, facebookLogin }) => (
  <div>
    <div className="auth-container">
      <div className="auth-inputs">
        <form className="form-auth" onSubmit={onSubmit}>
          <input
            className={`form-input ${errField === 'user' ? 'error-highlight' : ''}`}
            type="email"
            name="username"
            placeholder="E-mail Address"
            onChange={handleChange}
            value={emailVal}
          />
          <input
            className={`form-input ${errField === 'pass' ? 'error-highlight' : ''}`}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={passVal}
          />
          <button className="btn btn-ghost" type="submit">Submit</button>
        </form>
      </div>

      <div>
        <p>or</p>
      </div>

      <div className="auth-inputs oauth-btns">
        <a className="social-link facebook-auth" href="/api/auth/facebook">
          <i className="ion-social-facebook" />
          <hr />
          Login with Facebook
        </a>
        <button className="social-link" type="button" disabled>
          <i className="ion-social-googleplus" />
          <hr />
          Google coming soon!
        </button>
      </div>
    </div>

    <p className="auth-footer">
      Not a member? Check out our &nbsp;
      <Link to="/membership" onClick={closeResetLogout}>Membership</Link>
      &nbsp; page!
    </p>
  </div>
)


export default Login
