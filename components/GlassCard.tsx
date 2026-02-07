import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

const GlassCard = ({ children, className }: GlassCardProps) => {
    return (
        <div
            className={cn(
                "relative backdrop-blur-md bg-white/5 shadow-2xl rounded-2xl p-8 md:p-12 overflow-hidden",
                "border border-transparent hover:border-white/20", // Fallback/Transition
                "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-br before:from-[#d4af37]/30 before:to-transparent before:-z-10 before:content-['']", // Gradient Border Logic
                "bg-gradient-to-br from-white/5 to-white/[0.02]",
                "transition-all duration-500 hover:bg-white/10 hover:shadow-cyan-500/10 hover:border-white/20",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
            {children}
        </div>
    );
};

export default GlassCard;
