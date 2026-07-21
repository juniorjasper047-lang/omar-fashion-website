// All image references live here.
//
// PLACEHOLDERS: hero, logo, and the kaftans are elegant SVGs generated for the
// brand (self-contained, no external dependencies). To use REAL media:
//   1. Drop files into /public/images/ (e.g. public/images/hero-client.jpg).
//   2. Change the path below to match (e.g. hero: "/images/hero-client.jpg").
// That's the only edit needed — components read from this file.

export const images = {
  // The client portrait photo (a big hero shot) supplied by the brand.
  hero: "/images/hero-client.jpg",
  heroAlt: "/images/kaftans/kente-royale.svg",
  collections: {
    "kente-royale": "/images/kaftans/kente-royale.svg",
    "accra-noir": "/images/kaftans/accra-noir.svg",
    "ashanti-bloom": "/images/kaftans/ashanti-bloom.svg",
    "gold-coast-linen": "/images/kaftans/gold-coast-linen.svg",
    "nile-breeze": "/images/kaftans/nile-breeze.svg",
    "heritage-bridal": "/images/kaftans/heritage-bridal.svg",
    "indigo-majesty": "/images/kaftans/indigo-majesty.svg",
    "sankofa-silk": "/images/kaftans/sankofa-silk.svg",
  },
  craft: [
    "/images/kaftans/kente-royale.svg",
    "/images/kaftans/ashanti-bloom.svg",
    "/images/kaftans/sankofa-silk.svg",
    "/images/kaftans/gold-coast-linen.svg",
    "/images/kaftans/heritage-bridal.svg",
  ],
  story: "/images/kaftans/indigo-majesty.svg",
};

export type ImageKey = keyof typeof images.collections;
