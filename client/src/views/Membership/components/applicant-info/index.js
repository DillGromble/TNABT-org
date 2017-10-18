import React from 'react'


import './applicant-info.css'

const ApplicantSection = ({ openForm, openContacts }) => (
  <section className="section-applicant-info">

    <div className="row">
      <h2>Applicant Information</h2>
      <p className="copy">
        Persons interested in join TNABT are encouraged to complete the
        application form and submit membership dues via the website.  If you
        have any questions, please contact an officer at the link below.
      </p>

      <aside>
        <p className="copy">
          Are you an active member looking to renew?
          Please <a href="login">login</a>
        </p>
      </aside>

      <div className="row applicant-btn-container">
        <button className="btn btn-full" onClick={ openForm} >Apply Now</button>
        <button className="btn btn-ghost" onClick={ openContacts }>Contact Us</button>
      </div>
    </div>
  </section>
)

export default ApplicantSection
