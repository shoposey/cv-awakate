"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";
import { fadeInUp, viewportConfig } from "@/lib/animations";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export default function AnimatedSection({
    children,
    className = "",
    id,
    delay = 0,
}: AnimatedSectionProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return (
            <section id={id} className={`section ${className}`}>
                <div className="section-content">{children}</div>
            </section>
        );
    }

    return (
        <motion.section
            id={id}
            className={`section ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
            transition={{ delay }}
        >
            <div className="section-content">{children}</div>
        </motion.section>
    );
}
