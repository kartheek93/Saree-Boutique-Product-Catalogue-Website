import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { siteConfig, fullAddress } from "@/lib/site-config";
import { InstagramIcon } from "@/components/shared/icons";
import { WhatsAppCTA } from "@/components/shared/whatsapp-cta";
import { generalInquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact & Visit",
  description: `Visit Bonita Ropita in ${siteConfig.address.city} or reach us on WhatsApp, phone and email.`,
};

const tel = siteConfig.phoneDisplay.replace(/\s/g, "");

const cards = [
  { icon: Phone, label: "Call us", value: siteConfig.phoneDisplay, href: `tel:${tel}` },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: InstagramIcon, label: "Instagram", value: "@bonitaropita", href: siteConfig.instagram },
  { icon: Clock, label: "Store hours", value: siteConfig.hours },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-plum text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            ✦ Say Hello
          </span>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Visit Our Boutique
          </h1>
          <p className="mt-3 max-w-xl text-white/75">
            Drop by to feel the fabrics in person, or reach us on WhatsApp — we
            love helping you find the perfect drape.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: details */}
          <div>
            {/* Address highlight */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <h2 className="font-heading text-lg font-bold">Store Address</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {fullAddress()}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <WhatsAppCTA
                  message={generalInquiryMessage()}
                  label="Chat on WhatsApp"
                  size="lg"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

            {/* Contact cards */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {cards.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/30">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="mt-0.5 font-medium text-foreground">{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>
          </div>

          {/* Right: map */}
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title={`Map to ${siteConfig.name}`}
              src={siteConfig.mapsEmbedSrc}
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  );
}
