import { CommandsClient } from './CommandsClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Commands - Funky Bot',
    description: 'Explore the complete list of commands for Funky Bot. Find everything from music playback and filters to playlist management and fun interactions.',
};

export default function CommandsPage() {
    return (
        <div className="container py-12 md:py-20 fade-in-up">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
                    Complete Command List
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
                    The bot prefix is <code className="bg-muted text-muted-foreground rounded-md px-2 py-1 font-mono text-base">+</code>. Use it before any command.
                </p>
            </div>
            <CommandsClient />
        </div>
    );
}
