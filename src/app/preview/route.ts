import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req: Request): Promise<Response> {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");
  const previewSecret = searchParams.get("previewSecret");

  // Verify secret
  if (previewSecret !== process.env.PREVIEW_SECRET) {
    return new Response("You are not allowed to preview this page", {
      status: 403,
    });
  }

  if (!path) {
    return new Response("Insufficient search params", { status: 404 });
  }

  if (!path.startsWith("/")) {
    return new Response("This endpoint is only for relative previews", {
      status: 500,
    });
  }

  try {
    const userRes = await fetch(`${process.env.CMS_BASE_URL}/api/users/me`, {
      headers: {
        Cookie: req.headers.get("cookie") || "",
      },
    });

    if (!userRes.ok) {
      return new Response("You are not allowed to preview this page.", {
        status: 403,
      });
    }

    const user = await userRes.json();
    if (!user.user) {
      return new Response("You are not allowed to preview this page", {
        status: 403,
      });
    }
  } catch (error) {
    return new Response("Error verifying user", { status: 500 });
  }

  // Enable draft mode
  const draft = await draftMode();
  draft.enable();

  // Redirect to preview
  redirect(path);
}
