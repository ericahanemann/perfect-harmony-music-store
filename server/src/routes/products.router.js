const express = require("express");

const productsController = require("../controllers/products.controller");

const router = express.Router();

router.get("/products/all", productsController.getAllProducts);
router.get("/products/id/:id", productsController.getProductById);
router.get("/products/:category", productsController.getSpecificCategory);
router.get(
  "/products/type/:productType",
  productsController.getSpecificProduct
);

module.exports = router;
