import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL("https://www.example.com/**"),
      new URL("https://cdn.cruxplanner.ca/**"),
    ],
  },
  allowedDevOrigins: ["192.168.0.100", "10.200.1.208", "192.168.50.228"],
};

export default withPayload(nextConfig);
