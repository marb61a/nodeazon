var router = require('express').Router();
var User = require('../models/user');
var Product = require('../models/product');

function paginate (req, res, next){
  var perPage = 9;
  var page = req.params.page;
  
  Product
    .find()
      .skip( perPage * page)
      .limit( perPage )
      .populate('category')
      .exec(function(err, products) {
        if (err) return next(err);
        Product.count().exec(function(err, count) {
          if (err) return next(err);
          res.render('main/product-main', {
            products: products,
            pages: count / perPage
          });
        });
      });
}

Product.createMapping(function(err, mapping) {
  if (err) {
    console.log("error creating mapping");
    console.log(err);
  } else {
    console.log("Mapping created");
    console.log(mapping);
  }
});

var stream = Product.synchronize();
var count = 0;

stream.on('data', function() {
  count++;
});

stream.on('close', function() {
  console.log("Indexed " + count + " documents");
});

stream.on('error', function(err) {
  console.log(err);
});

router.get('/', function(req, res, next) {

  if (req.user) {
    paginate(req, res, next);
  } else {
    res.render('main/home');
  }

});

router.get('/page/:page', function(req, res, next) {
  paginate(req,res,next);
});

router.get('/about', function(req, res) {
  res.render('main/about');
});


module.exports = router;