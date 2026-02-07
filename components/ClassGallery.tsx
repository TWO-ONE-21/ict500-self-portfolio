import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const ClassGallery = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

    const classItems = [
        "class-01", "class-02", "class-03", "class-04", "class-05",
        "class-06", "class-07", "class-08", "class-09", "class-10"
    ];

    return (
        <div ref={targetRef} className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden py-12">
            <div className="text-center z-10 w-full px-4 mb-8 shrink-0">
                <h2 className="text-2xl md:text-5xl font-serif text-[#d4af37] mb-2 relative inline-block">
                    CDCS2403A
                </h2>
                <div className="h-px w-24 bg-[#d4af37]/50 mx-auto my-2" />
                <p className="text-sm md:text-lg text-white/60 font-light relative">
                    The Best Class Atmosphere
                </p>
            </div>

            {/* Aesthetic Scattered Grid container - Responsive Horizontal Scroll */}
            <div className="w-full h-full max-h-[75vh] flex items-center overflow-x-auto no-scrollbar px-4 md:px-12 md:px-24">
                <div className="grid grid-rows-1 md:grid-rows-2 grid-flow-col gap-4 md:gap-16 h-full items-center py-4 md:py-12 px-4 md:px-8">
                    {classItems.map((item, index) => {
                        // Aesthetic logic: Restore the "Messy" scatter - reduced intensity on mobile
                        const isEven = index % 2 === 0;
                        const rotate = index % 3 === 0 ? "rotate-2" : index % 3 === 1 ? "-rotate-3" : "rotate-1";
                        const variableY = index % 4 === 0 ? "md:translate-y-4" : index % 4 === 1 ? "md:-translate-y-6" : "md:translate-y-0"; // Disable Y scatter on mobile for cleaner scroll

                        const isVideo = item === "class-02" || item === "class-10";

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: Math.random() * 4 - 2 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={cn(
                                    "relative h-48 md:h-56 aspect-[16/10] bg-white/5 border border-white/10 rounded-sm overflow-hidden shrink-0 group hover:z-30 hover:scale-110 hover:rotate-0 transition-all duration-500 hover:border-[#d4af37] shadow-xl hover:shadow-[#d4af37]/20",
                                    "md:" + rotate, // Only scatter rotate strongly on desktop
                                    variableY
                                )}
                            >
                                {isVideo ? (
                                    <video
                                        src={`/assets/${item}.mp4`}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                ) : (
                                    <img
                                        src={`/assets/${item}.webp`}
                                        alt={item}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                                <div className="absolute bottom-3 left-3 pointer-events-none">
                                    <span className="text-white/40 text-[10px] font-mono group-hover:text-[#d4af37] transition-colors">{item}</span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default ClassGallery;
