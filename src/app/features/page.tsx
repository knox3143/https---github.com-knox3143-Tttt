import { FEATURES } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Features - Funky Music',
    description: 'Discover the powerful features that make Funky Music the ultimate music companion for your Discord server. From multi-platform support to advanced audio filters.',
};

export default function FeaturesPage() {
    return (
        <div className="container py-12 md:py-20 fade-in-up">
            <div className="text-center mb-12 md:mb-20">
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
                    Powerful Features,
                    <br />
                    <span className="text-gradient-primary">Limitless Possibilities</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                    Funky Music is engineered with a rich feature set to provide a truly premium and customizable music experience.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {FEATURES.map((feature, index) => (
                    <Card key={feature.title} className="glassmorphic hover:-translate-y-2 transition-transform duration-300 ease-in-out hover:border-primary/20">
                        <CardHeader className="flex-row items-start gap-6">
                             <div className="bg-primary/10 border border-primary/20 rounded-lg w-16 h-16 flex items-center justify-center flex-shrink-0 mt-1">
                                <feature.icon className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                                <CardDescription className="text-base">
                                    {feature.description}
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-background/50 rounded-lg p-4 mt-2">
                                <p className="font-semibold text-sm text-primary">Benefit:</p>
                                <p className="text-sm text-muted-foreground">{feature.benefit}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
