import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "images2.alphacoders.com",
      },
      {
        protocol: "https",
        hostname: "wallpapers.com",
      },
      {
        protocol: "https",
        hostname: "asset.kompas.com",
      },
      {
        protocol: "https",
        hostname: "foreignpolicy.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com"
      },
      {
        protocol: "https",
        hostname: "media.wired.com"
      },
      {
        protocol: "https",
        hostname: "www.reuters.com"
      },
      {
        protocol: "https",
        hostname: "miro.medium.com"
      }
    ],
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);