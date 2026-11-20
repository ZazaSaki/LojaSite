import type { NextConfig } from "next";

// Pure static export: no server, API routes, middleware or server actions.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
