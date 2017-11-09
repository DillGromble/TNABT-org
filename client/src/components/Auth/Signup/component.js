import React from 'react'


const SignUp = ({ onSubmit, handleChange, passVal, rePassVal, error }) => (
  <div>
    <div className="auth-container">
      <div className="auth-inputs">
        <form className="form-auth" onSubmit={onSubmit}>
          <input
            className={`form-input ${error ? 'error-highlight' : ''}`}
            type="password"
            name="password"
            placeholder="New Password"
            onChange={handleChange}
            value={passVal}
          />
          <input
            className={`form-input ${error ? 'error-highlight' : ''}`}
            type="password"
            name="reTypedPassword"
            placeholder="Re-Type Password"
            onChange={handleChange}
            value={rePassVal}
          />
          <button className="btn btn-ghost" type="submit">Submit</button>
        </form>
      </div>

      <div>
        <p>or</p>
      </div>

      <div className="auth-inputs oauth-btns">
        <a className="social-link facebook-auth" href="/api/auth/facebook/connect">
          <i className="ion-social-facebook" />
          <hr />
          Link to Facebook
        </a>
        <button className="social-link" type="button" disabled>
          <i className="ion-social-googleplus" />
          <hr />
          Google coming soon!
        </button>
      </div>
    </div>

    <p className={`auth-footer ${error ? 'error-highlight' : ''}`}>
      {
        error
          ? 'Passwords don\'t match'
          : 'You must update your password, or link your account to Google or Facebook.'
      }
    </p>
  </div>
)


export default SignUp
