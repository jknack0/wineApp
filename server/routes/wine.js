const express = require('express')
const router = express.Router()


const db = require('../db')

router.get('/getCab', function (req, res, next) {
  console.log('this is the getcab enpoint')
  res.status(200).send('this is cab endpoint')
  // try{
  //     const teamMembers = await db.team.getTeamMembers()
  //     res.status(200).send(teamMembers)
  // }catch(e){
  //     res.status(200).send(e)}
})

router.get('/getPairing/:wine_type', async function (req, res, next) {
  try {
    const wineData = await db.wine.getPairing(req.params.wine_type)
    res.status(200).send(wineData)
    //console.log('WINE STUFF: ',wineData)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

router.get('/getPairing/barcode/:wine_barcode', async function (req, res, next) {
  // console.log('ROUTE => /getPairing/barcode/:wine_barcode');
  // res.status(200).send('ok')
  try {
    const wineData = await db.wine.getPairingBarcode(req.params.wine_barcode)
    // db.wine.getPairingBarcode(req.params.wine_barcode)
    //console.log('returned wine data:', wineData)
    
    res.status(200).send(wineData)
  } catch (e) {
    console.log(e)
    res.status(200).send(e)
  }
})

// router.post('/findPairing/:wine_type/:brand', async function(req, res, next) {

//   try{
//       const teamMembers = await db.wine.getPairing(req.params.wine_type, req.params.brand);
//       res.status(200).send(teamMembers)
//   }catch(e){
//       res.status(200).send(e)}

// });

/*
SELECT W.id, W.winery, W.variety, P.date, b.roll
FROM a
INNER JOIN b ON a.id=b.id;
*/

module.exports = router
