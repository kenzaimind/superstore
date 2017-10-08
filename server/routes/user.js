var express      = require('express'),
    router       = express.Router(),
    passwordHash = require('password-hash'),
    jwt          = require('jsonwebtoken'),
    config       = require('../config/config');

var User = require('../models/user.model');


// user register
router.post('/register', function (req, res, next) {
  var user = new User({
    //firstname: req.body.firstname,
    //lastname: req.body.lastname,
    email: req.body.email,
    password: passwordHash.generate(req.body.password),
    //address:req.body.address,
    contact:req.body.contact,
  });
  user.save(function (err, result) {
    if (err) {
      return res.status(403).json({
        title: 'There was an issue',
        error: {message: 'The email/contact number you entered already exists'},
         response_code:403
      
      });
    }
    res.status(200).json({
      message: 'Registration Successfull',
      obj: result,
       response_code:200,
      response:"OK",
    })
  })
});

// user login
router.post('/login', function (req, res, next) {
 User.findOne({$or:[{contact: req.body.email},{email: req.body.email}]}, function (err, doc) {
    if (err) {
      return res.status(403).json({
        title: 'There was a problem',
        error: err,
         response_code:403
      });
    }
  
    if (!doc) {
      return res.status(403).json({
        title: 'Wrong Email or Password',
        error: {message: 'Please check if your password or email are correct'},
        message: doc,
         response_code:403
      })
    }
    if (!passwordHash.verify(req.body.password, doc.password)) {
      return res.status(403).json({
        title: 'You cannot log in',
        error: {message: 'Please check your password or email'},
         response_code:403
      })
    }
    var token = jwt.sign({user: doc}, config.secret, {expiresIn: config.jwtExpire});
    return res.status(200).json({
      message: 'Login Successfull',
      response_code:200,
      response:"OK",
      token: token,
      userId: doc._id,
      doc : doc
    })
  })
});

module.exports = router;
