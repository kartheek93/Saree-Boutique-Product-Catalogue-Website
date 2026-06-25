import type { Metadata } from "next";

import { Catalogue } from "@/components/saree/catalogue";

export const metadata: Metadata = {
  title: "Saree Catalogue",
  description:
    "Browse the full Bonita Ropita saree collection. Filter by collection and fabric, sort by price, and inquire on WhatsApp.",
};

export default function SareesPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-border bg-plum text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            ✦ The Collection
          </span>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Saree Catalogue
          </h1>
          <p className="mt-3 max-w-xl text-white/75">
            Filter by collection and fabric, sort by what matters to you, and
            tap <span className="font-semibold text-white">Inquire</span> to chat
            with us on WhatsApp about any drape.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <Catalogue />
      </div>
    </>
  );
}
