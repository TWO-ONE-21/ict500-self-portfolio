import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SnapSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const SnapSection = ({ children, className, id }: SnapSectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "h-screen w-full snap-start flex items-center justify-center relative overflow-hidden p-6",
                className
            )}
        >
            {children}
        </section>
    );
};

export default SnapSection;
