const express = require("express");

const favoritesController = require("../controllers/favorites.controller");

const router = express.Router();

router.get("/favorites/all", favoritesController.getAllFavorites);
router.get("/favorites/id/:id", favoritesController.getFavoriteById);

module.exports = router;
