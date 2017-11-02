const router = require('express').Router()


router
  .use('/mailer', require('./mailer'))
  .use('/apply', require('./apply'))
  .use('/auth', require('./auth'))

module.exports = router
