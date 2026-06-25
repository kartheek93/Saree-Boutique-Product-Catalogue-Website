import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this folder. A stray package-lock.json in the
  // user's home directory was confusing Turbopack's root detection.
  turbopack: {
    root: __dirname,
  },

  // ----------------------------------------------------------------
  // Deploying to GitHub Pages (fully static)? Uncomment the line below
  // and run `npm run build` — output goes to the `out/` folder.
  // Netlify and Vercel work as-is without this.
  // output: "export",
  // ----------------------------------------------------------------
};

export default nextConfig;
