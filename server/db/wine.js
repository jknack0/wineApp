const connection = require('./postgres').connection // importing the pg connection instance
const axios = require('axios')
const Combinatronics = require('js-combinatorics')
const wineHelper = require('./wineHelpers') // the wine helpers module contains useful functions needed for pairing
const wine_keys = require('./wineKeys')

class wine {
  static getPairing (search) {
    console.log('This is the search: ', search)
    search = search.toLowerCase()

    return new Promise(async (resolve, reject) => {
      const tokens = search.split(' ')
      const cmb = await Combinatronics.permutation(tokens)
      const permutations = await cmb.toArray()
      const searchKeys = await wineHelper.createSearchKeys(permutations)
      const queries = await wineHelper.createQueries(searchKeys)
      Promise.all(queries).then(async values => {
        // console.log(values)
        let wineData = await wineHelper.getFirstNonEmptyValue(values) // write a subroute to find the first no empty index in the array
        // console.log('winedata: ', wineData)
        if (!wineData) // if every array is empty, then the key does not exisit in our wine csv.
        {
          wineData = []
          const tempWineObj =
          {
            province: '',
            variety: search
          }
          wineData.push(tempWineObj)
        }
        // console.log(wineData)
        const majorWineCategory = await wineHelper.getMajorWineCategory(wineData)
        // console.log(majorWineCategory) // California sauv blanc
        const keyMatches = await wineHelper.searchWineKeys(majorWineCategory) // majorWineCategory is now an object
        // console.log('matches', keyMatches)
        const finalPairings = [{ wine_props: wineData }].concat(await wineHelper.getPairingsFromKeys(keyMatches))

        resolve(finalPairings)
      }).catch(err => {
        console.log('error in promise all in wine', err)
      })
    })
  }

  static getPairingBarcode (wine_barcode) {
    console.log('This is the wine barcode: ', wine_barcode)

    return new Promise(async (resolve, reject) => {
      axios.get(`https://api.barcodelookup.com/v2/products?barcode=${wine_barcode}&formatted=y&key=i9s4tvaagcpalxjyd9fkply2tv2s8z`)
        .then(response => {
          const products = response.data.products
          const productName = products[0].product_name.toLowerCase()
          console.log(products[0].product_name)

          const varietal_matches = []

          wine_keys.forEach(wine_key => {
            // console.log(wine_key.wine)
            if (productName.includes(wine_key.wine.toLowerCase())) {
              // console.log('its a match: ', wine_key.wine);
              varietal_matches.push(wine_key.wine)
              // console.log('TESTING, TESTING, TESTING, TESTING, TESTING')
              //console.log(varietal_matches)
            }

            if (productName.includes('blend') && productName.includes('red') && wine_key.wine.toLowerCase().includes('blend')) {
              varietal_matches.push(wine_key.wine)
            }

            if (productName.includes('zinfandel') && wine_key.wine.toLowerCase().includes('zinfandel')) {
              varietal_matches.push(wine_key.wine)
            }
          })

          // at this point varietal matches contains all of the varietal keys
          // that we need to get a cheese pairing

          // !!! this procedure could have errors due to java asycnourisiouctiy

          const pairings = []
          let counter = 0

          varietal_matches.forEach(async (varietal) => {
            const tempArr = await wine.getPairing(varietal)
            // console.log(tempArr)
            tempArr.forEach(pairing => {
              pairings.push(pairing)
            })
            counter++
            if (counter === varietal_matches.length) {
              //console.log('pairings: ', pairings)
              resolve(pairings)
            }
          })
        })
        .catch(error => {
          // console.log(error)
          reject({ note: 'unable to find item', error: error })
        })
    })
  }

  // static getWine (wine_type, winery) {
  //   console.log('This is the wine type: ', wine_type)
  //   console.log('this is the winery: ', winery)

  //   const query = 'SELECT ' + wine_type + ' FROM wine ORDER BY ' + winery + ' LIMIT 1;'

  //   // select brand from wines order by wine_type
  //   return new Promise((resolve, reject) => {
  //     connection.any(query, [])
  //       .then(someWine => {
  //         resolve(someWine)
  //       })
  //       .catch(err => {
  //         reject(err)
  //       })
  //   })
  // }

  // static getWine (wine_type) {
  //   console.log('This is the wine type: ', wine_type)

  //   const query = 'SELECT * FROM wines W WHERE W.variety = ' + wine_type + ' ORDER BY RANDOM() LIMIT 1;'

  //   // returns one wine
  //   return new Promise((resolve, reject) => {
  //     connection.any(query, [])
  //       .then(randomWine => {
  //         resolve(randomWine)
  //       })
  //       .catch(err => {
  //         reject(err)
  //       })
  //   })
  // }

  static getRandomWine (wine_type) {
    console.log('This is the wine: ', wine_type)

    const query = 'SELECT * FROM wines W WHERE W.variety = \'' + wine_type + '\'  ORDER BY RANDOM() LIMIT 1;'

    return new Promise((resolve, reject) => {
      connection.any(query, [])
        .then(randomWine => {
          resolve(randomWine)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

module.exports = wine

/* const query =
    `
       SELECT
       wine,
       cheese
       FROM node_edges
       WHERE
       (type = 'cr' OR type = 'cw')
       and lower(wine) like $1
    `
    // returns one wine
    return new Promise((resolve, reject) => {
      connection.any(query, [wine])
        .then(somePair => {
          resolve(somePair)
        })
        .catch(err => {
          console.log('Error in db/wine.js', err)
          reject(err)
        })
    }) */
