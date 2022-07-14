const products = require("../data.json");
const fs = require("fs");
const ProductModel = require("../models/Product");

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
  const { category="", price=0 } = req.query;
  console.log("category", category)
  console.log("price", price)
  if (category || price) {
    const selectedProducts = await ProductModel.find({ $or : [
      {category: { $in: category }},
      {price: { $gt: price }},
    ]});
    res.json(selectedProducts);
    return;
  }

  // if (category) {
  //   const selectedProducts = await ProductModel.find({
  //     category: { $in: category },
  //   });
  //   res.json(selectedProducts);
  //   return;
  // }
  // if (price) {
  //   const selectedProducts = await ProductModel.find({ price: { $gt: price } });
  //   res.json(selectedProducts);
  //   return;
  // }
  // const products = await ProductModel.find({ $and : [
  //   {category: { $in: category }},
  //   {price: { $gt: price }},
  // ]});
  const products = await ProductModel.find().sort({title: 1});
  // console.log()
  res.json(products);
};

const returnSingleProduct = async (req, res) => {
  const { productID } = req.params;
  // const selectedProduct = products.filter((product) => {
  //   return product.id === Number(productID);
  // });
  // res.json(selectedProduct);
  const selectedProduct = await ProductModel.findById(productID);
  res.json(selectedProduct);
};

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

    let product = await ProductModel.create(req.body);
    res.json({ product });
  } catch (err) {
    res.send(err);
  }
};

const updateAndReplaceProduct = async (req, res) => {
  const { productID } = req.params;
  const updatedProduct = await ProductModel.findOneAndReplace(
    productID,
    req.body
  );
  res.json(updatedProduct);
};

const updateProduct = async (req, res) => {
  const { productID } = req.params;
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    productID,
    req.body,
    { new: true }
  );
  res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { productID } = req.params;
  const deletedProduct = await ProductModel.findByIdAndRemove(productID);
  res.json(deletedProduct);
};

module.exports = {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
  updateAndReplaceProduct,
  updateProduct,
  deleteProduct,
};
