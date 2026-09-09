import Link from "next/link";
import { Button } from "../ui/button";

export default function DashButton({ className }: { className?: string }) {
  return (
    <Button size="pill" variant="gradient" asChild className={className}>
      <Link href="/dashboard-link">Go To Dashboard</Link>
    </Button>
  );
}
