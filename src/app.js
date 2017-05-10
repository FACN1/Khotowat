const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const router = require('./router.js')
const mailer = require('express-mailer')

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

mailer.extend(app, {
  from: 'no-reply@example.com',
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'gmail.user@gmail.com',
    pass: 'userpass'
  }
})

module.exports = app
