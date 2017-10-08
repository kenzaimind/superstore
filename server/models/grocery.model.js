var mongoose                = require('mongoose');
var   Schema                  = mongoose.Schema;

    fs                      = require('fs'),
     mongooseUniqueValidator = require('mongoose-unique-validator');
 
 
 var GrocerySchema =new Schema({
     sno: {type:String},
     img: {type: String},
     name: {type: String},
     cost: {type: Number},
     description:{type:String},
     type:{type:String},
     count:{type:Number},
     quantity:{type:String},
     discount:{type:Number},
     discountprize:{type:Number},
     dateSubmitted: {type: Date, default: Date.now}
 });



 module.exports = mongoose.model('grocery', GrocerySchema);