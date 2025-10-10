import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VOTE_LINK, VOTE_REWARDS } from "@/lib/constants";
import { Check, Star, ThumbsUp } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vote - Funky Bot',
    description: 'Support Funky Bot by voting on Top.gg! Help us grow and unlock special rewards in the process.',
};

export default function VotePage() {
    return (
        <div className="container py-12 md:py-20 fade-in-up">
            <div className="text-center mb-12 md:mb-20">
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
                   Support Funky Bot
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                    Your vote helps us reach more servers and climb the ranks. As a thank you, you'll get some cool perks!
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 space-y-8">
                     <Card className="glassmorphic text-center shadow-lg shadow-primary/10">
                        <CardHeader>
                            <CardTitle className="text-3xl font-headline">Vote on Top.gg</CardTitle>
                            <CardDescription>
                                Click the button below to cast your vote. You can vote once every 12 hours.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild size="lg" className="button-gradient text-lg px-10 py-7 w-full sm:w-auto">
                                <Link href={VOTE_LINK} target="_blank">
                                    <ThumbsUp className="mr-2 h-5 w-5" /> Vote Now
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="glassmorphic">
                        <CardHeader>
                            <CardTitle className="text-2xl">Voting Rewards</CardTitle>
                             <CardDescription>
                                Every vote counts, and we want to show our appreciation.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {VOTE_REWARDS.map((reward, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="bg-primary/10 rounded-full p-1.5 mt-1">
                                            <reward.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <span className="flex-1 text-muted-foreground">{reward.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                
                <div className="lg:col-span-2">
                    <Card className="glassmorphic h-full">
                        <CardHeader>
                            <CardTitle>Bot Stats on Top.gg</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <iframe 
                                src="https://top.gg/bot/1281872745113587752/widget"
                                className="w-full rounded-lg bg-background"
                                height="400" 
                                frameBorder="0"
                            ></iframe>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
