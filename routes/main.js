var router = require('express').Router();
var User = require('../models/user');
var Product = require('../models/product');



router.get('/', function(req, res, next) {
  res.render('main/home');
});

router.get('/about', function(req, res) {
  res.render('main/about');
});


module.exports = router;