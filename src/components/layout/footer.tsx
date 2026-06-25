import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { siteConfig, fullAddress } from "@/lib/site-config";
import { InstagramIcon } from "@/components/shared/icons";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/70 bg-plum text-[#f1e3ec]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-full bg-gold font-heading text-lg font-bold text-plum">
              B
            </span>
            <span className="font-heading text-xl font-bold text-white">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#f1e3ec]/70">
            {siteConfig.tagline}. A curated saree boutique in {siteConfig.address.city}.
          </p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <InstagramIcon className="size-4" />
            Follow on Instagram
          </a>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/" className="text-[#f1e3ec]/80 transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/sarees" className="text-[#f1e3ec]/80 transition-colors hover:text-white">
                Saree Catalogue
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#f1e3ec]/80 transition-colors hover:text-white">
                Visit the Store
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Visit & Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-[#f1e3ec]/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{fullAddress()}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{siteConfig.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-[#f1e3ec]/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
