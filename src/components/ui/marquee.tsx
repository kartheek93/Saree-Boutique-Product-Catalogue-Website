import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  reverse?: boolean;
}

/**
 * Infinite, seamless marquee strip — our in-house replacement for the
 * 21st.dev "infinity-brand" component (which sits behind a paywall).
 *
 * The trick for a seamless loop: render the item list twice and translate
 * the track by exactly -50%. Pure CSS animation (see --animate-marquee in
 * globals.css), so it works in a Server Component and pauses for users who
 * prefer reduced motion.
 */
export function Marquee({ items, className, reverse = false }: MarqueeProps) {
  const track = [...items, ...items];
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        // soft fade on both edges
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-10 pr-10 group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap text-lg font-medium tracking-wide text-foreground/70"
            aria-hidden={i >= items.length}
          >
            {item}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
