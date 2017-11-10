require('newrelic')
const express = require('express')
const session = require('cookie-session')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy


const Member = require('../db/Members')

const app = express()

app
  .use(morgan('dev'))
  .use(express.static(path.resolve(__dirname, '..', 'client/build')))


  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

  .use(session({
    name: 'session',
    secret: process.env.SECRET || 'doot is the word'
  }))

  .use(passport.initialize())
  .use(passport.session())

  .use('/api', require('./api'))

  .get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client/build/index.html'))
  })

  .use((err, req, res, next) => {
    console.error(err)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })

passport.use(new LocalStrategy(Member.authenticate()))
passport.serializeUser(Member.serializeUser())
passport.deserializeUser(Member.deserializeUser())

module.exports = app
