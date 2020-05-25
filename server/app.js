const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('passport')
const session = require('express-session')

global.__basedir = __dirname // this global variable is used in routing

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const teamRouter = require('./routes/team')
const wineRouter = require('./routes/wine')
const pairRouter = require('./routes/pairs')
const cheeseRouter = require('./routes/cheese')

const app = express()

// app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
  secret: 'cookie_monster',
  resave: true,
  saveUninitialized: true,
  cookie: {httpOnly: false, maxAge: 24 * 60 * 60 * 1000 }
}))

// serving /frontend build folder on port 4000
app.use(express.static(path.join(__dirname, '/build')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/team', teamRouter)
app.use('/wine', wineRouter)
app.use('/cheese', cheeseRouter)
app.use('/pairs', pairRouter)

// Initialize passport authentication
app.use(passport.initialize())

module.exports = app
