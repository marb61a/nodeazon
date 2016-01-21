var express = require("express");
var morgan = require('morgan');
var mongoose = require('mongoose');

var app = express();

mongoose.connect(secret.database, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

// Middleware
app.use(morgan('dev'));

app.listen(process.env.PORT, process.env.IP, function(err){
    if (err) throw err;
    console.log('The server is running');
})