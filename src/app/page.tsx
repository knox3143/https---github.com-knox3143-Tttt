import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BOT_INVITE_LINK, FEATURES, STATS, SUPPORT_SERVER_LINK } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Bot, ChevronRight } from 'lucide-react';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { MusicVisualizer } from '@/components/MusicVisualizer';

export default function Home() {
  const botLogo = PlaceHolderImages.find((img) => img.id === 'bot-logo');

  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />

      <div className="container relative z-10">
        <section className="flex flex-col items-center text-center py-24 md:py-32 relative">
          {/* Hero Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-4xl max-h-4xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-full blur-3xl pulse-glow" />
            <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl animation-delay-1000 pulse-glow" />
            <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl animation-delay-2000 pulse-glow" />
          </div>

          <div className="relative z-10 fade-in-up">
            <div className="mb-8 scale-in animation-delay-200">
              {botLogo && (
                <div className="relative">
                  <Image
                    src={botLogo.imageUrl}
                    alt="Funky Music Logo"
                    width={180}
                    height={180}
                    className="rounded-full object-cover float glow-effect"
                    priority
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10" />
                </div>
              )}
            </div>

            <div className="slide-up animation-delay-300">
              <h1 className="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                <span className="block mb-2">Funky Music</span>
                <span className="block text-gradient-rainbow text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                  Your Ultimate Discord
                </span>
                <span className="block text-gradient-primary text-3xl sm:text-4xl md:text-6xl lg:text-7xl">Music Companion</span>
              </h1>
            </div>

            <div className="fade-in-up animation-delay-400">
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
                🎵 Elevate your server's listening experience with <span className="text-primary font-semibold">crystal-clear audio</span>, 
                <span className="text-accent font-semibold"> multi-platform support</span>, and a 
                <span className="text-secondary font-semibold"> universe of powerful commands</span>. 
                Join over <span className="text-gradient-primary font-bold">500,000+ users</span> already vibing! 🚀
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 fade-in-up animation-delay-500 w-full max-w-md sm:max-w-none mx-auto">
              <Button asChild size="lg" className="button-gradient button-glow text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 font-semibold w-full sm:w-auto">
                <Link href={BOT_INVITE_LINK} target="_blank">
                  <Bot className="mr-2 h-4 sm:h-5 w-4 sm:w-5" /> Add to Discord
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 font-semibold glassmorphic border-primary/30 hover:border-primary/50 w-full sm:w-auto">
                <Link href={SUPPORT_SERVER_LINK} target="_blank">
                  Join Support Server
                </Link>
              </Button>
            </div>

            <div className="mt-8 fade-in-up animation-delay-500">
              <div className="flex flex-col items-center gap-4">
                <MusicVisualizer />
                <p className="text-sm text-muted-foreground text-center">
                  ⭐ Trusted by <span className="text-primary font-semibold">750+ servers</span> • 
                  🎯 <span className="text-accent font-semibold">99.9% uptime</span> • 
                  🎶 <span className="text-secondary font-semibold">1M+ songs played</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">
                Trusted by Thousands Worldwide
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join a growing community of music lovers who've made Funky Music their go-to Discord companion
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {STATS.map((stat, index) => (
                <Card 
                  key={stat.label} 
                  className="glassmorphic-strong text-center hover:-translate-y-3 hover:scale-105 transition-all duration-300 group cursor-pointer border-primary/20 hover:border-primary/40 fade-in-up" 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="flex flex-col items-center gap-3 text-xl">
                      <div className="relative">
                        <stat.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-accent/20 transition-colors duration-300" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {stat.label}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-gradient-primary group-hover:text-gradient-rainbow transition-all duration-300">
                      <AnimatedCounter to={stat.value} />
                      {stat.suffix}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 text-center relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="fade-in-up">
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4 text-gradient-primary">
                Powerful Features, Endless Fun
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed">
                🎵 Funky Music is packed with cutting-edge features designed to make your music experience 
                <span className="text-primary font-semibold"> seamless</span>, 
                <span className="text-accent font-semibold"> enjoyable</span>, and 
                <span className="text-secondary font-semibold"> unforgettable</span>. 
                Discover what makes us special! ✨
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {FEATURES.slice(0, 3).map((feature, index) => (
                <Card 
                  key={feature.title} 
                  className="glassmorphic-strong text-left hover:-translate-y-3 hover:scale-105 transition-all duration-500 hover:border-primary/50 group cursor-pointer fade-in-up" 
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="relative mb-6">
                      <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                      </div>
                      <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg group-hover:bg-accent/10 transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-gradient-primary transition-all duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description.split('.')[0]}.
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-sm text-primary/80 font-medium">
                        💡 {feature.benefit}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="fade-in-up animation-delay-500">
              <Button asChild size="lg" variant="ghost" className="text-lg px-8 py-4 glassmorphic border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                <Link href="/features">
                  <span className="text-gradient-primary font-semibold">Explore All Features</span>
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="relative z-10">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">
                💬 What Our Community Says
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from the amazing communities already using Funky Music!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  name: "Alex Chen",
                  role: "Server Owner",
                  server: "Gaming Paradise",
                  content: "Funky Music completely transformed our server! The audio quality is incredible and the 24/7 feature keeps our community engaged even when I'm offline. Best music bot ever! 🎵",
                  rating: 5
                },
                {
                  name: "Sarah Johnson",
                  role: "Community Manager", 
                  server: "Chill Vibes",
                  content: "The playlist management is a game-changer! Our members love creating collaborative playlists and the Spotify integration works flawlessly. Couldn't ask for more! ⭐",
                  rating: 5
                },
                {
                  name: "Mike Rodriguez",
                  role: "Discord Admin",
                  server: "Music Lovers United",
                  content: "From bass boost to 8D audio effects, Funky Music has everything we need. The support team is also incredibly responsive. Highly recommend! 🚀",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <Card key={testimonial.name} className="glassmorphic-strong hover:-translate-y-2 hover:scale-105 transition-all duration-300 group fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-primary font-medium">{testimonial.server}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500">⭐</span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 fade-in-up animation-delay-500">
              <p className="text-muted-foreground mb-4">
                Join thousands of satisfied server owners and music lovers!
              </p>
              <Button asChild variant="outline" className="glassmorphic border-primary/30 hover:border-primary/50">
                <Link href={SUPPORT_SERVER_LINK} target="_blank">
                  Share Your Experience 💭
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 fade-in-up">
          <div className="relative overflow-hidden">
            <div className="bg-gradient-to-r from-primary via-accent to-secondary p-8 md:p-16 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full" />
                <div className="absolute top-8 right-8 w-6 h-6 border-2 border-white rounded-full" />
                <div className="absolute bottom-6 left-8 w-4 h-4 border-2 border-white rounded-full" />
                <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-white rounded-full" />
              </div>

              <div className="text-center md:text-left relative z-10 fade-in-left">
                <h2 className="font-headline text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  🚀 Ready to transform your server?
                </h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                  Join the <span className="font-bold text-white">music revolution</span>! 
                  Bring Funky Music to your community today and create unforgettable moments. 
                  <span className="font-semibold">Never miss a beat again! 🎵</span>
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-2">
                    ✅ <span className="font-medium">Instant Setup</span>
                  </span>
                  <span className="flex items-center gap-2">
                    ✅ <span className="font-medium">24/7 Support</span>
                  </span>
                  <span className="flex items-center gap-2">
                    ✅ <span className="font-medium">Free Forever</span>
                  </span>
                </div>
              </div>

              <div className="flex-shrink-0 fade-in-right animation-delay-200">
                <div className="text-center">
                  <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/95 hover:scale-105 text-lg px-12 py-6 font-bold shadow-2xl transition-all duration-300 group relative overflow-hidden">
                    <Link href={BOT_INVITE_LINK} target="_blank">
                      <span className="relative z-10">
                        🎵 Invite Funky Music Now 
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </Button>
                  <p className="text-white/70 text-sm mt-3 animate-pulse">
                    🎉 Join 500,000+ happy users!
                  </p>
                  <div className="flex justify-center gap-2 mt-2 text-xs text-white/60">
                    <span>⚡ Instant setup</span>
                    <span>•</span>
                    <span>🆓 Forever free</span>
                    <span>•</span>
                    <span>🚀 Premium available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
