var express = require('express');
var router = express.Router();
var config =require('../config/config');
var Model = require('../models/guava.model');


router.get('/fruit',function(req,res, next){
Model.find({"name":"guava"},function(err,fruits){
    if(err){
        return res.status(404).json({
            code:404,
            message:'no',
            err: err
        })
    }else{
        res.status(200).json({
            message:'success',
            fruits: fruits
        })
    }
});
});

router.post('/fruit',function(req,res,next){
var fruit=new Model(req.body);
fruit.save(function(err,result){
    if(err){
       return  res.status(501).json({
           title:'there was',
           error: {message: 'the mail'}
       });
    }
        return res.status(201).json({
            message: 'su1',
            obj: result
        })
    
});
});
module.exports = router;
