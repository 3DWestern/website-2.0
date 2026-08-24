import Link from "next/link";
import { Button } from "../ui/button";

export default function DashButton() {
  return (
    <Button size="pill" variant="gradient" asChild>
      <Link href="/dashboard-link">Go To Dashboard</Link>
    </Button>
  );
}
