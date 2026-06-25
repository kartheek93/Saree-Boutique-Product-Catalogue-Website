import { Marquee } from "@/components/ui/marquee";
import { FABRICS } from "@/data/sarees";

/**
 * Infinite fabric strip — repurposes the marquee idea from the locked
 * 21st.dev "infinity-brand" component to scroll the weaves we stock.
 */
export function FabricMarquee() {
  return (
    <section className="border-y border-border bg-secondary/50 py-6">
      <Marquee items={[...FABRICS, "Pure Zari", "Handloom"]} />
    </section>
  );
}
