const mongoose = require('mongoose');

var productsSchema = mongoose.Schema({
    id: Number,
    price: Number,
    picture: String,
    color: String,
    size: String,
    name: String,
    quantity: Number
});

var ProductsModel = mongoose.model("Products", productsSchema);

module.exports = ProductsModel;