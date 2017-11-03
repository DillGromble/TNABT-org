import React from 'react'
import { Link } from 'react-router'


import './login.css'

const Login = ({ resetForm, onSubmit, handleChange, emailVal, passVal }) => (
  <div>
    <div className="auth-container">
      <div className="auth-inputs">
        <form className="form-auth" onSubmit={onSubmit}>
          <input
            type="email"
            name="username"
            placeholder="E-mail Address"
            onChange={handleChange}
            value={emailVal}
          />
          <input
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
        <button className="btn btn-ghost" type="submit">Submit</button>
        <button className="btn btn-ghost" type="submit">Submit</button>
      </div>
    </div>

    <p className="auth-footer">
      Not a member? Check out our &nbsp;
      <Link to="/membership" onClick={resetForm}>Membership</Link>
      &nbsp; page!
    </p>
  </div>
)


export default Login
