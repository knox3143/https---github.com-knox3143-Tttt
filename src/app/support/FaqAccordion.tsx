import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FaqAccordion() {
    return (
        <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline text-lg">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
