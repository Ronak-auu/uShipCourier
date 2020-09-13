var mongoose = require('mongoose');

var finddeliverySchema = mongoose.Schema({
    Parcel_id : {type:String},
    Tracking_id : {type:String},
    Transformer_id : {type:String},
    Customer_id : {type:String},
    Price : {type:Number},
    Pickup_Address : {type:String},
    Delivery_Address : {type:String},
    Delivery_Duration : {type:String},
    tokenfind: {type:JSON},
})

var finddeliveryList = module.exports = mongoose.model('FindOrder',finddeliverySchema);