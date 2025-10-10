'use client';

import { useState, useMemo } from 'react';
import { COMMAND_CATEGORIES } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, Copy, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function CommandsClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const { toast } = useToast();

  const categories = ['All', ...COMMAND_CATEGORIES.map((c) => c.name)];

  const filteredCategories = useMemo(() => {
    if (!searchTerm) {
      if (activeCategory === 'All') return COMMAND_CATEGORIES;
      return COMMAND_CATEGORIES.filter(c => c.name === activeCategory);
    }
    
    return COMMAND_CATEGORIES
      .map(category => ({
        ...category,
        commands: category.commands.filter(command => 
          command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          command.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }))
      .filter(category => category.commands.length > 0);
  }, [searchTerm, activeCategory]);

  const handleCopy = (usage: string) => {
    navigator.clipboard.writeText(usage);
    setCopiedCommand(usage);
    toast({
      title: "Copied to clipboard!",
      description: `"${usage}"`,
    });
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div>
      <div className="sticky top-16 bg-background/95 backdrop-blur-sm z-40 py-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search commands..."
              className="pl-10 h-12"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setActiveCategory('All');
              }}
            />
          </div>
          <div className="flex-shrink-0 overflow-x-auto pb-2">
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  onClick={() => {
                    setActiveCategory(category);
                    setSearchTerm('');
                  }}
                  className={cn(activeCategory === category && 'button-gradient border-0')}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-12">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <section key={category.name}>
              <h2 className="font-headline text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="text-2xl">{category.icon}</span>
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.commands.map((command) => (
                  <Card key={command.name} className="glassmorphic flex flex-col">
                    <CardHeader>
                      <CardTitle className="font-mono text-lg text-primary">{command.name}</CardTitle>
                      <CardDescription>{command.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <div className="mt-auto">
                        <p className="text-sm text-muted-foreground mb-2">Usage:</p>
                        <div className="flex items-center gap-2">
                          <code className="flex-grow bg-background rounded-md px-3 py-2 text-sm text-foreground truncate">
                            {command.usage}
                          </code>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleCopy(command.usage)}
                            aria-label={`Copy command ${command.name}`}
                          >
                            {copiedCommand === command.usage ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl font-bold">No commands found.</p>
            <p className="text-muted-foreground mt-2">Try a different search term or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
