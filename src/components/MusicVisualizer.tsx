'use client';

import { useEffect, useState } from 'react';

export function MusicVisualizer() {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    // Generate initial bar heights
    const initialBars = Array.from({ length: 12 }, () => Math.random() * 100 + 20);
    setBars(initialBars);

    // Animate bars
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.random() * 100 + 20));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end justify-center gap-1 h-16 w-32">
      {bars.map((height, index) => (
        <div
          key={index}
          className="bg-gradient-to-t from-primary to-accent rounded-t-full transition-all duration-300 ease-out"
          style={{
            height: `${height}%`,
            width: '6px',
            animationDelay: `${index * 50}ms`,
          }}
        />
      ))}
    </div>
  );
}