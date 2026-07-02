import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.newsfilecorp.com",
      },
    ],
  },
};

export default nextConfig;