const express = require('express');
const router = express.Router();
const products = require("../data.json");

router.get("/", (req, res) => {
    const { category } = req.query;
    if (category) {
      const selectedProducts = products.filter((product) => {
        return product.category === category;
      });
      res.json(selectedProducts);
      return;
    }
    res.json(products);
  });
  
  router.get("/:productID", (req, res) => {
    const { productID } = req.params;
    const selectedProduct = products.filter((product) => {
      return product.id === Number(productID);
    });
    res.json(selectedProduct);
  });
  

  module.exports = router;