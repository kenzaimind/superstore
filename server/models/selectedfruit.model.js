var mongoose                = require('mongoose');
var   Schema                  = mongoose.Schema;
var User                    = require('../models/user.model'),
    fs                      = require('fs'),
     mongooseUniqueValidator = require('mongoose-unique-validator');
 
 
 var SelectedfruitSchema =new Schema({
     img: {type: String},
     item: {type: String},
     amount: {type: Number},
     dateSubmitted: {type: Date, default: Date.now},
     owner: {type: Schema.Types.ObjectId, ref: 'User'}
 });



 module.exports = mongoose.model('Selectedfruit', SelectedfruitSchema);