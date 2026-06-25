/**
 * ============================================================
 *  BonitaShop — Product catalogue data
 * ------------------------------------------------------------
 *  PLACEHOLDER catalogue. When Bonita Ropita provides the real
 *  product list and photographs (PRD Section 08), replace the
 *  entries below. Keep the same shape (the `Saree` type) and
 *  the rest of the site keeps working with zero code changes.
 *
 *  Images are traditional-saree stock photos from Pexels (free
 *  to use, verified to load). Swap the IDs in `images` for the
 *  boutique's real product photographs.
 * ============================================================
 */

export interface Saree {
  /** URL slug — must be unique. */
  id: string;
  name: string;
  fabric: string;
  collection: string;
  weave: string;
  color: string;
  /** Hex for the colour swatch on cards. */
  colorHex: string;
  /** Price in INR. */
  price: number;
  /** Optional original price to show a discount strike-through. */
  originalPrice?: number;
  available: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  description: string;
  /** Care instructions — shown as a list on the detail page. */
  care: string[];
  /** First image is the primary; others appear in the gallery. */
  images: string[];
  /** ISO date — used for the "Newest" sort. */
  addedOn: string;
}

/** Build an optimised Pexels image URL (keeps the grid under the 4s budget). */
const img = (id: number, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const COLLECTIONS = [
  "Bridal",
  "Festive",
  "Party Wear",
  "Everyday",
  "Office",
] as const;

export const FABRICS = [
  "Kanjivaram Silk",
  "Banarasi Silk",
  "Organza",
  "Georgette",
  "Chiffon",
  "Cotton",
  "Linen",
] as const;

export const sarees: Saree[] = [
  {
    id: "royal-maroon-kanjivaram",
    name: "Royal Maroon Kanjivaram",
    fabric: "Kanjivaram Silk",
    collection: "Bridal",
    weave: "Handloom zari weave",
    color: "Maroon & Gold",
    colorHex: "#7b2d3a",
    price: 18999,
    originalPrice: 24999,
    available: true,
    isBestSeller: true,
    description:
      "A timeless bridal Kanjivaram in deep maroon with an intricate gold zari border and a contrast pallu. Woven by master artisans, this drape carries the weight and sheen that only pure mulberry silk can offer — made for the moments you'll remember forever.",
    care: [
      "Dry clean only",
      "Store wrapped in muslin cloth",
      "Avoid direct sunlight and perfume on the zari",
    ],
    images: [img(5439054), img(8886933)],
    addedOn: "2026-06-10",
  },
  {
    id: "emerald-banarasi-silk",
    name: "Emerald Banarasi Silk",
    fabric: "Banarasi Silk",
    collection: "Festive",
    weave: "Brocade jaal",
    color: "Emerald Green",
    colorHex: "#0f766e",
    price: 14499,
    available: true,
    isNew: true,
    isBestSeller: true,
    description:
      "Rich emerald Banarasi silk covered in an all-over gold brocade jaal. Light enough to drape effortlessly, opulent enough to anchor any festive evening. The classic Banarasi heritage in a jewel tone that flatters every skin tone.",
    care: ["Dry clean only", "Iron on low heat with a cotton cloth on top"],
    images: [img(2933636), img(10317127)],
    addedOn: "2026-06-18",
  },
  {
    id: "blush-organza-floral",
    name: "Blush Organza Floral",
    fabric: "Organza",
    collection: "Party Wear",
    weave: "Sheer organza with embroidery",
    color: "Blush Pink",
    colorHex: "#d98aa6",
    price: 8999,
    originalPrice: 11999,
    available: true,
    isNew: true,
    description:
      "Featherlight blush organza scattered with delicate hand-embroidered florals and a subtle sequin trail. A modern, romantic drape for cocktail evenings and intimate celebrations.",
    care: [
      "Dry clean recommended",
      "Hang on a padded hanger to keep the shape",
    ],
    images: [img(8710793), img(36516572)],
    addedOn: "2026-06-20",
  },
  {
    id: "royal-purple-georgette",
    name: "Royal Purple Georgette",
    fabric: "Georgette",
    collection: "Party Wear",
    weave: "Flowy georgette, mirror work",
    color: "Royal Purple",
    colorHex: "#6d2480",
    price: 6499,
    available: true,
    isBestSeller: true,
    description:
      "A fluid royal-purple georgette with scattered mirror work that catches the light as you move. Drapes beautifully, packs light for travel, and turns heads at every sangeet.",
    care: ["Gentle hand wash or dry clean", "Do not wring"],
    images: [img(10317113), img(30722459)],
    addedOn: "2026-06-05",
  },
  {
    id: "gold-tissue-festive",
    name: "Gold Tissue Festive",
    fabric: "Organza",
    collection: "Festive",
    weave: "Tissue with zari checks",
    color: "Antique Gold",
    colorHex: "#c9a24b",
    price: 10999,
    available: true,
    description:
      "Liquid-gold tissue organza with fine zari checks and a scalloped border. Understated shimmer that reads luxurious in any light — a festive favourite that never feels loud.",
    care: ["Dry clean only", "Store flat to avoid creasing the tissue"],
    images: [img(6167463), img(5439052)],
    addedOn: "2026-05-28",
  },
  {
    id: "teal-chiffon-everyday",
    name: "Teal Chiffon Everyday",
    fabric: "Chiffon",
    collection: "Everyday",
    weave: "Printed chiffon",
    color: "Teal",
    colorHex: "#0b6a69",
    price: 3499,
    originalPrice: 4499,
    available: true,
    description:
      "A breezy teal chiffon with a subtle print and a slim gold piping border. Light, comfortable and elegant — the kind of saree you reach for again and again.",
    care: ["Hand wash in cold water", "Line dry in shade"],
    images: [img(23749436), img(19191099)],
    addedOn: "2026-06-12",
  },
  {
    id: "ivory-cotton-handloom",
    name: "Ivory Cotton Handloom",
    fabric: "Cotton",
    collection: "Office",
    weave: "Handloom cotton",
    color: "Ivory & Rust",
    colorHex: "#c98a5e",
    price: 2799,
    available: true,
    description:
      "Crisp ivory handloom cotton with a rust temple border. Breathable and fuss-free, it carries you from a workday to an evening out with quiet grace.",
    care: ["Machine wash gentle", "Starch lightly for a crisp finish"],
    images: [img(6487380), img(10317106)],
    addedOn: "2026-06-01",
  },
  {
    id: "wine-velvet-bridal",
    name: "Wine Velvet Bridal",
    fabric: "Banarasi Silk",
    collection: "Bridal",
    weave: "Silk with velvet border",
    color: "Wine",
    colorHex: "#5b1f33",
    price: 22999,
    originalPrice: 27999,
    available: false,
    isBestSeller: true,
    description:
      "A statement bridal drape in deep wine silk finished with a plush velvet border and heavy zari pallu. Regal, dramatic and unmistakably a Bonita Ropita signature.",
    care: ["Dry clean only", "Professional storage recommended"],
    images: [img(33433875), img(5439054)],
    addedOn: "2026-05-20",
  },
  {
    id: "midnight-linen-minimal",
    name: "Midnight Linen Minimal",
    fabric: "Linen",
    collection: "Everyday",
    weave: "Pure linen, plain weave",
    color: "Midnight Blue",
    colorHex: "#27324d",
    price: 3999,
    available: true,
    isNew: true,
    description:
      "Pure midnight-blue linen with a single contrast stripe and tasselled ends. Minimal, modern and endlessly versatile — for the woman who lets the drape speak softly.",
    care: ["Hand wash cold", "Iron while slightly damp"],
    images: [img(10317106), img(2933636)],
    addedOn: "2026-06-22",
  },
];

export function getSaree(id: string): Saree | undefined {
  return sarees.find((s) => s.id === id);
}

export function getRelatedSarees(saree: Saree, count = 3): Saree[] {
  return sarees
    .filter((s) => s.id !== saree.id && s.collection === saree.collection)
    .concat(sarees.filter((s) => s.id !== saree.id && s.collection !== saree.collection))
    .slice(0, count);
}
