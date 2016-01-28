var router = require("express").Router();
var User = require("../models/user");
var passport = require('passport');
var passportConf = require('../config/passport');

router.get('/login', function(req, res){
    if (req.user) return res.redirect('/');
    res.render('accounts/login', { message: req.flash('loginMessage')});
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
}));

module.exports = router