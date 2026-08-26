"use client";

import Image from "next/image";
import { Spotlight } from "@/components/data/spotlights";

interface SpotlightCardProps {
  spotlight: Spotlight;
}

export function SpotlightCard({ spotlight }: SpotlightCardProps) {
  return (
    <div className="clip-corners-lg flex flex-col sm:flex-row overflow-hidden bg-grey-bg border border-b-grey">
      {/* Left — project photo */}
      <div className="relative w-full sm:w-80 shrink-0 min-h-[280px] sm:min-h-full bg-black-bg">
        <Image
          src={spotlight.image}
          alt={spotlight.alt}
          fill
          sizes="(max-width: 640px) 100vw, 320px"
          className="object-cover opacity-85"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-purple-dark to-transparent px-5 pt-10 pb-5">
          <p className="text-sm font-semibold text-primary-text">{spotlight.name}</p>
          <p className="text-xs text-muted mt-0.5">{spotlight.program}</p>
        </div>
      </div>

      {/* Right — quote grows, project box pinned to bottom */}
      <div className="flex flex-col flex-1">
        <div className="flex-1 flex items-center px-6 py-6">
          <blockquote className="text-base leading-relaxed text-primary-text italic border-l-2 border-purple-light pl-4">
            &quot;{spotlight.quote}&quot;
          </blockquote>
        </div>

        <div className="bg-black-bg border-t border-b-grey px-6 py-5">
          <p className="text-[11px] uppercase tracking-widest text-purple-light mb-2">
            Their project
          </p>
          <p className="text-sm font-semibold text-primary-text mb-1">
            {spotlight.projectTitle}
          </p>
          <p className="text-xs text-secondary-text leading-relaxed">
            {spotlight.projectDescription}
          </p>
          <span className="mt-3 inline-block text-[11px] px-3 py-1 rounded-full bg-purple-light/10 text-purple-light border border-purple-light/20">
            {spotlight.category}
          </span>
        </div>
      </div>
    </div>
  );
}