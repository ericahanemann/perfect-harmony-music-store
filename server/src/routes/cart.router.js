const express = require("express");

const cartController = require("../controllers/cart.controller");

const router = express.Router();

router.get("/cart/all", cartController.showCartProducts);
router.post("/cart/add/:id", cartController.addProductToCart);
router.post("/cart/update/:id", cartController.updateProductAmount);
router.delete("/cart/remove/:id", cartController.removeProductFromCart);

module.exports = router;
