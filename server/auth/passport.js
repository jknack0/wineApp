const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy
const db = require('../db')

// User Authentication via Passport.

passport.use(
  new LocalStrategy(async function (username, password, done) {
    console.log('\n')

    const currentPasswordHash = await db.users.getPassword(username)

    await bcrypt.compare(password, currentPasswordHash.password, (err, isValid) => {
      if (err) {
        console.error(err)
        return done(err, { message: 'Error encountered.' })
      }

      if (!isValid) {
        console.error(err)
        return done(null, false, { message: 'Incorrect credentials.' })
      }

      console.log('User authenticated: ', username)
      return done(null, username)
    })
  })
)

module.exports = { passport: passport }
