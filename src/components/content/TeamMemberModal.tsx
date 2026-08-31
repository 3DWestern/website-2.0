"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Globe } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { MenuItem } from "@/components/data/teamdata";

interface TeamMemberModalProps {
  member: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TeamMemberModal({
  member,
  isOpen,
  onClose,
}: TeamMemberModalProps) {
  if (!member) return null;

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl gap-0 overflow-hidden p-0 sm:max-w-2xl  rounded-2xl">
        <div className="flex flex-col sm:flex-row" style={{
							backgroundImage: `
								radial-gradient(circle closest-corner at 25% 60%, rgba(147, 51, 234, 0.25), transparent),
								radial-gradient(circle farthest-side at 71% 16%, rgba(168, 85, 247, 0.2), transparent 35%),
								radial-gradient(circle closest-corner at 32% 38%, rgba(192, 132, 252, 0.15), transparent 76%),
								radial-gradient(circle farthest-side at 69% 81%, rgba(139, 92, 246, 0.15), transparent 76%),
								linear-gradient(#18181b, #18181b)
							`}}>
          {/* Photo */}
          <div className="relative aspect-4/5 w-full shrink-0 sm:w-64">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100vw, 256px"
              className="object-cover object-top"
            />
          </div>

          {/* Info */}
          <div className="flex flex-1 flex-col gap-4 p-6">
            <DialogHeader className="gap-1 text-left">
              <DialogTitle className="text-xl">
                {member.name}{" "}
                {member.emoji && <span aria-hidden="true">{member.emoji}</span>}
              </DialogTitle>
              <p className="text-sm font-medium text-purple-light">
                {member.role}
              </p>
            </DialogHeader>

            {(member.bio ?? member.description) && (
              <p className="text-sm leading-relaxed text-secondary-text">
                {member.bio ?? member.description}
              </p>
            )}

            {(linkedinHref || githubHref || websiteHref) && (
              <div className="mt-1 flex gap-3">
                {linkedinHref && (
                  <Link
                    href={linkedinHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3E184A33] text-primary-text transition-colors hover:border-purple-light hover:text-purple-light"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                )}
                {githubHref && (
                  <Link
                    href={githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on GitHub`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3E184A33] text-primary-text transition-colors hover:border-purple-light hover:text-purple-light"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                )}
                {websiteHref && (
                  <Link
                    href={websiteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s website`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3E184A33] text-primary-text transition-colors hover:border-purple-light hover:text-purple-light"
                  >
                    <Globe className="h-4 w-4" />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}