const stockProducts = [
  {
    id: 1,
    category: "Stringed",
    type: "Guitar",
    brand: "Fender",
    name: "CLASSIC VIBE '50S STRATOCASTER®",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#ff0000",
    images: [
      "stratocaster-red.png",
      "stratocaster-whiteblonde.png",
      "stratocaster-red.png",
      "stratocaster-red.png",
    ],
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
    unitPrice: 1300,
    stockAmount: 12,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
      {
        client: "Anonymous",
        stars: 5,
        comment: "Sick guitar bro!",
      },
    ],
  },
  {
    id: 2,
    category: "Stringed",
    type: "Guitar",
    brand: "Fender",
    name: "CLASSIC VIBE '50S STRATOCASTER®",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#fff",
    images: [
      "stratocaster-whiteblonde.png",
      "stratocaster-whiteblonde.png",
      "stratocaster-whiteblonde.png",
      "stratocaster-whiteblonde.png",
    ],
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
    unitPrice: 1300,
    stockAmount: 12,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 3,
    category: "Stringed",
    type: "Guitar",
    brand: "Fender",
    name: "CLASSIC VIBE '50S STRATOCASTER®",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#3f1e00",
    images: [
      "stratocaster-sunburst.png",
      "stratocaster-sunburst.png",
      "stratocaster-sunburst.png",
      "stratocaster-sunburst.png",
      "stratocaster-sunburst.png",
    ],
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
    unitPrice: 1300,
    stockAmount: 12,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 4,
    category: "Stringed",
    type: "Guitar",
    brand: "Fender",
    name: "CLASSIC VIBE '50S STRATOCASTER®",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#000",
    images: [
      "stratocaster-black.png",
      "stratocaster-black.png",
      "stratocaster-black.png",
      "stratocaster-black.png",
    ],
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
    unitPrice: 1300,
    stockAmount: 12,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 5,
    category: "Stringed",
    type: "Guitar",
    brand: "Fender",
    name: "PLAYER PLUS METEORA® HH",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#999",
    images: [
      "meteora-silverburst.png",
      "meteora-silverburst.png",
      "meteora-silverburst.png",
      "meteora-silverburst.png",
    ],
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
    unitPrice: 1300,
    stockAmount: 12,
    createdAt: new Date(2023, 11, 1, 12, 0, 0),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 6,
    category: "Stringed",
    type: "Guitar",
    brand: "Fender",
    name: "PLAYER PLUS METEORA® HH",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#00ff00",
    images: [
      "meteora-cosmicjade.png",
      "meteora-cosmicjade.png",
      "meteora-cosmicjade.png",
      "meteora-cosmicjade.png",
    ],
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
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 7,
    category: "Stringed",
    type: "Guitar",
    brand: "Fender",
    name: "PLAYER PLUS METEORA® HH",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#ff0000",
    images: [
      "meteora-red.png",
      "meteora-red.png",
      "meteora-red.png",
      "meteora-red.png",
    ],
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
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 8,
    category: "Stringed",
    type: "Guitar",
    brand: "Fender",
    name: "PLAYER PLUS METEORA® HH",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#3f1e00",
    images: [
      "meteora-sunburst.png",
      "meteora-sunburst.png",
      "meteora-sunburst.png",
      "meteora-sunburst.png",
    ],
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
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 9,
    category: "Stringed",
    type: "Guitar",
    brand: "Fender",
    name: "PLAYER PLUS METEORA® HH",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#0000ff",
    images: [
      "meteora-belairblue.png",
      "meteora-belairblue.png",
      "meteora-belairblue.png",
      "meteora-belairblue.png",
    ],
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
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 10,
    category: "Stringed",
    type: "Guitar",
    brand: "Gibson",
    name: "Les Paul Classic",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#f1d500",
    images: [
      "lespaul-honeyburst.png",
      "lespaul-honeyburst.png",
      "lespaul-honeyburst.png",
      "lespaul-honeyburst.png",
    ],
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
    unitPrice: 2000,
    stockAmount: 12,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 11,
    category: "Stringed",
    type: "Guitar",
    brand: "Gibson",
    name: "Les Paul Classic",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#c20000",
    images: [
      "lespaul-cherry.png",
      "lespaul-cherry.png",
      "lespaul-cherry.png",
      "lespaul-cherry.png",
    ],
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
    unitPrice: 2000,
    stockAmount: 12,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 12,
    category: "Stringed",
    type: "Guitar",
    brand: "Gibson",
    name: "Les Paul Classic",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#f1962f",
    images: [
      "lespaul-cherrysunburst.png",
      "lespaul-cherrysunburst.png",
      "lespaul-cherrysunburst.png",
      "lespaul-cherrysunburst.png",
    ],
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
    unitPrice: 2000,
    stockAmount: 12,
    createdAt: new Date(2023, 0, 1, 12, 0, 0),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 13,
    category: "Stringed",
    type: "Guitar",
    brand: "Gibson",
    name: "Les Paul Classic",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#000",
    images: [
      "lespaul-ebony.png",
      "lespaul-ebony.png",
      "lespaul-ebony.png",
      "lespaul-ebony.png",
    ],
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
    unitPrice: 2000,
    stockAmount: 12,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 14,
    category: "Stringed",
    type: "Guitar",
    brand: "Gibson",
    name: "Dave Mustaine Flying V EXP",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#999",
    images: [
      "flyingv-silver.png",
      "flyingv-silver.png",
      "flyingv-silver.png",
      "flyingv-silver.png",
    ],
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
    unitPrice: 1800,
    stockAmount: 12,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 15,
    category: "Stringed",
    type: "Guitar",
    brand: "Gibson",
    name: "Dave Mustaine Flying V EXP",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
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
    unitPrice: 1800,
    stockAmount: 12,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The guitar is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The guitar is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest guitar ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 16,
    category: "Percussion",
    type: "Drums",
    brand: "Gibson",
    name: "drums 1",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#ff0000",
    images: [
      "stratocaster-red.png",
      "stratocaster-red.png",
      "stratocaster-red.png",
      "stratocaster-red.png",
    ],
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
    unitPrice: 3000,
    stockAmount: 12,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The drums are awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The drums are really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest drums ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 17,
    category: "Percussion",
    type: "Drums",
    brand: "Gibson",
    name: "drums 1",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#fff",
    images: [
      "stratocaster-whiteblonde.png",
      "stratocaster-whiteblonde.png",
      "stratocaster-whiteblonde.png",
      "stratocaster-whiteblonde.png",
    ],
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
    unitPrice: 3000,
    stockAmount: 12,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The drums are awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The drums are really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest drums ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 18,
    category: "Percussion",
    type: "Drums",
    brand: "Gibson",
    name: "drums 1",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#3f1e00",
    images: [
      "stratocaster-sunburst.png",
      "stratocaster-sunburst.png",
      "stratocaster-sunburst.png",
      "stratocaster-sunburst.png",
    ],
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
    unitPrice: 3000,
    stockAmount: 12,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The drums are awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The drums are really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest drums ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 19,
    category: "Percussion",
    type: "Drums",
    brand: "Gibson",
    name: "drums 1",
    description:
      "A celebration of the birth of the Strat® in the 1950s, the Classic Vibe '50s Stratocaster creates incredible tone courtesy of a trio of Fender-Designed alnico single-coil pickups. Player-friendly features include a slim, comfortable C-shaped neck profile with an easy-playing 9.5-radius fingerboard and narrow-tall frets, as well as a vintage-style tremolo system for expressive string bending effects. This throwback Squier model also features 1950s-inspired headstock markings, rich-looking nickel-plated hardware and a slick vintage-tint gloss neck finish for an old-school vibe.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Nyatoh",
      },
      {
        title: "Body Shape",
        specDescription: "Stratocaster®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyurethane",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Tinted Gloss Urethane",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#000",
    images: [
      "stratocaster-black.png",
      "stratocaster-black.png",
      "stratocaster-black.png",
      "stratocaster-black.png",
    ],
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
    unitPrice: 3000,
    stockAmount: 12,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The drums are awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The drums are really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest drums ever! Just bought it to decorate my room",
      },
    ],
  },
];

module.exports = stockProducts;
