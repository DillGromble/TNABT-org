const router = require('express').Router()


router.post('/membership', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

module.exports = router
