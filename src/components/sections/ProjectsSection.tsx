"use client";
import { useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ProjectCard from "../ProjectCard";

const ProjectsSection = () => {
  const plugin = useRef(
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <Carousel opts={{ loop: true }} plugins={[plugin.current]}>
      <CarouselContent className="*:p-6 -ml-4 *:w-auto *:pl-4 *:h-64 min-h-70 *:basis-auto">
        <CarouselItem className="">
          <ProjectCard></ProjectCard>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectsSection;
