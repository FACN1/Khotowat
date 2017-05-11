const router = require('express').Router();

const homeController = require('./controllers/home.js');
const question1Controller = require('./controllers/question1.js');
const question2Controller = require('./controllers/question2.js');
const question3Controller = require('./controllers/question3.js');
const finishController = require('./controllers/finish.js');
const resultController = require('./controllers/result.js');

router.get('/', homeController);
router.get('/question1', question1Controller);
router.get('/question2', question2Controller);
router.get('/question3', question3Controller);
router.get('/finish', finishController)
router.get('/result', resultController)

module.exports = router
