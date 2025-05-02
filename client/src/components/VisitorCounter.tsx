import { useState, useEffect } from "react";
import { getVisitorCount, formatVisitorCount } from "@/lib/utils";

const VisitorCounter = () => {
  const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
    // Set initial visitor count
    setCount(getVisitorCount());
  }, []);

  return (
    <div className="pixel-border-inset bg-black p-2 mt-4">
      <div className="flex justify-between items-center">
        <div className="text-[var(--retro-cyan)] font-['VT323']">VISITORS:</div>
        <div className="bg-[var(--retro-navy)] text-[var(--retro-yellow)] font-['VT323'] px-2">
          {formatVisitorCount(count)}
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
