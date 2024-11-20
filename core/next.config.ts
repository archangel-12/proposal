import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com'
      },
      {
        protocol: 'https',
        hostname: 'images2.alphacoders.com'
      },
      {
        protocol: 'https',
        hostname: 'wallpapers.com'
      },
      {
        protocol: 'https',
        hostname: 'asset.kompas.com'
      },
      {
        protocol: 'https',
        hostname: 'foreignpolicy.com'
      }
    ],
  },
}

export default nextConfig;
