const router = require('express').Router();
const EmailList = require('../../db/MailList');
const sendContactMail = require('../services/mailer').sendContactMail;


router.post('/contact-us', (req, res) => {
  const { fname, lname, email, subject, message } = req.body;
  sendContactMail(fname, lname, email, subject, message);
  res.sendStatus(200);
})

router.post('/mailinglist', (req, res) => {
  const { email, name } = req.body;
  const emailListEntry = new EmailList({ email, name, lCase_name: name.toLowerCase() });
  emailListEntry.save();
  res.sendStatus(200);
})

module.exports = router;
