"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "../ui/utils";
import { Project } from "@/types/content";
import { formatShortDate } from "@/components/utils";

type ProjectShowcaseCardProps = {
  project: Project;
  className?: string;
};

const ProjectShowcaseCard = ({
  project,
  className,
}: ProjectShowcaseCardProps) => {
  const contributors = project.contributors?.length
    ? project.contributors
    : [project.creator];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="mb-6 break-inside-avoid"
    >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View project: ${project.title}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-light rounded-xl"
      >
        <Card
          className={cn(
            "group relative overflow-hidden rounded-xl border-b border-b-grey bg-black-bg shadow-sm hover:shadow-lg transition-shadow duration-300",
            className,
          )}
        >
          <div className="relative overflow-hidden">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {project.categories.map((category) => (
              <span
                key={category.name}
                className="absolute top-3 left-3 px-2.5 py-1 rounded-full gradient text-xs font-semibold uppercase tracking-wide backdrop-blur-sm"
              >
                {category.name}
              </span>
            ))}
          </div>

          <div className="p-5 flex flex-col gap-3">
            <h3 className={`text-xl leading-tight`}>
              {project.title}
            </h3>

            <div className="flex items-center gap-1.5 text-sm text-secondary-text">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{contributors.join(", ")}</span>
            </div>

            <p className="text-sm text-secondary-text leading-relaxed">
              {project.description}
            </p>

            <time
              dateTime={project.dateAdded}
              className="text-xs text-secondary-text"
            >
              Added {formatShortDate(project.dateAdded)}
            </time>

            <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-purple-light group-hover:gap-2 transition-all">
              Read more{" "}
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProjectShowcaseCard;
