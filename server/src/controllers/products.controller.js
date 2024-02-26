const Product = require("../models/products.mongo");
const { stockProducts } = require("../models/products.model");

async function saveProductsData(product) {
  try {
    await Product.updateOne(
      { id: product.id },
      { $set: product },
      {
        upsert: true,
      }
    );
  } catch (err) {
    console.error(err);
  }
}

stockProducts.map(async (product) => {
  await saveProductsData(product);
});

async function getAllProducts(req, res) {
  try {
    const allProducts = await Product.find({}, { __id: 0, __v: 0 }).sort({
      id: 1,
    });
    console.log(allProducts);
    return res.status(200).json(allProducts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getProductById(req, res) {
  try {
    const id = req.params.id;
    const productRequired = await Product.findOne({ id: id });

    return res.status(200).json(productRequired);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getSpecificProduct(req, res) {
  try {
    const productType = req.params.productType;
    const productsRequired = await Product.find({
      type: { $regex: new RegExp(productType, "i") },
    }).sort({
      id: 1,
    });

    return res.status(200).json(productsRequired);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getSpecificCategory(req, res) {
  try {
    const category = req.params.category;
    const categoryRequired = await Product.find({
      category: { $regex: new RegExp(category, "i") },
    }).sort({
      id: 1,
    });

    return res.status(200).json(categoryRequired);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function searchProducts(req, res) {
  try {
    const searchTerm = req.params.searchTerm.toUpperCase();

    const matchingProducts = await Product.find({
      $or: [
        { name: { $regex: new RegExp(searchTerm, "i") } },
        { type: { $regex: new RegExp(searchTerm, "i") } },
        { category: { $regex: new RegExp(searchTerm, "i") } },
      ],
    }).sort({
      id: 1,
    });

    return res.status(200).json(matchingProducts);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  getSpecificProduct,
  getSpecificCategory,
  searchProducts,
};
