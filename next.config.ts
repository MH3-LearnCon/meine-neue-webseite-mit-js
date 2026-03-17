import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignoriert den strengen Linting-Check beim Vercel-Upload
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;