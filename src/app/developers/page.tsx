import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DEVELOPERS } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Developers - Funky Bot',
    description: 'Meet the talented team of developers behind Funky Bot. Learn about our mission and the people who make the music happen.',
};

export default function DevelopersPage() {
    return (
        <div className="container py-12 md:py-20 fade-in-up">
            <div className="text-center mb-12 md:mb-20">
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
                    Meet the Team
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                    The passionate minds behind Funky Bot, dedicated to crafting the ultimate music experience on Discord.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                {DEVELOPERS.map((dev) => {
                    const avatar = PlaceHolderImages.find((img) => img.id === dev.avatarId);
                    return (
                        <Card key={dev.name} className="glassmorphic overflow-hidden">
                           <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
                             <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                {avatar && (
                                    <Image
                                        src={avatar.imageUrl}
                                        alt={`Avatar of ${dev.name}`}
                                        width={128}
                                        height={128}
                                        className="rounded-full border-4 border-primary/50 flex-shrink-0"
                                    />
                                )}
                                <div>
                                    <h2 className="text-3xl font-bold font-headline">{dev.name}</h2>
                                    <p className="text-primary text-lg">{dev.role}</p>
                                    <Badge variant="secondary" className="mt-2 font-mono tracking-wider">{dev.discordUsername}</Badge>
                                </div>
                            </div>
                           </div>
                           <CardContent className="p-6">
                                <p className="text-muted-foreground mb-6">{dev.bio}</p>
                                <Button asChild className="w-full md:w-auto button-gradient">
                                    <Link href={`https://discord.com/users/${dev.discordUserId}`} target="_blank">
                                        <MessageSquare className="mr-2 h-4 w-4" /> Contact on Discord
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="max-w-4xl mx-auto mt-20">
                 <Card className="glassmorphic">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-center text-muted-foreground text-lg">
                            Our mission is to create a seamless, high-quality, and enjoyable music listening experience for every Discord community. We believe in the power of music to bring people together and strive to build a bot that is not only powerful and reliable but also fun and easy to use.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
