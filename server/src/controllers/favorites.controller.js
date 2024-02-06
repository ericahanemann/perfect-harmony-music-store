let favoriteProducts = require("../models/favorites.model");
const stockProducts = require("../models/products.model");

function getAllFavorites(req, res) {
  return res.status(200).json(favoriteProducts);
}

function getFavoriteById(req, res) {
  const id = req.params.id;
  let productRequired;

  favoriteProducts.map((product) => {
    if (product.id == id) {
      productRequired = product;
    }
  });

  return res.status(200).json(productRequired);
}

function addProductToFavorites(req, res) {
  const id = req.params.id;

  const productToBeAdded = stockProducts.find((product) => {
    return product.id == id;
  });

  favoriteProducts.push({
    id: id,
    type: productToBeAdded.type,
    img: productToBeAdded.images[0],
    name: productToBeAdded.name,
    unitPrice: productToBeAdded.unitPrice,
    addedAt: new Date(),
  });

  res.status(201).json(productToBeAdded);
}

function removeProductFromFavorites(req, res) {
  const id = req.params.id;

  const productToBeRemoved = favoriteProducts.find(
    (product) => product.id == id
  );
  const newFavorites = favoriteProducts.filter((product) => product.id != id);

  favoriteProducts = newFavorites;

  return res.status(200).json(productToBeRemoved);
}

module.exports = {
  getAllFavorites,
  getFavoriteById,
  addProductToFavorites,
  removeProductFromFavorites,
};
