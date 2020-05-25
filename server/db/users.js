// Establish a connection to the PG database.
const connection = require('./postgres').connection

class users {
  // create_user takes in a newUserData object and returns nothing
  static create_user (newUserData) {
    // Create the SQL query for the database.
    const query = `INSERT INTO users(first_name, last_name, age, gender, preferred_wines, preferred_cheeses, username, password, email) 
                     VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`

    // console.log("New User: ", newUserData);

    // Send the SQL query to the database along with the necessary variables from the JSON object. Don't expect anything to be returned.
    return new Promise((resolve, reject) => {
      connection
        .none(query, [
          newUserData.firstName.toLowerCase(),
          newUserData.lastName.toLowerCase(),
          newUserData.age,
          newUserData.gender,
          newUserData.preferred_wines,
          newUserData.preferred_cheeses,
          newUserData.username.toLowerCase(),
          newUserData.password,
          newUserData.email
        ])
        .then(async () => {
          // Successfully created a new user. Now return user object back to frontend.
          let userObject = await users.getUserInfo(newUserData.username.toLowerCase())
          resolve(userObject)
        })
        .catch((err) => {
          console.error(err)
          reject({
            errorMessage: 'Error creating new User in create_user class.'
          })
        })
    })
  }

  // getUsers takes in nothing and returns many things in the form of an object.
  static getUsers () {
    const query = 'SELECT * FROM users'

    // Promise will return all users in an object.
    return new Promise((resolve, reject) => {
      connection
        .many(query, [])
        .then((data) => {
          // Successfully fetched all users.
          resolve(data)
        })
        .catch((err) => {
          console.error(err)
          reject({
            errorMessage: 'Error fetching all users in getUsers class.'
          })
        })
    })
  }

  // getUserInfo will grab the entire user object whose username is the same as the argument.
  static getUserInfo (username) {
    const query = `SELECT id, username, email, first_name, last_name, age, gender, preferred_wines, preferred_cheeses, created_at
                   FROM users
                   WHERE username = $1`

    return new Promise((resolve, reject) => {
      connection.one(query, [username]).then(data => {
        resolve(data)
      }).catch(err => {
        console.error(err)
        reject({
          errorMessage: 'Error fetching all users in getUsers class.'
        })
      })
    })
  }

  // updatePassword takes in a new password and user strings and returns nothing.
  static updatePassword (newPassword, user) {
    const query = `UPDATE users SET password = $1 
                     WHERE username = $2`

    return new Promise((resolve, reject) => {
      connection
        .none(query, [newPassword, user])
        .then(() => {
          // Successfully updated the user's password.
          resolve()
        })
        .catch((err) => {
          console.error(err)
          reject({
            errorMessage: `Error trying to update ${user}'s password in updatePassword class.`
          })
        })
    })
  }

  // getPassword takes in a user string and returns a currentPassword string.
  static getPassword (user) {
    const query = `SELECT password 
                     FROM users 
                     WHERE lower(username) = $1`

    // Promise will return the user's password as a string.
    return new Promise((resolve, reject) => {
      connection
        .one(query, [user.toLowerCase()])
        .then((currentPassword) => {
          resolve(currentPassword)
        })
        .catch((err) => {
          console.error(err)
          reject({
            errorMessage: `Error fetching ${user}'s password in getPassword class.`
          })
        })
    })
  }

  static updateUserInfo (username, email, oldUsername) {
    const query = `UPDATE users
                     SET username = $1, email = $2
                     WHERE username = $3`

    console.log(`Updating ${username}'s information...`)

    return new Promise((resolve, reject) => {
      connection
        .none(query, [username, email, oldUsername])
        .then(() => {
          resolve()
        })
        .catch((err) => {
          console.error(err)
          return reject({
            errorMessage: `Error updating ${username}'s information in updateUserInfo class.`
          })
        })
    })
  }

  static getUserPreferences (username) {
    const query = `SELECT preferred_wines, preferred_cheeses
                     FROM users
                     WHERE username = $1`

    return new Promise((resolve, reject) => {
      connection
        .many(query, [username])
        .then((data) => {
          resolve(data)
        })
        .catch((err) => {
          console.error(err)
          return reject({ errorMessage: `Error fetching ${username}'s preferences in getUserPreferences class.` })
        })
    })
  }

  static updateUserPreferences (preferred_wines, preferred_cheeses, username) {
    const query = `UPDATE users
                     SET preferred_wines = $1, preferred_cheeses = $2
                     WHERE username = $3`

    return new Promise((resolve, reject) => {
      connection
        .none(query, [preferred_wines, preferred_cheeses, username])
        .then(() => {
          resolve()
        })
        .catch((err) => {
          console.error(err)
          return reject({ errorMessage: `Error updating ${username}'s preferences in updateUserPreferences class.` })
        })
    })
  }

  static getUserLoginInfo (userId) {
    const query = `SELECT id, username, email, first_name, last_name, age, gender, preferred_wines, preferred_cheeses, created_at
                   FROM users
                   WHERE id = $1`

    return new Promise((resolve, reject) => {
      connection.one(query, [userId]).then(data => {
        resolve(data)
      }).catch(err => {
        console.error(err)
        reject({
          errorMessage: 'Error fetching user login\'s information from class getUserLoginInfo'
        })
      })
    })
  }
}

module.exports = users
