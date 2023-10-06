const express = require("express");

const {
  getAllProducts,
  getSpecificProduct,
} = require("../controllers/products.controller");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:productType", getSpecificProduct);

module.exports = router;
