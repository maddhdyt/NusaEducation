import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    loader: "custom",
    loaderFile: "./imageLoader.ts",
  },

  poweredByHeader: false,
};

export default nextConfig;