"use client"

import { useEffect, useState } from "react"

import type { TocItem } from "@/lib/toc"
import { cn } from "@/lib/utils"

type TocProps = {
  items: TocItem[]
  className?: string
}

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

  return (
    <nav aria-label="On this page" className={className}>
      <p className="mb-1.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
        On this page
      </p>
      <ul className="flex flex-col gap-0.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block rounded-lg px-2.5 py-1.5 text-[12.5px] leading-snug transition-colors",
                item.level === 3 && "pl-5",
                activeId === item.id
                  ? "bg-brand/10 font-medium text-brand"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
