const products = require("../data.json");
const fs = require('fs');
const ProductModel = require('../models/Product')

const returnAllProducts = (req, res) => {
    const { category } = req.query;
    if (category) {
      const selectedProducts = products.filter((product) => {
        return product.category === category;
      });
      res.json(selectedProducts);
      return;
    }
    res.json(products);
  }

const returnSingleProduct = (req, res) => {
    const { productID } = req.params;
    const selectedProduct = products.filter((product) => {
      return product.id === Number(productID);
    });
    res.json(selectedProduct);
  }

const createProduct = async (req, res) => {
    // products.push(req.body);
    // console.log(products);
    // fs.writeFileSync('./data.json', JSON.stringify(products), () => {
    //   console.log("Data written")
    // })
    // res.send("Data received")
    try {
      // let product = new ProductModel(req.body);
      // await product.save();

      let product = await ProductModel.create(req.body)
      res.json({product});
    } catch(err) {
      res.send("Error occured")
    }

  }

  module.exports = {returnAllProducts, returnSingleProduct, createProduct}

