const express = require('express')
const router = express.Router()

const passport = require('../auth/passport.js').passport
const bcrypt = require('bcrypt')
const saltRounds = 10

const db = require('../db')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

/* POST Logs a user in using their {username, password} in a JSON object via Passport authentication. */

router.post('/login', passport.authenticate('local', { session: false }), async function (req, res, next) {
  try {
    // req.session.loggedin = true;

    const username = req.body.username

    console.log(`User ${username} is now logged in.`)
    const userInfo = await db.users.getUserInfo(username)
    res.status(202).send(userInfo)
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      errorMessage: 'Error in login route'
    })
  }
})

/* POST Creates a new user from a given JSON object. */
router.post('/create_user', async function (req, res) {
  try {
    console.log('\n')

    // Store JSON information from req.body to newUser.
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      gender: req.body.gender,
      preferred_wines: {
        Red: true,
        White: true
      },
      preferred_cheeses: {
        Hard: true,
        'Semi-Hard': true,
        'Semi-Soft': true,
        Soft: true
      },
      username: req.body.username.toLowerCase(),
      password: req.body.password,
      email: req.body.email
    }

    // Encrypt user password with bcrypt.
    await bcrypt
      .hash(newUser.password, saltRounds)
      .then(function (hash) {
        newUser.password = hash
      })
      .catch((err) => {
        console.error(err)
        return res.status(500).json({ message: 'Error hashing password.' })
      })

    // Calculate user's age and store into newUser.age. Assumes YYYY-MM-DD format for req.body.age.
    newUser.age = new Date(newUser.age)
    var difference = Date.now() - newUser.age.getTime()
    var dt = new Date(difference)
    newUser.age = Math.abs(dt.getUTCFullYear() - 1970)

    // TODO: Check if newUser already exists in DB and/or check for input validation.

    console.log(newUser)

    const newUserObject = await db.users.create_user(newUser)
    console.log(`New user ${newUser.username} has been created successfully.`)
    return res.status(201).send(newUserObject)
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      errorMessage: 'Error creating a new user from create_user route.'
    })
  }
})

/* GET Fetches all users. */
router.get('/getUsers', async (req, res) => {
  try {
    console.log('\n')
    console.log('Fetching all users from database...')
    const allUsers = await db.users.getUsers()
    res.status(200).send(allUsers)
    //console.log('all users: ', allUsers)
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      errorMessage: 'Error fetching all users from getUsers route.'
    })
  }
})

/* POST Updates user's password. */
router.post('/updatePassword', passport.authenticate('local', { session: false }), async function (req, res) {
  try {
    console.log('\n')

    const oldPassword = req.body.password
    var newPassword = req.body.new_password
    const user = req.body.username

    // Check if password given matches with the user's password in DB. If so, create a new hash for the new password.
    const currentPasswordHash = await db.users.getPassword(user)

    // TODO: Check if new password is valid.

    await bcrypt.compare(oldPassword, currentPasswordHash.password, async function (err, same) {
      if (same) {
        newPassword = await bcrypt
          .hash(newPassword, saltRounds)
          .then(function (hash) {
            newPassword = hash
            db.users.updatePassword(newPassword, user)
            console.log("User's password has been updated successfully.")
            return res.status(202).json({
              message: "User's password has been updated successfully."
            })
          })
          .catch((err) => {
            console.error(err)
            return res.status(500).json({
              message: 'Error hashing password in route.'
            })
          })
      } else {
        console.error(err)
        return res.status(500).json({
          errorMessage: 'Error! Compared passwords were not the same.',
          error: err
        })
      }
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      errorMessage: 'Error updating password in route.'
    })
  }
})

/* POST Authenticates user based on their username and password in JSON object and then updates their information. */
router.post('/updateUserInfo', passport.authenticate('local', { session: false }), async function (req, res) {
  try {
    console.log('\n')

    // This assumes that frontend checks that these fields are not empty. Assumes frontend uses age calculation algorithm
    // like in create_user route to get User's age from their birth date.
    var userInfo = {
      newEmail: req.body.newEmail,
      newUsername: req.body.newUsername,
      oldUsername: req.body.username
    }

    if (userInfo.newUsername === '' || userInfo.newEmail === '') {
      return res.status(500).json({ errorMessage: 'Fields cannot be empty.' })
    }

    await db.users.updateUserInfo(userInfo.newUsername, userInfo.newEmail, userInfo.oldUsername)

    console.log("User's information has been updated successfully.")
    return res.status(202).json({
      message: "User's information has been updated successfully."
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ errorMessage: 'Error occurred in updateUserInfo route.' })
  }
})

/* GET Fetch the user's preferences in a object. */
router.get('/getUserPreferences', async function (req, res) {
  try {
    console.log('\n')
    const username = req.body.username
    console.log(`Fetching ${username}'s wine and cheese preferences from database...`)
    const userPreferences = await db.users.getUserPreferences(username)
    res.status(200).send(userPreferences)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ errorMessage: `Error fetching ${username}'s preferences in getUserPreferences route.` })
  }
})

/* POST Update the user's wine and cheese preferences after authentication. */
router.post('/updateUserPreferences', async function (req, res) {
  try {
    console.log('\n')

    const newPreferences = {
      preferred_wines: req.body.preferred_wines,
      preferred_cheeses: req.body.preferred_cheeses
    }

    const username = req.body.username

    console.log(`Updating ${username}'s wine and cheese preferences...`)

    await db.users.updateUserPreferences(newPreferences.preferred_wines, newPreferences.preferred_cheeses, username)
    console.log("User's preferences has been updated successfully.")
    return res.status(202).json({
      message: "User's preferences has been updated successfully."
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ errorMessage: `Error updating ${username}'s preferences in updateUserPreferences route.` })
  }
})

router.post('/refresh/', async function (req, res) {
  try {
    console.log('\n')
    const userID = req.body.id
    console.log(`Fetching ${userID} userID login's info from database...`)
    const userLoginInfo = await db.users.getUserLoginInfo(userID)
    res.status(200).send(userLoginInfo)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ errorMessage: `Error fetching ${userID} userID login's info in refresh route.` })
  }
})

module.exports = router
