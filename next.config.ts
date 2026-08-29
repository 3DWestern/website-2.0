import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    dangerouslyAllowLocalIP: true, // dev only — see note below
    remotePatterns: [
      new URL("https://www.example.com/**"),
      new URL("https://cdn.cruxplanner.ca/**"),
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "https://ogdywbbthufhrrqxtcqf.supabase.co",
        pathname: "/storage/v1/**",
      },
    ],
  },
  allowedDevOrigins: ["192.168.0.100", "10.200.1.208", "192.168.50.228"],
};

export default withPayload(nextConfig);
