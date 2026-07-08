import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.1.15', '192.168.1.24', '192.168.1.12', '192.168.1.12:3000'],
};

export default nextConfig;
