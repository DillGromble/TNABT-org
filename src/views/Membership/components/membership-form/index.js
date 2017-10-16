import React from 'react'

import './member-form.css'

const MemberForm = ({ closeWindow, isVisible }) => (
  <div className={`disable-bg ${isVisible}`}>
    <div className={`member-form-popup ${isVisible}`}>
      <i className="ion-close-round popup-exit-icon" onClick={closeWindow} />

      <div>
        <header className="form-header">
          <h3>TNABT Membership Application</h3>
        </header>


        <form action="" method="POST">

          <div className="row form-group">
            <label htmlFor="name">Name:</label>
            <br />
            <div className="input-group">
              <input
                className="form-two-input"
                type="text"
                name="fname"
                placeholder="First Name"
              />
              <input
                className="form-two-input"
                type="text"
                name="lname"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="row form-group">
            <label htmlFor="address">Address:</label>
            <br />
            <div className="input-group">
              <input
                className="form-one-input"
                type="text"
                name="adr-street"
                placeholder="Address"
              />
            </div>
            <div className="input-group">
              <input
                className="form-two-input"
                type="text"
                name="adr-city"
                placeholder="City"
              />
              <input
                className="form-two-input"
                type="text"
                name="adr-zip"
                placeholder="Zip Code"
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col span-1-of-2">
              <label htmlFor="phone">Phone:</label>
              <br />
              <div className="input-group">
                <input
                  className="form-two-input split"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div className="col span-1-of-2">
              <label htmlFor="email">Email:</label>
              <br />
              <div className="input-group">
                <input
                  className="form-two-input split"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>

          <div className="row form-group">
            <div className="col span-1-of-2">
              <label htmlFor="school">Institution:</label>
              <br />
              <div className="input-group">
                <input
                  className="form-two-input split"
                  type="text"
                  name="school"
                  placeholder="School"
                />
              </div>
            </div>

            <div className="col span-1-of-2">
              <label htmlFor="classes">Classes Taught:</label>
              <br />
              <div className="input-group">
                <input
                  className="form-two-input split"
                  type="text"
                  name="classes"
                  placeholder="Classes Taught"
                />
              </div>
            </div>
          </div>
        </form>


        <footer className="form-footer">
        </footer>
      </div>

    </div>
  </div>
)


export default MemberForm
