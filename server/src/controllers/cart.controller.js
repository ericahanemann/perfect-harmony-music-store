const Cart = require("../models/cart.mongo");
const Product = require("../models/products.mongo");

async function showCartProducts(req, res) {
  try {
    const cart = await Cart.find({}, { __id: 0, __v: 0 });
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function addProductToCart(req, res) {
  try {
    const id = req.params.id;
    const amount = req.body.amount;

    const productToBeAdded = await Product.findOne({ id: id });

    if (!productToBeAdded) {
      return res.status(404).json({ error: "Product not found" });
    }

    const cartItem = {
      productId: id,
      productImg: productToBeAdded.images[0],
      productName: productToBeAdded.name,
      colorSelected: productToBeAdded.color,
      unitPrice: productToBeAdded.unitPrice,
      stockAmount: productToBeAdded.stockAmount,
      amount: amount,
    };

    await Cart.create(cartItem);

    return res.status(201).json(productToBeAdded);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function removeProductFromCart(req, res) {
  try {
    const id = req.params.id;

    const productToBeRemoved = await Product.findOne({ id: id });

    if (!productToBeRemoved) {
      return res.status(404).json({ error: "Product not found" });
    }

    await Cart.deleteOne({ productId: id });

    return res.status(200).json(productToBeRemoved);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function updateProductAmount(req, res) {
  try {
    const id = req.params.id;
    const amount = req.body.amount;

    const cartItem = await Cart.findOne({ productId: id });

    if (!cartItem) {
      return res.status(404).json({ error: "Product not found in cart" });
    }

    cartItem.amount += amount;
    await cartItem.save();

    return res.status(200).json(cartItem);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  showCartProducts,
  addProductToCart,
  removeProductFromCart,
  updateProductAmount,
};
