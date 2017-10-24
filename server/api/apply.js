const router = require('express').Router()
const Member = require('../../db/Members')

router.post('/membership', (req, res) => {
  const testMember = Member(req.body)
  // console.log('testMember:', testMember)

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
