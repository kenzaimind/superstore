var mongoose                = require('mongoose'),
    Schema                  = mongoose.Schema,
    Form                    = require('../models/form.model'),
    mongooseUniqueValidator = require('mongoose-unique-validator');

var user = new Schema({
//firstname: {type: String,required: true},
//lastname:{type: String,required: true},
  email: {type: String, unique: true, required: true, lowercase: true},
  password: {type: String,  required: true},
  //address:{type:String,required: true},
  contact:{type:String,unique: true,required: true},
  forms: [{type: Schema.Types.ObjectId, ref: 'Form'}],
  resetPasswordToken: String,
  resetPasswordExpires: String,
  role:{type:Array,default:['user']},
  profilePic:String,

},
{
timestamps:true
});

user.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', user);
