var express      = require('express'),
    path         = require('path'),
    logger       = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    mongoose     = require('mongoose'),
    config       = require('./config/config');
    var sha512 = require('sha512');
    //var paypal = require('../');

var userRoute    = require('./routes/user');
var uploadRoute  = require('./routes/upload');
var forgotRoutes = require('./routes/forgetPassword');
var resetRoutes  = require('./routes/resetPassword');
var userForms    = require('./routes/userForms');
var applerout    = require('./routes/applerout');
var guavarout    = require('./routes/guavarout');
var selectedrout = require('./routes/selectedrout');
var groceryrout = require('./routes/groceryrout');
var profilerout = require('./routes/profilerout');

var app = express();

mongoose.Promise = global.Promise;  // gets rid of the mongoose promise deprecated warning
mongoose.connect(config.database, function(err)
{
  if(err){
    return err;
  }else{
    console.log('Successfully connected to' + config.database);
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/uploadsFolder', express.static(__dirname + '/uploadsFolder'));

// CORS setup
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With, Content-Type,Accept, Authorization');
  next();
});

// setting up routes models
app.use('/user', userRoute);
app.use('/user/forgot', forgotRoutes);
app.use('/user/reset', resetRoutes);
app.use('/uploads', uploadRoute);
app.use('/forms', userForms);
app.use('/applerout', applerout);
app.use('/guavarout',guavarout);
app.use('/selectedrout',selectedrout);
app.use('/groceryrout',groceryrout);
app.use('/profilerout',profilerout);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err    = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}


app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

module.exports = app;
