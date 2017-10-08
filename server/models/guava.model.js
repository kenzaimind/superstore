var mongoose                = require('mongoose');
var   Schema                  = mongoose.Schema;
 
 
 var GuavaSchema =new Schema({
     img : String,
     name: String,
     prize: Number
 });



 module.exports = mongoose.model('Fruit', GuavaSchema);