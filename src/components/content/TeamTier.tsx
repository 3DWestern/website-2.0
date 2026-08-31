import { Breakpoint, useBreakpoint } from "@/hooks/useBreakpoint";
import { TeamMember } from "@/types/content";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { TeamMemberCard } from "./TeamMemberCard";
import { Button } from "../ui/button";

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
  members: TeamMember[];
  maxCols: number;
  onSelect: (member: TeamMember) => void;
}

export default function Tier({ label, members, maxCols, onSelect }: TierProps) {
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
