var express = require('express')
var router = express.Router()

const db = require('../db')

// /* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource')
// })

/* POST Creates a new user from a given JSON object. */
router.post('/createSavedPair', async function (req, res) {
  // Store JSON information from req.body to new saved pair
  // const newSavedPair = {
  //   id: req.body.id,
  //   user_id: req.body.user_id,
  //   cheese_id: req.body.cheese_id,
  //   wine_id: req.body.wine_id
  // }

  const newSavedPair = {
    user_id: req.body.user_id,
    node_id: req.body.node_id
  }

  try {
    console.log(newSavedPair)
    // TODO: Check if new_saved_pair already exists in DB and/or check for input validation.
    await db.pairs.insertNewPair(newSavedPair)

    return res.status(201).json({
      message: `New saved pair, user_id: ${newSavedPair.user_id}, node_id: ${newSavedPair.node_id} has been created successfully.`
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      message: 'Error saving a pair from create_saved_pairs route.',
      error: err.code
    })
  }
})

router.post('/upvote', async function (req, res, next) {
  /**
   * this route accepts a json object that contains the following properties
   * {
        "wine": "California Merlot",
        "cheese": "Abondance",
        "node_id": 69,
        "cheese_id": 11,
        "texture": "Semi-hard",
        "country": "France",
        "animal": "Raw cow's milk"
    },
   *
   * if the pair id exists, then increment the upvote feild
   * else
   * create the pair and set upvote to 1
   */

  try {
    console.log('\n')

    const pairData = {
      wine: req.body.wine,
      cheese: req.body.cheese,
      node_id: req.body.node_id,
      cheese_id: req.body.cheese_id,
      texture: req.body.texture,
      country: req.body.country,
      animal: req.body.animal
    }

    console.log('pairData is: ', pairData)

    // updateUpvote will check to see if pair exists in DB. If it exists, upvote it and if not,
    // create the pair and then upvote.
    await db.pairs.updateUpvote(pairData)
    console.log('Pair upvote has been updated successfully.')
    return res.status(202).json({
      message: 'Pair upvote has been updated successfully.'
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ errorMessage: 'Pair upvote failed in /upvote route.' })
  }
})

router.post('/downvote', async function (req, res, next) {
  /**
   * this route accepts a json object that contains the following properties
   * {
        "wine": "California Merlot",
        "cheese": "Abondance",
        "node_id": 69,
        "cheese_id": 11,
        "texture": "Semi-hard",
        "country": "France",
        "animal": "Raw cow's milk"
    },
   *
   * if the pair id exists, then increment the downVote feild
   * else
   * create the pair and set downvote to 1
   */

  try {
    console.log('\n')

    const pairData = {
      wine: req.body.wine,
      cheese: req.body.cheese,
      node_id: req.body.node_id,
      cheese_id: req.body.cheese_id,
      texture: req.body.texture,
      country: req.body.country,
      animal: req.body.animal
    }

    // console.log("pairData is: ", pairData)

    // updateDownVote will check to see if pair exists in DB. If it exists, downvote it and if not,
    // create the pair and then downvote.
    await db.pairs.updateDownvote(pairData)
    console.log('Pair downvote has been updated successfully.')
    return res.status(202).json({
      message: 'Pair downvote has been updated successfully.'
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ errorMessage: 'Pair downvote failed in /downvote route.' })
  }
})

router.get('/getPopularPairings', async function (req, res, next) {
  try {
    const popularPairs = await db.pairs.getPopularPairs()
    res.status(200).send(popularPairs)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/getSavedPairs', async function (req, res, next) {
  /**
   * this route requires a json object with the following parameters
   * {
   *  user_id: ""
   * }
   *
   * select * from saved_pairs where user_id = 'SOME USER ID'
   */

  console.log('get saved pairings:', req.body)
  try {
    const pairData = await db.pairs.getSavedPairs(req.body)
    //console.log('returned pair data:', pairData)
    res.status(200).send(pairData)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

module.exports = router
