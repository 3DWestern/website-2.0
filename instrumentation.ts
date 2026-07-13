export async function register() {
  if (
    process.env.NEXT_RUNTIME === "nodejs" &&
    process.env.CMS_ENABLED === "false"
  ) {
    const { server } = await import("@/mocks/server");
    server.listen({ onUnhandledRequest: "bypass" });
    console.log("✓ MSW enabled (CMS_ENABLED=false)");
  }
}
