const stockProducts = require("../models/products.model");

function getAllProducts(req, res) {
  return res.status(200).json(stockProducts);
}

function getSpecificProduct(req, res) {
  const productType = req.params.productType;
  let productsRequired = [];

  stockProducts.map((product) => {
    if (product.type == productType) {
      productsRequired.push(product);
    }
  });

  return res.status(200).json(productsRequired);
}

function getSpecificCategory(req, res) {
  const category = req.params.category;
  let categoryRequired = [];

  stockProducts.map((product) => {
    if (product.category == category) {
      categoryRequired.push(product);
    }
  });

  return res.status(200).json(categoryRequired);
}

function searchProducts(req, res) {
  let matchingProducts = [];
  const searchTerm = req.body.searchTerm.toUpperCase();

  stockProducts.map((product) => {
    if (
      product.name.toUpperCase().includes(searchTerm) ||
      product.type.toUpperCase().includes(searchTerm) ||
      product.category.toUpperCase().includes(searchTerm)
    ) {
      matchingProducts.push(product);
    }
  });

  return res.status(200).json(matchingProducts);
}

module.exports = {
  getAllProducts,
  getSpecificProduct,
  getSpecificCategory,
  searchProducts,
};
