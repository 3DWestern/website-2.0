"use client";
import { useState, useEffect } from "react";

export type Breakpoint = "base" | "sm" | "md" | "lg";

export function useBreakpoint(): Breakpoint {
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
