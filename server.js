var express = require("express");

var app = express();

app.listen(process.env.PORT, process.env.IP, function(err){
    if (err) throw err;
    console.log('The server is running');
})