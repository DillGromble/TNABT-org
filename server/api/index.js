const router = require('express').Router()


router
  .use('/mailer', require('./mailer'))
  .use('/apply', require('./apply'))


module.exports = router
