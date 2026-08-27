"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "../ui/button";


export function AboutUsSection() {
  return (
    <section className="w-full bg-grey-bg px-6 py-16 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="order-1 w-full lg:order-2 lg:w-[58%]"
        >
          <div className="clip-corners relative aspect-3/2 w-full overflow-hidden">
            <Image
              src="/images/morrissette.png"
              alt="Rendering of the 3D Western makerspace building"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-2 flex flex-col items-start text-left lg:order-1 lg:w-[42%]"
        >
          <div className="mb-4 flex items-center gap-3 text-sm font-medium tracking-wider text-purple-light uppercase">
            <span className="h-px w-6 bg-purple-light" />
            Who We Are
          </div>

          <h2>3D Western</h2>

          <p className="mt-6 text-[15px] leading-relaxed text-base text-secondary-text sm:text-base">
            We&apos;re a student-run organization built on one idea: the tools
            to prototype, fabricate, and build shouldn&apos;t be locked away.
            Originally founded as a 3D printing club, we&apos;ve grown into a
            full makerspace.
          </p>

          <p className="mt-3 text-[15px] leading-relaxed text-base text-secondary-text sm:text-base mb-8">
            Partnered with Morrissette Entrepreneurship at Western, we now
            offer CNC, laser cutting, water jet, and woodworking — free to
            access for any student on campus.
          </p>

          <Button variant="outlined" size="pill" asChild>
            <Link
            href="/about">
            Learn more about us
          </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}