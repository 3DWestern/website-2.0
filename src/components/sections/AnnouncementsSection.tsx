'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { koulen } from '@/lib/fonts';

export function AnnouncementsSection() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'], 
    });

    const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);

    return (
        <section ref={ref} className="relative h-[500px] overflow-hidden">
            {/* Parallax image layer */}
            <motion.div
                className="absolute inset-0 w-full h-[130%] -top-[15%]"
                style={{
                    y,
                    backgroundImage: "url('/images/smaker.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full text-white">
                <h2 className="text-4xl font-bold">Announcements</h2>
            </div>
        </section>
    )
}