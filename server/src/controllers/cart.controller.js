const cart = require("../models/cart.model");
const stockProducts = require("../models/products.model");

function showCartProducts(req, res) {
  return res.status(200).json(cart);
}

function addProductToCart(req, res) {
  const id = req.params.id;
  const amount = req.body.amount;

  const productToBeAdded = stockProducts.find((product) => product.id === id);
  cart.push({
    productId: id,
    productName: productToBeAdded.name,
    colorSelected: productToBeAdded.color,
    unitPrice: productToBeAdded.unitPrice,
    amount: amount,
  });

  res.status(201).json(productToBeAdded);
}

function removeProductFromCart(req, res) {
  const id = req.params.id;

  const productToBeRemoved = stockProducts.find((product) => product.id === id);
  const newCart = cart.filter((product) => product.id !== id);

  cart = newCart;

  return res.status(200).json(productToBeRemoved);
}

function updateProductAmount(req, res) {
  const id = req.params.id;
  const amount = req.body.amount;

  cart.forEach((product) => {
    if (product.id === id) {
      product.amount += amount;
    }
  });
}

module.exports = {
  showCartProducts,
  addProductToCart,
  removeProductFromCart,
  updateProductAmount,
};
