const router = require('express').Router();

const homeController = require('./controllers/home.js');

router.get('/', homeController);

module.exports = router
