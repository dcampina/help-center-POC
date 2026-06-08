import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FaqItem } from "@/lib/article-blocks"
import { slugifyHeading } from "@/lib/toc"

type ArticleFaqProps = {
  items: FaqItem[]
}

export function ArticleFaq({ items }: ArticleFaqProps) {
  return (
    <Accordion
      multiple
      className="my-4 rounded-xl border border-border bg-card px-4 sm:px-5"
    >
      {items.map((item, index) => (
        <AccordionItem key={`${slugifyHeading(item.question)}-${index}`} value={`faq-${index}`}>
          <AccordionTrigger className="py-3.5 text-sm font-medium text-foreground hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-sm leading-relaxed text-foreground/80">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
