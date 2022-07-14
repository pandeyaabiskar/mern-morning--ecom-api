const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    rate: Number,
    count : Number
})

const productSchema = new mongoose.Schema({
    title : {
        type: String,
        minlength: [10, "Sorry, you cannot insert value less than 10"],
        required: true,
        trim: true
    },
    price : {
        type: Number,
        min: 1
    },
    description : String,
    category: String,
    image : String,
    rating : ratingSchema
})

const ProductModel = new mongoose.model('Product', productSchema);

module.exports = ProductModel;