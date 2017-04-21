var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
	console.log('Time: ', Date.now())
	next()
})

router.get('/console', function (req, res) {
	res.render('console.ejs')
})

// define the account page route
router.get('/account', function (req, res) {
	res.render('account.ejs')
})

// define the sessions page route
router.get('/sessions', function (req, res) {
	res.render('sessions.ejs')
})

// define the start page route
router.get('/dashboard', function (req, res) {
	res.render('dashboard.ejs')
})

// define the results page route
router.get('/result', function(req, res){
  res.render('result.ejs')
})

// define the landing page route
router.get('/', function (req, res) {
	res.render('landing.ejs')
})


module.exports = router