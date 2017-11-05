import React from 'react'

import './paypal.css'

const PayPalPage = ({ firstname, email }) => (
  <div>
    <h1 className="paypal-header">{firstname}, we are happy to have you!</h1>
    <h3 className="paypal-subheader copy">Choose a payment option below:</h3>


    <div className="payment-option">
      <p className="payment-description">For 1 year at $20 with a <em>Recurring subscription: </em></p>
      <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="ZK69WETMHNNHN" />
        <input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_subscribe_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>

    <div className="payment-option">
      <p className="payment-description">A lifetime subscription at $500: </p>
      <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="ZK69WETMHNNHN" />
        <input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_subscribe_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </div>

    <p className="copy paypal-footer">Once you've submitted payment through Paypal, you'll receive an e-mail at <em>{email}</em> to setup your account!</p>
  </div>
)


export default PayPalPage
