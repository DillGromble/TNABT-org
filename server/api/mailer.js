const router = require('express').Router()
const sendContactMail = require('../services/mailer').sendContactMail

router.post('/contact-us', (req, res) => {
  const { fname, lname, email, subject, message } = req.body
  sendContactMail(fname, lname, email, subject, message)
  res.sendStatus(200)
})

module.exports = router
