import { siteConfig } from "./site-config";

/**
 * Builds a wa.me link with a pre-filled message.
 * This is the core conversion mechanism for BonitaShop (PRD Section 04).
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

/** Pre-filled message for a specific saree. */
export function inquiryMessage(productName: string): string {
  return `Hi, I am interested in ${productName}`;
}

/** Generic message for the header / hero / footer CTAs. */
export function generalInquiryMessage(): string {
  return "Hi! I'd love to know more about your saree collection.";
}
