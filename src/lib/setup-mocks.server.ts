export async function setupMocks() {
  if (process.env.CMS_ENABLED === "false") {
    const { server } = await import("@/mocks/server");
    server.listen({ onUnhandledRequest: "bypass" });
    console.log("✓ MSW enabled (CMS_ENABLED=false)");
  } else console.log("CMS enabled, MSW not started");
}
