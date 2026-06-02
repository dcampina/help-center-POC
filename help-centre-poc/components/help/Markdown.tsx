"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { ArticleCallout } from "@/components/help/article/ArticleCallout"
import { PresseportalIcon } from "@/components/help/PresseportalIcon"
import { ArticleCardGrid } from "@/components/help/article/ArticleCardGrid"
import { ArticleStatusCell } from "@/components/help/article/ArticleStatusCell"
import { ArticleSteps } from "@/components/help/article/ArticleSteps"
import {
  parseCallout,
  parseCardGrid,
  parseStatusCell,
  parseSteps,
} from "@/lib/article-blocks"
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

const CUSTOM_BLOCKS = new Set([
  "cards",
  "callout",
  "callout-accent",
  "callout-neutral",
  "callout-rose",
  "callout-blue",
  "steps",
])

function renderCustomBlock(lang: string, source: string) {
  switch (lang) {
    case "cards":
      return <ArticleCardGrid cards={parseCardGrid(source)} />
    case "callout":
    case "callout-accent":
    case "callout-rose":
    case "callout-blue": {
      const { title, body } = parseCallout(source)
      return <ArticleCallout variant="accent" title={title} body={body} />
    }
    case "callout-neutral": {
      const { title, body } = parseCallout(source)
      return <ArticleCallout variant="muted" title={title} body={body} />
    }
    case "steps":
      return <ArticleSteps steps={parseSteps(source)} />
    default:
      return null
  }
}

function cellText(children: React.ReactNode): string {
  if (typeof children === "string") return children
  if (Array.isArray(children)) return children.map(cellText).join("")
  if (React.isValidElement<{ children?: React.ReactNode }>(children)) {
    return cellText(children.props.children)
  }
  return ""
}

export function Markdown({ content, className }: MarkdownProps) {
  slugCounts.clear()

  return (
    <div className={cn("article-prose max-w-none", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => {
            const text = String(children)
            const id = nextId(text)
            const isPresseportal = /^presseportal$/i.test(text.trim())
            return (
              <h2
                id={id}
                className="group mt-10 mb-3 flex scroll-mt-20 items-center gap-2 font-serif text-[1.375rem] font-normal tracking-normal text-foreground first:mt-0"
              >
                {isPresseportal ? <PresseportalIcon size={24} /> : null}
                {children}
                <a
                  href={`#${id}`}
                  className="font-sans text-sm text-brand opacity-0 transition-opacity group-hover:opacity-100"
                  aria-label={`Link to ${text}`}
                >
                  #
                </a>
              </h2>
            )
          },
          h3: ({ children }) => {
            const text = String(children)
            const id = nextId(text)
            const isHighlight = /^highlight$/i.test(text.trim())
            return (
              <h3
                id={id}
                className={
                  isHighlight
                    ? "mt-6 mb-2 flex scroll-mt-20 items-center gap-2 text-sm font-semibold text-foreground"
                    : "mt-6 mb-2 scroll-mt-20 text-sm font-semibold text-foreground"
                }
              >
                {isHighlight ? <PresseportalIcon size={20} /> : null}
                {children}
              </h3>
            )
          },
          p: ({ children }) => (
            <p className="mb-3.5 text-sm leading-[1.8] text-foreground/80">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mb-3.5 ml-5 list-disc text-sm leading-[1.8] text-foreground/80">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-3.5 ml-5 list-decimal text-sm leading-[1.8] text-foreground/80">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="mb-1">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          a: ({ href, children }) => (
            <a href={href} className="text-brand no-underline hover:underline">
              {children}
            </a>
          ),
          pre: ({ children }) => {
            const child = React.Children.only(children) as React.ReactElement<{
              className?: string
              children?: React.ReactNode
            }>
            const className = child.props.className ?? ""
            const match = /language-([\w-]+)/.exec(className)
            const lang = match?.[1]
            if (lang && CUSTOM_BLOCKS.has(lang)) {
              const source = String(child.props.children).replace(/\n$/, "")
              return renderCustomBlock(lang, source)
            }
            return (
              <pre className="my-4 overflow-x-auto rounded-lg bg-muted px-4 py-3 text-[13px]">
                {children}
              </pre>
            )
          },
          code: ({ className, children }) => {
            const isBlock = Boolean(className?.startsWith("language-"))
            if (isBlock) {
              return <code className={className}>{children}</code>
            }
            return (
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
                {children}
              </code>
            )
          },
          table: ({ children }) => (
            <div className="my-5 overflow-x-auto rounded-xl border border-border">
              <table className="w-full border-collapse text-[13px]">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted/40">{children}</thead>
          ),
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => (
            <tr className="border-b border-border last:border-b-0 even:bg-muted/25">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2.5 text-left text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
              {children}
            </th>
          ),
          td: ({ children }) => {
            const text = cellText(children).trim()
            const parsed = parseStatusCell(text)

            if (parsed.kind !== "text") {
              return (
                <td className="px-4 py-3 align-top leading-normal text-foreground/75">
                  <ArticleStatusCell value={text} />
                </td>
              )
            }

            return (
              <td className="px-4 py-3 align-top leading-normal text-foreground/75 [&>strong]:font-semibold [&>strong]:text-foreground">
                {children}
              </td>
            )
          },
          blockquote: ({ children }) => (
            <blockquote className="my-4 rounded-xl border border-border bg-muted/50 px-4 py-3.5 text-[13px] leading-relaxed text-foreground/80">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
