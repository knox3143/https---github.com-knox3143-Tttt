'use client';

import { MusicNote } from './MusicNote';
import { useState, useEffect } from 'react';

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
};

export function AnimatedBackground() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    // This code now runs only on the client, after the initial render.
    const generatedNotes = Array.from({ length: 20 }).map((_, i) => {
      const size = Math.random() * 2 + 1; // 1rem to 3rem
      const duration = Math.random() * 10 + 10; // 10s to 20s
      const delay = Math.random() * 10; // 0s to 10s
      const left = Math.random() * 100;
      const opacity = Math.random() * 0.15 + 0.05;

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
      };
    });
    setNotes(generatedNotes);
  }, []); // Empty dependency array ensures this runs only once on the client.


  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes drift {
          from {
            transform: translateY(100vh) rotate(0deg);
          }
          to {
            transform: translateY(-100px) rotate(360deg);
          }
        }
        .note {
          position: absolute;
          bottom: -100px;
          animation: drift linear infinite;
        }
      `}</style>
      {notes.map((note) => (
        <div key={note.id} className="note" style={note.style}>
          <MusicNote />
        </div>
      ))}
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background via-background/80 to-transparent" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-lg max-h-lg bg-primary/20 rounded-full blur-3xl" />
    </div>
  );
}
