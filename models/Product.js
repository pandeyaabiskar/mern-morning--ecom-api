const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    rate: Number,
    count : Number
})

const productSchema = new mongoose.Schema({
    title : String,
    price : Number,
    description : String,
    image : String,
    rating : ratingSchema
})

const ProductModel = new mongoose.model('Product', productSchema);

module.exports = ProductModel;