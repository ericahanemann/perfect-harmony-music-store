const mongoose = require("mongoose");

const cartsSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  productImg: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  colorSelected: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  stockAmount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Cart", cartsSchema);
