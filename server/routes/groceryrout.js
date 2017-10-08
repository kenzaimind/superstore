var express = require('express');
var router = express.Router();
var config = require('../config/config');
var Model = require('../models/grocery.model');


router.get('/groceryall', function (req, res, next) {
    Model.find({}, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});

router.get('/grocery', function (req, res, next) {
    Model.find({ "type": "Dal" }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});
router.get('/grocerydry', function (req, res, next) {
    Model.find({ "type": "Dry Fruits" }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});
router.get('/exoticvegitables', function (req, res, next) {
    Model.find({ "subcategory": "Exotic Vegetables" }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});
router.get('/freshvegitables', function (req, res, next) {
    Model.find({ "subcategory": "Fresh Vegetables" }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});
router.get('/fruits', function (req, res, next) {
    Model.find({ "subcategory": "Fruits" }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});
router.get('/brandedfood', function (req, res, next) {
    Model.find({ "subcategory": "Branded Food" }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});
router.get('/mushrooms', function (req, res, next) {
    Model.find({ "type": "Mushrooms" }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});
router.get('/apples', function (req, res, next) {
    Model.find({ "type": "Apple" }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});
router.get('/banana', function (req, res, next) {
    Model.find({ "type": "Banana" }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});
router.get('/broccoli', function (req, res, next) {
    Model.find({ "type": "Broccoli" }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});
router.get('/brinjal', function (req, res, next) {
    Model.find({ "type": "Brinjal" }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});
router.get('/cabbage', function (req, res, next) {
    Model.find({ "type": "Cabbage" }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});
router.get('/groceryid/:sno', function (req, res, next) {
    var sno = req.params.sno;
    Model.find({ sno: sno }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: req.body.sno,
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});
router.get('/groceryinfo/:sno', function (req, res, next) {
    //var id= req.params.id;
    Model.find({ sno: req.params.sno }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});

router.get('/grocerysearch/:search', function (req, res, next) {
    //var id= req.params.id;
    Model.find({ $or: [{ name: req.params.search }, { type: req.params.search }] }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});


router.post('/groceryadd', function (req, res, next) {
    var grocery = new Model(req.body);
    grocery.save(function (err, result) {
        if (err) {
            return res.status(501).json({
                title: 'there was',
                error: { message: 'the mail' }
            });
        }
        return res.status(201).json({
            message: 'su',
            obj: result
        })

    });
});
router.get('/groceryveg', function (req, res, next) {
    Model.find({ "type": "Vegetable" }, function (err, grocerys) {
        if (err) {
            return res.status(404).json({
                code: 404,
                message: 'no',
                err: err
            })
        } else {
            res.status(200).json({
                message: 'success',
                grocerys: grocerys
            })
        }
    });
});
module.exports = router;