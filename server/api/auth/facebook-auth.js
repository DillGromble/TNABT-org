const router = require('express').Router()
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const Member = require('../../../db/Members')

let secret

// set secrets by trying dev file first, then defaulting to process.env
try {
  secret = require('../../../secrets')
  console.log('Facebook Auth info loaded from: secrets file')
}
catch (err) {
  console.log('Secrets not found... trying process.env')
  if (process.env.FACEBOOK_APP_ID && process.env.FACEBOOK_SECRET && process.env.FACEBOOK_CALLBACK) {
    secret = {
      FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
      FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
      FACEBOOK_CALLBACK: process.env.FACEBOOK_CALLBACK
    }
    console.log('Facebook Auth info loaded from : process.env')
  }
  else {
    console.error('Unable to find Facebook keys... skipping Facebook Oauth!')
  }
}


if (secret) {
  const facebookConfig = {
    clientID: secret.FACEBOOK_APP_ID,
    clientSecret: secret.FACEBOOK_SECRET,
    callbackURL: secret.FACEBOOK_CALLBACK,
    passReqToCallback: true
  }

  const strategy = new FacebookStrategy(facebookConfig,
    (req, token, refreshToken, profile, done) => {

      process.nextTick(() => {

        // if user isn't logged in, look them up by facebook id
        if (!req.user) {
          Member.findOne({ 'facebook.id': profile.id }, (err, user) => {
            if (err) return done(err)
            if (user) return done(null, user)
            else return done(null, false, { message: 'User not found' })
          })
        }
        // user is logged in and is linking social auth to local account
        else {
          const user = req.user
          user.facebook.id = profile.id
          user.facebook.token = token
          user.facebook.name = `${profile.name.givenName} ${profile.name.familyName}`

          user.save((err) => {
            if (err) return console.error(err)
            return done(null, user)
          })
        }
      })
    })

  passport.use(strategy)
}

router

  // .get('/', (req, res, next) => {
  //   passport.authenticate('facebook', { scope: 'email' }, (err, user, info) => {
  //     if (err) return next(err)
  //     if (!user) return res.status(401).send({ success: false, message: info.name })
  //     req.login(user, loginErr => {
  //       if (loginErr) return next(loginErr)
  //       return res.send({
  //         success: true,
  //         message: 'authentication success',
  //         changeRequired: user.password_change_required
  //       })
  //     })
  //   })(req, res, next)
  // })


  .get('/', passport.authenticate('facebook', { scope: 'email' }))

  .get('/callback', passport.authenticate('facebook', {
      successRedirect: '/',
      failureRedirect: '/auth-failure'
    })
  )

  // auth/facebook/connect
  .get('/connect', passport.authorize('facebook', { scope: 'email' }))

  .get('/connect/callback', passport.authorize('facebook', {
    successRedirect: '/resources',
    failureRedirect: '/'
  }))


module.exports = router
