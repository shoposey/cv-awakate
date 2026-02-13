// Animation variants for Motion (Framer Motion)
// Based on design.md animation specifications

import type { Variants } from "motion/react";

const smoothEase = [0.4, 0, 0.2, 1] as const;

export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: smoothEase,
        },
    },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: smoothEase,
        },
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: smoothEase,
        },
    },
};

export const scaleHover = {
    scale: 1.03,
    transition: { duration: 0.3, ease: smoothEase },
};

export const floatAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
    },
};

export const floatAnimationSlow = {
    y: [0, -15, 0],
    transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut" as const,
    },
};

export const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
    },
};

// Viewport config for whileInView
export const viewportConfig = {
    once: true,
    amount: 0.2 as const,
};
