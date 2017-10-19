const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const path = require('path')

const app = express()


app
  .use(morgan('dev'))
  .use(express.static(path.resolve(__dirname, '..', 'client/build')))

  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

  .use('/api', require('./api'))

  .get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client/build/index.html'))
  })


module.exports = app
