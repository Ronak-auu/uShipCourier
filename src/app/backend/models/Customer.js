var mongoose = require('mongoose');

var cusSchema = mongoose.Schema({
    fname: {type:String},
    lname: {type:String},
    cname:{type:String},
    email: {type:String},
    password: {type:String},
    mobile: {type:String},
})

var cus = module.exports = mongoose.model('Customer', cusSchema);