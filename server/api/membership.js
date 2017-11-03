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
    const testMember = Member(req.body)

    testMember.save(function (err) {
      if (err) throw err
      console.log('user created!')
    })

    Member.find({}, function (err, found) {
      if (err) throw err
      console.log(found)
    })
  })


module.exports = router
