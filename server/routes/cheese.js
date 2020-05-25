const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/getPairing/:cheese_type', async function (req, res, next) {
  try {
    console.log(`Finding wine pairs for ${req.params.cheese_type}`)
    const cheesePairing = await db.cheese.getCheesePairing(req.params.cheese_type)
    res.status(200).send(cheesePairing)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
})

router.get('/getPairing/barcode/:cheese_barcode', async function (req, res, next) {
  // console.log('ROUTE => /getPairing/barcode/:wine_barcode');
  // res.status(200).send('ok')
  try {
    const cheeseData = await db.cheese.getCheesePairingBarcode(req.params.cheese_barcode)
    // db.wine.getPairingBarcode(req.params.wine_barcode)
    //console.log('returned cheese data:', cheeseData)
    res.status(200).send(cheeseData)
  } catch (e) {
    console.log(e)
    res.status(200).send(e)
  }
})

module.exports = router
