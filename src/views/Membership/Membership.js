import React from 'react'

import Header from './components/header'

import './membership.css'


const Membership = () => (
  <div>
    <Header />

    <section className="section-about-membership">
      <div className="row">
        <h2>Membership</h2>
        <p className="copy">
          Membership in TNABT is open to any person sympathetic to the purposes of
          the TNABT, without regard to sex, race, color, creed, gender
          orientation or nationality.
        </p>
      </div>
    </section>

    <section className="section-dues">
      <div className="row">
        <h2>Dues</h2>
        <p className="copy">
          Membership fees are $20 annually to be paid by December 31st for
          membership the following year.  Any person who has paid dues in both
          TNABT and NABT for the current membership year shall have active
          membership status as a voting member.
        </p>
      </div>
    </section>

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
          <button className="btn btn-full">Apply Now</button>
          <button className="btn btn-ghost">Contact Us</button>
        </div>
      </div>
    </section>

  </div>
)

export default Membership
