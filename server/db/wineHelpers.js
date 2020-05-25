// *****HELPER FUNCTIONS*******
const connection = require('./postgres').connection // importing the pg connection instance
const wine_keys = require('./wineKeys')

const getFirstNonEmptyValue = (values) => {
  return new Promise((resolve, reject) => {
    // console.log(values.length)
    for (let i = 0; i < values.length; ++i) {
      if (values[i].length !== 0) {
        resolve(values[i])
      } else if ((i + 1) === values.length) // ++i did not work
      {
        console.log('error: resolving false from first non emtpy value')
        resolve(false)
      }
    }
  })
}

const getMajorWineCategory = (values) => {
  return new Promise((resolve, reject) => {
    const category = {}
    // console.log(values[0].province)

    if (values[0].province !== null) {
      if (values[0].province === 'California') {
        category.name = 'California ' + values[0].variety
        category.usingProvince = true
        category.province = 'California'
      } else {
        category.name = values[0].variety
        category.usingProvince = false
        category.province = ''
      }
    } else {
      console.log('Province is null in wines.js line 112')
    }

    // else check other locations ex sicilian or italian

    resolve(category)
  })
}

// this function takes a search key and checks it
// against the wine_keys list to find any potential matches
const searchWineKeys = (productName) => {
  return new Promise((resolve, reject) => {
    productName.name = productName.name.toLowerCase()
    const varietal_matches = []
    let counter = 0

    wine_keys.forEach(wine_key => {
      // console.log(wine_key.wine)
      if (productName.name.includes(wine_key.wine.toLowerCase())) {
        // console.log('its a match: ', wine_key.wine);
        if (productName.usingProvince) {
          if (wine_key.wine.includes(productName.province)) {
            varietal_matches.push(wine_key.wine)
          }
        } else {
          varietal_matches.push(wine_key.wine)
        }
      } else if (wine_key.wine.toLowerCase().includes(productName.name) && !wine_key.wine.includes('blend')) {
        // console.log('its a match: ', wine_key.wine);
        varietal_matches.push(wine_key.wine)
      }

      if (productName.name.includes('blend') && productName.name.includes('red') && wine_key.wine.toLowerCase().includes('blend')) {
        varietal_matches.push(wine_key.wine)
      }

      if (productName.name.includes('zinfandel') && wine_key.wine.toLowerCase().includes('zinfandel')) {
        varietal_matches.push(wine_key.wine)
      }

      counter++
      if (counter === wine_keys.length) {
        resolve(varietal_matches)
      }
    })
  })
}

const winePairing = (wine) => {
  const query =
    `
    SELECT 
    node_edges.wine,
    node_edges.cheese,
    node_edges.id as node_id,
    cheese_nodes.id as cheese_id,
    cheese_nodes.texture, 
    cheese_nodes.country,
    cheese_nodes.animal,
    coalesce(pairs.up_votes, 0) as up_votes,
    coalesce(pairs.down_votes, 0) as down_votes
  
    FROM node_edges 
	
    left join
    cheese_nodes
    on cheese_nodes.name = node_edges.cheese
	
	left join 
	pairs
	on
	 node_edges.wine = pairs.wine and node_edges.cheese = pairs.cheese
	
    WHERE 
    (type = 'cr' OR type = 'cw') 
    and lower(node_edges.wine) like $1
    `
    // returns one wine
  return new Promise((resolve, reject) => {
    connection.any(query, [wine.toLowerCase()])
      .then(somePair => {
        resolve(somePair)
      })
      .catch(err => {
        console.log('Error in db/wine.js', err)
        reject(err)
      })
  })
}

const getPairingsFromKeys = (keyMatches) => {
  return new Promise((resolve, reject) => {
    let counter = 0
    let pairings = []
    keyMatches.forEach(async (varietal) => {
      const tempArr = await winePairing(varietal)
      // console.log(tempArr)
      pairings = pairings.concat(tempArr)
      counter++
      // console.log('pairings: ', pairings)
      if (counter === keyMatches.length) {
        resolve(pairings)
      }
    })
  })
}

const createSearchKeys = (permutations) => {
  return new Promise((resolve, reject) => {
    const searchKeys = []
    for (let i = 0; i < permutations.length; ++i) {
      const sk = permutations[i].join('%') // %merlot%
      // console.log(sk);
      searchKeys.push(sk.toLowerCase())
      // console.log(searchKeys[i])
      if ((i + 1) === permutations.length) {
        resolve(searchKeys)
      }
    }
  })
}

const createQueries = (searchKeys) => {
  return new Promise((resolve, reject) => {
    // console.log(searchKeys)
    const queries = []
    const query =
                    `
                    select
                    *
                    from
                    wines
                    where
                    (lower(variety || ' ' || winery) like $1)
                    or
                    (lower(winery || ' ' || variety) like $1)
                    limit 10
                    `
    for (let i = 0; i < searchKeys.length; ++i) {
      queries.push(connection.any(query, ['%' + searchKeys[i]]))
      if ((i + 1) === searchKeys.length) {
        resolve(queries)
      }
    }
  })
}

module.exports = { createQueries, createSearchKeys, getFirstNonEmptyValue, getMajorWineCategory, getPairingsFromKeys, searchWineKeys }

// *****HELPER FUNCTIONS******* END
