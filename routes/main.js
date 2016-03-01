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

router.get('/', function(req, res, next) {
  res.render('main/home');
});

router.get('/about', function(req, res) {
  res.render('main/about');
});


module.exports = router;