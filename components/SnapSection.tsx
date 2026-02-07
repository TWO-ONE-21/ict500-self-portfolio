import { ReactNode } from "react";
import { cn } from "@/lib/utils";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SnapSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    index?: number;
}

const SnapSection = ({ children, className, id, index = 0 }: SnapSectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "h-screen w-full snap-start flex items-center justify-center relative overflow-hidden p-6",
                className
            )}
        >
            {/* Cinematic Chapter Announcement */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: [0, 1, 1, 0],
                    scale: [0.9, 1, 1, 1.1],
                    filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]
                }}
                transition={{
                    duration: 2.5,
                    times: [0, 0.2, 0.7, 1],
                    ease: "easeInOut"
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="absolute top-6 left-6 z-50 pointer-events-none"
            >
                <span className="text-xl md:text-3xl font-serif text-[#d4af37] tracking-[0.2em] font-bold drop-shadow-lg">
                    CHAPTER {index + 1}
                </span>
            </motion.div>

            {children}
        </section>
    );
};

export default SnapSection;
