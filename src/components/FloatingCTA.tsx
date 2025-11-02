'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bot, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { BOT_INVITE_LINK } from '@/lib/constants';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-20 left-4 z-40 transition-all duration-500 transform",
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      )}
    >
      <div className="glassmorphic-strong rounded-2xl p-4 max-w-xs shadow-2xl border-primary/30">
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
        >
          <X className="w-3 h-3 text-white" />
        </button>
        
        <div className="mb-3">
          <h4 className="font-semibold text-sm mb-1">🎵 Ready to get started?</h4>
          <p className="text-xs text-muted-foreground">
            Add Funky Music to your server and start the party!
          </p>
        </div>
        
        <Button asChild size="sm" className="button-gradient w-full text-xs">
          <Link href={BOT_INVITE_LINK} target="_blank">
            <Bot className="mr-1 h-3 w-3" />
            Add to Discord
          </Link>
        </Button>
      </div>
    </div>
  );
}