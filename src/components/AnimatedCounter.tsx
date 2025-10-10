"use client";

import { useState, useEffect, useRef } from 'react';

type AnimatedCounterProps = {
  to: number;
  duration?: number;
};

export function AnimatedCounter({ to, duration = 1.5 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = to;
          const totalDuration = duration * 1000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / totalDuration, 1);
            
            // Ease out function
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            start = Math.floor(easedProgress * end);
            setCount(start);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}
