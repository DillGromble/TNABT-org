import React from 'react'

import Header from '../../components/Header/Header'

import background from '../../img/home-hero.jpg'

const errorSubtext = (
  <h3 className="hero-subtext">
    If you arrived here after attempting to login with a social site: you may
    have not yet connected your account.
    <br />
    <br />
    If you are trying to connect your social account: there was an error with the
     authentication.
  </h3>
)

const AuthFailure = () => (
  <Header height="100vh" bgImg={background} subtext={errorSubtext}>
    Authentication Error!
    <br />
  </Header>
)

export default AuthFailure
