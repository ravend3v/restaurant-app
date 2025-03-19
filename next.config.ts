// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["localhost", "your-supabase-project.supabase.co"],
  }
};

export default nextConfig;
