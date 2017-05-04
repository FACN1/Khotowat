const router = require('express').Router();

const homeController = require('./controllers/home.js');
const questionsController = require('./controllers/questions.js');
const finishController = require('./controllers/finish.js');
const resultController = require('./controllers/result.js');

router.get('/', homeController);
router.get('/questions', questionsController);
router.get('/finish', finishController)
router.get('/result', resultController)

module.exports = router
