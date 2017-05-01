const express = require('express')
const app = express()
const path = require('path')

const router = require('./router.js')

app.use(express.static(path.join(__dirname, '..','public')));

// set up handlebars

app.use(router)

module.exports = app;
