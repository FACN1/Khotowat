const router = require('express').Router()

const helloController = require('./controllers/hello.js')
const resultController = require('./controllers/result.js')

router.get('/hello', helloController)
router.get('/result', resultController)

module.exports = router
