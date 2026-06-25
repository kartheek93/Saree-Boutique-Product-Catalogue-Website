import { Reveal } from "@/components/shared/reveal";
import { WhatsAppCTA } from "@/components/shared/whatsapp-cta";
import { generalInquiryMessage } from "@/lib/whatsapp";

export function HomeCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-plum px-6 py-14 text-center text-white sm:px-12">
          <div className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-primary/40 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 size-64 rounded-full bg-teal/30 blur-[100px]" />

          <div className="relative">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              ✦ Found something you love?
            </span>
            <h2 className="mx-auto mt-4 max-w-xl font-heading text-3xl font-bold leading-tight sm:text-4xl">
              Ask us anything — we&apos;re a message away
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/75">
              Availability, styling, blouse stitching or a custom request — chat
              with us on WhatsApp and we&apos;ll help you find the perfect drape.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppCTA
                message={generalInquiryMessage()}
                label="Start a WhatsApp Chat"
                size="lg"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
