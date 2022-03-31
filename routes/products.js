var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const mongoose = require('mongoose');
const ProductsModel = require('../models/products.model');

//to get all the list of all products from the database
router.get('/list', function (req, res, next) {
    ProductsModel.find(function (err, response) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(response)
        }
    })
});

module.exports = router;
