import type { RequestInit } from "next/dist/server/web/spec-extension/request";
import { cookies } from "next/headers";
const BASE_URL = process.env.CMS_BASE_URL || "http://localhost:3000";

export const cmsClient = {
  // public calls
  get: async (path: string, options: RequestInit = {}) => {
    const cookieStore = await cookies();
    const cookieString = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers: {
        ...options.headers,
        Cookie: cookieString,
      },
    });
    if (!res.ok) throw new Error(`CMS request failed: ${res.status}`);
    return res.json();
  },
  // authenticated, for admin-level operations
  getAuthenticated: async (path: string) => {
    const res = await fetch(`${BASE_URL}${path}`, {
      headers: {
        Authorization: `users API-Key ${process.env.PAYLOAD_API_KEY}`,
      },
    });
    return res.json();
  },
};
