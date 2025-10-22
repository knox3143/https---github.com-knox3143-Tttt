'use client';

import { MusicNote } from '@/components/MusicNote';
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
    const generatedNotes = Array.from({ length: 35 }).map((_, i) => {
      const size = Math.random() * 3 + 0.8; // 0.8rem to 3.8rem
      const duration = Math.random() * 20 + 15; // 15s to 35s
      const delay = Math.random() * 20; // 0s to 20s
      const left = Math.random() * 100;
      const opacity = Math.random() * 0.3 + 0.03; // More variance in opacity
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
          0% {
            transform: translateY(100vh) rotate(0deg) scale(0.6);
            opacity: 0;
          }
          10% {
            opacity: var(--note-opacity);
          }
          25% {
            transform: translateY(75vh) translateX(3vw) rotate(90deg) scale(1);
          }
          50% {
            transform: translateY(50vh) translateX(-2vw) rotate(180deg) scale(1.2);
          }
          75% {
            transform: translateY(25vh) translateX(4vw) rotate(270deg) scale(0.9);
          }
          90% {
            opacity: var(--note-opacity);
          }
          100% {
            transform: translateY(-10vh) translateX(-3vw) rotate(360deg) scale(0.4);
            opacity: 0;
          }
        }
        @keyframes pulse {
          0%, 100% {
            filter: brightness(1) hue-rotate(0deg);
          }
          50% {
            filter: brightness(1.3) hue-rotate(30deg);
          }
        }
        .note {
          position: absolute;
          bottom: -150px;
          animation: drift linear infinite, pulse 4s ease-in-out infinite;
          will-change: transform, opacity, filter;
          color: hsl(var(--primary));
          --note-opacity: ${Math.random() * 0.4 + 0.1};
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
