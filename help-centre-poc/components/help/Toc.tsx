"use client"

import { useEffect, useMemo, useState } from "react"
import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
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
    "block min-w-0 rounded-lg py-1.5 leading-snug transition-colors",
    nested ? "px-2 text-[11.5px]" : "px-2.5 text-[12.5px]",
    active
      ? "bg-brand/10 font-medium text-brand"
      : nested
        ? "text-muted-foreground/90 hover:bg-muted hover:text-foreground"
        : "font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
  )


export function Toc({ items, className }: TocProps) {
  const sections = useMemo(() => groupTocItems(items), [items])
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null)
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(() => new Set())

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

  useEffect(() => {
    if (!activeId) return

    for (const section of sections) {
      if (!section.children.some((child) => child.id === activeId)) continue

      setCollapsedSections((prev) => {
        if (!prev.has(section.heading.id)) return prev
        const next = new Set(prev)
        next.delete(section.heading.id)
        return next
      })
      break
    }
  }, [activeId, sections])

  if (items.length === 0) return null

  const toggleSection = (sectionId: string, open: boolean) => {
    setCollapsedSections((prev) => {
      const next = new Set(prev)
      if (open) next.delete(sectionId)
      else next.add(sectionId)
      return next
    })
  }

  return (
    <nav aria-label="On this page" className={className}>
      <p className="mb-1.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
        On this page
      </p>
      <ul className="flex flex-col gap-2">
        {sections.map((section) => {
          const hasChildren = section.children.length > 0
          const isSectionActive = activeId === section.heading.id
          const hasActiveChild = section.children.some((child) => child.id === activeId)
          const isOpen = !collapsedSections.has(section.heading.id)

          if (!hasChildren) {
            return (
              <li key={section.heading.id}>
                <a
                  href={`#${section.heading.id}`}
                  className={linkClassName(isSectionActive)}
                >
                  {section.heading.text}
                </a>
              </li>
            )
          }

          return (
            <li key={section.heading.id}>
              <Collapsible
                defaultOpen
                open={isOpen}
                onOpenChange={(open) => toggleSection(section.heading.id, open)}
              >
                <div className="flex items-center gap-0.5">
                  <a
                    href={`#${section.heading.id}`}
                    className={cn(
                      linkClassName(isSectionActive || hasActiveChild),
                      "min-w-0 flex-1"
                    )}
                  >
                    {section.heading.text}
                  </a>
                  <CollapsibleTrigger
                    className={cn(
                      "flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors",
                      "hover:bg-muted hover:text-foreground",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                    )}
                    aria-label={`${isOpen ? "Collapse" : "Expand"} ${section.heading.text}`}
                  >
                    <ChevronRight
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        isOpen && "rotate-90"
                      )}
                    />
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="overflow-hidden data-[closed]:animate-accordion-up data-[open]:animate-accordion-down">
                  <ul
                    className="mt-0.5 flex flex-col gap-0.5 border-l border-border/80 pl-2.5 ml-2.5"
                    aria-label={`Subsections of ${section.heading.text}`}
                  >
                    {section.children.map((child) => (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          className={linkClassName(activeId === child.id, true)}
                        >
                          {child.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
