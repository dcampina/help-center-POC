"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { slugifyHeading } from "@/lib/toc"
import { cn } from "@/lib/utils"

type MarkdownProps = {
  content: string
  className?: string
}

const slugCounts = new Map<string, number>()

function nextId(text: string): string {
  const base = slugifyHeading(text)
  const count = slugCounts.get(base) ?? 0
  slugCounts.set(base, count + 1)
  return count > 0 ? `${base}-${count}` : base
}

export function Markdown({ content, className }: MarkdownProps) {
  slugCounts.clear()

  return (
    <div
      className={cn(
        "prose prose-zinc max-w-none dark:prose-invert",
        "prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-xl prose-h2:border-b prose-h2:border-border prose-h2:pb-2",
        "prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-lg",
        "prose-p:leading-relaxed prose-p:text-muted-foreground",
        "prose-li:text-muted-foreground prose-strong:text-foreground",
        "prose-a:text-brand prose-a:no-underline hover:prose-a:underline",
        "prose-table:text-sm prose-th:bg-muted/50",
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => {
            const text = String(children)
            const id = nextId(text)
            return <h2 id={id}>{children}</h2>
          },
          h3: ({ children }) => {
            const text = String(children)
            const id = nextId(text)
            return <h3 id={id}>{children}</h3>
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
