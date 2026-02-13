import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Base path for deployment at awakate.com/cv
  // Uncomment when deploying to subpath
  // basePath: '/cv',
};

export default nextConfig;
