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
    Member.find({ email: req.body.email }, (err, doc) => {
      if (err) console.error(err)
      if (doc.length) {
        return res.status(409).send('E-mail already exists!')
      }
      else {
        Member.create(req.body, (error, member) => {
          if (error) console.error(error)
          console.log('user created: ', member)
          res.status(200).send()
        })
      }
    })
  })


module.exports = router
