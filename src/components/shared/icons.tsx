import type { SVGProps } from "react";

/**
 * Inline Instagram glyph. lucide-react dropped brand icons, so we ship our
 * own minimal version. Sized via the `size-*` utility / width-height like
 * other icons (defaults to 1em so it follows font-size).
 */
export function InstagramIcon({ width = "1em", height = "1em", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={width}
      height={height}
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
