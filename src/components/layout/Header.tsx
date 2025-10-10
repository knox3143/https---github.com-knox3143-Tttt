'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BOT_INVITE_LINK, NAV_LINKS, SUPPORT_SERVER_LINK } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Bot, Menu, Music } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const botLogo = PlaceHolderImages.find((img) => img.id === 'bot-logo');
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {botLogo ? (
              <Image
                src={botLogo.imageUrl}
                alt="Funky Bot Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <Music className="h-8 w-8" />
            )}
            <span className="font-bold font-headline text-lg">Funky Bot</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
            <Link href={SUPPORT_SERVER_LINK} target="_blank">
              Join Support
            </Link>
          </Button>
          <Button size="sm" asChild className="button-gradient hidden md:inline-flex">
            <Link href={BOT_INVITE_LINK} target="_blank">
              <Bot className="mr-2 h-4 w-4" /> Add Bot
            </Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-8">
                  <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setSheetOpen(false)}>
                     {botLogo && (
                        <Image
                            src={botLogo.imageUrl}
                            alt="Funky Bot Logo"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                     )}
                    <span className="font-bold font-headline">Funky Bot</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-6 text-lg font-medium">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setSheetOpen(false)}
                      className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                    <Button asChild className="w-full button-gradient">
                        <Link href={BOT_INVITE_LINK} target="_blank">
                            <Bot className="mr-2 h-4 w-4" /> Add Bot
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                        <Link href={SUPPORT_SERVER_LINK} target="_blank">
                            Join Support
                        </Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
