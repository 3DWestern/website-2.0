"use client";

import { motion } from "motion/react";
import { EquipmentGridDesktop } from "@/components/content/EquipmentGridDesktop";
import { EquipmentListMobile } from "@/components/content/EquipmentListMobile";

export function EquipmentSection() {
  return (
    <section className="w-full px-6 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center lg:mb-16"
      >
        <h2 className="text-primary-text">Equipment</h2>
        <p className="mt-3 text-[15px] text-secondary-text sm:text-base">
          Industrial-grade tools, ready whenever you are.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <EquipmentGridDesktop />
        <EquipmentListMobile />
      </motion.div>
    </section>
  );
}
