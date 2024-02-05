const favoritesProducts = require("../models/favorites.model");

function getAllFavorites(req, res) {
  return res.status(200).json(favoritesProducts);
}

function getFavoriteById(req, res) {
  const id = req.params.id;
  let productRequired;

  favoritesProducts.map((product) => {
    if (product.id == id) {
      productRequired = product;
    }
  });

  return res.status(200).json(productRequired);
}

module.exports = {
  getAllFavorites,
  getFavoriteById,
};
