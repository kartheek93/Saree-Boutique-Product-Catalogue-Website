import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SareeHero } from "@/components/home/saree-hero";
import { FabricMarquee } from "@/components/home/fabric-marquee";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { BrandStory } from "@/components/home/brand-story";
import { HomeCTA } from "@/components/home/home-cta";
import { SectionHeading } from "@/components/shared/section-heading";
import { SareeCard } from "@/components/saree/saree-card";
import { sarees } from "@/data/sarees";

export default function Home() {
  const bestsellers = sarees.filter((s) => s.isBestSeller).slice(0, 4);

  return (
    <>
      <SareeHero />
      <FabricMarquee />
      <FeaturedCollections />

      {/* Bestsellers */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Loved by our customers"
              title="Bestselling Sarees"
              className="max-w-xl"
            />
            <Link
              href="/sarees"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              View all sarees
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {bestsellers.map((saree, i) => (
              <SareeCard key={saree.id} saree={saree} index={i} />
            ))}
          </div>
        </div>
      </section>

      <BrandStory />
      <HomeCTA />
    </>
  );
}
