var mongoose = require('mongoose');

var BidingSchema = mongoose.Schema({
    Parcel_id : {type:String},
    Transformer_id : {type:String},
    Customer_id : {type:String},
    item : {type:String},
    Price : {type:Number},
    Weight : {type:Number},
    Length : {type:Number},
    Height : {type:Number},
    Width : {type:Number},
    Pickup_Address : {type:String,require:true},
    Delivery_Address : {type:String,require:true},
    Delivery_Duration : {type:String},
    tokencus: {type:JSON},
    tokentrans: {type:JSON},
    tokenorder: {type:JSON},
    mobile : {type:String},
    Review : {type:Number}
})

var BidingList = module.exports = mongoose.model('Biding',BidingSchema);