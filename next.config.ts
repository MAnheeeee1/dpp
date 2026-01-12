import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gokyo.in",
      },
    ],
  },
};

export default nextConfig;
