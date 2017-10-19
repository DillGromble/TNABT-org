const router = require('express').Router()


router.post('/contact-us', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

module.exports = router
