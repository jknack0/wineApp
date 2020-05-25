const connection = require('./postgres').connection
const Combinatronics = require('js-combinatorics')
const wineHelper = require('./wineHelpers') // the wine helpers module contains useful functions needed for pairing
const cheeseHelper = require('./cheeseHelper')
const cheese_keys = require('./cheeseKeys')
const axios = require('axios')

class cheese {
  static getCheesePairing (search) {
    console.log('Now finding wine pairs for cheese type: ', search)
    // the double wild card symbol in conjuction with the lower( ) in the query
    // will ensure that we get all possible wine matches in the db
    
    return new Promise(async (resolve, reject) => {
        const tokens = search.split(' ')
        const cmb = await Combinatronics.permutation(tokens)
        const permutations = await cmb.toArray()
        const searchKeys = await wineHelper.createSearchKeys(permutations)
        const queries = await cheeseHelper.createQueries(searchKeys)
        Promise.all(queries).then(async values => {
          //console.log(values)
          let cheeseData = await wineHelper.getFirstNonEmptyValue(values) // write a subroute to find the first no empty index in the array
          // console.log('winedata: ', wineData)
          const finalPairings = [{ wine_props: [] }].concat(cheeseData)
          resolve(finalPairings)
        }).catch(err => {
          console.log('error in promise all in wine', err)
        })

      }).catch((err) => {
        console.error(err)
        reject(err)
      })
    }

  static getCheesePairingBarcode (cheese_barcode) {
    console.log('This is the cheese barcode: ', cheese_barcode)

    return new Promise(async (resolve, reject) => {
      axios.get(`https://api.barcodelookup.com/v2/products?barcode=${cheese_barcode}&formatted=y&key=i9s4tvaagcpalxjyd9fkply2tv2s8z`)
        .then(response => {
          const products = response.data.products
          const productName = products[0].product_name.toLowerCase()
          // console.log(products[0].product_name);

          const varietal_matches = []

          cheese_keys.forEach(cheese_key => {
            // console.log(cheese_key.cheese)
            if (productName.includes(cheese_key.cheese.toLowerCase())) {
              // console.log('its a match: ', cheese_key.cheese);
              varietal_matches.push(cheese_key.cheese)
              //console.log('TESTING, TESTING, TESTING, TESTING, TESTING')
              // console.log(varietal_matches)
            }
          })

          // at this point varietal matches contains all of the varietal keys
          // that we need to get a wine pairing

          // !!! this procedure could have errors due to java asycnourisiouctiy

          const pairings = []
          let counter = 0

          varietal_matches.forEach(async (varietal) => {
            const tempArr = await cheese.getCheesePairing(varietal)
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
}

module.exports = cheese
