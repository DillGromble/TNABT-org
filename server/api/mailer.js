const router = require('express').Router()
const sendMail = require('../services/mailer')

router.post('/contact-us', (req, res) => {
  const { fname, lname, email, subject, message } = req.body
  sendMail(fname, lname, email, subject, message)
  res.sendStatus(200)
})

module.exports = router
