# BonitaShop — Saree Boutique Catalogue

A mobile-first saree **product catalogue** website for **Bonita Ropita** (Hyderabad).
Browse → filter/sort → view details → **inquire on WhatsApp**. Built for the Aurora
Industry Internship Programme (Batch 2025-26).

> **Inquiry-based, not e-commerce.** There is no cart, checkout, or login — every
> product converts through a pre-filled WhatsApp message, exactly as the PRD requires.

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) + React 19 |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animation | Framer Motion |
| Icons | lucide-react |
| Language | TypeScript |
| Product data | Local TypeScript file (no CMS needed) |

---

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Other commands:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

---

## ✏️ The 3 files your team edits (no other code needed)

Everything the boutique needs to customise lives in **three** places. You do **not**
need to touch any component to put in real content.

### 1. `src/data/sarees.ts` — the product catalogue
Each saree is one object. Replace the placeholder entries with the real product
list and photographs from Bonita Ropita (PRD Section 08). Keep the same fields:

```ts
{
  id: "royal-maroon-kanjivaram",   // unique URL slug (lowercase-with-dashes)
  name: "Royal Maroon Kanjivaram",
  fabric: "Kanjivaram Silk",
  collection: "Bridal",            // must be one of COLLECTIONS below
  weave: "Handloom zari weave",
  color: "Maroon & Gold",
  colorHex: "#7b2d3a",             // the dot shown on the card
  price: 18999,                    // in ₹
  originalPrice: 24999,            // optional — shows a strike-through + discount
  available: true,                 // false → "Sold Out"
  isNew: true,                     // optional badge
  isBestSeller: true,              // optional badge (also used on the home page)
  description: "…",
  care: ["Dry clean only", "…"],   // shown as a checklist
  images: ["https://…", "https://…"], // first = main; replace with real photos
  addedOn: "2026-06-10",           // used by the "Newest" sort
}
```

The filter options come from the `COLLECTIONS` and `FABRICS` lists at the top of the
same file — edit those to match the boutique's real categories.

### 2. `src/lib/site-config.ts` — contact & brand details
WhatsApp number, phone, email, address, store hours, Google Maps location, Instagram.

```ts
whatsappNumber: "919876543210",  // ⚠️ international format, digits only, no + or spaces
```

For the **map**, replace `mapsEmbedSrc` with the boutique's exact location (no API key
needed — just change the `q=` part to the real address, or paste a Google Maps
"Embed" share link).

### 3. `src/app/globals.css` — brand colours
The palette ("Sabyasachi meets Apple" — deep wine + antique gold + warm cream)
lives in the `:root` block. When Bonita Ropita shares official brand colours/logo,
edit the values there and the whole site re-themes automatically. Fonts are
Cormorant Garamond (headings) + Inter (body), set in `src/app/layout.tsx`.

---

## 📷 Images

The placeholder photos are Unsplash stock (all verified to load). Replace the URLs in
each saree's `images` array with the boutique's real product photographs. For fast
loading (PRD requires the grid under 4s), keep images reasonably sized — ~800–1000px
wide is plenty for a catalogue.

---

## 🚀 Deploy (get a public URL — PRD deliverable)

### Netlify (recommended, easiest)
1. Push this folder to a GitHub repo.
2. On [netlify.com](https://netlify.com) → "Add new site" → "Import from Git".
3. Build command `npm run build`, then deploy. Netlify auto-detects Next.js.

### GitHub Pages (fully static)
1. In `next.config.ts`, uncomment `output: "export"`.
2. `npm run build` → static site is generated in the `out/` folder.
3. Push `out/` to a `gh-pages` branch (or use a GitHub Action).

### Vercel
Import the repo at [vercel.com](https://vercel.com) — zero config.

---

## Project structure

```
src/
├── app/
│   ├── page.tsx                 # Home (hero, collections, bestsellers, story, CTA)
│   ├── sarees/page.tsx          # Catalogue (filter + sort)
│   ├── sarees/[id]/page.tsx     # Product detail + WhatsApp inquiry
│   ├── contact/page.tsx         # Contact + Google Maps embed
│   └── globals.css              # 🎨 brand theme
├── components/
│   ├── home/                    # hero, featured-collections, brand-story, etc.
│   ├── saree/                   # saree-card, catalogue, saree-gallery
│   ├── layout/                  # navbar, footer
│   ├── shared/                  # WhatsApp CTA, reveal animation, icons
│   └── ui/                      # shadcn primitives + marquee
├── data/sarees.ts               # 📦 product catalogue
└── lib/
    ├── site-config.ts           # 📞 contact & brand config
    └── whatsapp.ts              # wa.me link builder
```

---

## Notes for the team

- **The home hero** is a clean, animated banner (`src/components/home/hero.tsx`) with
  the latest-collection image collage, brand stats and the primary WhatsApp CTA —
  entrance animations only, no scroll-jacking.
- **Two 21st.dev components were paywalled** (the radial portfolio gallery and the
  "infinity-brand" marquee). They've been re-implemented in-house: the home "Shop by
  Collection" bento and the fabric marquee — so there's no external dependency or
  copy-limit to worry about.
- The two product-card components you picked were adapted: the e-commerce card became
  the inquiry-based catalogue card (`saree-card.tsx`), and the image-hover card became
  the product-detail gallery (`saree-gallery.tsx`).
- Accessibility: visible focus rings, semantic headings, labelled controls, and
  contrast-checked colours. Reduced-motion users get a calm, animation-free experience.

---

_Generated with Claude Code · UI/UX Pro Max design standards applied._
