import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sert les images en AVIF/WebP quand le navigateur le supporte (poids réduit).
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
