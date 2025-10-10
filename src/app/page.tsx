import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BOT_INVITE_LINK, FEATURES, STATS, SUPPORT_SERVER_LINK } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Bot, ChevronRight } from 'lucide-react';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { AnimatedBackground } from '@/components/AnimatedBackground';

export default function Home() {
  const botLogo = PlaceHolderImages.find((img) => img.id === 'bot-logo');

  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />

      <div className="container relative z-10">
        <section className="flex flex-col items-center text-center py-24 md:py-32 fade-in-up">
          <div className="mb-8">
            {botLogo && (
              <Image
                src={botLogo.imageUrl}
                alt="Funky Music Logo"
                width={160}
                height={160}
                className="rounded-full object-cover float"
                priority
              />
            )}
          </div>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
            Funky Music - Your Ultimate
            <br />
            <span className="text-gradient-primary">Discord Music Companion</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Elevate your server's listening experience with high-quality audio, multi-platform support, and a universe of commands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="button-gradient text-lg px-8 py-6">
              <Link href={BOT_INVITE_LINK} target="_blank">
                <Bot className="mr-2 h-5 w-5" /> Add to Discord
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link href={SUPPORT_SERVER_LINK} target="_blank">
                Join Support Server
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, index) => (
              <Card key={stat.label} className="glassmorphic text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                    <stat.icon className="h-8 w-8 text-primary" />
                    <span>{stat.label}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold font-headline">
                    <AnimatedCounter to={stat.value} />
                    {stat.suffix}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24 text-center">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Powerful Features, Endless Fun</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Funky Music is packed with features to make your music experience seamless and enjoyable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.slice(0, 3).map((feature) => (
              <Card key={feature.title} className="glassmorphic text-left hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description.split('.')[0]}.</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <Button asChild size="lg" variant="ghost" className="mt-12 text-lg">
              <Link href="/features">
                Explore All Features <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
        </section>

        <section className="py-16 md:py-24">
          <div className="bg-gradient-to-r from-primary to-accent p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                Ready to transform your server?
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Bring Funky Music to your community today and never miss a beat.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 flex-shrink-0">
              <Link href={BOT_INVITE_LINK} target="_blank">
                Invite Funky Music Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
