import Link from 'next/link';
import { FOOTER_LINKS } from '@/lib/constants';
import { Twitter, Disc, Rss } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-gradient-to-b from-background to-background/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
            <h3 className="font-headline font-bold text-xl text-gradient-primary">Funky Music</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              🎵 Your Ultimate Discord Music Companion. 
              <span className="text-primary font-medium">Bringing communities together through music!</span>
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Version 2.5.1</span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-green-500 font-medium">Online</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 col-span-1 md:col-span-3">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-4">
                <h4 className="font-semibold">{title}</h4>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Funky Music. Made with ❤️ by 
            <span className="text-primary font-semibold"> Knox</span> & 
            <span className="text-accent font-semibold"> Deepjyoti</span>.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-accent hover:scale-110 transition-all duration-300">
              <Disc className="h-5 w-5" />
            </Link>
             <Link href="#" className="text-muted-foreground hover:text-secondary hover:scale-110 transition-all duration-300">
              <Rss className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
