const router = require('express').Router()
const Member = require('../../db/Members')
const generator = require('generate-password')
const sendAccountMail = require('../services/mailer').sendAccountMail

router
  .get('/members', (req, res, next) => {
    Member.find({}, (err, members) => {
      if (err) throw err
      res.status(200).json(members)
    })
  })

  .post('/apply', (req, res, next) => {
    Member.find({ email: req.body.email }, (err, doc) => {
      if (err) console.error(err)
      if (doc.length) {
        return res.status(409).send('E-mail already exists!')
      }
      else {
        const tempPassword = generator.generate({ length: 10, numbers: true })

        Member.register(req.body, tempPassword, (error, account) => {
          if (error) {
            console.error('Registration error: ', err)
            return next(err)
          }
          sendAccountMail(account, tempPassword)
          res.status(200).send(account)
        })
      }
    })
  })


module.exports = router
