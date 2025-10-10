'use client';

import { MusicNote } from './MusicNote';
import { useState, useEffect } from 'react';
import { Disc, Music, Mic, Guitar } from 'lucide-react';

const ICONS = [MusicNote, Disc, Music, Mic, Guitar];

type Note = {
  id: number;
  style: {
    width: string;
    height: string;
    left: string;
    animationDuration: string;
    animationDelay: string;
    opacity: number;
  };
  Icon: React.ElementType;
};

export function AnimatedBackground() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    // This code now runs only on the client, after the initial render.
    const generatedNotes = Array.from({ length: 25 }).map((_, i) => {
      const size = Math.random() * 2.5 + 1; // 1rem to 3.5rem
      const duration = Math.random() * 15 + 10; // 10s to 25s
      const delay = Math.random() * 15; // 0s to 15s
      const left = Math.random() * 100;
      const opacity = Math.random() * 0.2 + 0.05; // More variance in opacity
      const Icon = ICONS[Math.floor(Math.random() * ICONS.length)];

      return {
        id: i,
        style: {
          width: `${size}rem`,
          height: `${size}rem`,
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          opacity: opacity,
        },
        Icon,
      };
    });
    setNotes(generatedNotes);
  }, []); // Empty dependency array ensures this runs only once on the client.


  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes drift {
          from {
            transform: translateY(100vh) rotate(0deg) scale(0.8);
          }
          50% {
             transform: translateX(5vw) rotate(180deg) scale(1.2);
          }
          to {
            transform: translateY(-100px) translateX(-5vw) rotate(360deg) scale(0.8);
          }
        }
        .note {
          position: absolute;
          bottom: -150px; /* Start further down */
          animation: drift linear infinite;
          will-change: transform;
          color: hsl(var(--primary));
        }
      `}</style>
      {notes.map((note) => (
        <div key={note.id} className="note" style={note.style}>
          <note.Icon />
        </div>
      ))}
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background via-background/80 to-transparent" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-xl max-h-xl bg-primary/10 rounded-full blur-3xl animate-pulse" />
       <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] max-w-lg max-h-lg bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
       <div className="absolute bottom-1/4 left-1/4 w-[40vw] h-[40vw] max-w-lg max-h-lg bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
    </div>
  );
}
