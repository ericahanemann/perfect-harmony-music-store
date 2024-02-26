const Cart = require("./cart.mongo");

const cart = [
  {
    productId: 1,
    productImg: "stratocaster-red.png",
    productName: "CLASSIC VIBE '50S STRATOCASTER®",
    colorSelected: "#ff0000",
    unitPrice: 1300,
    amount: 1,
    stockAmount: 12,
  },
];

async function saveCartData(product) {
  try {
    await Cart.updateOne(
      { productId: product.productId },
      { $set: product },
      {
        upsert: true,
      }
    );
  } catch (err) {
    console.error(err);
  }
}

// cart.map(async (product) => {
//   await saveCartData(product);
// });

module.exports = {
  saveCartData,
};
