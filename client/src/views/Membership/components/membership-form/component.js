import React from 'react'

import './membership-form.css'


const MemberForm = ({ onSubmit, handleChange }) => (
  <div>
    <form className="form-tall" onSubmit={onSubmit}>
      <div className="member-form-group">
        <label htmlFor="name">Name:</label>
        <br />
        <div className="input-group member-input-group">
          <input
            className="form-two-input"
            type="text"
            name="fname"
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            className="form-two-input"
            type="text"
            name="lname"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="member-form-group">
        <label htmlFor="address">Address:</label>
        <br />
        <div className="input-group member-input-group">
          <input
            className="form-one-input"
            type="text"
            name="street"
            placeholder="Address"
            onChange={handleChange}
          />
        </div>
        <div className="input-group member-input-group">
          <input
            className="form-two-input"
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
          <input
            className="form-two-input"
            type="text"
            name="zip"
            placeholder="Zip Code"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="member-form-group clearfix">
        <div className="col span-1-of-2">
          <label htmlFor="phone">Phone:</label>
          <br />
          <div className="input-group member-input-group">
            <input
              className="form-two-input split"
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col span-1-of-2">
          <label htmlFor="email">Email:</label>
          <br />
          <div className="input-group member-input-group">
            <input
              className="form-two-input split"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="member-form-group clearfix">
        <div className="col span-1-of-2">
          <label htmlFor="school">Institution:</label>
          <br />
          <div className="input-group member-input-group">
            <input
              className="form-two-input split"
              type="text"
              name="school"
              placeholder="School"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col span-1-of-2">
          <label htmlFor="classes">Classes Taught:</label>
          <br />
          <div className="input-group member-input-group">
            <input
              className="form-two-input split"
              type="text"
              name="classes"
              placeholder="Classes Taught"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <button className="btn btn-ghost member-form-submit" type="submit">Submit</button>
    </form>



  </div>
)


export default MemberForm
