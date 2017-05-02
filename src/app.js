const express = require('express')
const path = require('path')  
const exphbs = require('express-handlebars')
const router = require('./router.js')

const app = express()

app.engine('hbs', exphbs({
  defaultLayout: 'default',
  layoutsDir: path.join(__dirname, "views", "layouts"),
  extname: 'hbs'
}))

app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, '..','public')));

// set up handlebars

app.use(router)

module.exports = app;
