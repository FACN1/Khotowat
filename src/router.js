const router = require('express').Router();

const homeController = require('./controllers/home.js');
const questionsController = require('./controllers/questions.js');

router.get('/', homeController);
router.get('/questions', questionsController);

module.exports = router
