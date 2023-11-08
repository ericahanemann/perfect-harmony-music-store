const stockProducts = [
  {
    id: 1,
    category: "stringed",
    type: "guitar",
    brand: "fender",
    name: "CLASSIC VIBE '50S STRATOCASTER®",
    description: "very good guitar",
    color: "#ff0000",
    images: ["stratocaster-red.png"],
    colorsAvailable: [
      {
        color: "#ff0000",
        images: ["stratocaster-red.png"],
      },
      {
        color: "#fff",
        images: ["stratocaster-whiteblonde.png"],
      },
      {
        color: "#3f1e00",
        images: ["stratocaster-sunburst.png"],
      },
      {
        color: "#000",
        images: ["stratocaster-black.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 2,
    category: "stringed",
    type: "guitar",
    brand: "fender",
    name: "CLASSIC VIBE '50S STRATOCASTER®",
    description: "very good guitar",
    color: "#fff",
    images: ["stratocaster-whiteblonde.png"],
    colorsAvailable: [
      {
        color: "#ff0000",
        images: ["stratocaster-red.png"],
      },
      {
        color: "#fff",
        images: ["stratocaster-whiteblonde.png"],
      },
      {
        color: "#3f1e00",
        images: ["stratocaster-sunburst.png"],
      },
      {
        color: "#000",
        images: ["stratocaster-black.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 3,
    category: "stringed",
    type: "guitar",
    brand: "fender",
    name: "CLASSIC VIBE '50S STRATOCASTER®",
    description: "very good guitar",
    color: "#3f1e00",
    images: ["stratocaster-sunburst.png"],
    colorsAvailable: [
      {
        color: "#ff0000",
        images: ["stratocaster-red.png"],
      },
      {
        color: "#fff",
        images: ["stratocaster-whiteblonde.png"],
      },
      {
        color: "#3f1e00",
        images: ["stratocaster-sunburst.png"],
      },
      {
        color: "#000",
        images: ["stratocaster-black.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 4,
    category: "stringed",
    type: "guitar",
    brand: "fender",
    name: "CLASSIC VIBE '50S STRATOCASTER®",
    description: "very good guitar",
    color: "#000",
    images: ["stratocaster-black.png"],
    colorsAvailable: [
      {
        color: "#ff0000",
        images: ["stratocaster-red.png"],
      },
      {
        color: "#fff",
        images: ["stratocaster-whiteblonde.png"],
      },
      {
        color: "#3f1e00",
        images: ["stratocaster-sunburst.png"],
      },
      {
        color: "#000",
        images: ["stratocaster-black.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 5,
    category: "stringed",
    type: "guitar",
    brand: "fender",
    name: "PLAYER PLUS METEORA® HH",
    description: "very good guitar",
    color: "#999",
    images: ["meteora-silverburst.png"],
    colorsAvailable: [
      {
        color: "#999",
        images: ["meteora-silverburst.png"],
      },
      {
        color: "#00ff00",
        images: ["meteora-cosmicjade.png"],
      },
      {
        color: "#ff0000",
        images: ["meteora-red.png"],
      },
      {
        color: "#3f1e00",
        images: ["meteora-sunburst.png"],
      },
      {
        color: "#0000ff",
        images: ["meteora-belairblue.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 6,
    category: "stringed",
    type: "guitar",
    brand: "fender",
    name: "PLAYER PLUS METEORA® HH",
    description: "very good guitar",
    color: "#00ff00",
    images: ["meteora-cosmicjade.png"],
    colorsAvailable: [
      {
        color: "#999",
        images: ["meteora-silverburst.png"],
      },
      {
        color: "#00ff00",
        images: ["meteora-cosmicjade.png"],
      },
      {
        color: "#ff0000",
        images: ["meteora-red.png"],
      },
      {
        color: "#3f1e00",
        images: ["meteora-sunburst.png"],
      },
      {
        color: "#0000ff",
        images: ["meteora-belairblue.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 7,
    category: "stringed",
    type: "guitar",
    brand: "fender",
    name: "PLAYER PLUS METEORA® HH",
    description: "very good guitar",
    color: "#ff0000",
    images: ["meteora-red.png"],
    colorsAvailable: [
      {
        color: "#999",
        images: ["meteora-silverburst.png"],
      },
      {
        color: "#00ff00",
        images: ["meteora-cosmicjade.png"],
      },
      {
        color: "#ff0000",
        images: ["meteora-red.png"],
      },
      {
        color: "#3f1e00",
        images: ["meteora-sunburst.png"],
      },
      {
        color: "#0000ff",
        images: ["meteora-belairblue.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 8,
    category: "stringed",
    type: "guitar",
    brand: "fender",
    name: "PLAYER PLUS METEORA® HH",
    description: "very good guitar",
    color: "#3f1e00",
    images: ["meteora-sunburst.png"],
    colorsAvailable: [
      {
        color: "#999",
        images: ["meteora-silverburst.png"],
      },
      {
        color: "#00ff00",
        images: ["meteora-cosmicjade.png"],
      },
      {
        color: "#ff0000",
        images: ["meteora-red.png"],
      },
      {
        color: "#3f1e00",
        images: ["meteora-sunburst.png"],
      },
      {
        color: "#0000ff",
        images: ["meteora-belairblue.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 9,
    category: "stringed",
    type: "guitar",
    brand: "fender",
    name: "PLAYER PLUS METEORA® HH",
    description: "very good guitar",
    color: "#0000ff",
    images: ["meteora-belairblue.png"],
    colorsAvailable: [
      {
        color: "#999",
        images: ["meteora-silverburst.png"],
      },
      {
        color: "#00ff00",
        images: ["meteora-cosmicjade.png"],
      },
      {
        color: "#ff0000",
        images: ["meteora-red.png"],
      },
      {
        color: "#3f1e00",
        images: ["meteora-sunburst.png"],
      },
      {
        color: "#0000ff",
        images: ["meteora-belairblue.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 10,
    category: "stringed",
    type: "guitar",
    brand: "gibson",
    name: "Les Paul Classic",
    description: "very good guitar",
    color: "#f1d500",
    images: ["lespaul-honeyburst.png"],
    colorsAvailable: [
      {
        color: "#f1d500",
        images: ["lespaul-honeyburst.png"],
      },
      {
        color: "#c20000",
        images: ["lespaul-cherry.png"],
      },
      {
        color: "#f1962f",
        images: ["lespaul-cherrysunburst.png"],
      },
      {
        color: "#000",
        images: ["lespaul-ebony.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 11,
    category: "stringed",
    type: "guitar",
    brand: "gibson",
    name: "Les Paul Classic",
    description: "very good guitar",
    color: "#c20000",
    images: ["lespaul-cherry.png"],
    colorsAvailable: [
      {
        color: "#f1d500",
        images: ["lespaul-honeyburst.png"],
      },
      {
        color: "#c20000",
        images: ["lespaul-cherry.png"],
      },
      {
        color: "#f1962f",
        images: ["lespaul-cherrysunburst.png"],
      },
      {
        color: "#000",
        images: ["lespaul-ebony.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 12,
    category: "stringed",
    type: "guitar",
    brand: "gibson",
    name: "Les Paul Classic",
    description: "very good guitar",
    color: "#f1962f",
    images: ["lespaul-cherrysunburst.png"],
    colorsAvailable: [
      {
        color: "#f1d500",
        images: ["lespaul-honeyburst.png"],
      },
      {
        color: "#c20000",
        images: ["lespaul-cherry.png"],
      },
      {
        color: "#f1962f",
        images: ["lespaul-cherrysunburst.png"],
      },
      {
        color: "#000",
        images: ["lespaul-ebony.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 13,
    category: "stringed",
    type: "guitar",
    brand: "gibson",
    name: "Les Paul Classic",
    description: "very good guitar",
    color: "#000",
    images: ["lespaul-ebony.png"],
    colorsAvailable: [
      {
        color: "#f1d500",
        images: ["lespaul-honeyburst.png"],
      },
      {
        color: "#c20000",
        images: ["lespaul-cherry.png"],
      },
      {
        color: "#f1962f",
        images: ["lespaul-cherrysunburst.png"],
      },
      {
        color: "#000",
        images: ["lespaul-ebony.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 14,
    category: "stringed",
    type: "guitar",
    brand: "gibson",
    name: "Dave Mustaine Flying V EXP",
    description: "very good guitar",
    color: "#999",
    images: ["flyingv-silver.png"],
    colorsAvailable: [
      {
        color: "#999",
        images: ["flyingv-silver.png"],
      },
      {
        color: "#f1962f",
        images: ["flyingv-antiquenatural.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 15,
    category: "stringed",
    type: "guitar",
    brand: "gibson",
    name: "Dave Mustaine Flying V EXP",
    description: "very good guitar",
    color: "#f1962f",
    images: ["flyingv-antiquenatural.png"],
    colorsAvailable: [
      {
        color: "#999",
        images: ["flyingv-silver.png"],
      },
      {
        color: "#f1962f",
        images: ["flyingv-antiquenatural.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 16,
    category: "percussion",
    type: "drums",
    brand: "gibson",
    name: "drums 1",
    description: "very good drums",
    color: "#ff0000",
    images: ["stratocaster-red.png"],
    colorsAvailable: [
      {
        color: "#ff0000",
        images: ["stratocaster-red.png"],
      },
      {
        color: "#fff",
        images: ["stratocaster-whiteblonde.png"],
      },
      {
        color: "#3f1e00",
        images: ["stratocaster-sunburst.png"],
      },
      {
        color: "#000",
        images: ["stratocaster-black.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 17,
    category: "percussion",
    type: "drums",
    brand: "gibson",
    name: "drums 1",
    description: "very good drums",
    color: "#fff",
    images: ["stratocaster-whiteblonde.png"],
    colorsAvailable: [
      {
        color: "#ff0000",
        images: ["stratocaster-red.png"],
      },
      {
        color: "#fff",
        images: ["stratocaster-whiteblonde.png"],
      },
      {
        color: "#3f1e00",
        images: ["stratocaster-sunburst.png"],
      },
      {
        color: "#000",
        images: ["stratocaster-black.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 18,
    category: "percussion",
    type: "drums",
    brand: "gibson",
    name: "drums 1",
    description: "very good drums",
    color: "#3f1e00",
    images: ["stratocaster-sunburst.png"],
    colorsAvailable: [
      {
        color: "#ff0000",
        images: ["stratocaster-red.png"],
      },
      {
        color: "#fff",
        images: ["stratocaster-whiteblonde.png"],
      },
      {
        color: "#3f1e00",
        images: ["stratocaster-sunburst.png"],
      },
      {
        color: "#000",
        images: ["stratocaster-black.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
  {
    id: 19,
    category: "percussion",
    type: "drums",
    brand: "gibson",
    name: "drums 1",
    description: "very good drums",
    color: "#000",
    images: ["stratocaster-black.png"],
    colorsAvailable: [
      {
        color: "#ff0000",
        images: ["stratocaster-red.png"],
      },
      {
        color: "#fff",
        images: ["stratocaster-whiteblonde.png"],
      },
      {
        color: "#3f1e00",
        images: ["stratocaster-sunburst.png"],
      },
      {
        color: "#000",
        images: ["stratocaster-black.png"],
      },
    ],
    unitPrice: 1500,
    stockAmount: 12,
  },
];

module.exports = stockProducts;
