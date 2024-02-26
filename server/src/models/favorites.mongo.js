const mongoose = require("mongoose");

const favoritesSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  addedAt: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Favorite", favoritesSchema);
