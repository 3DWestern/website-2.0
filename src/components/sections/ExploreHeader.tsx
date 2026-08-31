"use client";
import { motion } from "framer-motion";

export function ExploreHeader() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl mb-4"
        >
          Explore
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl text-secondary-text max-w-2xl"
        >
          Updates, projects, dev notes, and more
        </motion.p>
      </div>
    </section>
  );
}
