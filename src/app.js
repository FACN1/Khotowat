const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const router = require('./router.js')

const app = express()

app.set('port', process.env.PORT || 3000)

app.engine('hbs', exphbs({
  defaultLayout: 'default',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  extname: 'hbs'
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(router)
app.use(express.static(path.join(__dirname, '..', 'public')))

// set up handlebars

module.exports = app
