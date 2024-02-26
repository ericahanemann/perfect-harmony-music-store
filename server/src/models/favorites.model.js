const Favorite = require("./favorites.mongo");

const favoriteProducts = [
  {
    id: 1,
    type: "Guitar",
    name: "CLASSIC VIBE '50S STRATOCASTER®",
    img: "stratocaster-red.png",
    unitPrice: 1300,
    addedAt: new Date(),
  },
];

// async function saveFavoritesData(product) {
//   try {
//     await Favorite.updateOne(
//       { id: product.id },
//       { $set: product },
//       {
//         upsert: true,
//       }
//     );
//   } catch (err) {
//     console.error(err);
//   }
// }

// favoriteProducts.map(async (product) => {
//   await saveFavoritesData(product);
// });

module.exports = {
  saveFavoritesData,
};
