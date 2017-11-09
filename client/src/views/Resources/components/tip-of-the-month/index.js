import React from 'react'

import tipLogo from './img/tipLogo.png'


import TipOverview from './components/tip-overview'
import FloatPrompt from './components/float-prompt'


const TipOfMonth = ({ toggleAuth, toggleContact, user }) => (

  <section className="section-tip-overview">
    <h2>Tip of the Month</h2>
    <p className="copy tip-copy">
      The Tip of the Month is the place to show off you great interactive, dry
      lab, etc, that has been effective in your life science classes.
    </p>

    <TipOverview />

    <div className="row flex-between">
      {
        user.email
          ?
          <FloatPrompt
            message={'Click here for previous month\'s tips!'}
            btnText={'Go!'}
            onClick={() => alert('Currently no previous tips: come back soon!')}
          />
          :
          <FloatPrompt
            message={'Want to see our tips from previous months?'}
            btnText={'Login'}
            onClick={toggleAuth}
          />
      }
      <img
        className="boxes"
        src={tipLogo}
        alt="Tip of the Month"
      />
      <FloatPrompt
        message={'Got a great idea that has worked for your classes?'}
        btnText={'Share it!'}
        onClick={ toggleContact }
      />
    </div>
  </section>
)

export default TipOfMonth
