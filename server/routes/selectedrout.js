var express = require('express');
var router = express.Router();
var config =require('../config/config');
var Model = require('../models/selectedfruit.model');




router.get('/selectedfruit',function(req,res, next){
Model.find({},function(err,selectedfruits){
    if(err){
        return res.status(404).json({
            code:404,
            message:'no',
            err: err
        })
    }else{
        res.status(200).json({
            message:'success',
            selectedfruits: selectedfruits
        })
    }
});
});

router.delete('/selectedfruit/:id',function(req,res, next){
var id = req.params.id;
Model.remove({_id: id},function(err,resource){
    if(err){
        return res.status(401).json({
            code:404,
            message:'no',
            err: err
        })
}else{
    res.status(202).json({
            message:'success',
            
    
})
}
})
})

router.post('/selectedfruit',function(req,res,next){
var selectedfruit=new Model(req.body);
selectedfruit.save(function(err,result){
    if(err){
       return  res.status(501).json({
           title:'there was',
           error: {message: 'the mail'}
       });
    }
        return res.status(201).json({
            message: 'su',
            obj: result
        })
    
});
});
module.exports = router;