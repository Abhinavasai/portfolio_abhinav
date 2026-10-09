import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.PORTFOLIO_BUILD_DIR || ".next",
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"]
  }
};

export default nextConfig;
