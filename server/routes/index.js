var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html')
})

router.get('/login', function (req, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html')
})

router.get('/createaccount', function (req, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html')
})

router.get('/createaccount2', function (req, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html')
})

router.get('/searchbar', function (req, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html')
})

router.get('/searchcamera', function (req, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html')
})

router.get('/manual/results/:type/:term', function (req, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html')
})

router.get('/barcode/results/:type/:barcode', function (req, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html')
})

router.get('/profile/loggedin', function (req, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html')
})

router.get('/saved', function (req, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html')
})

router.get('/popular', function (req, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html')
})

// depreciated routes for original temp website
router.get('/about', function (req, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html')
})

router.get('/memberpage/:name', function (req, response, next) {
  response.status(200).sendFile(__basedir + '/build/index.html')
})

module.exports = router