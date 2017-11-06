const router = require('express').Router()
const axios = require('axios')
const querystring = require('querystring')


router
  .post('/', (req, res, next) => {
    res.sendStatus(200)

    let responseBody = 'cmd=_notify-validate'

    for (let key in req.body) {
      if (req.body.hasOwnProperty(key)) {
        const value = querystring.escape(req.body[key])
        responseBody += `&${key}=${value}`
      }
    }

    console.log(responseBody)

    axios.post('https://ipnpb.sandbox.paypal.com/cgi-bin/webscr', responseBody)
      .then(resp => resp.data)
      .then(verification => {
        if (verification === 'VERIFIED') {
          console.log(`Verified IPN: IPN message for Transaction ID: ${req.body.txn_id} is verified.`)
        }
        else if (verification === 'INVALID') {
          console.error(`Invalid IPN: IPN message for Transaction ID: ${req.body.txn_id} is invalid.`)
        }
        else {
          console.error('Unexpected response body')
        }
      })
      .catch(err => console.error(err))
  })


module.exports = router
