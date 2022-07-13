const products = require("../data.json");
const fs = require('fs');
const ProductModel = require('../models/Product')

const returnAllProducts = async (req, res) => {
    // const { category } = req.query;
    // if (category) {
    //   const selectedProducts = products.filter((product) => {
    //     return product.category === category;
    //   });
    //   res.json(selectedProducts);
    //   return;
    // }
    // res.json(products);

    //Make this function work using the data from database
    const {category} = req.query;
    if(category){
      const selectedProducts = await ProductModel.find({category})
      res.json(selectedProducts);
      return;
    }
    const products = await ProductModel.find();
    res.json(products);
  }

const returnSingleProduct = async (req, res) => {
    const { productID } = req.params;
    // const selectedProduct = products.filter((product) => {
    //   return product.id === Number(productID);
    // });
    // res.json(selectedProduct);
    const selectedProduct = await ProductModel.findById(productID);
    res.json(selectedProduct)
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

  const updateAndReplaceProduct = async (req, res) => {
    const { productID } = req.params;
    const updatedProduct = await ProductModel.findOneAndReplace(productID, req.body)
    res.json(updatedProduct);
  }

  const updateProduct = async (req, res) => {
    const { productID } = req.params;
    const updatedProduct = await ProductModel.findByIdAndUpdate(productID, req.body, { new: true})
    res.json(updatedProduct);
  }

  const deleteProduct = async (req, res) => {
    const { productID } = req.params;
    const deletedProduct = await ProductModel.findByIdAndRemove(productID);
    res.json(deletedProduct);
  }

  module.exports = {returnAllProducts, returnSingleProduct, createProduct, updateAndReplaceProduct, updateProduct, deleteProduct}

