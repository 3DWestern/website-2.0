"use client";

import { useLoading } from "@/context/LoadingContext";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import { HorizontalNav } from "@/components/HorizontalNav";
import { motion, AnimatePresence } from "framer-motion";
import { useMenu } from "@/context/MenuContext";

const AssemblyViewer = dynamic(() => import("@/components/AssemblyViewer"), {
  ssr: false,
});

export function MorissetteModel() {
  console.log("[MorissetteModel] Component render");

  const { loadingComplete } = useLoading();
  const isLoaded = loadingComplete;
  const { isMenuOpen } = useMenu();
  const [disclaimerVisible, setDisclaimerVisible] = useState(true);
  const [disclaimerAnimating, setDisclaimerAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Animation variants for Framer Motion
  const toastVariants = {
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
  };

  // Trigger toast animation after loading completes
  useEffect(() => {
    if (isLoaded && disclaimerVisible) {
      const timer = setTimeout(() => setDisclaimerAnimating(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, disclaimerVisible]);

  // Hide toast when scrolling down, show when at top
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setDisclaimerAnimating(false);
    setTimeout(() => setDisclaimerVisible(false), 500);
  };

  return (
    <section className="h-[98vh] bg-white overflow-hidden relative">
      <div className="absolute inset-0 px-4 md:px-8 lg:px-16 xl:px-8 pt-8">
        {/* Content container with rounded corners - 98% height */}
        <div className="relative w-full h-[98%]">
          <div className="relative w-full h-full rounded-[1.25rem] lg:rounded-2xl overflow-hidden">
            {/* Gradient background for 3D model scene */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-800 via-indigo-900 to-black">
              {/* NAVBAR - Now inside canvas container */}
              <HorizontalNav isHeroOnly={true} variant="light" />

              {/* TOAST - Animated popup with Framer Motion */}
              <AnimatePresence>
                {disclaimerVisible && !isScrolled && !isMenuOpen && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-[90%] lg:w-max max-w-4xl bg-purple-700 text-white py-3 px-10 rounded-xl text-center text-sm font-medium z-40"
                    variants={toastVariants}
                    initial="hidden"
                    animate={disclaimerAnimating ? "visible" : "hidden"}
                    exit="exit"
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
                        className="absolute right-0 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity"
                        aria-label="Dismiss"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 3D Canvas */}
              <div className="absolute inset-0 z-1">
                {isLoaded && <AssemblyViewer />}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom left info - blends with white background, with location map */}
        <div
          className={`absolute bottom-2 left-0 bg-white rounded-tr-2xl lg:rounded-tl-2xl p-6 lg:p-8 transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
        >
          <div className="flex gap-6 items-start">
            {/* Text info */}
            {/* <div>
              <p className="text-gray-900 font-semibold text-lg lg:text-2xl">
                3D Western{" "}
                <span className="text-gray-500 font-normal">
                  / Student Makerspace
                </span>
                <span className="hidden lg:inline text-gray-500 font-normal">
                  {" "}
                  /{" "}
                </span>
                <span className="block lg:inline text-gray-400 text-base lg:text-lg">
                  Western University / London, ON
                </span>
              </p>
            </div> */}

            {/* Map bento - desktop only */}
            {/* <div className="hidden lg:block flex-shrink-0">
              <a
                href="https://www.google.com/maps/place/Western+University/@43.009544,-81.273901,15z"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                aria-label="View Morrissette Institute location on Google Maps"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.7778!2d-81.2739!3d43.0095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eee4aa7848457%3A0x307ca725cc79e92e!2sWestern%20University!5e0!3m2!1sen!2sca!4v1234567890"
                  width="180"
                  height="140"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Morrissette Institute Location"
                />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
