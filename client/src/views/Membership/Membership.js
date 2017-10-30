import React, { Component } from 'react'

import Header from '../../components/Header/Header'

import './membership.css'
import headerImg from '../../img/membership.jpg'

import ApplicantSection from './components/applicant-info'
import MemberForm from './components/membership-form/container'


export default class Membership extends Component {

  constructor(props) {
    super(props)
    this.state = { showForm: false }
    this.toggleForm = this.toggleForm.bind(this)
  }


  toggleForm() {
    this.setState({ showForm: !this.state.showForm })
  }


  render() {
    return (
      <div>
        <Header bgImg={headerImg}>Membership</Header>

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

        <ApplicantSection openForm={this.toggleForm} openContacts={this.props.toggleContact}/>

        <MemberForm
          isVisible={this.state.showForm ? 'popup-show' : ''}
          closeWindow={this.toggleForm}
        />
      </div>
    )
  }
}
