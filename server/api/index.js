const router = require('express').Router()


router
  .use('/mailer', require('./mailer'))
  .use('/membership', require('./membership'))
  .use('/auth', require('./auth'))

module.exports = router
