/**
 * ============================================================
 *  BonitaShop — Central site configuration
 * ------------------------------------------------------------
 *  These values are PLACEHOLDERS until Bonita Ropita provides
 *  the real details (PRD Section 08). Edit them here once and
 *  they update everywhere on the site — no other code changes.
 * ============================================================
 */

export const siteConfig = {
  name: "Bonita Ropita",
  shortName: "BonitaShop",
  tagline: "Handwoven Sarees, Made for Every Celebration",
  description:
    "Bonita Ropita is a Hyderabad saree boutique offering a curated range of handpicked sarees — bridal, festive and everyday. Browse the collection and inquire on WhatsApp.",

  // --- Contact (PLACEHOLDER — replace with real boutique details) ---
  // WhatsApp number in international format, digits only, no "+" or spaces.
  whatsappNumber: "919876543210",
  phoneDisplay: "+91 98765 43210",
  email: "hello@bonitaropita.in",

  address: {
    line1: "Shop No. 12, Jubilee Hills Road No. 36",
    line2: "Near Check Post",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500033",
  },

  // Google Maps embed — no API key needed. Replace the `q=` query with the
  // boutique's exact address or a Google Maps share link's embed src.
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Jubilee+Hills,+Hyderabad,+Telangana+500033&output=embed",

  hours: "Mon – Sat · 11:00 AM – 8:30 PM",

  // --- Social ---
  instagram: "https://instagram.com/bonitaropita",

  currency: "₹",
} as const;

export function formatPrice(amount: number) {
  return `${siteConfig.currency}${amount.toLocaleString("en-IN")}`;
}

export function fullAddress() {
  const a = siteConfig.address;
  return `${a.line1}, ${a.line2}, ${a.city}, ${a.state} ${a.pincode}`;
}
