var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

/* The user schema */
var UserSchema = new Schema({

  email: { type: String, unique: true, lowercase: true},
  password: String,

  profile: {
    name: { type: String, default: ''},
    picture: { type: String, default: ''}
  },

  address: String,
  history: [{
    date: Date,
    paid: { type: Number, default: 0},
    // item: { type: Schema.Types.ObjectId, ref: ''}
  }]
});