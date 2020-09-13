var mongoose = require('mongoose');

var trSchema = mongoose.Schema({
    fname: {type:String},
    lname: {type:String},
    email: {type:String},
    mobile: {type:String},
    password: {type:String},
    mobile: {type:String},
  
})

var tr = module.exports = mongoose.model('Transpoter', trSchema);