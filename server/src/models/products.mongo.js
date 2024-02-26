const mongoose = require("mongoose");

const specsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  specDescription: {
    type: String,
    required: true,
  },
});

const colorsSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

const reviewsSchema = new mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const productsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  specs: {
    type: [specsSchema],
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  colorsAvailable: {
    type: [colorsSchema],
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  stockAmount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  reviews: {
    type: [reviewsSchema],
    required: true,
  },
});

module.exports = mongoose.model("Product", productsSchema);
