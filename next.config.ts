import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Bật nén và loại bỏ header thừa
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
