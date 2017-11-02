const router = require('express').Router()
const Account = require('../../../db/account')
const passport = require('passport')

router
  .get('/me', (req, res, next) => { res.json(req.user) })

  .post('/login', passport.authenticate('local'), (req, res, next) => {
    res.status(200).send(req.user)
  })

  .post('/register', (req, res, next) =>
    Account.register(
      new Account({ username: req.body.username }), req.body.password, (err, account) => {
        if (err) {
          console.error('Registration error: ', err)
          next(err)
        }
        passport.authenticate('local')(req, res, function () {
          res.status(200).send(account);
        })
    })
  )


module.exports = router
