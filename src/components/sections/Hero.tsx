"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B0D10] px-6 pt-28 pb-16 sm:pt-32 lg:px-16 lg:pt-36 lg:pb-28">
      {/* Ambient purple mesh — the slanted glow washing up from the bottom */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[15%] bottom-[-35%] h-[600px] w-[900px] -rotate-[18deg] rounded-[50%] bg-purple-dark/60 blur-[110px] sm:h-[750px] sm:w-[1150px]" />
        <div className="absolute right-[2%] top-[10%] h-[360px] w-[360px] rotate-[10deg] rounded-full bg-purple-light/25 blur-[110px] lg:right-[14%] lg:h-[460px] lg:w-[460px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        {/* Video column — first in the DOM so it stacks above the text on mobile */}
        <div className="relative order-1 aspect-[4/3] w-full max-w-[560px] lg:order-2 lg:aspect-[16/11] lg:max-w-none lg:flex-1 lg:self-stretch">
          <video
            className="h-full w-full object-cover"
            src="/videos/hero.mp4"
            poster="/images/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          {/* fades the video into the fog at the top edge, on every breakpoint */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10] to-transparent" />
          {/* fades the left edge into the text column, desktop only */}
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0B0D10] to-transparent lg:block" />
          {/* purple wash bleeding up from the bottom, ties the video into the blob behind it */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/60 via-transparent to-transparent mix-blend-screen" />
        </div>

        {/* Text column */}
        <div className="relative order-2 flex max-w-xl flex-col items-start text-left lg:order-1">
          <div className="mb-4 flex items-center gap-3 text-sm font-medium tracking-wider text-purple-light uppercase">
            <span className="h-px w-6 bg-purple-light" />
            Western University
          </div>

          <h1 className="text-white">
            Think It. Design It.
            <br />
            <span className="text-purple-light">Build It.</span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[color:var(--base-text)] sm:text-base">
            Your campus home for advanced manufacturing, rapid prototyping,
            and collaborative design.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
                href="/explore"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg btn text-white text-sm font-medium transition-colors"
                >
                Explore the Space
                <ArrowRight className="h-4 w-4" />
                </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}