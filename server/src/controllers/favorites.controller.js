const Favorite = require("../models/favorites.mongo");
const Product = require("../models/products.mongo");

async function getAllFavorites(req, res) {
  try {
    const allFavorites = await Favorite.find({}, { _id: 0, __v: 0 }).sort({
      id: 1,
    });
    return res.status(200).json(allFavorites);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getFavoriteById(req, res) {
  try {
    const id = req.params.id;
    const favoriteProduct = await Favorite.findOne({ id: id });

    return res.status(200).json(favoriteProduct);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function addProductToFavorites(req, res) {
  try {
    const id = req.params.id;

    const productToBeAdded = await Product.findOne({ id: id });

    if (!productToBeAdded) {
      return res.status(404).json({ error: "Product not found" });
    }

    const favoriteProduct = {
      id: id,
      type: productToBeAdded.type,
      img: productToBeAdded.images[0],
      name: productToBeAdded.name,
      unitPrice: productToBeAdded.unitPrice,
      addedAt: new Date(),
    };

    await Favorite.create(favoriteProduct);

    return res.status(201).json(productToBeAdded);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function removeProductFromFavorites(req, res) {
  try {
    const id = req.params.id;

    const favoriteProduct = await Favorite.findOne({ id: id });

    if (!favoriteProduct) {
      return res.status(404).json({ error: "Favorite product not found" });
    }

    await Favorite.deleteOne({ id: id });

    return res.status(200).json(favoriteProduct);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getAllFavorites,
  getFavoriteById,
  addProductToFavorites,
  removeProductFromFavorites,
};
