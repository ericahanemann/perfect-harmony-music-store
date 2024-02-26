const products = require("./products.mongo");

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
      "stratocaster-red-back.png",
      "stratocaster-red-body.png",
      "stratocaster-red-neck.png",
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
    unitPrice: 430,
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
      "stratocaster-whiteblonde-back.png",
      "stratocaster-whiteblonde-body.png",
      "stratocaster-whiteblonde-neck.png",
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
    unitPrice: 430,
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
      "stratocaster-sunburst-back.png",
      "stratocaster-sunburst-body.png",
      "stratocaster-sunburst-neck.png",
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
    unitPrice: 430,
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
      "stratocaster-black-back.png",
      "stratocaster-black-body.png",
      "stratocaster-black-neck.png",
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
    unitPrice: 430,
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
      'Fusing innovative Fender design with player-centric features and exciting new finishes, the Player Plus Meteora® delivers superb playability and unmistakable style. A set of powerful Fireball™ humbucking pickups blend the perfect amount of gain with great string-to-string note clarity. An S-1™ switch activates the coil-split, delivering crystal-clear single-coil tones. The silky satin Modern "C" neck fits your hand like a glove, with smooth rolled edges for supreme comfort. The 12" radius fingerboard and 22 medium jumbo frets facilitate fluid leads and choke free bends. Smooth and responsive, the 2-point tremolo provides classic vibrato effects, while the locking tuners provide rock-solid tuning and make string changes quick and easy. With classic Fender style, advanced features and stunning new finishes, the Player Plus Meteora® is the perfect tool to spark your creativity and let you stand out from the crowd.',
    specs: [
      {
        title: "Body Material",
        specDescription: "Alder",
      },
      {
        title: "Body Shape",
        specDescription: "Meteora®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyester",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Satin Urethane with Gloss Urethane Headstock Face",
      },
      {
        title: "Neck Shape",
        specDescription: 'Modern "C"',
      },
    ],
    color: "#999",
    images: [
      "meteora-silverburst.png",
      "meteora-silverburst-back.png",
      "meteora-silverburst-body.png",
      "meteora-silverburst-neck.png",
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
    unitPrice: 1050,
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
      'Fusing innovative Fender design with player-centric features and exciting new finishes, the Player Plus Meteora® delivers superb playability and unmistakable style. A set of powerful Fireball™ humbucking pickups blend the perfect amount of gain with great string-to-string note clarity. An S-1™ switch activates the coil-split, delivering crystal-clear single-coil tones. The silky satin Modern "C" neck fits your hand like a glove, with smooth rolled edges for supreme comfort. The 12" radius fingerboard and 22 medium jumbo frets facilitate fluid leads and choke free bends. Smooth and responsive, the 2-point tremolo provides classic vibrato effects, while the locking tuners provide rock-solid tuning and make string changes quick and easy. With classic Fender style, advanced features and stunning new finishes, the Player Plus Meteora® is the perfect tool to spark your creativity and let you stand out from the crowd.',
    specs: [
      {
        title: "Body Material",
        specDescription: "Alder",
      },
      {
        title: "Body Shape",
        specDescription: "Meteora®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyester",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Satin Urethane with Gloss Urethane Headstock Face",
      },
      {
        title: "Neck Shape",
        specDescription: 'Modern "C"',
      },
    ],
    color: "#00ff00",
    images: [
      "meteora-cosmicjade.png",
      "meteora-cosmicjade-back.png",
      "meteora-cosmicjade-body.png",
      "meteora-cosmicjade-neck.png",
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
    unitPrice: 1050,
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
      'Fusing innovative Fender design with player-centric features and exciting new finishes, the Player Plus Meteora® delivers superb playability and unmistakable style. A set of powerful Fireball™ humbucking pickups blend the perfect amount of gain with great string-to-string note clarity. An S-1™ switch activates the coil-split, delivering crystal-clear single-coil tones. The silky satin Modern "C" neck fits your hand like a glove, with smooth rolled edges for supreme comfort. The 12" radius fingerboard and 22 medium jumbo frets facilitate fluid leads and choke free bends. Smooth and responsive, the 2-point tremolo provides classic vibrato effects, while the locking tuners provide rock-solid tuning and make string changes quick and easy. With classic Fender style, advanced features and stunning new finishes, the Player Plus Meteora® is the perfect tool to spark your creativity and let you stand out from the crowd.',
    specs: [
      {
        title: "Body Material",
        specDescription: "Alder",
      },
      {
        title: "Body Shape",
        specDescription: "Meteora®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyester",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Satin Urethane with Gloss Urethane Headstock Face",
      },
      {
        title: "Neck Shape",
        specDescription: 'Modern "C"',
      },
    ],
    color: "#ff0000",
    images: [
      "meteora-red.png",
      "meteora-red-back.png",
      "meteora-red-body.png",
      "meteora-red-neck.png",
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
    unitPrice: 1050,
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
      'Fusing innovative Fender design with player-centric features and exciting new finishes, the Player Plus Meteora® delivers superb playability and unmistakable style. A set of powerful Fireball™ humbucking pickups blend the perfect amount of gain with great string-to-string note clarity. An S-1™ switch activates the coil-split, delivering crystal-clear single-coil tones. The silky satin Modern "C" neck fits your hand like a glove, with smooth rolled edges for supreme comfort. The 12" radius fingerboard and 22 medium jumbo frets facilitate fluid leads and choke free bends. Smooth and responsive, the 2-point tremolo provides classic vibrato effects, while the locking tuners provide rock-solid tuning and make string changes quick and easy. With classic Fender style, advanced features and stunning new finishes, the Player Plus Meteora® is the perfect tool to spark your creativity and let you stand out from the crowd.',
    specs: [
      {
        title: "Body Material",
        specDescription: "Alder",
      },
      {
        title: "Body Shape",
        specDescription: "Meteora®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyester",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Satin Urethane with Gloss Urethane Headstock Face",
      },
      {
        title: "Neck Shape",
        specDescription: 'Modern "C"',
      },
    ],
    color: "#3f1e00",
    images: [
      "meteora-sunburst.png",
      "meteora-sunburst-back.png",
      "meteora-sunburst-body.png",
      "meteora-sunburst-neck.png",
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
    unitPrice: 1050,
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
      'Fusing innovative Fender design with player-centric features and exciting new finishes, the Player Plus Meteora® delivers superb playability and unmistakable style. A set of powerful Fireball™ humbucking pickups blend the perfect amount of gain with great string-to-string note clarity. An S-1™ switch activates the coil-split, delivering crystal-clear single-coil tones. The silky satin Modern "C" neck fits your hand like a glove, with smooth rolled edges for supreme comfort. The 12" radius fingerboard and 22 medium jumbo frets facilitate fluid leads and choke free bends. Smooth and responsive, the 2-point tremolo provides classic vibrato effects, while the locking tuners provide rock-solid tuning and make string changes quick and easy. With classic Fender style, advanced features and stunning new finishes, the Player Plus Meteora® is the perfect tool to spark your creativity and let you stand out from the crowd.',
    specs: [
      {
        title: "Body Material",
        specDescription: "Alder",
      },
      {
        title: "Body Shape",
        specDescription: "Meteora®",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Polyester",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Satin Urethane with Gloss Urethane Headstock Face",
      },
      {
        title: "Neck Shape",
        specDescription: 'Modern "C"',
      },
    ],
    color: "#0000ff",
    images: [
      "meteora-belairblue.png",
      "meteora-belairblue-back.png",
      "meteora-belairblue-body.png",
      "meteora-belairblue-neck.png",
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
    unitPrice: 1050,
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
      "The Gibson Les Paul™ Classic combines the early 60s style Les Paul model with some functional and time-tested modifications. As expected, the Les Paul Classic is crafted with a mahogany back and maple top coupled with a SlimTaper™ mahogany neck and a bound, rosewood fingerboard. 60s Burstbucker™ zebra, open-coil pickups provide classic Gibson tones from the era with a bit of extra punch thanks to the open coils. The control assembly features 4 push-pull pots, which provide choices of coil tapping, phase switching, and Pure Bypassing for functional and versatile sonic variety.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Mahogany",
      },
      {
        title: "Body Shape",
        specDescription: "Les Paul",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Nitrocellulose Lacquer",
      },
      {
        title: "Neck Profile",
        specDescription: "SlimTaper",
      },
      {
        title: "Nut Material",
        specDescription: "Graph Tech",
      },
      {
        title: "Inlays",
        specDescription: "Acrylic Trapezoids",
      },
    ],
    color: "#f1d500",
    images: [
      "lespaul-honeyburst.png",
      "lespaul-honeyburst-back.png",
      "lespaul-honeyburst-body.png",
      "lespaul-honeyburst-neck.png",
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
    unitPrice: 2300,
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
      "The Gibson Les Paul™ Classic combines the early 60s style Les Paul model with some functional and time-tested modifications. As expected, the Les Paul Classic is crafted with a mahogany back and maple top coupled with a SlimTaper™ mahogany neck and a bound, rosewood fingerboard. 60s Burstbucker™ zebra, open-coil pickups provide classic Gibson tones from the era with a bit of extra punch thanks to the open coils. The control assembly features 4 push-pull pots, which provide choices of coil tapping, phase switching, and Pure Bypassing for functional and versatile sonic variety.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Mahogany",
      },
      {
        title: "Body Shape",
        specDescription: "Les Paul",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Nitrocellulose Lacquer",
      },
      {
        title: "Neck Profile",
        specDescription: "SlimTaper",
      },
      {
        title: "Nut Material",
        specDescription: "Graph Tech",
      },
      {
        title: "Inlays",
        specDescription: "Acrylic Trapezoids",
      },
    ],
    color: "#c20000",
    images: [
      "lespaul-cherry.png",
      "lespaul-cherry-back.png",
      "lespaul-cherry-body.png",
      "lespaul-cherry-neck.png",
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
    unitPrice: 2300,
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
      "The Gibson Les Paul™ Classic combines the early 60s style Les Paul model with some functional and time-tested modifications. As expected, the Les Paul Classic is crafted with a mahogany back and maple top coupled with a SlimTaper™ mahogany neck and a bound, rosewood fingerboard. 60s Burstbucker™ zebra, open-coil pickups provide classic Gibson tones from the era with a bit of extra punch thanks to the open coils. The control assembly features 4 push-pull pots, which provide choices of coil tapping, phase switching, and Pure Bypassing for functional and versatile sonic variety.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Mahogany",
      },
      {
        title: "Body Shape",
        specDescription: "Les Paul",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Nitrocellulose Lacquer",
      },
      {
        title: "Neck Profile",
        specDescription: "SlimTaper",
      },
      {
        title: "Nut Material",
        specDescription: "Graph Tech",
      },
      {
        title: "Inlays",
        specDescription: "Acrylic Trapezoids",
      },
    ],
    color: "#f1962f",
    images: [
      "lespaul-cherrysunburst.png",
      "lespaul-cherrysunburst-back.png",
      "lespaul-cherrysunburst-body.png",
      "lespaul-cherrysunburst-neck.png",
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
    unitPrice: 2300,
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
      "The Gibson Les Paul™ Classic combines the early 60s style Les Paul model with some functional and time-tested modifications. As expected, the Les Paul Classic is crafted with a mahogany back and maple top coupled with a SlimTaper™ mahogany neck and a bound, rosewood fingerboard. 60s Burstbucker™ zebra, open-coil pickups provide classic Gibson tones from the era with a bit of extra punch thanks to the open coils. The control assembly features 4 push-pull pots, which provide choices of coil tapping, phase switching, and Pure Bypassing for functional and versatile sonic variety.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Mahogany",
      },
      {
        title: "Body Shape",
        specDescription: "Les Paul",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Nitrocellulose Lacquer",
      },
      {
        title: "Neck Profile",
        specDescription: "SlimTaper",
      },
      {
        title: "Nut Material",
        specDescription: "Graph Tech",
      },
      {
        title: "Inlays",
        specDescription: "Acrylic Trapezoids",
      },
    ],
    color: "#000",
    images: [
      "lespaul-ebony.png",
      "lespaul-ebony-back.png",
      "lespaul-ebony-body.png",
      "lespaul-ebony-neck.png",
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
    unitPrice: 2300,
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
      "Dave Mustaine is the legendary guitarist, vocalist, songwriter, and founder of the multi-platinum selling and Grammy® Award-winning band, MEGADETH. His new Gibson Dave Mustaine Flying V™ EXP Artist model delivers the powerful, heavy sound and exceptional playing performance that he demands. The 25.5” scale mahogany neck has an ebony fretboard with a compound fretboard radius, 24 medium jumbo frets, mother of pearl “teeth” inlays, an Explorer™-style headstock with Grover® Mini Rotomatic® tuners with Kidney buttons, and a Graph Tech® nut. The mahogany Flying V-style body is equipped with a Tune-O-Matic™ bridge, a Stop Bar tailpiece, and a Dave Mustaine signature Seymour Duncan® Thrash Factor pickup set. The Antique Natural and Silver Metallic nitrocellulose lacquer finishes are complemented by black chrome hardware. A hardshell case is also included. ",
    specs: [
      {
        title: "Body Material",
        specDescription: "Mahogany",
      },
      {
        title: "Body Shape",
        specDescription: "Flying V",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Nitrocellulose Lacquer",
      },
      {
        title: "Neck Profile",
        specDescription: "SlimTaper",
      },
      {
        title: "Nut Material",
        specDescription: "Graph Tech",
      },
      {
        title: "Inlays",
        specDescription: "Mother of Pearl Teeth",
      },
    ],
    color: "#999",
    images: [
      "flyingv-silver.png",
      "flyingv-silver-back.png",
      "flyingv-silver-body.png",
      "flyingv-silver-neck.png",
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
    unitPrice: 2800,
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
      "Dave Mustaine is the legendary guitarist, vocalist, songwriter, and founder of the multi-platinum selling and Grammy® Award-winning band, MEGADETH. His new Gibson Dave Mustaine Flying V™ EXP Artist model delivers the powerful, heavy sound and exceptional playing performance that he demands. The 25.5” scale mahogany neck has an ebony fretboard with a compound fretboard radius, 24 medium jumbo frets, mother of pearl “teeth” inlays, an Explorer™-style headstock with Grover® Mini Rotomatic® tuners with Kidney buttons, and a Graph Tech® nut. The mahogany Flying V-style body is equipped with a Tune-O-Matic™ bridge, a Stop Bar tailpiece, and a Dave Mustaine signature Seymour Duncan® Thrash Factor pickup set. The Antique Natural and Silver Metallic nitrocellulose lacquer finishes are complemented by black chrome hardware. A hardshell case is also included. ",
    specs: [
      {
        title: "Body Material",
        specDescription: "Mahogany",
      },
      {
        title: "Body Shape",
        specDescription: "Flying V",
      },
      {
        title: "Body Finish",
        specDescription: "Gloss Nitrocellulose Lacquer",
      },
      {
        title: "Neck Profile",
        specDescription: "SlimTaper",
      },
      {
        title: "Nut Material",
        specDescription: "Graph Tech",
      },
      {
        title: "Inlays",
        specDescription: "Mother of Pearl Teeth",
      },
    ],
    color: "#f1962f",
    images: [
      "flyingv-antiquenatural.png",
      "flyingv-antiquenatural-back.png",
      "flyingv-antiquenatural-body.png",
      "flyingv-antiquenatural-neck.png",
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
    unitPrice: 2800,
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
    brand: "Pearl",
    name: "Export EXX725S/C 5-piece Drum Set with Snare Drum",
    description:
      "Upgraded shells, hardware, and more make this Pearl Export EXX 5-piece drum set an upgraded version of one of the most popular and affordable drum kits around. Inspired by Pearl's Reference Series, this Export EXX kit's Superior Shell Technology (SST) uses a combination of strategically arranged plies of premium wood and proprietary construction techniques to offer you a durable shell that maximizes frequency response. The Opti-Loc mounting system keeps your toms wobble free while reinforcing the resonance of the kit. The included 830-series hardware adds big bang for the buck with the Pearl Export EXX drum kit. All you need to do is add the cymbals! The Pearl Export EXX 5-piece drum kit's poplar and Asian mahogany shells are constructed using Pearl's proprietary Superior Shell Technology. This construction method incorporates Pearl's trademarked Acoustiglue that is boiled into the shells and pressed at over 1,000 pounds of hydraulic pressure, making the shell act and resonate as a single ply. SST uses precision-cut scarf joints to join the seams of the shells, offering over 800% more contact area than standard butt joints. This technology makes these drums so durable that they come with a limited lifetime warranty from Pearl. Pearl outfitted these shells with new lugs that minimize shell interaction for maximum resonance and sustain to make these shells sound even better.",
    specs: [
      {
        title: "Configuration",
        specDescription: "Drum Set with Hardware",
      },
      {
        title: "Number of Drums",
        specDescription: "5",
      },
      {
        title: "Shell Material",
        specDescription: "Mahogany/Poplar",
      },
      {
        title: "Included Stands",
        specDescription:
          "830 series hardware - boom, straight cymbal, hi-hat and snare stands",
      },
      {
        title: "Included Drum Pedal",
        specDescription: "P-930 kick pedal",
      },
    ],
    color: "#000000",
    images: [
      "pearl-export-five-piece-jetblack.png",
      "pearl-export-five-piece-jetblack-back.png",
    ],
    colorsAvailable: [
      {
        color: "#000000",
        images: ["pearl-export-five-piece-jetblack.png"],
      },
      {
        color: "#0000ff",
        images: ["pearl-export-five-piece-blue.png"],
      },
      {
        color: "#ffffff",
        images: ["pearl-export-five-piece-white.png"],
      },
      {
        color: "#555555",
        images: ["pearl-export-five-piece-chrome.png"],
      },
    ],
    unitPrice: 1000,
    stockAmount: 3,
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
    brand: "Pearl",
    name: "Export EXX725S/C 5-piece Drum Set with Snare Drum",
    description:
      "Upgraded shells, hardware, and more make this Pearl Export EXX 5-piece drum set an upgraded version of one of the most popular and affordable drum kits around. Inspired by Pearl's Reference Series, this Export EXX kit's Superior Shell Technology (SST) uses a combination of strategically arranged plies of premium wood and proprietary construction techniques to offer you a durable shell that maximizes frequency response. The Opti-Loc mounting system keeps your toms wobble free while reinforcing the resonance of the kit. The included 830-series hardware adds big bang for the buck with the Pearl Export EXX drum kit. All you need to do is add the cymbals! The Pearl Export EXX 5-piece drum kit's poplar and Asian mahogany shells are constructed using Pearl's proprietary Superior Shell Technology. This construction method incorporates Pearl's trademarked Acoustiglue that is boiled into the shells and pressed at over 1,000 pounds of hydraulic pressure, making the shell act and resonate as a single ply. SST uses precision-cut scarf joints to join the seams of the shells, offering over 800% more contact area than standard butt joints. This technology makes these drums so durable that they come with a limited lifetime warranty from Pearl. Pearl outfitted these shells with new lugs that minimize shell interaction for maximum resonance and sustain to make these shells sound even better.",
    specs: [
      {
        title: "Configuration",
        specDescription: "Drum Set with Hardware",
      },
      {
        title: "Number of Drums",
        specDescription: "5",
      },
      {
        title: "Shell Material",
        specDescription: "Mahogany/Poplar",
      },
      {
        title: "Included Stands",
        specDescription:
          "830 series hardware - boom, straight cymbal, hi-hat and snare stands",
      },
      {
        title: "Included Drum Pedal",
        specDescription: "P-930 kick pedal",
      },
    ],
    color: "#0000ff",
    images: [
      "pearl-export-five-piece-blue.png",
      "pearl-export-five-piece-blue-front.png",
    ],
    colorsAvailable: [
      {
        color: "#000000",
        images: ["pearl-export-five-piece-jetblack.png"],
      },
      {
        color: "#0000ff",
        images: ["pearl-export-five-piece-blue.png"],
      },
      {
        color: "#ffffff",
        images: ["pearl-export-five-piece-white.png"],
      },
      {
        color: "#555555",
        images: ["pearl-export-five-piece-chrome.png"],
      },
    ],
    unitPrice: 1000,
    stockAmount: 4,
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
    brand: "Pearl",
    name: "Export EXX725S/C 5-piece Drum Set with Snare Drum",
    description:
      "Upgraded shells, hardware, and more make this Pearl Export EXX 5-piece drum set an upgraded version of one of the most popular and affordable drum kits around. Inspired by Pearl's Reference Series, this Export EXX kit's Superior Shell Technology (SST) uses a combination of strategically arranged plies of premium wood and proprietary construction techniques to offer you a durable shell that maximizes frequency response. The Opti-Loc mounting system keeps your toms wobble free while reinforcing the resonance of the kit. The included 830-series hardware adds big bang for the buck with the Pearl Export EXX drum kit. All you need to do is add the cymbals! The Pearl Export EXX 5-piece drum kit's poplar and Asian mahogany shells are constructed using Pearl's proprietary Superior Shell Technology. This construction method incorporates Pearl's trademarked Acoustiglue that is boiled into the shells and pressed at over 1,000 pounds of hydraulic pressure, making the shell act and resonate as a single ply. SST uses precision-cut scarf joints to join the seams of the shells, offering over 800% more contact area than standard butt joints. This technology makes these drums so durable that they come with a limited lifetime warranty from Pearl. Pearl outfitted these shells with new lugs that minimize shell interaction for maximum resonance and sustain to make these shells sound even better.",
    specs: [
      {
        title: "Configuration",
        specDescription: "Drum Set with Hardware",
      },
      {
        title: "Number of Drums",
        specDescription: "5",
      },
      {
        title: "Shell Material",
        specDescription: "Mahogany/Poplar",
      },
      {
        title: "Included Stands",
        specDescription:
          "830 series hardware - boom, straight cymbal, hi-hat and snare stands",
      },
      {
        title: "Included Drum Pedal",
        specDescription: "P-930 kick pedal",
      },
    ],
    color: "#ffffff",
    images: [
      "pearl-export-five-piece-white.png",
      "pearl-export-five-piece-white-back.png",
    ],
    colorsAvailable: [
      {
        color: "#000000",
        images: ["pearl-export-five-piece-jetblack.png"],
      },
      {
        color: "#0000ff",
        images: ["pearl-export-five-piece-blue.png"],
      },
      {
        color: "#ffffff",
        images: ["pearl-export-five-piece-white.png"],
      },
      {
        color: "#555555",
        images: ["pearl-export-five-piece-chrome.png"],
      },
    ],
    unitPrice: 1000,
    stockAmount: 5,
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
    brand: "Pearl",
    name: "Export EXX725S/C 5-piece Drum Set with Snare Drum",
    description:
      "Upgraded shells, hardware, and more make this Pearl Export EXX 5-piece drum set an upgraded version of one of the most popular and affordable drum kits around. Inspired by Pearl's Reference Series, this Export EXX kit's Superior Shell Technology (SST) uses a combination of strategically arranged plies of premium wood and proprietary construction techniques to offer you a durable shell that maximizes frequency response. The Opti-Loc mounting system keeps your toms wobble free while reinforcing the resonance of the kit. The included 830-series hardware adds big bang for the buck with the Pearl Export EXX drum kit. All you need to do is add the cymbals! The Pearl Export EXX 5-piece drum kit's poplar and Asian mahogany shells are constructed using Pearl's proprietary Superior Shell Technology. This construction method incorporates Pearl's trademarked Acoustiglue that is boiled into the shells and pressed at over 1,000 pounds of hydraulic pressure, making the shell act and resonate as a single ply. SST uses precision-cut scarf joints to join the seams of the shells, offering over 800% more contact area than standard butt joints. This technology makes these drums so durable that they come with a limited lifetime warranty from Pearl. Pearl outfitted these shells with new lugs that minimize shell interaction for maximum resonance and sustain to make these shells sound even better.",
    specs: [
      {
        title: "Configuration",
        specDescription: "Drum Set with Hardware",
      },
      {
        title: "Number of Drums",
        specDescription: "5",
      },
      {
        title: "Shell Material",
        specDescription: "Mahogany/Poplar",
      },
      {
        title: "Included Stands",
        specDescription:
          "830 series hardware - boom, straight cymbal, hi-hat and snare stands",
      },
      {
        title: "Included Drum Pedal",
        specDescription: "P-930 kick pedal",
      },
    ],
    color: "#555555",
    images: [
      "pearl-export-five-piece-chrome.png",
      "pearl-export-five-piece-chrome-back.png",
    ],
    colorsAvailable: [
      {
        color: "#000000",
        images: ["pearl-export-five-piece-jetblack.png"],
      },
      {
        color: "#0000ff",
        images: ["pearl-export-five-piece-blue.png"],
      },
      {
        color: "#ffffff",
        images: ["pearl-export-five-piece-white.png"],
      },
      {
        color: "#555555",
        images: ["pearl-export-five-piece-chrome.png"],
      },
    ],
    unitPrice: 1000,
    stockAmount: 2,
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
    id: 20,
    category: "Percussion",
    type: "Drums",
    brand: "DW",
    name: "DWe 5-piece Drum Kit Bundle",
    description:
      "The future of convertible drumming has arrived at Sweetwater! The DWe drum kit from DW flaunts astonishing acoustic authenticity and wireless electronic playability, providing you the freedom to curate your craft in virtually any way you see fit. This 5-piece bundle boasts real maple shells that are all effortlessly swappable between natural acoustic and explorative electronic modes. How’s it done? By way of the DWe’s included swappable acoustic and electronic drumheads and top-tier cymbal pack. A tossed-in license for DW Soundworks, a DrumLink wireless hub, and an R-Tap audio processor grant you total access to a digital library of percussive possibilities. Plus, you’ll receive all the necessary mounting essentials in addition to a full outfit of DW’s 5000 series hardware, including their acclaimed 5000 series bass drum pedal. The best part? The DWe maintains that unwavering DW quality and attention to detail through and through, no matter how you choose to play. Let’s get one thing straight: the DWe is an all-out, top-shelf DW acoustic kit at heart. Plied nine times with premium and punchy maple, each shell in this 5-piece pack offers that enviable, versatile, and iconic kit tone that drummers cherish. Included in this bundle are both 8- x 10-inch and 9- x 12-inch mounted toms, a 14- x 16-inch floor tom, 16- x 22-inch bass drum, and 6.5- x 14-inch snare drum, all treated to an expert assortment of DW’s handsome and chrome-plated turret lugs and triple-flanged hoops. Jazz? Rock? Pop? Metal? Why stop there? This maple-plied beauty will handle virtually any genre with confidence. With a fast and easy drumhead switch, the DWe transforms from legendary acoustic tones to expressive and explorative digital ones. The included electronic drumheads use incomparable and wireless connections to translate your percussive signals into the instrument sounds of your choosing with quick, low-latency firing. The same goes for the exceptional 4-piece cymbal pack of 14-inch hi-hats, two 16-inch crash/rides, and an 18-inch crash/ride. A simple swap-out will have you dialing in your dream DW tones in no time.",
    specs: [
      {
        title: "Hybrid Acoustic/Electric",
        specDescription: "Yes",
      },
      {
        title: "Included Drum Module",
        specDescription: "R-Tap Audio Processor",
      },
      {
        title: "Included Cymbal Pads",
        specDescription:
          'DWe Cymbal Pack: 14" Hi-hat, 2 x 16" Crash/Ride, 18" Crash/Ride',
      },
      {
        title: "Software",
        specDescription: "DW Soundworks, DrumLink Wireless Hub",
      },
      {
        title: "Included Software",
        specDescription:
          "5000 Bass Drum Pedal, 5300 Snare Stand, 5500TD Hi-hat Stand, 5791 Combo Stand, 5700 Cymbal Stand",
      },
    ],
    color: "#b30000",
    images: ["dwe-five-piece-cherry.png", "dwe-five-piece-cherry-back.png"],
    colorsAvailable: [
      {
        color: "#b30000",
        images: ["dwe-five-piece-cherry.png"],
      },
      {
        color: "#222222",
        images: ["dwe-five-piece-galaxy.png"],
      },
      {
        color: "#000066",
        images: ["dwe-five-piece-blue.png"],
      },
      {
        color: "#ffffff",
        images: ["dwe-five-piece-white.png"],
      },
    ],
    unitPrice: 9300,
    stockAmount: 2,
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
    id: 21,
    category: "Percussion",
    type: "Drums",
    brand: "DW",
    name: "DWe 5-piece Drum Kit Bundle",
    description:
      "The future of convertible drumming has arrived at Sweetwater! The DWe drum kit from DW flaunts astonishing acoustic authenticity and wireless electronic playability, providing you the freedom to curate your craft in virtually any way you see fit. This 5-piece bundle boasts real maple shells that are all effortlessly swappable between natural acoustic and explorative electronic modes. How’s it done? By way of the DWe’s included swappable acoustic and electronic drumheads and top-tier cymbal pack. A tossed-in license for DW Soundworks, a DrumLink wireless hub, and an R-Tap audio processor grant you total access to a digital library of percussive possibilities. Plus, you’ll receive all the necessary mounting essentials in addition to a full outfit of DW’s 5000 series hardware, including their acclaimed 5000 series bass drum pedal. The best part? The DWe maintains that unwavering DW quality and attention to detail through and through, no matter how you choose to play. Let’s get one thing straight: the DWe is an all-out, top-shelf DW acoustic kit at heart. Plied nine times with premium and punchy maple, each shell in this 5-piece pack offers that enviable, versatile, and iconic kit tone that drummers cherish. Included in this bundle are both 8- x 10-inch and 9- x 12-inch mounted toms, a 14- x 16-inch floor tom, 16- x 22-inch bass drum, and 6.5- x 14-inch snare drum, all treated to an expert assortment of DW’s handsome and chrome-plated turret lugs and triple-flanged hoops. Jazz? Rock? Pop? Metal? Why stop there? This maple-plied beauty will handle virtually any genre with confidence. With a fast and easy drumhead switch, the DWe transforms from legendary acoustic tones to expressive and explorative digital ones. The included electronic drumheads use incomparable and wireless connections to translate your percussive signals into the instrument sounds of your choosing with quick, low-latency firing. The same goes for the exceptional 4-piece cymbal pack of 14-inch hi-hats, two 16-inch crash/rides, and an 18-inch crash/ride. A simple swap-out will have you dialing in your dream DW tones in no time.",
    specs: [
      {
        title: "Hybrid Acoustic/Electric",
        specDescription: "Yes",
      },
      {
        title: "Included Drum Module",
        specDescription: "R-Tap Audio Processor",
      },
      {
        title: "Included Cymbal Pads",
        specDescription:
          'DWe Cymbal Pack: 14" Hi-hat, 2 x 16" Crash/Ride, 18" Crash/Ride',
      },
      {
        title: "Software",
        specDescription: "DW Soundworks, DrumLink Wireless Hub",
      },
      {
        title: "Included Software",
        specDescription:
          "5000 Bass Drum Pedal, 5300 Snare Stand, 5500TD Hi-hat Stand, 5791 Combo Stand, 5700 Cymbal Stand",
      },
    ],
    color: "#222222",
    images: ["dwe-five-piece-galaxy.png", "dwe-five-piece-galaxy-back.png"],
    colorsAvailable: [
      {
        color: "#b30000",
        images: ["dwe-five-piece-cherry.png"],
      },
      {
        color: "#222222",
        images: ["dwe-five-piece-galaxy.png"],
      },
      {
        color: "#000066",
        images: ["dwe-five-piece-blue.png"],
      },
      {
        color: "#ffffff",
        images: ["dwe-five-piece-white.png"],
      },
    ],
    unitPrice: 9000,
    stockAmount: 2,
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
    id: 22,
    category: "Percussion",
    type: "Drums",
    brand: "DW",
    name: "DWe 5-piece Drum Kit Bundle",
    description:
      "The future of convertible drumming has arrived at Sweetwater! The DWe drum kit from DW flaunts astonishing acoustic authenticity and wireless electronic playability, providing you the freedom to curate your craft in virtually any way you see fit. This 5-piece bundle boasts real maple shells that are all effortlessly swappable between natural acoustic and explorative electronic modes. How’s it done? By way of the DWe’s included swappable acoustic and electronic drumheads and top-tier cymbal pack. A tossed-in license for DW Soundworks, a DrumLink wireless hub, and an R-Tap audio processor grant you total access to a digital library of percussive possibilities. Plus, you’ll receive all the necessary mounting essentials in addition to a full outfit of DW’s 5000 series hardware, including their acclaimed 5000 series bass drum pedal. The best part? The DWe maintains that unwavering DW quality and attention to detail through and through, no matter how you choose to play. Let’s get one thing straight: the DWe is an all-out, top-shelf DW acoustic kit at heart. Plied nine times with premium and punchy maple, each shell in this 5-piece pack offers that enviable, versatile, and iconic kit tone that drummers cherish. Included in this bundle are both 8- x 10-inch and 9- x 12-inch mounted toms, a 14- x 16-inch floor tom, 16- x 22-inch bass drum, and 6.5- x 14-inch snare drum, all treated to an expert assortment of DW’s handsome and chrome-plated turret lugs and triple-flanged hoops. Jazz? Rock? Pop? Metal? Why stop there? This maple-plied beauty will handle virtually any genre with confidence. With a fast and easy drumhead switch, the DWe transforms from legendary acoustic tones to expressive and explorative digital ones. The included electronic drumheads use incomparable and wireless connections to translate your percussive signals into the instrument sounds of your choosing with quick, low-latency firing. The same goes for the exceptional 4-piece cymbal pack of 14-inch hi-hats, two 16-inch crash/rides, and an 18-inch crash/ride. A simple swap-out will have you dialing in your dream DW tones in no time.",
    specs: [
      {
        title: "Hybrid Acoustic/Electric",
        specDescription: "Yes",
      },
      {
        title: "Included Drum Module",
        specDescription: "R-Tap Audio Processor",
      },
      {
        title: "Included Cymbal Pads",
        specDescription:
          'DWe Cymbal Pack: 14" Hi-hat, 2 x 16" Crash/Ride, 18" Crash/Ride',
      },
      {
        title: "Software",
        specDescription: "DW Soundworks, DrumLink Wireless Hub",
      },
      {
        title: "Included Software",
        specDescription:
          "5000 Bass Drum Pedal, 5300 Snare Stand, 5500TD Hi-hat Stand, 5791 Combo Stand, 5700 Cymbal Stand",
      },
    ],
    color: "#000066",
    images: ["dwe-five-piece-blue.png", "dwe-five-piece-blue-back.png"],
    colorsAvailable: [
      {
        color: "#b30000",
        images: ["dwe-five-piece-cherry.png"],
      },
      {
        color: "#222222",
        images: ["dwe-five-piece-galaxy.png"],
      },
      {
        color: "#000066",
        images: ["dwe-five-piece-blue.png"],
      },
      {
        color: "#ffffff",
        images: ["dwe-five-piece-white.png"],
      },
    ],
    unitPrice: 9300,
    stockAmount: 2,
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
    id: 23,
    category: "Percussion",
    type: "Drums",
    brand: "DW",
    name: "DWe 5-piece Drum Kit Bundle",
    description:
      "The future of convertible drumming has arrived at Sweetwater! The DWe drum kit from DW flaunts astonishing acoustic authenticity and wireless electronic playability, providing you the freedom to curate your craft in virtually any way you see fit. This 5-piece bundle boasts real maple shells that are all effortlessly swappable between natural acoustic and explorative electronic modes. How’s it done? By way of the DWe’s included swappable acoustic and electronic drumheads and top-tier cymbal pack. A tossed-in license for DW Soundworks, a DrumLink wireless hub, and an R-Tap audio processor grant you total access to a digital library of percussive possibilities. Plus, you’ll receive all the necessary mounting essentials in addition to a full outfit of DW’s 5000 series hardware, including their acclaimed 5000 series bass drum pedal. The best part? The DWe maintains that unwavering DW quality and attention to detail through and through, no matter how you choose to play. Let’s get one thing straight: the DWe is an all-out, top-shelf DW acoustic kit at heart. Plied nine times with premium and punchy maple, each shell in this 5-piece pack offers that enviable, versatile, and iconic kit tone that drummers cherish. Included in this bundle are both 8- x 10-inch and 9- x 12-inch mounted toms, a 14- x 16-inch floor tom, 16- x 22-inch bass drum, and 6.5- x 14-inch snare drum, all treated to an expert assortment of DW’s handsome and chrome-plated turret lugs and triple-flanged hoops. Jazz? Rock? Pop? Metal? Why stop there? This maple-plied beauty will handle virtually any genre with confidence. With a fast and easy drumhead switch, the DWe transforms from legendary acoustic tones to expressive and explorative digital ones. The included electronic drumheads use incomparable and wireless connections to translate your percussive signals into the instrument sounds of your choosing with quick, low-latency firing. The same goes for the exceptional 4-piece cymbal pack of 14-inch hi-hats, two 16-inch crash/rides, and an 18-inch crash/ride. A simple swap-out will have you dialing in your dream DW tones in no time.",
    specs: [
      {
        title: "Hybrid Acoustic/Electric",
        specDescription: "Yes",
      },
      {
        title: "Included Drum Module",
        specDescription: "R-Tap Audio Processor",
      },
      {
        title: "Included Cymbal Pads",
        specDescription:
          'DWe Cymbal Pack: 14" Hi-hat, 2 x 16" Crash/Ride, 18" Crash/Ride',
      },
      {
        title: "Software",
        specDescription: "DW Soundworks, DrumLink Wireless Hub",
      },
      {
        title: "Included Software",
        specDescription:
          "5000 Bass Drum Pedal, 5300 Snare Stand, 5500TD Hi-hat Stand, 5791 Combo Stand, 5700 Cymbal Stand",
      },
    ],
    color: "#ffffff",
    images: ["dwe-five-piece-white.png", "dwe-five-piece-white-back.png"],
    colorsAvailable: [
      {
        color: "#b30000",
        images: ["dwe-five-piece-cherry.png"],
      },
      {
        color: "#222222",
        images: ["dwe-five-piece-galaxy.png"],
      },
      {
        color: "#000066",
        images: ["dwe-five-piece-blue.png"],
      },
      {
        color: "#ffffff",
        images: ["dwe-five-piece-white.png"],
      },
    ],
    unitPrice: 9000,
    stockAmount: 3,
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
    id: 24,
    category: "Stringed",
    type: "Bass",
    brand: "Fender",
    name: "JMJ ROAD WORN® MUSTANG® ",
    description:
      "Known as a true renaissance man of the modern music scene, Justin Meldal-Johnsen's bass credits include Beck, Nine Inch Nails and more. His production credits include Jimmy Eat World, Paramore and M83, among others. JMJ is a shining example of today's breed of multi-genre musician/producers, ever pushing boundaries and inspiring others. From studio to stage, Justin's treasured '66 Mustang Bass is his tool of choice. We teamed up with him to create a signature 4-string modeled after his vintage Daphne Blue instrument - the Justin Meldal-Johnsen Road Worn Mustang Bass. Powered by a custom-spec split-coil pickup, the JMJ Road Worn Mustang bass is perfect for laying down punchy basslines with plenty of Fender mojo. The 30\" scale gives it a tight, focused tone while the modern 9.5\"-radius fingerboard with rolled edges offers a familiar feel that will make any bassist feel right at home.Designed for comfort and speed, this bass also has stage-ready style. From the nicks and picks scratches on the body to the worn-in feel of the neck to the aged hardware, this bass shows the marks of an instrument that has earned its stripes out on the road. Check out the unique tone and amazing feel of the Justin Meldal-Johnsen Road Worn Mustang Bass.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Alder",
      },
      {
        title: "Body Shape",
        specDescription: "Mustang® Bass",
      },
      {
        title: "Body Finish",
        specDescription: "Road Worn® Nitrocellulose Lacquer",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Road Worn® Nitrocellulose Lacquer",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#00b3b3",
    images: [
      "jmj-road-worn-mustang-blue.png",
      "jmj-road-worn-mustang-blue-back.png",
      "jmj-road-worn-mustang-blue-body.png",
      "jmj-road-worn-mustang-blue-neck.png",
    ],
    colorsAvailable: [
      {
        color: "#00b3b3",
        images: ["jmj-road-worn-mustang-blue.png"],
      },
      {
        color: "#000000",
        images: ["jmj-road-worn-mustang-black.png"],
      },
    ],
    unitPrice: 1350,
    stockAmount: 1,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The bass is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The bass is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest bass ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 25,
    category: "Stringed",
    type: "Bass",
    brand: "Fender",
    name: "JMJ ROAD WORN® MUSTANG® ",
    description:
      "Known as a true renaissance man of the modern music scene, Justin Meldal-Johnsen's bass credits include Beck, Nine Inch Nails and more. His production credits include Jimmy Eat World, Paramore and M83, among others. JMJ is a shining example of today's breed of multi-genre musician/producers, ever pushing boundaries and inspiring others. From studio to stage, Justin's treasured '66 Mustang Bass is his tool of choice. We teamed up with him to create a signature 4-string modeled after his vintage Daphne Blue instrument - the Justin Meldal-Johnsen Road Worn Mustang Bass. Powered by a custom-spec split-coil pickup, the JMJ Road Worn Mustang bass is perfect for laying down punchy basslines with plenty of Fender mojo. The 30\" scale gives it a tight, focused tone while the modern 9.5\"-radius fingerboard with rolled edges offers a familiar feel that will make any bassist feel right at home.Designed for comfort and speed, this bass also has stage-ready style. From the nicks and picks scratches on the body to the worn-in feel of the neck to the aged hardware, this bass shows the marks of an instrument that has earned its stripes out on the road. Check out the unique tone and amazing feel of the Justin Meldal-Johnsen Road Worn Mustang Bass.",
    specs: [
      {
        title: "Body Material",
        specDescription: "Alder",
      },
      {
        title: "Body Shape",
        specDescription: "Mustang® Bass",
      },
      {
        title: "Body Finish",
        specDescription: "Road Worn® Nitrocellulose Lacquer",
      },
      {
        title: "Neck Material",
        specDescription: "Maple",
      },
      {
        title: "Neck Finish",
        specDescription: "Road Worn® Nitrocellulose Lacquer",
      },
      {
        title: "Neck Shape",
        specDescription: '"C" Shape',
      },
    ],
    color: "#00b3b3",
    images: [
      "jmj-road-worn-mustang-black.png",
      "jmj-road-worn-mustang-black-back.png",
      "jmj-road-worn-mustang-black-body.png",
      "jmj-road-worn-mustang-black-neck.png",
    ],
    colorsAvailable: [
      {
        color: "#00b3b3",
        images: ["jmj-road-worn-mustang-blue.png"],
      },
      {
        color: "#000000",
        images: ["jmj-road-worn-mustang-black.png"],
      },
    ],
    unitPrice: 1350,
    stockAmount: 3,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The bass is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The bass is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest bass ever! Just bought it to decorate my room",
      },
    ],
  },
];

module.exports = {
  stockProducts,
};
