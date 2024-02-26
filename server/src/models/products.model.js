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
    color: "#000000",
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
  {
    id: 26,
    category: "Keyboard",
    type: "Keyboard Synth",
    brand: "Yamaha",
    name: "MODX8+ 88 GHS-weighted Key Synthesizer",
    description:
      "Yamaha's MODX series took their suite of creative and technological prowess and packed it into a high-performance synthesizer, engineered for modern needs. The MODX+ builds off this forward-thinking model to accommodate even greater sonic opportunities, bringing your total polyphony to an astounding 256 notes. Plus, the MODX OS introduces new features that include Voices and Live Sets, offering robust flexibility in both composition and performance. The onboard flash memory has been upgraded to 1.75GB, creating more room for your sounds and samples from your collection for more personalized expressive potential. Like its predecessor, the MODX+ is packed with powerful technologies ported from Yamaha's flagship Montage series. State-of-the-art upgrades from their MOXF line include the AWM2 sample and synthesis engine, fortified with eight times more waveforms, alongside a powerful 8-operator FM-X engine modernized for amazingly dynamic sonics and complex sound design, as well as Motion Control Synthesis for seamless integration and powerful control of both sound engines.",
    specs: [
      {
        title: "Analog/Digital",
        specDescription: "Digital",
      },
      {
        title: "Number of Keys",
        specDescription: "88",
      },
      {
        title: "Type of Keys",
        specDescription: "GHS Weighted, Graded Hammer Action",
      },
      {
        title: "Velocity Sensitive",
        specDescription: "Yes",
      },
      {
        title: "Polyphony",
        specDescription:
          "128 Note Stereo AWM2, 128 Note FM-X, 16-part Multitimbral",
      },
    ],
    color: "#000000",
    images: [
      "yamaha-modx-8-key-sinthesizer-black.png",
      "yamaha-modx-8-key-sinthesizer-black-up.png",
      "yamaha-modx-8-key-sinthesizer-black-front.png",
      "yamaha-modx-8-key-sinthesizer-black-back.png",
    ],
    colorsAvailable: [
      {
        color: "#000000",
        images: ["yamaha-modx-8-key-sinthesizer-black.png"],
      },
    ],
    unitPrice: 2199,
    stockAmount: 4,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The keyboard is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The keyboard is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest keyboard ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 27,
    category: "Keyboard",
    type: "Keyboard Synthesizer with Sequencer",
    brand: "Roland",
    name: "JUNO-DS88 88-key Synthesizer",
    description:
      "The Roland JUNO-DS88 88-key synthesizer delivers all of the benefits of its predecessor, along with realistic hammer-action keys, improved pianos, additional organs, waveform expansion capability, Phrase Pads, new vocal effects, and more. You can download over 1,000 free sounds, including top-quality acoustic piano collections, world instruments, percussion, and loops and load them into the JUNO-DS88 via USB. You can call up sounds on-the-fly, or use the JUNO-DS88's adjustable parameters and real-time controls for custom patch-building. Eight Phrase Pads let you supplement your performances with samples and music files. Great for stage musicians and sound-tweakers alike, the Roland JUNO-DS88 is a phenomenal portable 88-key synthesizer!",
    specs: [
      {
        title: "Analog/Digital",
        specDescription: "Digital",
      },
      {
        title: "Number of Keys",
        specDescription: "88",
      },
      {
        title: "Type of Keys",
        specDescription: "Weighted-action, Roland Ivory Feel-G Keyboard",
      },
      {
        title: "Presets",
        specDescription:
          "Over 1200 Patches, Over 30 Drum kits, Over 64 performances",
      },
      {
        title: "Polyphony",
        specDescription: "128 Notes",
      },
    ],
    color: "#000000",
    images: [
      "roland-juno-ds88-black.png",
      "roland-juno-ds88-black-up.png",
      "roland-juno-ds88-black-front.png",
      "roland-juno-ds88-black-back.png",
    ],
    colorsAvailable: [
      {
        color: "#000000",
        images: ["roland-juno-ds88-black.png"],
      },
    ],
    unitPrice: 1199,
    stockAmount: 2,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The keyboard is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The keyboard is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest keyboard ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 28,
    category: "Keyboard",
    type: "Keyboard Synthesizer with Sequencer",
    brand: "Moog",
    name: "Grandmother Semi-Modular Analog Synthesizer and Step Sequencer",
    description:
      "The Moog Grandmother semi-modular analog synthesizer had us at 'built-in spring reverb,' and there is plenty more creative potential here than meets the eye. You can start playing and designing sounds immediately — no patching required. The onboard arpeggiator and sequencer are a blast to play with, and you can even save three sequences for instant recall anytime. And with its 32-note Fatar keybed, the Grandmother is one of the best-feeling compact analog synths you'll find. Whether you need it for stage or studio, the Moog Grandmother offers a fresh take on the classic Moog synth sound. The colorful interface on the Moog Grandmother makes its lineage clear. You have easy access to dual analog oscillators, each with triangle, saw, and square waves. You can add noise at the oscillator mixer stage, and a utility section features a patchable 1-pole highpass filter and a bipolar attenuator. The classic 4-pole ladder filter offers a convenient key-tracking switch and large controls that are easy to find even in the dark. An analog LFO and ADSR envelope generator complete the onboard modulation options — and synthesists at Sweetwater have come to love the dedicated fader to control envelope sustain.",
    specs: [
      {
        title: "Analog/Digital",
        specDescription: "Analog",
      },
      {
        title: "Number of Keys",
        specDescription: "32",
      },
      {
        title: "Type of Keys",
        specDescription: "Fatar Keyboard, Velocity-sensitive",
      },
      {
        title: "Other Controllers",
        specDescription: "Mod Wheel, Pitchbend Wheel, Variable Glide",
      },
      {
        title: "Polyphony",
        specDescription: "Monophonic",
      },
    ],
    color: "#000000",
    images: [
      "moog-grandmother-semi-modular-analog-synthesizer-black.png",
      "moog-grandmother-semi-modular-analog-synthesizer-black-up.png",
      "moog-grandmother-semi-modular-analog-synthesizer-black-front.png",
      "moog-grandmother-semi-modular-analog-synthesizer-black-back.png",
    ],
    colorsAvailable: [
      {
        color: "#000000",
        images: ["moog-grandmother-semi-modular-analog-synthesizer-black.png"],
      },
    ],
    unitPrice: 999,
    stockAmount: 3,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! The keyboard is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The keyboard is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest keyboard ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 29,
    category: "Wind",
    type: "Saxophone",
    brand: "Yamaha",
    name: "YAS-62III Professional Alto Saxophone",
    description:
      "In professional circles, the Yamaha “62” is a legend. Considered the original “do-everything” professional alto saxophone, the YAS-62 was designed in collaboration with a noted classical saxophonist in an exhaustive multi-year development program that incorporated input from top jazz saxophonists to ensure the cross-genre proficiency of the new instrument. As a result, you'll find pro players representing all styles of music who rely on the YAS-62 as their main alto. Today, the third-generation YAS-62III owes its best-seller status and popularity among worldwide legions of loyal devotees to Yamaha's visionary designers and highly skilled artisans who perform their work with exemplary enthusiasm, passion, and precision. The YAS-62 comes with Yamaha's widely respected 4C mouthpiece and a durable, attractive case. If you're ready to step up to a truly professional alto sax that's also an incredible value, you simply can't go wrong with the Yamaha YAS-62III. Unpretentious yet formidable, the Yamaha YAS-62III alto saxophone is a near-perfect blend of features, playability, and value. It has all all the hallmarks of a professional sax, including a high F# key, an adjustable thumb hook, hard steel needle springs, and smooth, consistent action. This is a horn that will go the distance in your career and allow you to grow as an artist. This starts with its neck — it comes with Yamaha's excellent new 62-style neck, which sports a slightly narrower bore taper that gives you faster response and greater control, focusing your notes and providing a more compact landing zone for intonation. A majority of players will find the 62-style neck facilitates a comfortable airflow — essential for a strong tonal core. However, should you wish to expand your sound, the 62's upgraded professional neck tenon receiver allows you to add a custom neck such as Yamaha's acclaimed V1.",
    specs: [
      {
        title: "Key",
        specDescription: "Eb",
      },
      {
        title: "Level",
        specDescription: "Professional",
      },
      {
        title: "Auxillary Keys",
        specDescription: "High F#, Front F",
      },
      {
        title: "Body",
        specDescription: "Single Plate with Integrated Key Posts",
      },
      {
        title: "Neck Type",
        specDescription: "62 Style",
      },
      {
        title: "Material",
        specDescription: "Annealed Brass",
      },
    ],
    color: "#b3b300",
    images: [
      "yas-62-professional-alto-saxophone-gold.png",
      "yas-62-professional-alto-saxophone-gold-fullkit.png",
    ],
    colorsAvailable: [
      {
        color: "#b3b300",
        images: ["yas-62-professional-alto-saxophone-gold.png"],
      },
      {
        color: "#cccccc",
        images: ["yas-62-professional-alto-saxophone-silver.png"],
      },
    ],
    unitPrice: 3651,
    stockAmount: 2,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! This saxophone is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The sax is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest saxophone ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 30,
    category: "Wind",
    type: "Saxophone",
    brand: "Yamaha",
    name: "YAS-62III Professional Alto Saxophone",
    description:
      "In professional circles, the Yamaha “62” is a legend. Considered the original “do-everything” professional alto saxophone, the YAS-62 was designed in collaboration with a noted classical saxophonist in an exhaustive multi-year development program that incorporated input from top jazz saxophonists to ensure the cross-genre proficiency of the new instrument. As a result, you'll find pro players representing all styles of music who rely on the YAS-62 as their main alto. Today, the third-generation YAS-62III owes its best-seller status and popularity among worldwide legions of loyal devotees to Yamaha's visionary designers and highly skilled artisans who perform their work with exemplary enthusiasm, passion, and precision. The YAS-62 comes with Yamaha's widely respected 4C mouthpiece and a durable, attractive case. If you're ready to step up to a truly professional alto sax that's also an incredible value, you simply can't go wrong with the Yamaha YAS-62III. Unpretentious yet formidable, the Yamaha YAS-62III alto saxophone is a near-perfect blend of features, playability, and value. It has all all the hallmarks of a professional sax, including a high F# key, an adjustable thumb hook, hard steel needle springs, and smooth, consistent action. This is a horn that will go the distance in your career and allow you to grow as an artist. This starts with its neck — it comes with Yamaha's excellent new 62-style neck, which sports a slightly narrower bore taper that gives you faster response and greater control, focusing your notes and providing a more compact landing zone for intonation. A majority of players will find the 62-style neck facilitates a comfortable airflow — essential for a strong tonal core. However, should you wish to expand your sound, the 62's upgraded professional neck tenon receiver allows you to add a custom neck such as Yamaha's acclaimed V1.",
    specs: [
      {
        title: "Key",
        specDescription: "Eb",
      },
      {
        title: "Level",
        specDescription: "Professional",
      },
      {
        title: "Auxillary Keys",
        specDescription: "High F#, Front F",
      },
      {
        title: "Body",
        specDescription: "Single Plate with Integrated Key Posts",
      },
      {
        title: "Neck Type",
        specDescription: "62 Style",
      },
      {
        title: "Material",
        specDescription: "Annealed Brass",
      },
    ],
    color: "#cccccc",
    images: [
      "yas-62-professional-alto-saxophone-silver.png",
      "yas-62-professional-alto-saxophone-silver-fullkit.png",
    ],
    colorsAvailable: [
      {
        color: "#b3b300",
        images: ["yas-62-professional-alto-saxophone-gold.png"],
      },
      {
        color: "#cccccc",
        images: ["yas-62-professional-alto-saxophone-silver.png"],
      },
    ],
    unitPrice: 3651,
    stockAmount: 4,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! This saxophone is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The sax is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest saxophone ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 31,
    category: "Wind",
    type: "Digital Saxophone",
    brand: "Yamaha",
    name: "YDS-120 Digital Saxophone",
    description:
      "If you've always wanted to try your hand at saxophone, the Yamaha YDS-120 is an excellent place to start. It's affordable and very accessible. You can play the YDS-120 anywhere, any time. Late-night sessions without disturbing others? No problem! With 15-step volume adjustment and high-quality samples of 73 instruments, including 56 soprano, alto, tenor, and baritone saxes, you're in command — and you'll always sound great. While not a replacement for acoustic saxophones, the Yamaha YDS-120 is designed to go where no traditional horn can. It runs on USB power or four AAA batteries, so you connect with software or go busking in the park. This innovative instrument blurs the line between organic and synthetic, providing the best of both worlds by delivering Yamaha's advanced digital sound with the tactile playing feel of familiar sax fingering. Ready for a fresh, new woodwind experience? Check out the Yamaha YDS-120 from Sweetwater!",
    specs: [
      {
        title: "Number of Keys",
        specDescription: "23",
      },
      {
        title: "Type of Keys",
        specDescription: "Saxophone Fingering with HIgh-F#, Front-F, Low A",
      },
      {
        title: "Presets",
        specDescription: "73 Voices (including 56 sax voices)",
      },
      {
        title: "USB",
        specDescription: "Micro-B",
      },
      {
        title: "Software",
        specDescription: "YDS Controller App",
      },
      {
        title: "Power Supply",
        specDescription: "USB Bus Power, 4 x AAA Batteries",
      },
    ],
    color: "#000000",
    images: [
      "yds-120-digital-saxophone-black.png",
      "yds-120-digital-saxophone-black-top.png",
      "yds-120-digital-saxophone-black-front.png",
      "yds-120-digital-saxophone-black-back.png",
    ],
    colorsAvailable: [
      {
        color: "#000000",
        images: ["yds-120-digital-saxophone-black.png"],
      },
    ],
    unitPrice: 451,
    stockAmount: 3,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! This saxophone is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The sax is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest saxophone ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 32,
    category: "Wind",
    type: "Clarinet",
    brand: "Yamaha",
    name: "YCL-450N Intermediate Clarinet with Nickel Keys",
    description:
      "Are you ready to step up from your student model clarinet? The Yamaha YCL-450N is one of the finest intermediate clarinets available, presenting a host of professional-grade features that will help cultivate your developing skills. Blending high-tech manufacturing techniques with traditional quality, the Yamaha YCL-450N offers a gorgeous tone, exquisite playability, and a durable design that will serve you well for years. Like the company's professional instruments, the Yamaha YCL-450N features a grenadilla wood body, barrel, and bell, which exude richness and warmth. Nickel-plated keys with Lucien pads are ready to respond to every flourish, and a fixed thumb rest provides a comfortable hold. Additionally, the Yamaha YCL-450N comes with a 4C mouthpiece and plush-lined CLC-180 carrying case. Grenadilla is the material of choice for professional-grade clarinets, due to its dense grain, moisture-repellent qualities, eye-catching look, and warm tone. Like Yamaha's Professional Series clarinets, the Yamaha YCL-450N is crafted from this classic tonewood. The YCL-450N's grenadilla body is populated with 17 durable nickel-plated keys, which are fitted with Lucien deluxe double skin pads — a favorite among clarinet players at Sweetwater — to provide you with a dynamic feel and reliable performance. Moreover, the YCL-450N sports straight tone holes with a tapered undercut, ensuring optimum intonation and a uniform response up and down the instrument.",
    specs: [
      {
        title: "Type",
        specDescription: "Soprano",
      },
      {
        title: "Key",
        specDescription: "Bb",
      },
      {
        title: "Level",
        specDescription: "Intermediate",
      },
      {
        title: "Body Material",
        specDescription: "Grenadilla",
      },
      {
        title: "Key Finish",
        specDescription: "Nickel-plated Nickel Silver",
      },
      {
        title: "Thumb Rest",
        specDescription: "Adjustable with Strap Ring",
      },
    ],
    color: "#000000",
    images: [
      "ycl-450n-intermediate-clarinet-black.png",
      "ycl-450n-intermediate-clarinet-black-fullkit.png",
    ],
    colorsAvailable: [
      {
        color: "#000000",
        images: ["ycl-450n-intermediate-clarinet-black.png"],
      },
    ],
    unitPrice: 1643,
    stockAmount: 4,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment:
          "Perfect! This clarinet is awesome, great sound, nice design! super worth it!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "The clarinet is really nice but i can't play anything :(",
      },
      {
        client: "Biggest Rock Star",
        stars: 4,
        comment: "Coolest clarinet ever! Just bought it to decorate my room",
      },
    ],
  },
  {
    id: 33,
    category: "Accessories",
    type: "Instrument Cable",
    brand: "Pro Co",
    name: "EG-20 Excellines Straight to Straight",
    description:
      "The Pro Co Excellines audio cable is your choice when you want the highest quality cable for your dollar. Excellines instrument and patch cables are built with high-quality 20 AWG, dual shielded cable, and have durable, flexible jackets and rugged Neutrik plugs. Since the 1970s, Pro Co cables have been the professional's choice for the most demanding cabling applications. Whether you're patching up your guitar effects pedals or assembling a complex keyboard rack for your next tour, you need audio cables you can rely on. Trust Pro Co Excellines audio cable to get the job done! Pro Co Excellines cables represent an ideal balance of value and reliability. Choose Pro Co when you need a quiet, reliable cable to stand up to the demands of live gigging and studio work. Excellines audio cables are dual-shielded and have high-quality Neutrik connectors and tough, flexible jackets, so you can use them with confidence. With four million of them in use worldwide, choosing Excellines puts you in smart company.",
    specs: [
      {
        title: "Connector 1",
        specDescription: "TS Male 1/4",
      },
      {
        title: "Connector 2",
        specDescription: "TS Male 1/4",
      },
      {
        title: "Length",
        specDescription: "20'",
      },
      {
        title: "Wire Gauge",
        specDescription: "20 AWG",
      },
    ],
    color: "#0000ff",
    images: [
      "pro-co-eg-20-excellines-straight-straight-blue.png",
      "pro-co-eg-20-excellines-straight-straight-blue-full-cable.png",
    ],
    colorsAvailable: [
      {
        color: "#0000ff",
        images: ["pro-co-eg-20-excellines-straight-straight-blue.png"],
      },
    ],
    unitPrice: 22,
    stockAmount: 25,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment: "Perfect! Highest quality cable!!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "Good cable",
      },
    ],
  },
  {
    id: 34,
    category: "Accessories",
    type: "Instrument Cable",
    brand: "Pro Co",
    name: "EGL-20 Excellines Straight to Right Angle",
    description:
      "Sweetwater cables are made by Pro Co Sound. Pro Co cables display the company's commitment to making the highest quality audio cables. Since they first came out, Pro Co cables have been the professional's choice for the most demanding applications. The exacting design of the entire line make Pro Co cables the smart choice for your needs. From simple hookup cables to complex studio harnessing, only high-grade components and time-proven manufacturing techniques are employed. To ensure you are receiving the highest quality cable for your dollar, try a Pro Co cable today!",
    specs: [
      {
        title: "Connector 1",
        specDescription: "TS Male 1/4",
      },
      {
        title: "Connector 2",
        specDescription: "TS Male Right Angle 1/4",
      },
      {
        title: "Length",
        specDescription: "20'",
      },
      {
        title: "Wire Gauge",
        specDescription: "20 AWG",
      },
    ],
    color: "#0000ff",
    images: [
      "pro-co-egl-20-excellines-straight-angled-blue.png",
      "pro-co-egl-20-excellines-straight-angled-blue-full-cable.png",
    ],
    colorsAvailable: [
      {
        color: "#0000ff",
        images: ["pro-co-egl-20-excellines-straight-angled-blue.png"],
      },
    ],
    unitPrice: 24,
    stockAmount: 18,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment: "Perfect! Highest quality cable!!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "Good cable",
      },
    ],
  },
  {
    id: 35,
    category: "Accessories",
    type: "Instrument Cable",
    brand: "Pro Co",
    name: "EGLL-20 Excellines Right Angle to Right Angle",
    description:
      "When you plug in, make sure every part of your signal chain is as ready as you are. That goes double for your pedalboard connections. It doesn't make sense to invest in a quality instrument, a great amp, and premium instrument cables, then settle for less-than-stellar pedal connectors. You need a Pro Co Excelline guitar patch cable! This instrument cable is made of premium materials and has two right-angle plugs. The result? A connection you can depend on plus minimal space between your pedals! Don't wait for that mid-gig disaster to strike before you upgrade, equip your pedalboard with the best! All Pro Co Sound brand cables carry a limited lifetime warranty to the original purchaser against defects in materials and workmanship.",
    specs: [
      {
        title: "Connector 1",
        specDescription: "TS Male Right Angle 1/4",
      },
      {
        title: "Connector 2",
        specDescription: "TS Male Right Angle 1/4",
      },
      {
        title: "Length",
        specDescription: "20'",
      },
      {
        title: "Wire Gauge",
        specDescription: "20 AWG",
      },
    ],
    color: "#0000ff",
    images: [
      "pro-co-egll-20-excellines-angled-angled-blue.png",
      "pro-co-egll-20-excellines-angled-angled-blue-full-cable.png",
    ],
    colorsAvailable: [
      {
        color: "#0000ff",
        images: ["pro-co-egll-20-excellines-angled-angled-blue.png"],
      },
    ],
    unitPrice: 28,
    stockAmount: 28,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment: "Perfect! Highest quality cable!!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "Good cable",
      },
    ],
  },
  {
    id: 36,
    category: "Accessories",
    type: "Keyboard Stand",
    brand: "Gator Frameworks",
    name: "GFW-UTILITY-TBL Heavy-duty Keyboard Table",
    description:
      "Set up your keyboard with the Gator Frameworks Platform-style Keyboard Stand. This rugged steel table is ideal for keyboards, mixers, and other gear. The legs collapse for easy set up, tear down, and storage. Leveling feet let you adjust the table for any surface. Expand your rig with the Gator Frameworks Platform-style Keyboard Stand.",
    specs: [
      {
        title: "Number of Tiers",
        specDescription: "1",
      },
      {
        title: "Tier Height",
        specDescription: '26"-40"',
      },
      {
        title: "Height Adjust",
        specDescription: "8-Position Locking Pin",
      },
      {
        title: "Tier Width",
        specDescription: '29"-44"',
      },
      {
        title: "Weight Capacity",
        specDescription: "132 lbs",
      },
    ],
    color: "#000000",
    images: [
      "gator-frameworks-gfw-utility-tbl-black.png",
      "gator-frameworks-gfw-utility-tbl-black-folded.png",
      "gator-frameworks-gfw-utility-tbl-black-front.png",
    ],
    colorsAvailable: [
      {
        color: "#000000",
        images: ["gator-frameworks-gfw-utility-tbl-black.png"],
      },
    ],
    unitPrice: 139,
    stockAmount: 5,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment: "Perfect! Highest quality stand!!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "Good table",
      },
    ],
  },
  {
    id: 37,
    category: "Accessories",
    type: "Keyboard Stand",
    brand: "Yamaha",
    name: "PKBX2 X-Style Keyboard Stand",
    description:
      "The Yamaha PKBX2 keyboard stand is a sturdy way to secure your large-format keyboards during performance, in the studio, or at your home. Its easily adjustable design helps you position your keys at the optimal height for your application. And the fold-flat construction makes breaking the stand down for transport quick and easy to store. When purchasing a stand for your instruments, Sweetwater Sales Engineers definitely recommend something that has the rugged steel construction of the PKBX2. The Yamaha PKBX2 may just be the perfect keyboard stand for you.",
    specs: [
      {
        title: "Number of Tiers",
        specDescription: "1",
      },
      {
        title: "Tier Height",
        specDescription: '27"-39"',
      },
      {
        title: "Height Adjust",
        specDescription: "5-Position Knob Adjustment",
      },
      {
        title: "Tier Width",
        specDescription: '9"-30"',
      },
      {
        title: "Weight Capacity",
        specDescription: "64 lbs",
      },
    ],
    color: "#000000",
    images: [
      "yamaha-pkbx2-x-style-keyboard-stand-black.png",
      "yamaha-pkbx2-x-style-keyboard-stand-black-front.png",
    ],
    colorsAvailable: [
      {
        color: "#000000",
        images: ["yamaha-pkbx2-x-style-keyboard-stand-black.png"],
      },
    ],
    unitPrice: 35,
    stockAmount: 3,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment: "Perfect! Highest quality stand!!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "Good x stand",
      },
    ],
  },
  {
    id: 38,
    category: "Accessories",
    type: "Guitar Stand",
    brand: "Hercules Stands",
    name: "GS414B PLUS Single Guitar Stand with Auto Grip System",
    description:
      "The Hercules Stands GS414B Plus is a versatile guitar stand. Its auto-grip system fits instruments with a neck width up to 2\". This Hercules guitar stand's instant height-adjustment clutch allows for easy changes on the fly. Accommodate your ukulele, mandolin, banjo, or violin, thanks to the GS414B Plus's N.I.N.A. accessory. And foam rubber contact points safeguard your instrument from damage. Beyond that, high-friction rubber feet provide excellent stability. Don't lean your guitar against your amp, it'll fall over and break! That's why Sweetwater recommends using a Hercules guitar stand like the GS414B Plus.",
    specs: [
      {
        title: "Number of Guitars",
        specDescription: "1",
      },
      {
        title: "Intended Guitar Type",
        specDescription: "Guitar/Bass, Ukulele, Mandolin, Banjo, Violin",
      },
      {
        title: "Weight Capacity",
        specDescription: "33 lbs",
      },
      {
        title: "Height",
        specDescription: '37.4"-45.2"',
      },
      {
        title: "Weight",
        specDescription: "4 lbs",
      },
    ],
    color: "#000000",
    images: [
      "hercules-stands-gs414b-plus-single-guitar-stand-black.png",
      "hercules-stands-gs414b-plus-single-guitar-stand-black-front.png",
      "hercules-stands-gs414b-plus-single-guitar-stand-black-grip.png",
    ],
    colorsAvailable: [
      {
        color: "#000000",
        images: ["hercules-stands-gs414b-plus-single-guitar-stand-black.png"],
      },
    ],
    unitPrice: 55,
    stockAmount: 14,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment: "Perfect! Highest quality guitar stand!!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "Good guitar stand",
      },
    ],
  },
  {
    id: 39,
    category: "Accessories",
    type: "Guitar Case",
    brand: "SKB",
    name: "1SKB-FS-6 Shaped Standard Electric Guitar Case",
    description:
      "When it's time to hit the road, SKB's 1SKB-FS6 standard electric guitar hardshell case is just what you need to keep your Strat, Tele, or other common electric guitar safe from even the harshest conditions. This extremely heavy-duty hardshell case is more than tough enough to protect your guitar from bumps, jolts, and accidental impact. Its plush-lined EPS interior provides you with full-length neck support and features a large internal storage compartment. TSA-approved locks in the 1SKB-FS6's trigger latches also make it a great flight case. When you need protection you can count on, you need an SKB 1SKB-FS6 hardshell guitar case.",
    specs: [
      {
        title: "Int Overall Length",
        specDescription: '39.75"',
      },
      {
        title: "Int Body Length",
        specDescription: '16.5"',
      },
      {
        title: "Int Body Depth",
        specDescription: '2.75"',
      },
      {
        title: "Int Lower Bout Width",
        specDescription: '12.25"',
      },
      {
        title: "Int Upper Bout Width",
        specDescription: '11"',
      },
      {
        title: "Internal Materials",
        specDescription: "Plush-lined molded EPS with full-length neck support",
      },
    ],
    color: "#000000",
    images: [
      "skb-1skb-fs-6-shaped-standard-electric-guitar-case-black.png",
      "skb-1skb-fs-6-shaped-standard-electric-guitar-case-black-side.png",
      "skb-1skb-fs-6-shaped-standard-electric-guitar-case-black-closeup.png",
    ],
    colorsAvailable: [
      {
        color: "#000000",
        images: [
          "skb-1skb-fs-6-shaped-standard-electric-guitar-case-black.png",
        ],
      },
    ],
    unitPrice: 215,
    stockAmount: 6,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment: "Perfect! Highest quality guitar case!!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "Good guitar case",
      },
    ],
  },
  {
    id: 40,
    category: "Accessories",
    type: "Guitar Case",
    brand: "Gator",
    name: "GC-ELECTRIC-A Deluxe ABS Molded Case for Double-cutaway Electric Guitar",
    description:
      "WProtect your double-cutaway electric guitar with the Gator GC-ELECA ABS case. From dust at home to the bumps and grinds of the road, you don't want to be taking chances with your precious guitar. Enter the GC-ELECA. Its outer shell is constructed from rugged ABS, and its chrome-plated latches are lockable. Inside, your instrument is pampered in EPS foam covered in cushy deep plush, and there's even a compartment for extra strings, a tuner, and other accessories. When you need the robust protection of a hardshell case for your double-cutaway electric, Gator's GC-ELECA ABS is a great choice!",
    specs: [
      {
        title: "Int Overall Length",
        specDescription: '39.4"',
      },
      {
        title: "Int Body Length",
        specDescription: '18.3"',
      },
      {
        title: "Int Body Depth",
        specDescription: '2.4"',
      },
      {
        title: "Int Lower Bout Width",
        specDescription: '12.75"',
      },
      {
        title: "Int Upper Bout Width",
        specDescription: '12.75"',
      },
      {
        title: "Internal Materials",
        specDescription: "Plush Covered EPS Foam",
      },
    ],
    color: "#000000",
    images: [
      "gator-gc-electric-a-deluxe-abs-molded-case-black.png",
      "gator-gc-electric-a-deluxe-abs-molded-case-black-side.png",
      "gator-gc-electric-a-deluxe-abs-molded-case-black-closeup.png",
    ],
    colorsAvailable: [
      {
        color: "#000000",
        images: ["gator-gc-electric-a-deluxe-abs-molded-case-black.png"],
      },
    ],
    unitPrice: 148,
    stockAmount: 3,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment: "Perfect! Highest quality guitar case!!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "Good guitar case",
      },
    ],
  },
  {
    id: 41,
    category: "Accessories",
    type: "Guitar Pick",
    brand: "Dunlop",
    name: "PVP101 Guitar Pick Variety Pack - Light/Medium (12-pack)",
    description:
      "The Dunlop PVP101 Pick Variety Pack is ideal if you are always losing picks, or just looking to try out a decent selection of picks. Each pack contains 12 of Dunlop's most popular picks. They feature different textures, shapes, and materials so you can get a feel for how each pick feels. This light/medium pick pack is perfect for beginners and experienced player to sample and compare some of the most popular Dunlop picks. Grab the Dunlop PVP101 Pick Variety Pack and check out the best-selling picks from Dunlop!",
    specs: [
      {
        title: "Shape",
        specDescription: "Standart",
      },
      {
        title: "Gauge",
        specDescription: "Light/Medium",
      },
      {
        title: "Material",
        specDescription: "Assorted",
      },
      {
        title: "Quantity",
        specDescription: "12",
      },
      {
        title: "Color",
        specDescription: "Assorted",
      },
    ],
    color: "#ffffff",
    images: [
      "dunlop-pvp101-guitar-pick-variety-pack.png",
      "dunlop-pvp101-guitar-pick-variety-pack-spread.png",
    ],
    colorsAvailable: [
      {
        color: "#ffffff",
        images: ["dunlop-pvp101-guitar-pick-variety-pack.png"],
      },
    ],
    unitPrice: 8,
    stockAmount: 34,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment: "Perfect! Highest quality guitar picks!!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "Good variety of guitar picks",
      },
    ],
  },
  {
    id: 42,
    category: "Accessories",
    type: "Drumsticks",
    brand: "Vic Firth",
    name: "American Classic Drumsticks - 5A - Wood Tip",
    description:
      "Vic Firth drumsticks are the choice of top players in all kinds of genres. Whether you play rock, jazz, country, pop, or other musical styles, there's a pair of Vic Firth drumsticks made to fit your taste. From their precision manufacturing and matching methods to their amazing product range, Vic Firth offers quality you can depend on, no matter what you play. If you want great sticks at a great price, Sweetwater's got plenty of Vic Firth products to choose from. Choose the sticks the pros have been depending on for over four decades — Vic Firth sticks!",
    specs: [
      {
        title: "Model",
        specDescription: "American classic",
      },
      {
        title: "Material",
        specDescription: "Hickory",
      },
      {
        title: "Size",
        specDescription: "5A",
      },
      {
        title: "Diameter",
        specDescription: '.565"',
      },
      {
        title: "Tip Material",
        specDescription: "Wood",
      },
      {
        title: "Tip Shape",
        specDescription: "Tear Drop",
      },
    ],
    color: "#ffffcc",
    images: [
      "vic-firth-american-classic-drumsticks-5a-wood-tip.png",
      "vic-firth-american-classic-drumsticks-5a-wood-tip-tip.png",
      "vic-firth-american-classic-drumsticks-5a-wood-tip-body.png",
    ],
    colorsAvailable: [
      {
        color: "#ffffcc",
        images: ["vic-firth-american-classic-drumsticks-5a-wood-tip.png"],
      },
    ],
    unitPrice: 15,
    stockAmount: 12,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment: "Perfect! Highest quality drumsticks!!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "Good drumsticks",
      },
    ],
  },
  {
    id: 43,
    category: "Accessories",
    type: "Drumsticks",
    brand: "Vic Firth",
    name: "American Classic Drumsticks - 5A - Nylon Tip",
    description:
      "Vic Firth drumsticks are the choice of top players in all kinds of genres. Whether you play rock, jazz, country, pop, or other musical styles, there's a pair of Vic Firth drumsticks made to fit your taste. From their precision manufacturing and matching methods to their amazing product range, Vic Firth offers quality you can depend on, no matter what you play. If you want great sticks at a great price, Sweetwater's got plenty of Vic Firth products to choose from. Choose the sticks the pros have been depending on for over four decades — Vic Firth sticks!",
    specs: [
      {
        title: "Model",
        specDescription: "American classic",
      },
      {
        title: "Material",
        specDescription: "Hickory",
      },
      {
        title: "Size",
        specDescription: "5A",
      },
      {
        title: "Diameter",
        specDescription: '.565"',
      },
      {
        title: "Tip Material",
        specDescription: "Nylon",
      },
      {
        title: "Tip Shape",
        specDescription: "Tear Drop",
      },
    ],
    color: "#ffffcc",
    images: [
      "vic-firth-american-classic-drumsticks-5a-nylon-tip.png",
      "vic-firth-american-classic-drumsticks-5a-nylon-tip-tip.png",
      "vic-firth-american-classic-drumsticks-5a-nylon-tip-body.png",
    ],
    colorsAvailable: [
      {
        color: "#ffffcc",
        images: ["vic-firth-american-classic-drumsticks-5a-nylon-tip.png"],
      },
    ],
    unitPrice: 16,
    stockAmount: 10,
    createdAt: new Date(),
    reviews: [
      {
        client: "Anonymous",
        stars: 5,
        comment: "Perfect! Highest quality drumsticks!!",
      },
      {
        client: "Anonymous",
        stars: 4.5,
        comment: "Good drumsticks",
      },
    ],
  },
];

module.exports = {
  stockProducts,
};
