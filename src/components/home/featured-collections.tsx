import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const img = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

/**
 * "Shop by Collection" — an editorial bento showcase. This is our in-house
 * replacement for the 21st.dev radial-scroll gallery (paywalled), tuned for a
 * saree boutique: each tile links into the catalogue.
 */
const tiles = [
  {
    name: "Bridal",
    blurb: "Heirloom Kanjivarams & silks for the big day",
    image: img(5439054),
    featured: true,
  },
  { name: "Festive", blurb: "Banarasi & tissue for every occasion", image: img(6167463) },
  { name: "Party Wear", blurb: "Organza, georgette & shimmer", image: img(8710793) },
  { name: "Everyday", blurb: "Breezy chiffon & linen drapes", image: img(23749436) },
  { name: "Office", blurb: "Crisp handloom cottons", image: img(6487380) },
];

export function FeaturedCollections() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <SectionHeading
        eyebrow="Curated for you"
        title="Shop by Collection"
        description="From once-in-a-lifetime bridal silks to everyday drapes — find the saree for your moment."
      />

      <Reveal className="mt-12">
        <div className="grid grid-cols-2 gap-4 md:auto-rows-[210px] md:grid-cols-4 md:[&>*:first-child]:col-span-2 md:[&>*:first-child]:row-span-2">
          {tiles.map((tile) => (
            <Link
              key={tile.name}
              href="/sarees"
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-muted shadow-sm",
                tile.featured ? "aspect-[4/5] md:aspect-auto" : "aspect-square md:aspect-auto"
              )}
            >
              <img
                src={tile.image}
                alt={`${tile.name} sarees`}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/25 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <h3
                      className={cn(
                        "font-heading font-bold text-white",
                        tile.featured ? "text-2xl sm:text-3xl" : "text-xl"
                      )}
                    >
                      {tile.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">{tile.blurb}</p>
                  </div>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold text-plum transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-0">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <span className="mt-3 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
