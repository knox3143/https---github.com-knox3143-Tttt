import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SUPPORT_SERVER_LINK } from "@/lib/constants";
import { Book, Bug, CircleHelp, LifeBuoy, Lightbulb, Users, FileText, Wrench } from "lucide-react";
import { FaqAccordion } from "./FaqAccordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Support - Funky Bot',
    description: 'Get help and support for Funky Bot. Join our Discord server, find answers in the FAQ, or submit a bug report.',
};


export default function SupportPage() {
    return (
        <div className="container py-12 md:py-20 fade-in-up">
            <div className="text-center mb-12 md:mb-20">
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
                   Need Help?
                   <br/>
                   <span className="text-gradient-primary">We're Here for You!</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                    Find answers to your questions, join our community, or get in touch with our support team.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card className="glassmorphic h-full">
                        <CardHeader>
                            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                            <CardDescription>
                                Find quick answers to common questions about Funky Bot.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <FaqAccordion />
                        </CardContent>
                    </Card>
                </div>
                
                <div className="space-y-8">
                    <Card className="glassmorphic text-center">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 border border-primary/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="text-2xl">Join our Support Server</CardTitle>
                            <CardDescription>
                                The fastest way to get help is to join our active community on Discord.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild size="lg" className="w-full button-gradient">
                                <Link href={SUPPORT_SERVER_LINK} target="_blank">Join Discord Server</Link>
                            </Button>
                            <p className="text-sm text-muted-foreground mt-4">24/7 Active Support Team</p>
                        </CardContent>
                    </Card>
                    
                     <Card className="glassmorphic">
                        <CardHeader>
                            <CardTitle className="text-xl">Useful Resources</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3">
                            <Button variant="outline" asChild className="justify-start">
                                <Link href="#"><Book className="mr-2 h-4 w-4" /> Full Documentation</Link>
                            </Button>
                            <Button variant="outline" asChild className="justify-start">
                                <Link href="/commands"><FileText className="mr-2 h-4 w-4" /> Commands List</Link>
                            </Button>
                             <Button variant="outline" asChild className="justify-start">
                                <Link href="#"><Wrench className="mr-2 h-4 w-4" /> Troubleshooting Guide</Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Alert>
                        <Bug className="h-4 w-4" />
                        <AlertTitle>Found a bug or have an idea?</AlertTitle>
                        <AlertDescription>
                            Use the <code className="font-mono text-xs bg-muted p-1 rounded-md">+report</code> or <code className="font-mono text-xs bg-muted p-1 rounded-md">+suggest</code> commands in our support server!
                        </AlertDescription>
                    </Alert>
                </div>
            </div>
        </div>
    );
}
