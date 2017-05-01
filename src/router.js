const router = require('express').Router()

const helloController = require('./controllers/hello.js')

router.get('/hello', helloController)

module.exports = router
