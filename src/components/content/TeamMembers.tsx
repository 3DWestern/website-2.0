"use client";
import { useState } from "react";
import { TeamMemberModal } from "./TeamMemberModal";
import Tier from "./TeamTier";
import { TeamMember } from "@/types/content";

interface TeamSectionProps {
  leadership: TeamMember[];
  vicePresidents: TeamMember[];
}

export default function TeamMembers({
  leadership,
  vicePresidents,
}: TeamSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-16 bg-w">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-secondary-text mb-1">
            Who we are
          </p>
          <h2 className="text-3xl sm:text-4xl">Meet the team</h2>
        </div>

        <div className="flex flex-col gap-10">
          <Tier
            label="Leadership"
            members={leadership}
            maxCols={4}
            onSelect={setSelectedMember}
          />
          <Tier
            label="Vice Presidents"
            members={vicePresidents}
            maxCols={5}
            onSelect={setSelectedMember}
          />
        </div>
      </div>

      <TeamMemberModal
        member={selectedMember}
        isOpen={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}
