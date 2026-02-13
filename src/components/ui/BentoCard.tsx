import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { staggerItem } from "@/lib/animations";

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2;
    delay?: number;
}

export default function BentoCard({
    children,
    className,
    colSpan = 1,
    rowSpan = 1,
}: BentoCardProps) {
    return (
        <motion.div
            variants={staggerItem}
            className={cn(
                "group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md",
                colSpan === 2 && "md:col-span-2",
                colSpan === 3 && "md:col-span-3",
                rowSpan === 2 && "md:row-span-2",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
