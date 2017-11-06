const router = require('express').Router()
const axios = require('axios')
const querystring = require('querystring')
const sendAccountMail = require('./mailer').sendAccountMail
const Member = require('../../db/Members')


// const getURI = () => process.env.NODE_ENV === 'dev'
//   ? 'https://ipnpb.sandbox.paypal.com/cgi-bin/webscr'
//   : 'https://ipnpb.paypal.com/cgi-bin/webscr'

const getURI = () => 'https://ipnpb.sandbox.paypal.com/cgi-bin/webscr'

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

    console.log(req.body)

    axios.post(getURI(), responseBody)
      .then(resp => resp.data)
      .then(verification => {
        if (verification === 'VERIFIED') {
          console.log(`Verified IPN: Transaction ID: ${req.body.txn_id} is verified.`)
          // Member.findOne
        }
        else if (verification === 'INVALID') {
          console.error(`Invalid IPN: Transaction ID: ${req.body.txn_id} is invalid.`)
        }
        else {
          console.error('Unexpected response body')
        }
      })
      .catch(err => console.error(err))
  })


module.exports = router