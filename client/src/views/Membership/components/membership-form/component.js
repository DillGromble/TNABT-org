import React from 'react'

import './membership-form.css'


const MemberForm = ({ onSubmit, handleChange, fname, lname, street,
  city, zip, phone, email, school, classes, error, errMsg }) => (
    <div>
      <form className="form-tall" onSubmit={onSubmit}>
        <div className="member-form-group">
          <label className="form-label" htmlFor="name">Name:</label>
          <br />
          <div className="input-group member-input-group">
            <input
              className="form-two-input form-input"
              type="text"
              name="fname"
              placeholder="First Name"
              onChange={handleChange}
              value={fname}
              required
            />
            <input
              className="form-two-input form-input"
              type="text"
              name="lname"
              placeholder="Last Name"
              onChange={handleChange}
              value={lname}
              required
            />
          </div>
        </div>

        <div className="member-form-group">
          <label className="form-label" htmlFor="address">Address:</label>
          <br />
          <div className="input-group member-input-group">
            <input
              className="form-one-input form-input"
              type="text"
              name="street"
              placeholder="Address"
              onChange={handleChange}
              value={street}
              required
            />
          </div>
          <div className="input-group member-input-group">
            <input
              className="form-two-input form-input"
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              value={city}
              required
            />
            <input
              className="form-two-input form-input"
              type="text"
              name="zip"
              placeholder="Zip Code"
              onChange={handleChange}
              value={zip}
              required
            />
          </div>
        </div>

        <div className="member-form-group clearfix">
          <div className="col span-1-of-2">
            <label className="form-label" htmlFor="phone">Phone:</label>
            <br />
            <div className="input-group member-input-group">
              <input
                className="form-two-input split form-input"
                type="tel"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                value={phone}
                required
              />
            </div>
          </div>

          <div className="col span-1-of-2">
            <label
              className={`form-label ${error ? 'error-highlight' : ''}`}
              htmlFor="email">
              {error ? errMsg : 'Email:'}
            </label>
            <br />
            <div className="input-group member-input-group">
              <input
                className="form-two-input split form-input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={email}
                required
              />
            </div>
          </div>
        </div>

        <div className="member-form-group clearfix">
          <div className="col span-1-of-2">
            <label className="form-label" htmlFor="school">Institution:</label>
            <br />
            <div className="input-group member-input-group">
              <input
                className="form-two-input split form-input"
                type="text"
                name="school"
                placeholder="School"
                onChange={handleChange}
                value={school}
              />
            </div>
          </div>

          <div className="col span-1-of-2">
            <label className="form-label" htmlFor="classes">Classes Taught:</label>
            <br />
            <div className="input-group member-input-group">
              <input
                className="form-two-input split form-input"
                type="text"
                name="classes"
                placeholder="Classes Taught"
                onChange={handleChange}
                value={classes}
              />
            </div>
          </div>
        </div>

        <button className="btn btn-ghost member-form-submit" type="submit">Next ></button>

      </form>
    </div>
  )

export default MemberForm
