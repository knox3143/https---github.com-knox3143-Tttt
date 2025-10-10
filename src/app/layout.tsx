import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { BackToTopButton } from '@/components/layout/BackToTopButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Funky Music - Your Ultimate Discord Music Companion',
  description: 'The official website for Funky Music, a modern, feature-rich Discord music bot providing a premium music experience.',
  keywords: ['Discord bot', 'music bot', 'Funky Music', 'Discord music', 'Spotify bot'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
        <BackToTopButton />
      </body>
    </html>
  );
}
