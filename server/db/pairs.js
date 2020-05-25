const connection = require('./postgres').connection

const getFinalPairs = (pairs) => {
  return new Promise(async (resolve,reject) => {
    
    let query =
      `
      select
      *
      from
      wines
      where
      ($1 like '%' || variety)
      or
      ($1 like '%' || province || '%')
      limit 5
      `
    
    for (let i = 0; i < pairs.length; ++i) {
      let wineData = await connection.any(query, [pairs[i].wine,])
      pairs[i].wine_list = wineData
      if ((i + 1) === pairs.length) {
        resolve(pairs)
      }
    }

  })
}

class pairs {
  static insertNewPair (newSavedpair) {
    console.log('Saved Pair: ', newSavedpair)

    // Create the SQL query for the database.
    const query =
      'INSERT INTO saved_pairs(user_id, node_id) VALUES($1, $2)'

    // Send the SQL query to the database along with the necessary variables from the JSON object. Don't expect anything to be returned.
    return new Promise((resolve, reject) => {
      connection
        .none(query, [
          newSavedpair.user_id,
          newSavedpair.node_id
        ])
        .then(() => {
          // Successfully created a new pairs.
          resolve()
        })
        .catch((err) => {
          console.error(err)
          reject(err)
        })
    })
  }

  static getSavedPairs (user_info) {
    console.log('user_info: ', user_info)

    // Create the SQL query for the database.

    const query =
      `
      select 

      node_edges.wine,
        node_edges.cheese,
        node_edges.id as node_id,
        cheese_nodes.id as cheese_id,
        cheese_nodes.texture, 
        cheese_nodes.country,
        cheese_nodes.animal,
        coalesce(pairs.up_votes, 0) as up_votes,
        coalesce(pairs.down_votes, 0) as down_votes

      from 
      saved_pairs

      left join node_edges
      on
      node_edges.id = saved_pairs.node_id

      left join
      cheese_nodes
      on cheese_nodes.name = node_edges.cheese

      left join 
      pairs
      on
      node_edges.wine = pairs.wine and node_edges.cheese = pairs.cheese

      where 
      user_id = $1
      and 
      (type = 'cr' OR type = 'cw')

      `

    // Send the SQL query to the database along with the necessary variables from the JSON object. Don't expect anything to be returned.
    return new Promise((resolve, reject) => {
      connection
        .any(query, [
          user_info.user_id
        ])
        .then(async (pairs) => {
          // Successfully created a new pairs.
          let finalPairs = await getFinalPairs(pairs)
          resolve(finalPairs)
        })
        .catch((err) => {
          console.error(err)
          reject(err)
        })
    })
  }

  // This helper function will grab the upvotes and return it as an integer.
  static async getUpvotePromiseFunction (pairID) {
    const getUpvotesQuery =
      `
        SELECT up_votes
        FROM pairs
        WHERE id = $1
      `

    return await new Promise(async function (resolve, reject) {
      await connection.one(getUpvotesQuery, [pairID]).then(data => {
        const tempUpvote = parseInt(data.up_votes)
        resolve(tempUpvote)
      }).catch(err => {
        console.error(err)

        reject({
          errorMessage: 'Error trying to fetch upvotes from database.'
        })
      })
    })
  }

  static getPopularPairs () {
    const popPairsQuery = 
    `
    select 
    pairs.wine,
    pairs.cheese,
    pairs.node_id,
      cheese_nodes.id as cheese_id,
      cheese_nodes.texture, 
      cheese_nodes.country,
      cheese_nodes.animal,
  pairs.up_votes,
  pairs.down_votes
    from 
    pairs

    left join
    cheese_nodes
    on cheese_nodes.name = pairs.cheese

    ORDER BY pairs.ratio DESC
    LIMIT 20
      `

    return new Promise((resolve, reject) => {
      connection.many(popPairsQuery, [])
        .then(async pairs => {
          let finalPairs = await getFinalPairs(pairs)
          resolve(finalPairs)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  // This helper function will grab the downvotes and return it as an integer.
  static async getDownvotePromiseFunction (pairID) {
    const getDownvotesQuery =
      `
        SELECT down_votes
        FROM pairs
        WHERE id = $1
      `

    return await new Promise(async function (resolve, reject) {
      await connection.one(getDownvotesQuery, [pairID]).then(data => {
        const tempDownvote = parseInt(data.down_votes)
        resolve(tempDownvote)
      }).catch(err => {
        console.error(err)

        reject({
          errorMessage: 'Error trying to fetch downvotes from database.'
        })
      })
    })
  }

  // Upvote and downvote ratio helper function for pairs.
  static ratioHelperFunction (upvotes, downvotes) {
    const ratio = Math.abs((upvotes - downvotes) / 10)
    return ratio
  }

  // Checks if pair id already exists in database and then upvotes it. If not, create the pair and then upvote it.
  static async updateUpvote (pairData) {
    // Get the pair's unique id from the DB by searching on node_id and cheese_id.
    let pairExists = false
    let newPairID = 0

    // upvoteQuery will set the new upvote to the pair and update its ratio as well.
    const upvoteQuery =
      `
        UPDATE pairs
        SET up_votes = $1, ratio = $2
        WHERE id = $3
      `

    console.log('Checking if pair exists...')

    // First, check to see if this pair exists. If not, set pairExists to false and proceed to the else block.
    const pairID = await new Promise(async function (resolve, reject) {
      const query =
      `
        SELECT id
        FROM pairs
        WHERE id = (SELECT id
                    FROM pairs
                    WHERE node_id = $1 AND cheese_id = $2)
      `

      await connection.oneOrNone(query, [pairData.node_id, pairData.cheese_id]).then(data => {
        if (data === null) {
          console.log('Pair does not exist. Creating new pair...')
          pairExists = false
        } else {
          console.log('Pair exists already. Will now increment upvote...')
          pairExists = true
        }

        resolve(data)
      }).catch(err => {
        console.error(err)

        reject({
          errorMessage: 'Error trying to find this pair in updateUpvote class by searching its node_id and cheese_id.'
        })
      })
    })

    // If pairID exists...
    if (pairExists) {
      // Grab the upvotes first into pairUpvotes and then increment it.
      var pairUpvotes = await pairs.getUpvotePromiseFunction(pairID.id)
      pairUpvotes = pairUpvotes + 1

      // Grab the downvotes next and then calculate the ratio between the upvotes and downvotes.
      var pairDownvotes = await pairs.getDownvotePromiseFunction(pairID.id)
      const pairRatio = await pairs.ratioHelperFunction(pairUpvotes, pairDownvotes)

      return new Promise(async function (resolve, reject) {
        await connection.none(upvoteQuery, [pairUpvotes, pairRatio, pairID.id]).then(() => {
          console.log(`Upvote successful for pair id ${pairID.id}`)

          resolve()
        }).catch(err => {
          console.error(err)

          reject({
            errorMessage: `Error incrementing upvote whose unique pair id = ${pairID.id}`
          })
        })
      })
    } else {
      // If pairID does not exists, create the pair using pairData and then upvote it via Promise chaining.
      return new Promise(async function (resolve, reject) {
        const query =
        `
          INSERT INTO pairs(id, node_id, cheese_id, wine, cheese, up_votes, down_votes, ratio)
          VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        `

        // id = "node_id"-"cheese_id"
        newPairID = String(pairData.node_id) + '-' + String(pairData.cheese_id)

        // Made sure to set upvotes, downvotes, and ratio to 0 by default for this new pair.
        await connection.none(query, [newPairID, pairData.node_id, pairData.cheese_id, pairData.wine, pairData.cheese, 0, 0, 0])
          .then(async () => {
            console.log(`New pair id ${newPairID} has been created successfully.`)

            // Now that the new pair is created, upvote it.
            var newPairUpvotes = await pairs.getUpvotePromiseFunction(newPairID)
            newPairUpvotes = newPairUpvotes + 1

            // Grab the downvotes next and then calculate the ratio between the upvotes and downvotes.
            var newPairDownvotes = await pairs.getDownvotePromiseFunction(newPairID)
            const newPairRatio = await pairs.ratioHelperFunction(newPairUpvotes, newPairDownvotes)

            connection.none(upvoteQuery, [newPairUpvotes, newPairRatio, newPairID]).then(() => {
              console.log(`Upvote successful for pair id ${newPairID}`)

              resolve()
            }).catch(err => {
              // This catch block is for incrementing upvote right after creating the new pair.
              console.error(err)

              reject({
                errorMessage: `Error incrementing upvote whose unique pair id = ${newPairID} 
                right after creating the new pair as it did not exist before.`
              })
            })
          }).catch(err => {
            // This catch block is for creating a new pair based on pairData.
            console.error(err)

            reject({
              errorMessage: 'Error creating a new pair using pairData into pairs table.'
            })
          })
      })
    }
  }

  // Checks if pair id already exists in database and then downvotes it. If not, create the pair and then downvote it.
  static async updateDownvote (pairData) {
  // Get the pair's unique id from the DB by searching on node_id and cheese_id.
    let pairExists = false
    let newPairID = 0

    // upvoteQuery will set the new upvote to the pair and update its ratio as well.
    const downvoteQuery =
    `
      UPDATE pairs
      SET down_votes = $1, ratio = $2
      WHERE id = $3
    `

    console.log('Checking if pair exists...')

    // First, check to see if this pair exists. If not, set pairExists to false and proceed to the else block.
    const pairID = await new Promise(async function (resolve, reject) {
      const query =
    `
    select 
    pairs.id from pairs
    WHERE node_id = $1 AND cheese_id = $2
    `

      await connection.oneOrNone(query, [pairData.node_id, pairData.cheese_id]).then(data => {
        if (data === null) {
          console.log('Pair does not exist. Creating new pair...')
          pairExists = false
        } else {
          console.log('Pair exists already. Will now increment downvote...')
          pairExists = true
        }

        resolve(data)
      }).catch(err => {
        console.error(err)

        reject({
          errorMessage: 'Error trying to find this pair in updateDownvote class by searching its node_id and cheese_id.'
        })
      })
    })

    // If pairID exists...
    if (pairExists) {
    // Grab the upvotes first into pairUpvotes.
      var pairUpvotes = await pairs.getUpvotePromiseFunction(pairID.id)

      // Grab the downvotes next, increment it, and then calculate the ratio between the upvotes and downvotes.
      var pairDownvotes = await pairs.getDownvotePromiseFunction(pairID.id)
      pairDownvotes = pairDownvotes + 1
      const pairRatio = await pairs.ratioHelperFunction(pairUpvotes, pairDownvotes)

      return new Promise(async function (resolve, reject) {
        await connection.none(downvoteQuery, [pairDownvotes, pairRatio, pairID.id]).then(() => {
          console.log(`Downvote successful for pair id ${pairID.id}`)

          resolve()
        }).catch(err => {
          console.error(err)

          reject({
            errorMessage: `Error incrementing downvote whose unique pair id = ${pairID.id}`
          })
        })
      })
    } else {
    // If pairID does not exists, create the pair using pairData and then downvote it via Promise chaining.
      return new Promise(async function (resolve, reject) {
        const query =
      `
        INSERT INTO pairs(id, node_id, cheese_id, wine, cheese, up_votes, down_votes, ratio)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
      `

        // id = "node_id"-"cheese_id"
        newPairID = String(pairData.node_id) + '-' + String(pairData.cheese_id)

        // Made sure to set upvotes, downvotes, and ratio to 0 by default for this new pair.
        await connection.none(query, [newPairID, pairData.node_id, pairData.cheese_id, pairData.wine, pairData.cheese, 0, 0, 0])
          .then(async () => {
            console.log(`New pair id ${newPairID} has been created successfully.`)

            // Now that the new pair is created, downvote it.
            var newPairUpvotes = await pairs.getUpvotePromiseFunction(newPairID)

            // Grab the downvotes next and then calculate the ratio between the upvotes and downvotes.
            var newPairDownvotes = await pairs.getDownvotePromiseFunction(newPairID)
            newPairDownvotes = newPairDownvotes + 1
            const newPairRatio = await pairs.ratioHelperFunction(newPairUpvotes, newPairDownvotes)

            connection.none(downvoteQuery, [newPairDownvotes, newPairRatio, newPairID]).then(() => {
              console.log(`Downvote successful for pair id ${newPairID}`)

              resolve()
            }).catch(err => {
            // This catch block is for incrementing downvote right after creating the new pair.
              console.error(err)

              reject({
                errorMessage: `Error incrementing downvote whose unique pair id = ${newPairID} 
              right after creating the new pair as it did not exist before.`
              })
            })
          }).catch(err => {
          // This catch block is for creating a new pair based on pairData.
            console.error(err)

            reject({
              errorMessage: 'Error creating a new pair using pairData into pairs table.'
            })
          })
      })
    }
  }
}

module.exports = pairs
