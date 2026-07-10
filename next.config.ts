import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.ts',
  },
  allowedDevOrigins: ['192.168.1.15', '192.168.1.24', '192.168.1.12', '192.168.1.12:3000'],
  poweredByHeader: false,
};

export default nextConfig;
