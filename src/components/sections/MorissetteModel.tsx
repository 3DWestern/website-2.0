"use client";

import { useLoading } from "@/context/LoadingContext";
import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import { HorizontalNav } from "@/components/HorizontalNav";
import { motion, AnimatePresence } from "framer-motion";
import { useMenu } from "@/context/MenuContext";

const AssemblyViewer = dynamic(() => import("@/components/AssemblyViewer"), {
  ssr: false,
});

const TOAST_VARIANTS = {
  hidden: {
    top: "5rem",
    opacity: 0,
    pointerEvents: "none" as const,
  },
  visible: {
    top: "8rem",
    opacity: 1,
    pointerEvents: "auto" as const,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 300,
      mass: 0.8,
    },
  },
  exit: {
    top: "5rem",
    opacity: 0,
    pointerEvents: "none" as const,
    transition: {
      duration: 0.3,
      ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
    },
  },
} as const;

const ANIMATION_DELAYS = {
  TOAST_APPEAR: 500,
  TOAST_DISMISS: 500,
  SCROLL_THRESHOLD: 50,
  SCROLL_INDICATOR_DELAY: 3000, // 3 seconds
} as const;

export function MorissetteModel() {
  const { loadingComplete, setModelReady } = useLoading();
  const { isMenuOpen } = useMenu();
  const [disclaimerVisible, setDisclaimerVisible] = useState(true);
  const [disclaimerAnimating, setDisclaimerAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(false);

  // Trigger toast animation after loading completes
  useEffect(() => {
    if (loadingComplete && disclaimerVisible) {
      const timer = setTimeout(() => setDisclaimerAnimating(true), ANIMATION_DELAYS.TOAST_APPEAR);
      return () => clearTimeout(timer);
    }
  }, [loadingComplete, disclaimerVisible]);

  // Hide toast when scrolling down, show when at top
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > ANIMATION_DELAYS.SCROLL_THRESHOLD) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show scroll indicator after 3 seconds of page load
  useEffect(() => {
    if (loadingComplete && !isScrolled) {
      const timer = setTimeout(() => {
        setScrollIndicatorVisible(true);
      }, ANIMATION_DELAYS.SCROLL_INDICATOR_DELAY);
      return () => clearTimeout(timer);
    }
  }, [loadingComplete, isScrolled]);

  const handleDismiss = () => {
    setDisclaimerAnimating(false);
    setTimeout(() => setDisclaimerVisible(false), ANIMATION_DELAYS.TOAST_DISMISS);
  };

  return (
    <section className="h-[98vh] bg-white relative">
      <div className="absolute inset-0 pt-8">
        {/* Content container with rounded corners - 98% height */}
        <div className="relative w-full h-[98%] px-4 md:px-8 lg:px-16 xl:px-8">
          <div className="relative w-full h-full rounded-[1.25rem] lg:rounded-2xl overflow-hidden">
            {/* Gradient background for 3D model scene */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-purple-800 via-indigo-900 to-black"
              onClick={disclaimerVisible ? handleDismiss : undefined}
            >
              {/* NAVBAR - Now inside canvas container */}
              <HorizontalNav isHeroOnly={true} variant="light" />

              {/* TOAST - Animated popup with Framer Motion */}
              <AnimatePresence>
                {disclaimerVisible && !isScrolled && !isMenuOpen && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-[85%] lg:w-max max-w-4xl bg-purple-700 text-white py-3 px-6 lg:px-10 rounded-xl text-center text-sm font-medium z-40"
                    variants={TOAST_VARIANTS}
                    initial="hidden"
                    animate={disclaimerAnimating ? "visible" : "hidden"}
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative pr-10">
                      Accessing the makerspace: Level 1 training required (
                      <a
                        href="https://westernu.brightspace.com/d2l/le/discovery/view/course/151344"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-semibold"
                      >
                        access here
                      </a>
                      ).
                      <button
                        onClick={handleDismiss}
                        className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity"
                        aria-label="Dismiss"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 3D Canvas - Always rendered so model can preload during loading animation */}
              <div className="absolute inset-0 z-1" style={{ pointerEvents: 'none' }}>
                <AssemblyViewer onModelReady={() => setModelReady(true)} />
              </div>

              {/* Scroll Indicator */}
              <AnimatePresence>
                {scrollIndicatorVisible && !isScrolled && !isMenuOpen && (
                  <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: 1,
                      y: [0, 10, 0],
                      transition: {
                        opacity: { duration: 0.5, ease: "easeOut" },
                        y: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
                  >
                    <ChevronDown className="w-8 h-8 text-white opacity-60" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
