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
                "relative backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl rounded-2xl p-8 md:p-12 overflow-hidden",
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
