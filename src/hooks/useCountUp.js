import { useEffect, useState } from "react";

const DURATION_MS = 1100;
const easeOut = (t) => 1 - (1 - t) ** 3;

export default function useCountUp(target, active, enabled = true) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;
    if (!enabled) {
      setValue(target);
      return undefined;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      setValue(Math.round(easeOut(progress) * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, enabled]);

  return value;
}
