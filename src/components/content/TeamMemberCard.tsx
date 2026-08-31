"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Globe } from "lucide-react";
import { MenuItem } from "@/components/data/teamdata";

interface TeamMemberCardProps {
  member: MenuItem;
  onClick: () => void;
}

export function TeamMemberCard({ member, onClick }: TeamMemberCardProps) {
  const linkedinHref = member.linkedin
    ? member.linkedin.startsWith("http")
      ? member.linkedin
      : `https://${member.linkedin}`
    : null;
  const githubHref = member.github
    ? member.github.startsWith("http")
      ? member.github
      : `https://${member.github}`
    : null;
  const websiteHref = member.website
    ? member.website.startsWith("http")
      ? member.website
      : `https://${member.website}`
    : null;

  return (
    <button
      onClick={onClick}
      className="flex flex-col overflow-hidden rounded-xl border border-b-grey bg-grey-bg text-left transition-colors duration-200 hover:border-purple-light"
    >
      <div className="relative w-full aspect-4/5 overflow-hidden shrink-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 20vw"
          className="object-cover object-top"
        />
      </div>

      <div className="px-2.5 pt-2 pb-2.5 flex flex-col gap-0.5">
        <div className="flex items-center justify-between gap-1">
          <p className="text-xs font-semibold text-primary-text truncate leading-snug">
            {member.name}{" "}
            {member.emoji && <span aria-hidden="true">{member.emoji}</span>}
          </p>
          <div className="flex gap-1 shrink-0">
            {linkedinHref && (
              <Link
                href={linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${member.name} on LinkedIn`}
                className="w-5 h-5 flex items-center justify-center text-primary-text hover:text-purple-light transition-colors duration-200"
              >
                <Linkedin className="w-2.5 h-2.5" />
              </Link>
            )}
            {githubHref && (
              <Link
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${member.name} on GitHub`}
                className="w-5 h-5 flex items-center justify-center text-primary-text hover:text-purple-light transition-colors duration-200"
              >
                <Github className="w-2.5 h-2.5" />
              </Link>
            )}
            {websiteHref && (
              <Link
                href={websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${member.name}'s website`}
                className="w-5 h-5 flex items-center justify-center text-primary-text hover:text-purple-light transition-colors duration-200"
              >
                <Globe className="w-2.5 h-2.5" />
              </Link>
            )}
          </div>
        </div>
        <p className="text-[11px] font-medium text-purple-light leading-snug">
          {member.role}
        </p>
        {member.description && (
          <p className="text-[11px] text-secondary-text leading-relaxed mt-0.5 line-clamp-2">
            {member.description}
          </p>
        )}
      </div>
    </button>
  );
}