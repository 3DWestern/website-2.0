import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "./ui/utils";

type ProjectCardProps = {
  className?: string;
};

const ProjectCard = ({ className }: ProjectCardProps) => {
  return (
    <Card className={cn("group relative h-64 w-fit rounded-xl", className)}>
      <Image
        src="/"
        alt="Test Image"
        width={400}
        height={256}
        className="h-full object-cover group-hover:brightness-50 transition-all duration-300 rounded-xl"
      />

      <div className="absolute text-white inset-0 p-4 w-full h-full flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
        <div className="flex flex-col">
          <span>TITLE</span>
          <span>Name</span>
        </div>
        <span>Read more...</span>
      </div>
    </Card>
  );
};

export default ProjectCard;
