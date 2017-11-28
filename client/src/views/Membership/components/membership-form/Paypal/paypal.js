import React from 'react'

import './paypal.css'

const PayPalPage = ({ message, email }) => (
  <div>
    <h1 className="paypal-header">{message}</h1>
    <h3 className="paypal-subheader copy">Choose a payment option below:</h3>


    <div className="payment-option">
      <p className="payment-description">One time payment of $20 for 1 year: </p>
      {/*
      <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="EBS7UCPTYFGKN" />
        <input type="hidden" name="custom" value={email} />
        <input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_buynow_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>
      */}

      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="HY2E7XJV9AJ96" />
        <input type="hidden" name="custom" value={email} />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
      </form>

    </div>


    <div className="payment-option">
      {/*<p className="payment-description">A lifetime subscription at $500: </p>*/}
    </div>


    <p className="copy paypal-footer">Once you've submitted payment through Paypal, you'll receive an e-mail at <em>{email}</em> to setup your account!</p>
  </div>
)


export default PayPalPage



