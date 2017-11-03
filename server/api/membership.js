const router = require('express').Router()
const Member = require('../../db/Members')


router
  .get('/members', (req, res, next) => {
    Member.find({}, (err, members) => {
      if (err) throw err
      res.status(200).json(members)
    })
  })

  .post('/apply', (req, res) => {
    Member.create(req.body, (err, member) => {
        if (err) throw err
        console.log('user created: ', member)
        res.status(200).send()
      })
  })


module.exports = router
