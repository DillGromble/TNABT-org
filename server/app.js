const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()


app
  .use(morgan('combined'))
  .use(express.static(path.resolve(__dirname, '..', 'client/build')))

  .use('/api', require('./api'))

  .get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client/build/index.html'))
  })

module.exports = app
