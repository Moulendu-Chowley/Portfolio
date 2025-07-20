import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function pad(num: number, size: number = 2) {
  let s = String(num);
  while (s.length < size) s = "0" + s;
  return s;
}

export default function useCountUp(target: number | null, duration = 1200) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState("00");

  useEffect(() => {
    if (target === null || !isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      setValue(pad(current));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(pad(target));
      }
    };
    requestAnimationFrame(step);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, isInView]);

  // Return ref for use in the component, and the value
  return [ref, value] as const;
} 