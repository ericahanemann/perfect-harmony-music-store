const chart = require("../models/chart.model");
const stockProducts = require("../models/products.model");

function showChartProducts(req, res) {
  return res.status(200).json(chart);
}

function addProductToChart(req, res) {
  const id = req.body.id;
  const colorSelected = req.body.colorSelected;
  const amount = req.body.amount;

  const productToBeAdded = stockProducts.find((product) => product.id === id);
  chart.push({
    productName: productToBeAdded.name,
    colorSelected: colorSelected,
    unitPrice: productToBeAdded.unitPrice,
    amount: amount,
  });

  res.status(201).json(productToBeAdded);
}

function removeProductFromChart(req, res) {
  const id = req.body.id;

  const productToBeRemoved = stockProducts.find((product) => product.id === id);
  const newChart = chart.filter((product) => product.id !== id);

  chart = newChart;

  return res.status(200).json(productToBeRemoved);
}

function updateProductAmount(req, res) {
  const id = req.body.id;
  const amount = req.body.amount;

  chart.forEach((product) => {
    if (product.id === id) {
      product.amount += amount;
    }
  });
}

module.exports = {
  showChartProducts,
  addProductToChart,
  removeProductFromChart,
  updateProductAmount,
};
