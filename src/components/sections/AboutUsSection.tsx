'use client';

import { koulen, krub } from '@/lib/fonts'
import { motion } from "motion/react"

export function AboutUsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-20">
      <div className="container text-center px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            initial={{ opacity: 0, scale: 1.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={`my-6 text-7xl lg:text-5xl xl:text-6xl font-bold ${koulen.className} text-center`}
          >
            3D Western
          </motion.div>

          <div className="flex flex-col gap-6 lg:gap-8 max-w-5xl mx-auto text-base lg:text-lg">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="font-bold">Western University&apos;s student-run organization for design, prototyping, and creative technology.</div>
              <div>We manage the university&apos;s two Makerspaces—Digital and Sabourin—on behalf of Morrissette.</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="font-bold">Across both facilities, we support every step of the creation process: from concept sketching and rapid prototyping to fabrication, testing, and idea validation.</div>
              <div>Whether you&apos;re building your first project or developing a polished prototype, our team provides guidance, training, and a place to experiment.</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="font-bold">Our equipment includes:</div>
              <div>3D printers, laser cutters, water cutters, Cricut machines, sewing machines, soldering stations, and Raspberry Pis—along with a growing inventory of digital fabrication and woodworking tools.</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="font-bold">As 3DW expands, our website and dashboard will become the central portal for accessing services, workshops, equipment bookings, and club activities.</div>
              <div>We&apos;re building a community where anyone can create, learn, and innovate—no experience required.</div>
            </motion.div>
          </div>

      </div>
    </section>
  );
}
