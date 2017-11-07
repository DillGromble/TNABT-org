const router = require('express').Router()
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
        console.log('user in req.login', user)
        return res.send({
          success: true,
          message: 'authentication success',
          changeRequired: user.password_change_required
        })
      })
    })(req, res, next)
  })


  .post('/logout', (req, res, next) => {
    req.logout()
    res.status(200).send(req.user)
  })


  .post('/update', (req, res, next) => {
    Member.findOne({ email: req.body.username }, (findErr, member) => {
      if (findErr) return next(findErr)
      member.changePassword(req.body.oldPassword, req.body.newPassword, (error, updatedMember) => {
        if (error) return next(error)
        updatedMember.password_change_required = false
        updatedMember.save((err, user) => {
          if (err) return next(err)
          res.status(200).send(user)
        })
      })
    })
  })


  .use('/paypal-auth', require('../../services/paypal-auth'))


module.exports = router
