import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Required for static export to generate /out
  output: "export",

  // Optional: helps avoid issues with images on static hosting
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
