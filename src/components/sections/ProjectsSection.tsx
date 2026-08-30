"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProjectCard from "../content/ProjectCard";
import { apiClient } from "@/lib/cms/api.client";
import { Project } from "@/types/content";
import { Button } from "../ui/button";

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      let projs = await apiClient.for("projects").getMany({ limit: 10 });
      setProjects(projs);
    };
    fetchProjects();
  }, []);

  const plugin = useRef(
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <div className="flex flex-col py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-10">
        <h2 className={`text-4xl font-bold `}>Projects Showcase</h2>
        <Button size="pill" variant="gradient" asChild>
          <Link href="/projects">
            View all projects
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </Button>
      </div>
      {projects.length > 0 ? (
        <Carousel opts={{ loop: true }} plugins={[plugin.current]}>
          <CarouselContent className="-ml-4 min-h-70">
            {projects.map((project) => (
              <CarouselItem
                className="w-auto pl-4 h-64 basis-auto"
                key={project.id}
              >
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <Button className="w-fit m-auto" size="pill" variant="outlined" asChild>
          <Link href="/projects">
            No projects found, visit our projects page for more information.
          </Link>
        </Button>
      )}
    </div>
  );
};

export default ProjectsSection;
