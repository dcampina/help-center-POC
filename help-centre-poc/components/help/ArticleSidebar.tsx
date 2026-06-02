"use client"

import Link from "next/link"
import { ArrowLeft, List } from "lucide-react"
import { format } from "date-fns"
import { de, enUS } from "date-fns/locale"

import type { Category, Locale } from "@/content/help"
import type { TocItem } from "@/lib/toc"
import { articleUrl } from "@/lib/urls"
import { Toc } from "@/components/help/Toc"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

type CategoryLink = {
  category: Category
  href: string | null
}

type ArticleSidebarProps = {
  productName: string
  categoryName: string
  currentCategorySlug: string
  categoryLinks: CategoryLink[]
  tocItems: TocItem[]
  updatedAt: string
  locale: Locale
}

function SidebarContent({
  productName,
  categoryName,
  currentCategorySlug,
  categoryLinks,
  tocItems,
  updatedAt,
  locale,
  className,
}: ArticleSidebarProps & { className?: string }) {
  const dateLocale = locale === "de" ? de : enUS

  return (
    <aside className={cn("flex flex-col", className)}>
      <Link
        href="/"
        className="mb-5 flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-brand"
      >
        <ArrowLeft className="size-3.5" />
        Back to Help Centre
      </Link>

      <p className="mb-1.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
        {productName}
      </p>
      <ul className="mb-5 flex flex-col gap-0.5">
        {categoryLinks.map(({ category, href }) => {
          const isActive = category.slug === currentCategorySlug
          const classNames = cn(
            "block rounded-lg px-2.5 py-1.5 text-[12.5px] leading-snug transition-colors",
            isActive
              ? "bg-brand/10 font-medium text-brand"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )

          if (!href) {
            return (
              <li key={category.slug}>
                <span className={classNames}>{category.name}</span>
              </li>
            )
          }

          return (
            <li key={category.slug}>
              <Link href={href} className={classNames}>
                {category.name}
              </Link>
            </li>
          )
        })}
      </ul>

      {tocItems.length > 0 && (
        <>
          <Separator className="mb-4" />
          <Toc items={tocItems} />
        </>
      )}

      <Separator className="my-4" />
      <p className="text-[11px] leading-relaxed text-muted-foreground">
        {productName} · {categoryName}
        <br />
        Last updated{" "}
        {format(new Date(updatedAt), "MMMM yyyy", { locale: dateLocale })}
      </p>
    </aside>
  )
}

export function ArticleSidebar(props: ArticleSidebarProps) {
  return (
    <>
      <div className="hidden lg:block">
        <div className="sticky top-14 h-[calc(100svh-3.5rem)] overflow-y-auto border-r border-border py-8 pr-4 pl-6">
          <SidebarContent {...props} />
        </div>
      </div>

      <div className="mb-4 lg:hidden">
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="outline" size="sm" className="gap-2">
                <List className="size-4" />
                Contents
              </Button>
            }
          >
            <span className="sr-only">Open contents</span>
          </SheetTrigger>
          <SheetContent side="left" className="w-[min(100%,20rem)]">
            <SheetHeader>
              <SheetTitle>Contents</SheetTitle>
            </SheetHeader>
            <div className="overflow-y-auto px-4 pb-6">
              <SidebarContent {...props} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

export type { CategoryLink }
