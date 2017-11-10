import React from 'react'


const ContactFormComponent = ({
  onSubmit,
  handleChange,
  fname,
  lname,
  email,
  subject,
  message
}) => (
  <div>
    <form className="form-tall" onSubmit={onSubmit}>

      <div className="form-group">
        <label className="form-label" htmlFor="name">Name:</label>
        <br />
        <div className="input-group">
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

      <div className="form-group">
        <label className="form-label" htmlFor="email">Email:</label>
        <br />
        <div className="input-group">
          <input
            className="form-one-input form-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="subject">Subject:</label>
        <br />
        <div className="input-group">
          <input
            className="form-one-input form-input"
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            value={subject}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">Message:</label>
        <br />
        <div className="input-group">
          <textarea
            className="form-one-input form-textarea"
            type="text"
            name="message"
            placeholder="Message"
            onChange={handleChange}
            value={message}
            required
          />
        </div>
      </div>

      <button className="btn btn-ghost form-submit" type="submit">Send!</button>
    </form>

  </div>
)

export default ContactFormComponent
