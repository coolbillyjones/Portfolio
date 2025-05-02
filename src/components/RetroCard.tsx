import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RetroCardProps {
  children: ReactNode;
  className?: string;
  inset?: boolean;
  title?: string;
}

const RetroCard = ({ 
  children, 
  className, 
  inset = false,
  title 
}: RetroCardProps) => {
  const baseClass = inset ? "pixel-border-inset" : "pixel-border";
  const bgClass = inset ? "" : "bg-white";
  
  return (
    <div className={cn(baseClass, bgClass, "p-4", className)}>
      {title && (
        <h2 className="font-['VT323'] text-[var(--retro-navy)] text-2xl mb-4 underline">{title}</h2>
      )}
      {children}
    </div>
  );
};

export default RetroCard;
