const path = require("path");
const express = require("express");
const cors = require("cors");

const indexRouter = require("./routes/index.router");
const productsRouter = require("./routes/products.router");
const searchRouter = require("./routes/search.router");

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

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/search", searchRouter);

module.exports = app;
