import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { PREMIUM_TIERS, BOT_INVITE_LINK } from '@/lib/constants';
import { CheckCircle2, Crown, Gem } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Premium - Funky Music',
    description: 'Upgrade to Funky Music Premium and unlock exclusive features to enhance your music experience.',
};

export default function PremiumPage() {
    return (
        <div className="container py-12 md:py-20 fade-in-up">
            <div className="text-center mb-12 md:mb-20">
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
                    Unlock the <span className="text-gradient-primary">Full Potential</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                    Choose a Premium plan to get the best audio quality, 24/7 playback, and exclusive features for your server.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
                {PREMIUM_TIERS.map((tier) => (
                    <Card 
                        key={tier.name} 
                        className={cn(
                            'glassmorphic flex flex-col h-full',
                            tier.isRecommended && 'border-primary shadow-lg shadow-primary/20 -translate-y-4'
                        )}
                    >
                         {tier.isRecommended && (
                            <div className="bg-primary text-primary-foreground text-sm font-bold text-center py-1.5 rounded-t-lg">
                                Most Popular
                            </div>
                        )}
                        <CardHeader className="text-center">
                            <div className="flex justify-center mb-4">
                                {tier.name === 'Premium' && <Crown className="h-12 w-12 text-primary" />}
                                {tier.name === 'Premium+' && <Gem className="h-12 w-12 text-accent" />}
                                {tier.name === 'Free' && <CheckCircle2 className="h-12 w-12 text-muted-foreground" />}
                            </div>
                            <CardTitle className="text-3xl font-headline">{tier.name}</CardTitle>
                            <CardDescription className="text-lg font-bold text-gradient-primary">{tier.price}</CardDescription>
                            <p className="text-sm text-muted-foreground pt-2">{tier.description}</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-4">
                                {tier.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                             <Button asChild size="lg" className={cn("w-full", tier.buttonVariant === 'default' && 'button-gradient')}>
                                <a href={BOT_INVITE_LINK} target="_blank">{tier.buttonText}</a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
