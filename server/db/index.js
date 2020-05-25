/**
 * This file will import the database orm objects and then export them
 * as a single object.  You can then utilize the methods to for CRUD operations
 */

const team = require('./team.js')
const wine = require('./wine.js')
const users = require('./users.js')
const pairs = require('./pairs.js')
const cheese = require('./cheese.js')

module.exports = { team: team, wine: wine, users: users, pairs: pairs, cheese: cheese }
