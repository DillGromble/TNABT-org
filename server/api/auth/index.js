const router = require('express').Router()
const Account = require('../../../db/account')
const passport = require('passport')

router
  .get('/me', (req, res, next) => { res.json(req.user) })


  .post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      console.log('user: ', user)
      console.log('err: ', err)
      console.log('info: ', info)
      if (err) return next(err)
      if (!user) {
        return res.send({ success: false, message: 'authentication failed'})
      }
      req.login(user, loginErr => {
        if (loginErr) return next(loginErr)
        return res.send({success: true, message: 'authentication success'})
      })
    })(req, res, next)
  })


  .post('/logout', (req, res, next) => {
    req.logout()
    res.status(200).send(req.user)
  })


  .post('/register', (req, res, next) =>
    Account.register(
      new Account({ username: req.body.username }), req.body.password, (err, account) => {
        if (err) {
          console.error('Registration error: ', err)
          return next(err)
        }
        passport.authenticate('local')(req, res, function () {
          res.status(200).send(account);
        })
    })
  )


  .use('/paypal-auth', require('../../services/paypal-auth'))
module.exports = router
