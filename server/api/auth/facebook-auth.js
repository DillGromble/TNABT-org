const router = require('express').Router()
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const Member = require('../../../db/Members')

let secret

/*--------------------------------------------------------------------------*/
// set secrets by trying dev file first, then defaulting to process.env
/*--------------------------------------------------------------------------*/
try {
  secret = require('../../../secrets')
  console.log('Facebook Auth info loaded from: secrets file')
}
catch (err) {
  console.log('Secrets not found... trying process.env')
  if (
    process.env.FACEBOOK_APP_ID &&
    process.env.FACEBOOK_SECRET &&
    process.env.FACEBOOK_CALLBACK_AUTH &&
    process.env.FACEBOOK_CALLBACK_CONNECT
  ) {
    secret = {
      FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
      FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
      FACEBOOK_CALLBACK_AUTH: process.env.FACEBOOK_CALLBACK_AUTH,
      FACEBOOK_CALLBACK_CONNECT: process.env.FACEBOOK_CALLBACK_CONNECT
    }
    console.log('Facebook Auth info loaded from : process.env')
  }
  else {
    console.error('Unable to find Facebook keys... skipping Facebook Oauth!')
  }
}


if (secret) {
  /*--------------------------------------------------------------------------*/
  // Strategy for auth via Facebook
  /*--------------------------------------------------------------------------*/
  passport.use('facebookAuthStrategy', new FacebookStrategy({
      clientID: secret.FACEBOOK_APP_ID,
      clientSecret: secret.FACEBOOK_SECRET,
      callbackURL: secret.FACEBOOK_CALLBACK_AUTH,
      passReqToCallback: true
    },
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
        else {
          return done(null, false, { message: 'Cannot login twice' })
        }
      })
    }
  ))


  /*--------------------------------------------------------------------------*/
  // Strategy for linking Facebook account to local auth
  /*--------------------------------------------------------------------------*/
  passport.use('facebookConnectStrategy', new FacebookStrategy({
      clientID: secret.FACEBOOK_APP_ID,
      clientSecret: secret.FACEBOOK_SECRET,
      callbackURL: secret.FACEBOOK_CALLBACK_CONNECT,
      passReqToCallback: true
    },
    (req, token, refreshToken, profile, done) => {
      process.nextTick(() => {
        const user = req.user
        user.facebook.id = profile.id
        user.facebook.token = token

        user.save((err) => {
          if (err) return console.error(err)
          return done(null, user)
        })
      })
    }
  ))
}


/*--------------------------------------------------------------------------*/
// Routes
/*--------------------------------------------------------------------------*/

router
  .get('/', passport.authenticate('facebookAuthStrategy', { scope: 'email' }))

  .get('/callback', passport.authenticate('facebookAuthStrategy', {
      successRedirect: 'https://tnabt-org.herokuapp.com/',
      failureRedirect: 'https://tnabt-org.herokuapp.com/auth-failure'
  }))


  .get('/connect', passport.authorize('facebookConnectStrategy', { scope: 'email' }))

  .get('/connect/callback', passport.authorize('facebookConnectStrategy', {
      successRedirect: 'https://tnabt-org.herokuapp.com/',
      failureRedirect: 'https://tnabt-org.herokuapp.com/auth-failure'
  }))


module.exports = router

