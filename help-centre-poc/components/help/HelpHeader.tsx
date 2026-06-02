import Link from "next/link"

import { HeaderSearch } from "@/components/help/HeaderSearch"
import { Button } from "@/components/ui/button"

export function HelpHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span
            className="flex size-8 items-center justify-center rounded-md bg-brand text-sm font-bold text-white"
            aria-hidden
          >
            na
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-tight">news aktuell</span>
            <span className="text-xs text-muted-foreground">Help Centre</span>
          </span>
        </Link>

        <HeaderSearch />

        <Button
          className="shrink-0 bg-brand text-white hover:bg-brand/90"
          size="sm"
          type="button"
        >
          Login
        </Button>
      </div>
    </header>
  )
}
