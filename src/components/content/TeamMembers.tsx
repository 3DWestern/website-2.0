"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="eyebrow text-xs text-secondary-text mb-1">
            Who we are
          </p>
          <h2 className="text-3xl sm:text-4xl">Meet the team</h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {[
            { label: "Leadership", members: leadership, maxCols: 4 },
            { label: "Vice Presidents", members: vicePresidents, maxCols: 5 },
          ].map((tier, i) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Tier
                label={tier.label}
                members={tier.members}
                maxCols={tier.maxCols}
                onSelect={setSelectedMember}
              />
            </motion.div>
          ))}
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
