const express = require('express')
const router = express.Router()
const db = require('../db/index.js')

/* GET home page. */
router.get('/getTeamMembers', async (req, res, next) => {
  try {
    const teamMembers = await db.team.getTeamMembers()
    //console.log('team :' , teamMembers)
    res.status(200).send(teamMembers)
  } catch (e) {
    res.status(200).send(e)
  }
})

// returns one team member by firstname
router.get('/getTeamMember/:first_name', async (req, res, next) => {
  // console.log(req.params.first_name);
  try {
    const teamMember = await db.team.getTeamMember(req.params.first_name)
    res.status(200).send(teamMember)
  } catch (e) {
    res.status(200).send(e)
  }
})

module.exports = router
