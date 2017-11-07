const router = require('express').Router()
const Account = require('../../../db/account')
const passport = require('passport')
const Member = require('../../../db/Members')


router
  .get('/me', (req, res, next) => { res.json(req.user) })


  .post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err)
      if (!user) return res.status(401).send({ success: false, message: info.name })

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


  .use('/paypal-auth', require('../../services/paypal-auth'))


module.exports = router
