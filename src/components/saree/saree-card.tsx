"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/site-config";
import { whatsappLink, inquiryMessage } from "@/lib/whatsapp";
import type { Saree } from "@/data/sarees";

/**
 * Catalogue grid card. Adapted from the 21st.dev "Product Card 1":
 * the cart / size selectors are removed (BonitaShop is inquiry-based,
 * not e-commerce — PRD "Out of Scope"). The primary action is a
 * WhatsApp inquiry pre-filled with the saree name.
 */
export function SareeCard({ saree, index = 0 }: { saree: Saree; index?: number }) {
  const [hovered, setHovered] = useState(false);
  const hasSecond = saree.images.length > 1;
  const discount = saree.originalPrice
    ? Math.round(((saree.originalPrice - saree.price) / saree.originalPrice) * 100)
    : 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3), ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Image */}
      <Link
        href={`/sarees/${saree.id}`}
        className="relative block aspect-[3/4] overflow-hidden bg-muted"
        aria-label={`View details for ${saree.name}`}
      >
        {/* primary image */}
        <img
          src={saree.images[0]}
          alt={saree.name}
          loading={index < 4 ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 size-full object-cover transition-all duration-700 ease-out",
            "group-hover:scale-105",
            hovered && hasSecond ? "opacity-0" : "opacity-100"
          )}
        />
        {/* hover image */}
        {hasSecond && (
          <img
            src={saree.images[1]}
            alt={`${saree.name} — alternate view`}
            loading="lazy"
            className={cn(
              "absolute inset-0 size-full object-cover transition-all duration-700 ease-out",
              "group-hover:scale-105",
              hovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}

        {/* badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {saree.isNew && (
            <Badge className="bg-teal text-white shadow-sm">New</Badge>
          )}
          {saree.isBestSeller && (
            <Badge className="bg-gold text-plum shadow-sm">Best Seller</Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-primary text-primary-foreground shadow-sm">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* sold out overlay */}
        {!saree.available && (
          <div className="absolute inset-0 grid place-items-center bg-plum/45 backdrop-blur-[1px]">
            <span className="rounded-full bg-background/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground">
              Sold Out
            </span>
          </div>
        )}

        {/* view affordance */}
        <span className="absolute bottom-3 right-3 grid size-9 translate-y-2 place-items-center rounded-full bg-background/90 text-foreground opacity-0 shadow-md backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-teal">
            {saree.collection}
          </span>
          <span
            className="mt-0.5 size-4 shrink-0 rounded-full border border-border"
            style={{ backgroundColor: saree.colorHex }}
            title={saree.color}
            aria-label={`Colour: ${saree.color}`}
          />
        </div>

        <h3 className="mt-1.5 font-heading text-lg font-bold leading-snug text-foreground">
          <Link href={`/sarees/${saree.id}`} className="hover:text-primary">
            {saree.name}
          </Link>
        </h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{saree.fabric}</p>

        {/* price */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-foreground">
            {formatPrice(saree.price)}
          </span>
          {saree.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(saree.originalPrice)}
            </span>
          )}
        </div>

        {/* WhatsApp inquiry */}
        <a
          href={whatsappLink(inquiryMessage(saree.name))}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-semibold text-[#06351b] transition-colors hover:bg-[#1db955] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          <MessageCircle className="size-4" />
          Inquire
        </a>
      </div>
    </motion.article>
  );
}
