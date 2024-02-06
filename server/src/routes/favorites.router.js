const express = require("express");

const favoritesController = require("../controllers/favorites.controller");

const router = express.Router();

router.get("/favorites/all", favoritesController.getAllFavorites);
router.get("/favorites/id/:id", favoritesController.getFavoriteById);
router.post("/favorites/add/:id", favoritesController.addProductToFavorites);
router.delete(
  "/favorites/remove/:id",
  favoritesController.removeProductFromFavorites
);

module.exports = router;
