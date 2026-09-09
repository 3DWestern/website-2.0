import Image from "next/image";
import { cn } from "./ui/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-10 w-[174px] shrink-0", className)}>
      <Image
        src="/02-primary-lockup-for-dark.svg"
        alt="3D Western"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}
