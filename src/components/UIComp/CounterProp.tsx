import React, { useEffect, useState } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";

interface CounterProps {
  from?: number;
  to?: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({
  from = 0,
  to = 100000,
  duration = 3,
}) => {
  const count = useMotionValue(from);

  // Optional: transform to rounded string with commas
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString()
  );

  const [displayValue, setDisplayValue] = useState("0");

  const easeSlowNearEnd = (progress: number) => {
    if (progress < 0.9) return progress * 1.1;
    return 0.9 + (1 - 0.9) * Math.pow((progress - 0.9) / 0.1, 0.5);
  };

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: easeSlowNearEnd,
    });

    return () => controls.stop();
  }, [count, to, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (val) => {
      setDisplayValue(val);
    });
    return () => unsubscribe();
  }, [rounded]);

  return (
    <div className="flex gap-1 text-xs font-medium font-inter text-center text-black dark:text-white">
      {displayValue}+<div className="text-xs">lines of code</div>
    </div>
  );
};

export default Counter;
