module.exports = {
  'database': '127.0.0.1:27017/Superstore',
  'secret': 'SUPERsecret', // change this to a hard to guess random string
  'api_user': 'YOUR SENDGRID USERNAME',
  'api_key': 'YOUR SENDGRID PASSWORD',
  'jwtExpire': 100000000 //set the jwtExpire in smallar period in production
};


