"use client"

import { useCallback, useEffect, useState } from "react"
import { Clock } from "lucide-react"

import type { Locale } from "@/content/help"
import { PresseportalIcon } from "@/components/help/PresseportalIcon"
import { cn } from "@/lib/utils"

export const ARTICLE_CONTENT_ID = "article-reading-content"
const SITE_HEADER_PX = 56 // matches HelpHeader h-14
const STICKY_TOP = "3.5rem"

type ArticlePageHeaderProps = {
  productName: string
  productSlug: string
  title: string
  lead: string
  readingTimeMin: number
  locale: Locale
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function ArticlePageHeader({
  productName,
  productSlug,
  title,
  lead,
  readingTimeMin,
  locale,
}: ArticlePageHeaderProps) {
  const readingTimeLabel =
    locale === "de"
      ? `${readingTimeMin} Min. Lesezeit`
      : `${readingTimeMin} min read`
  const [progress, setProgress] = useState(0)

  const updateProgress = useCallback(() => {
    const content = document.getElementById(ARTICLE_CONTENT_ID)
    if (!content) return

    const header = content.previousElementSibling
    const headerHeight =
      header instanceof HTMLElement ? header.offsetHeight : 0
    const contentTop =
      window.scrollY + content.getBoundingClientRect().top
    const contentHeight = content.offsetHeight
    const viewportHeight = window.innerHeight
    const scrollY = window.scrollY

    const start = contentTop - SITE_HEADER_PX - headerHeight
    const end = contentTop + contentHeight - viewportHeight

    if (end <= start) {
      setProgress(scrollY >= start ? 1 : 0)
      return
    }

    setProgress(clamp((scrollY - start) / (end - start), 0, 1))
  }, [])

  useEffect(() => {
    const frame = requestAnimationFrame(() => updateProgress())
    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }
  }, [updateProgress])

  const progressPercent = Math.round(progress * 100)

  return (
    <header
      className={cn(
        "sticky z-40 -mx-5 mb-8 border-b border-transparent bg-background/95 px-5 backdrop-blur supports-[backdrop-filter]:bg-background/90",
        "sm:-mx-12 sm:px-12"
      )}
      style={{ top: STICKY_TOP }}
    >
      <p className="mb-2.5 flex items-center gap-1.5 pt-0 text-[11px] font-bold tracking-widest text-brand uppercase">
        {productSlug === "presseportal" ? (
          <PresseportalIcon size={16} />
        ) : (
          <span className="size-1.5 rounded-full bg-brand" aria-hidden />
        )}
        {productName}
      </p>

      <h1 className="text-[1.875rem] leading-tight font-normal tracking-normal text-balance text-foreground">
        {title}
      </h1>

      <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <Clock className="size-3.5 shrink-0 opacity-70" aria-hidden />
        <span>{readingTimeLabel}</span>
      </div>

      <p className="mt-3 max-w-[580px] pb-4 text-[15px] leading-relaxed text-muted-foreground text-pretty">
        {lead}
      </p>

      <div
        className="relative h-px max-w-[580px] bg-border"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressPercent}
        aria-label="Reading progress"
      >
        <div
          className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  )
}
