const path = require("path");
const express = require("express");
const cors = require("cors");

const productsRouter = require("./routes/products.router");
const cartRouter = require("./routes/cart.router");
const favoritesRouter = require("./routes/favorites.router");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/", productsRouter, cartRouter, favoritesRouter);

module.exports = app;
