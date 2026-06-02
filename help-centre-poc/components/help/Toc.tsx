"use client"

import { useEffect, useState } from "react"

import type { TocItem } from "@/lib/toc"
import { cn } from "@/lib/utils"

type TocProps = {
  items: TocItem[]
  className?: string
}

type TocSection = {
  heading: TocItem
  children: TocItem[]
}

function groupTocItems(items: TocItem[]): TocSection[] {
  const sections: TocSection[] = []

  for (const item of items) {
    if (item.level === 2) {
      sections.push({ heading: item, children: [] })
      continue
    }

    const current = sections[sections.length - 1]
    if (current) {
      current.children.push(item)
    } else {
      sections.push({ heading: item, children: [] })
    }
  }

  return sections
}

const linkClassName = (active: boolean, nested = false) =>
  cn(
    "block rounded-lg py-1.5 leading-snug transition-colors",
    nested ? "px-2 text-[11.5px]" : "px-2.5 text-[12.5px]",
    active
      ? "bg-brand/10 font-medium text-brand"
      : nested
        ? "text-muted-foreground/90 hover:bg-muted hover:text-foreground"
        : "font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
  )

export function Toc({ items, className }: TocProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null)

  useEffect(() => {
    if (items.length === 0) return

    const onScroll = () => {
      let current = items[0]?.id ?? null
      for (const item of items) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top < 130) {
          current = item.id
        }
      }
      if (current) setActiveId(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [items])

  if (items.length === 0) return null

  const sections = groupTocItems(items)

  return (
    <nav aria-label="On this page" className={className}>
      <p className="mb-1.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
        On this page
      </p>
      <ul className="flex flex-col gap-2">
        {sections.map((section) => (
          <li key={section.heading.id}>
            <a
              href={`#${section.heading.id}`}
              className={linkClassName(activeId === section.heading.id)}
            >
              {section.heading.text}
            </a>
            {section.children.length > 0 && (
              <ul
                className="mt-0.5 flex flex-col gap-0.5 border-l border-border/80 pl-2.5 ml-2.5"
                aria-label={`Subsections of ${section.heading.text}`}
              >
                {section.children.map((child) => (
                  <li key={child.id}>
                    <a
                      href={`#${child.id}`}
                      className={linkClassName(
                        activeId === child.id,
                        true
                      )}
                    >
                      {child.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
