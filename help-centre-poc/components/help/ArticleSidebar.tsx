"use client"

import Link from "next/link"
import { List } from "lucide-react"

import type { Article, Locale } from "@/content/help"
import type { TocItem } from "@/lib/toc"
import { articleUrl } from "@/lib/urls"
import { Toc } from "@/components/help/Toc"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ArticleSidebarProps = {
  siblings: Article[]
  currentSlug: string
  categoryName: string
  tocItems: TocItem[]
  locale: Locale
}

function SidebarNav({
  siblings,
  currentSlug,
  categoryName,
  tocItems,
  locale,
  className,
}: ArticleSidebarProps & { className?: string }) {
  return (
    <aside className={cn("flex flex-col gap-6", className)}>
      <div>
        <p className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {categoryName}
        </p>
        <ScrollArea className="max-h-48">
          <ul className="space-y-0.5 pr-3 text-sm">
            {siblings.map((sibling) => {
              const href = articleUrl(
                sibling.productSlug,
                sibling.categorySlug,
                sibling.slug,
                locale
              )
              const isActive = sibling.slug === currentSlug
              return (
                <li key={sibling.slug}>
                  <Link
                    href={href}
                    className={cn(
                      "block rounded-md px-2 py-1.5 transition-colors",
                      isActive
                        ? "bg-brand/10 font-medium text-brand"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {sibling.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </ScrollArea>
      </div>
      <Separator />
      <Toc items={tocItems} />
    </aside>
  )
}

export function ArticleSidebar(props: ArticleSidebarProps) {
  return (
    <>
      <div className="hidden lg:block">
        <div className="sticky top-24">
          <SidebarNav {...props} />
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
              <SidebarNav {...props} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
