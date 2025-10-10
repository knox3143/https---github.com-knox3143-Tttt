import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog - Funky Music',
    description: 'The latest news, updates, and articles from the Funky Music team.',
};

export default function BlogPage() {
    return (
        <div className="container py-12 md:py-20 fade-in-up">
            <div className="text-center mb-12 md:mb-20">
                <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
                    From the <span className="text-gradient-primary">Developer Desk</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                    The latest news, feature updates, and community spotlights from the Funky Music team.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                    <Card key={post.id} className="glassmorphic overflow-hidden flex flex-col group">
                        <div className="overflow-hidden">
                            <Image
                                src={post.imageUrl}
                                alt={`Thumbnail for ${post.title}`}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                            <CardTitle className="text-2xl h-16">{post.title}</CardTitle>
                            <CardDescription>
                                By {post.author} on {new Date(post.date).toLocaleDateString()}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter>
                            <Link href={`/blog/${post.id}`} className="font-semibold text-primary hover:underline flex items-center">
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
