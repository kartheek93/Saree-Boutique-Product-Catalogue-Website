import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Check, Truck, ShieldCheck, Sparkles } from "lucide-react";

import { sarees, getSaree, getRelatedSarees } from "@/data/sarees";
import { formatPrice, siteConfig } from "@/lib/site-config";
import { WhatsAppCTA } from "@/components/shared/whatsapp-cta";
import { inquiryMessage } from "@/lib/whatsapp";
import { Badge } from "@/components/ui/badge";
import { SareeGallery } from "@/components/saree/saree-gallery";
import { SareeCard } from "@/components/saree/saree-card";

/** Pre-render every saree at build time (works with static export). */
export function generateStaticParams() {
  return sarees.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const saree = getSaree(id);
  if (!saree) return { title: "Saree not found" };
  return {
    title: saree.name,
    description: `${saree.name} — ${saree.fabric}, ${saree.color}. ${saree.description.slice(0, 120)}…`,
    openGraph: { images: [saree.images[0]] },
  };
}

export default async function SareeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const saree = getSaree(id);
  if (!saree) notFound();

  const related = getRelatedSarees(saree);
  const discount = saree.originalPrice
    ? Math.round(((saree.originalPrice - saree.price) / saree.originalPrice) * 100)
    : 0;

  const details = [
    { label: "Fabric", value: saree.fabric },
    { label: "Weave", value: saree.weave },
    { label: "Colour", value: saree.color },
    { label: "Collection", value: saree.collection },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="size-4" />
        <Link href="/sarees" className="hover:text-foreground">Catalogue</Link>
        <ChevronRight className="size-4" />
        <span className="truncate font-medium text-foreground">{saree.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <SareeGallery images={saree.images} name={saree.name} />

        {/* Info */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            {saree.collection}
          </span>
          <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {saree.name}
          </h1>

          {/* badges */}
          <div className="mt-3 flex flex-wrap gap-2">
            {saree.isNew && <Badge className="bg-teal text-white">New</Badge>}
            {saree.isBestSeller && <Badge className="bg-gold text-plum">Best Seller</Badge>}
            <Badge
              variant="outline"
              className={saree.available ? "border-teal/40 text-teal" : "border-destructive/40 text-destructive"}
            >
              {saree.available ? "In stock" : "Currently sold out"}
            </Badge>
          </div>

          {/* price */}
          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-heading text-3xl font-bold text-foreground">
              {formatPrice(saree.price)}
            </span>
            {saree.originalPrice && (
              <>
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(saree.originalPrice)}
                </span>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-sm font-semibold text-primary">
                  Save {discount}%
                </span>
              </>
            )}
          </div>

          {/* colour */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Colour:</span>
            <span className="flex items-center gap-2">
              <span
                className="size-5 rounded-full border border-border shadow-sm"
                style={{ backgroundColor: saree.colorHex }}
              />
              <span className="text-sm font-medium text-foreground">{saree.color}</span>
            </span>
          </div>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {saree.description}
          </p>

          {/* WhatsApp CTA — primary conversion */}
          <div className="mt-7 rounded-2xl border border-border bg-secondary/40 p-5">
            <p className="mb-3 text-sm font-medium text-foreground">
              Interested in this saree? Send us a quick message.
            </p>
            <WhatsAppCTA
              message={inquiryMessage(saree.name)}
              label="Inquire about this saree"
              size="lg"
              className="w-full sm:w-auto"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Or call us at{" "}
              <a href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`} className="font-medium text-foreground hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>

          {/* details grid */}
          <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6">
            {details.map((d) => (
              <div key={d.label}>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {d.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{d.value}</dd>
              </div>
            ))}
          </dl>

          {/* care */}
          <div className="mt-6">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Sparkles className="size-4 text-gold" /> Care Instructions
            </h2>
            <ul className="mt-3 space-y-2">
              {saree.care.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* trust */}
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-teal" /> 100% authentic weave</span>
            <span className="flex items-center gap-1.5"><Truck className="size-4 text-teal" /> Delivery across India</span>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            You may also like
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {related.map((s, i) => (
              <SareeCard key={s.id} saree={s} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
