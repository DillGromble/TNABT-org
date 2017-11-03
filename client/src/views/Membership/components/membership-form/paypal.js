import React from 'react'


const PayPalBtn = () => (
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
    <input type="hidden" name="cmd" defaultValue="_s-xclick" />
    <input type="hidden" name="hosted_button_id" defaultValue="27YMNKFKCAZUS" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribe_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
    <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width={1} height={1} />
  </form>
)


export default PayPalBtn
