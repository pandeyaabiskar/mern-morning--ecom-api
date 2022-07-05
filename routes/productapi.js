const express = require('express');
const router = express.Router();
const {returnAllProducts, returnSingleProduct, createProduct} = require('../controllers/products')

router.get("/", returnAllProducts);
router.get("/:productID", returnSingleProduct);
router.post('/', createProduct)

  module.exports = router;