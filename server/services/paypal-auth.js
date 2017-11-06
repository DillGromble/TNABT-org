const router = require('express').Router()
// const axios = require('axios')

router
  .post('/', (req, res, next) => {
    res.sendStatus(200)

    const responseBody = 'cmd=_notify-validate&' + req.body
    console.log('Verifying...')
    console.log(responseBody)

    // axios.post('https://ipnpb.sandbox.paypal.com/cgi-bin/webscr')
  })


module.exports = router
