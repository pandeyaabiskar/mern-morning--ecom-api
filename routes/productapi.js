const express = require("express");
const router = express.Router();
const {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
  updateAndReplaceProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.get("/", returnAllProducts);
router.get("/:productID", returnSingleProduct);
router.post("/", createProduct);

router.put("/:productID", updateAndReplaceProduct);
router.patch("/:productID", updateProduct);
router.delete("/:productID", deleteProduct);

module.exports = router;
