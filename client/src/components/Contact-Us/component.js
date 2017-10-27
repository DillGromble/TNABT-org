import React from 'react'


const ConactFormComponent = ({ onSubmit, handleChange }) => (
  <div>
    <form onSubmit={onSubmit}>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <br />
        <div className="input-group">
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

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <br />
        <div className="input-group">
          <input
            className="form-one-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <br />
        <div className="input-group">
          <input
            className="form-one-input"
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <br />
        <div className="input-group">
          <textarea
            className="form-one-input"
            type="text"
            name="message"
            placeholder="Message"
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="btn btn-ghost form-submit" type="submit">Send!</button>
    </form>

  </div>
)

export default ConactFormComponent
