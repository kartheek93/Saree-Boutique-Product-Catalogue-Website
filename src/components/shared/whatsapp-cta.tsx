import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/whatsapp";

interface WhatsAppCTAProps {
  /** The pre-filled message sent to the boutique. */
  message: string;
  label?: string;
  className?: string;
  /** "solid" = WhatsApp green (primary action), "outline" = bordered. */
  variant?: "solid" | "outline";
  size?: "default" | "lg";
}

/**
 * The primary conversion element of the whole site (PRD Section 04).
 * Renders an <a> to wa.me so it works as a normal link (and opens the
 * WhatsApp app on mobile). WhatsApp green is used deliberately so the
 * action is instantly recognisable, even against the purple brand.
 */
export function WhatsAppCTA({
  message,
  label = "Inquire on WhatsApp",
  className,
  variant = "solid",
  size = "default",
}: WhatsAppCTAProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1ea65a]",
        size === "lg" ? "h-12 px-7 text-base" : "h-11 px-5 text-sm",
        variant === "solid"
          ? "bg-[#25D366] text-[#06351b] shadow-lg shadow-[#25D366]/25 hover:bg-[#1db955] hover:shadow-xl hover:shadow-[#25D366]/30 active:translate-y-px"
          : "border border-[#25D366] bg-transparent text-[#1a8f43] hover:bg-[#25D366]/10",
        className
      )}
    >
      <MessageCircle className="size-[1.15em]" aria-hidden />
      {label}
    </a>
  );
}
