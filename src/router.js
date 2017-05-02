const router = require('express').Router()

const resultController = require('./controllers/result.js');

router.get('/result', resultController);

module.exports = router
