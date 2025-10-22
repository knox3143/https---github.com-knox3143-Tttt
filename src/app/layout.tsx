import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { BackToTopButton } from '@/components/layout/BackToTopButton';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: {
    default: 'Funky Music – Discord Music Bot',
    template: '%s | Funky Music',
  },
  description:
    'Funky Music is a modern, feature-rich Discord music bot with high-quality audio, playlists, filters, and 24/7 playback.',
  keywords: [
    'Discord bot',
    'music bot',
    'Funky Music',
    'Discord music',
    'Spotify bot',
    'YouTube music',
  ],
  openGraph: {
    title: 'Funky Music – Discord Music Bot',
    description:
      'High-quality audio, playlists, filters, and 24/7 playback for your Discord server.',
    type: 'website',
    locale: 'en_US',
    url: 'https://funkymusic.app',
    siteName: 'Funky Music',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Funky Music – Discord Music Bot',
    description:
      'High-quality audio, playlists, filters, and 24/7 playback for your Discord server.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
