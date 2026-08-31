"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { items, MenuItem } from "@/components/data/teamdata";
import { TeamMemberCard } from "@/components/content/TeamMemberCard";
import { TeamMemberModal } from "@/components/content/TeamMemberModal";
import { Button } from "../ui/button";

const leadership = items.filter(
  (m) => m.role === "President" || m.role.startsWith("Chief"),
);
const vicePresidents = items.filter(
  (m) => !m.role.startsWith("Chief") && m.role !== "President",
);

type Breakpoint = "base" | "sm" | "md" | "lg";

function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("lg");

  useEffect(() => {
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqMd = window.matchMedia("(min-width: 768px)");
    const mqSm = window.matchMedia("(min-width: 640px)");

    const update = () => {
      if (mqLg.matches) setBreakpoint("lg");
      else if (mqMd.matches) setBreakpoint("md");
      else if (mqSm.matches) setBreakpoint("sm");
      else setBreakpoint("base");
    };

    update();
    mqLg.addEventListener("change", update);
    mqMd.addEventListener("change", update);
    mqSm.addEventListener("change", update);
    return () => {
      mqLg.removeEventListener("change", update);
      mqMd.removeEventListener("change", update);
      mqSm.removeEventListener("change", update);
    };
  }, []);

  return breakpoint;
}

function columnsForBreakpoint(breakpoint: Breakpoint, maxCols: number) {
  switch (breakpoint) {
    case "lg":
      return maxCols;
    case "md":
      return Math.min(3, maxCols);
    case "sm":
      return Math.min(2, maxCols);
    default:
      return 1;
  }
}

interface TierProps {
  label: string;
  members: MenuItem[];
  maxCols: number;
  onSelect: (member: MenuItem) => void;
}

function Tier({ label, members, maxCols, onSelect }: TierProps) {
  const breakpoint = useBreakpoint();
  const cols = columnsForBreakpoint(breakpoint, maxCols);
  const perPage = cols;
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [prevCols, setPrevCols] = useState(cols);

  if (cols !== prevCols) {
    setPrevCols(cols);
    setPage(0);
  }

  const totalPages = Math.ceil(members.length / perPage);
  const visible = members.slice(page * perPage, page * perPage + perPage);
  const showNav = members.length > perPage;

  const go = (next: number) => {
    setDirection(next > page ? 1 : -1);
    setPage(next);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#29323b]">
        <p className="text-xs font-medium tracking-widest uppercase text-secondary-text">
          {label}
        </p>
        {showNav && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-secondary-text">
              {page + 1} / {totalPages}
            </span>
            <div className="flex gap-1">
              <Button
                size="icon"
                variant="outlined"
                onClick={() => go(page - 1)}
                disabled={page === 0}
                aria-label="Previous"
                className="w-6 h-6 p-1 rounded-full"
              >
                <ChevronLeft className="w-3 h-3" />
              </Button>
              <Button
                size="icon"
                variant="outlined"
                onClick={() => go(page + 1)}
                disabled={page === totalPages - 1}
                aria-label="Next"
                className="w-6 h-6 p-1 rounded-full"
              >
                <ChevronRight className="w-3 h-3" />
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`${page}-${cols}`}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              gap: "12px",
              justifyContent: "start",
            }}
          >
            {visible.map((member) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                onClick={() => onSelect(member)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<MenuItem | null>(null);

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