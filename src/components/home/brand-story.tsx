import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site-config";

const points = [
  { title: "Handpicked weaves", body: "Every saree is personally selected for its craft, fall and finish." },
  { title: "Honest pricing", body: "Boutique quality without the boutique mark-up — prices shown upfront." },
  { title: "Personal service", body: "Chat with us on WhatsApp for styling help, availability and more." },
];

export function BrandStory() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        {/* Image */}
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
              <img
                src="https://images.pexels.com/photos/33433875/pexels-photo-33433875.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="A handwoven saree from Bonita Ropita"
                loading="lazy"
                className="aspect-[4/3] size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-gold px-5 py-4 text-plum shadow-lg sm:block">
              <div className="font-heading text-2xl font-bold">Est. in {siteConfig.address.city}</div>
              <div className="text-xs font-medium">Woven with love ✦</div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={0.1}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            <span className="h-px w-6 bg-gold" /> Our Story
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            A boutique built on the love of the drape
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {siteConfig.name} began with a simple belief — that a beautiful saree
            should be within reach, and choosing one should feel personal. We
            travel to weaving clusters, handpick each piece, and bring the
            boutique to your phone, so you can browse at your own pace and
            inquire whenever inspiration strikes.
          </p>

          <dl className="mt-8 space-y-5">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                  ✦
                </span>
                <div>
                  <dt className="font-semibold text-foreground">{p.title}</dt>
                  <dd className="text-sm text-muted-foreground">{p.body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
