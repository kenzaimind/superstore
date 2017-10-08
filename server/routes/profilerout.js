var express = require('express');
var router = express.Router();
var config = require('../config/config');
var Model = require('../models/user.model');
 passwordHash = require('password-hash'),
  jwt = require('jsonwebtoken'),
  config = require('../config/config'),
  fs = require('fs'),
  multer = require('multer'),
  mime = require('mime'),
  path = require('path'),
  crypto = require("crypto"),
  gm = require('gm').subClass({imageMagick: true});

router.get('/userprofile/:userId', function (req, res, next) {
    //var id= req.params.id;
    Model.findOne({_id: req.params.userId}, function (err, users) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                users: users
            })
        }
    });
});
// change user password from front end form inside user's profile
router.post('/password/:userId', function (req, res, next) {
  Model.findOne({_id: req.params.userId}, function (err, user) {
    if (err) {
      return res.status(403).json({
        title: 'There was a problem',
        error: err
      });
    }
    if (!passwordHash.verify(req.body.currentPassword, user.password)) {
      return res.status(403).json({
        title: 'You cannot change the password',
        error: {message: 'Incorrect current password, please try again'}
      })
    } else {
      var newPassword = passwordHash.generate(req.body.newPassword);
      user.update({$set: {password: newPassword}}, function (err, result) {
        if (err) {
          return res.status(404).json({
            message: 'There was an error, please try again',
            err: err
          });
        }
        res.status(201).json({
          message: 'Password changed successfully',
          result: result
        });
      })
    }
  });
});

module.exports = router;