import { images, type ImageKey } from "./images";

export const brand = {
  name: "Omar Fashion",
  tagline: "Timeless Kaftans. Masterful Tailoring.",
  email: "hello@omarfashion.com",
  whatsapp: "+233200000000",
  whatsappDisplay: "+233 20 000 0000",
  location: "Osu, Accra · Ghana",
  waMessage: "Hello Omar Fashion, I'm interested in a custom kaftan and would like to book a consultation.",
};

export const nav = [
  { label: "Collections", href: "#collections" },
  { label: "The Craft", href: "#craft" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#consultation" },
];

export const hero = {
  eyebrow: "Bespoke & Ready-to-Wear · Accra",
  title: ["Timeless Kaftans.", "Masterful Tailoring."],
  subtitle:
    "Omar Fashion crafts premium kaftans where Ghanaian heritage meets a modern, refined silhouette — cut from luxurious fabrics, finished by hand.",
  primaryCta: { label: "Explore Collections", href: "#collections" },
  secondaryCta: { label: "Book a Fitting", href: "#consultation" },
};

export type Collection = {
  slug: string;
  name: string;
  category: string;
  fabric: string;
  price: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const collections: Collection[] = [
  {
    slug: "kente-royale",
    name: "Kente Royale",
    category: "Heritage Classic",
    fabric: "Authentic Kente weave",
    price: "¢4,800",
    description:
      "A regal statement piece hand-woven by master artisans. Gold-threaded Kente meets a contemporary column cut — made to be remembered.",
    image: images.collections["kente-royale" as ImageKey],
    featured: true,
  },
  {
    slug: "accra-noir",
    name: "Accra Noir",
    category: "Modern Fusion",
    fabric: "Matte silk blend",
    price: "¢3,200",
    description:
      "Sculpted minimalism in deep charcoal. A city-ready kaftan with clean lines and a whisper of sheen.",
    image: images.collections["accra-noir" as ImageKey],
    featured: true,
  },
  {
    slug: "ashanti-bloom",
    name: "Ashanti Bloom",
    category: "Signature Embroidery",
    fabric: "Cotton-silk with hand embroidery",
    price: "¢5,400",
    description:
      "Delicate Adinkra-inspired embroidery blooms across the hem. Heritage told in thread, softened for the present.",
    image: images.collections["ashanti-bloom" as ImageKey],
  },
  {
    slug: "gold-coast-linen",
    name: "Gold Coast Linen",
    category: "Modern Fusion",
    fabric: "Belgian linen",
    price: "¢2,600",
    description:
      "Breathable, effortless, and quietly luxurious. The everyday kaftan for warm Accra evenings.",
    image: images.collections["gold-coast-linen" as ImageKey],
  },
  {
    slug: "nile-breeze",
    name: "Nile Breeze",
    category: "Modern Fusion",
    fabric: "Washed cotton",
    price: "¢2,900",
    description:
      "A relaxed silhouette with a soft, airy drape. Designed to move with you.",
    image: images.collections["nile-breeze" as ImageKey],
  },
  {
    slug: "heritage-bridal",
    name: "Heritage Bridal",
    category: "Bridal Couture",
    fabric: "Embroidered silk",
    price: "¢7,200",
    description:
      "The most important kaftan you will ever wear. Couture bridal tailoring with heirloom-grade finishing.",
    image: images.collections["heritage-bridal" as ImageKey],
    featured: true,
  },
  {
    slug: "indigo-majesty",
    name: "Indigo Majesty",
    category: "Signature Embroidery",
    fabric: "Indigo-dyed cotton",
    price: "¢4,500",
    description:
      "Deep indigo, hand-dyed and hand-finished. A meditation in blue and gold.",
    image: images.collections["indigo-majesty" as ImageKey],
  },
  {
    slug: "sankofa-silk",
    name: "Sankofa Silk",
    category: "Heritage Classic",
    fabric: "Heavy silk",
    price: "¢5,900",
    description:
      "A returning to roots — the Sankofa motif rendered in liquid silk. Made to be passed down.",
    image: images.collections["sankofa-silk" as ImageKey],
  },
];

export const craft = [
  {
    step: "01",
    title: "Fabric Selection",
    text: "We begin with cloth — sourcing luxurious, often hand-woven fabrics from Ghana and beyond.",
    image: images.craft[0],
  },
  {
    step: "02",
    title: "Pattern & Cutting",
    text: "Each body is unique. Patterns are drafted to your measurements, then cut by hand.",
    image: images.craft[1],
  },
  {
    step: "03",
    title: "Hand Embroidery",
    text: "Where the piece earns its soul — embroidery and detailing applied by our senior artisans.",
    image: images.craft[2],
  },
  {
    step: "04",
    title: "Fitting & Adjustment",
    text: "You try it on. We refine every seam until the drape is unmistakably yours.",
    image: images.craft[3],
  },
  {
    step: "05",
    title: "Finishing & Delivery",
    text: "Pressed, packaged, and presented. A garment built to last decades, not seasons.",
    image: images.craft[4],
  },
];

export const story = {
  eyebrow: "The Omar Craft",
  title: "A tailor's patience, a modern eye.",
  body: [
    "Omar Fashion was founded on a simple belief: that a kaftan can be both deeply rooted in Ghanaian heritage and unmistakably contemporary. Every piece is cut, embroidered, and finished in Accra by hands that have spent years mastering the craft.",
    "We make for people who value the rare thing — clothing that fits the body and tells a story. Whether bespoke or ready-to-wear, the standard is the same: luxurious fabric, honest construction, and a finish you can feel.",
  ],
  image: images.story,
};

export const consultation = {
  eyebrow: "Begin",
  title: "Request a Custom Kaftan or Book a Fitting",
  subtitle:
    "Tell us a little about what you have in mind. We typically respond within 24 hours to schedule your consultation.",
};
