import Link from "next/link";

export default function DashButton() {
  return (
    <Link
      href="/dashboard-link"
      className="inline-flex items-center px-5 py-2 rounded-lg btn text-white text-sm font-medium transition-colors"
    >
      Sign Up
    </Link>
  );
}
