"use client";

import { useState, useEffect, useLayoutEffect, ReactNode } from "react";
import Lottie from "lottie-react";
import { LoadingContext } from "@/context/LoadingContext";
import { usePathname } from "next/navigation";

type AnimationData = Record<string, unknown>;

interface LoadingWrapperProps {
  children: ReactNode;
}

const STORAGE_KEY = "hasSeenLandingAnimation";

// useLayoutEffect on the client, no-op on the server (avoids the
// "useLayoutEffect does nothing on the server" warning)
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function LoadingWrapper({ children }: LoadingWrapperProps) {
  const pathname = usePathname();

  const [animationData, setAnimationData] = useState<AnimationData | null>(
    null,
  );
  const [animationDone, setAnimationDone] = useState(false);
  const [modelReady, setModelReady] = useState(pathname !== "/");
  const [checkedStorage, setCheckedStorage] = useState(false);

  const isLoading = !animationDone;

  // Runs only on the client, after hydration, before paint.
  // Flips state instantly if the animation was already seen this session.
  useIsomorphicLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "true") {
        setAnimationDone(true);
      }
    } catch {
      // ignore storage errors (private browsing, quota, etc.)
    } finally {
      setCheckedStorage(true);
    }
  }, []);

  useEffect(() => {
    if (!checkedStorage || animationDone) return; // already resolved, skip fetch

    const abortController = new AbortController();

    fetch("/animations/loading.json", { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load animation");
        return res.json();
      })
      .then((data: AnimationData) => setAnimationData(data))
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Failed to load loading animation:", error);
        }
      });

    return () => abortController.abort();
  }, [checkedStorage, animationDone]);

  useEffect(() => {
    if (!checkedStorage || animationDone) return;

    const timer = setTimeout(() => {
      setAnimationDone(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {
        // ignore storage errors
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [checkedStorage, animationDone]);

  // Dispatch event when loading actually completes
  useEffect(() => {
    if (!isLoading) {
      window.dispatchEvent(new CustomEvent("loadingComplete"));
    }
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100vh";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";

      const htmlElement = document.documentElement;
      const hadScrollSmooth = htmlElement.classList.contains("scroll-smooth");
      if (hadScrollSmooth) {
        htmlElement.classList.remove("scroll-smooth");
        htmlElement.dataset.hadScrollSmooth = "true";
      }

      const preventScroll = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      const preventKeyScroll = (e: KeyboardEvent) => {
        if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
          e.preventDefault();
          return false;
        }
      };

      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("keydown", preventKeyScroll, { passive: false });

      return () => {
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
        window.removeEventListener("keydown", preventKeyScroll);
      };
    } else {
      const scrollY = document.body.style.top;

      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      const htmlElement = document.documentElement;
      if (htmlElement.dataset.hadScrollSmooth === "true") {
        htmlElement.classList.add("scroll-smooth");
        delete htmlElement.dataset.hadScrollSmooth;
      }

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [isLoading]);

  return (
    <LoadingContext.Provider
      value={{ loadingComplete: !isLoading, modelReady, setModelReady }}
    >
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          {animationData ? (
            <Lottie
              animationData={animationData}
              loop={false}
              style={{ width: 300, height: 300 }}
            />
          ) : null}
        </div>
      )}

      <div data-loading={isLoading ? "true" : undefined}>{children}</div>
    </LoadingContext.Provider>
  );
}
